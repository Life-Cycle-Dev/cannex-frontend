/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import { useHelperContext } from "./providers/helper-provider";
import { ContactConfig } from "@/types/web-config";

export default function Map() {
  const { backendClient } = useHelperContext()();
  const [linkAddress, setLinkAddress] = useState<string>("");
  const [googleMaps, setGoogleMaps] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<ContactConfig>();

  const fetchData = async () => {
    const response = await backendClient.getContactConfig();
    if (response) {
      setContactInfo(response);
      setLinkAddress(response.headquarterAddress);
      setGoogleMaps(response?.headquarterGoogleMap);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-[480px] relative">
      <iframe
        width="600"
        height="450"
        className="w-full h-full border-0 object-cover"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={linkAddress}
      ></iframe>
      <div className="flex flex-col gap-4 absolute left-4 bottom-4 tablet:left-auto tablet:bottom-auto tablet:right-20 tablet:top-10">
        <Button
          text="HQ Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon className="w-4 h-4" />}
          onClick={() => {
            setLinkAddress(contactInfo?.headquarterGoogleMap ?? "");
          }}
        />
        <Button
          text="Lab Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon className="w-4 h-4" />}
          onClick={() => {
            setLinkAddress(contactInfo?.labGoogleMap ?? "");
          }}
        />
      </div>
    </div>
  );
}
