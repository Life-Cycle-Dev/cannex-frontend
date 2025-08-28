/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import { useHelperContext } from "./providers/helper-provider";
import { ContactConfig } from "@/types/web-config";

export default function Map() {
  const { backendClient } = useHelperContext()();
  const [googleMaps, setGoogleMaps] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<ContactConfig>();

  const fetchData = async () => {
    const response = await backendClient.getContactConfig();
    if (response) {
      setContactInfo(response);
      setGoogleMaps(response.headquarterGoogleMap);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-[480px] relative border-y-2">
      <iframe
        width="600"
        height="450"
        className="w-full h-full border-0 object-cover"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={googleMaps}
      ></iframe>
      <div className="flex flex-col gap-4 absolute left-4 bottom-4 tablet:left-auto tablet:bottom-auto tablet:right-20 tablet:top-10">
        <Button
          text="HQ Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon />}
          onClick={() => {
            setGoogleMaps(contactInfo?.headquarterGoogleMap ?? "");
          }}
        />
        <Button
          text="Lab Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon />}
          onClick={() => {
            setGoogleMaps(contactInfo?.labGoogleMap ?? "");
          }}
        />
      </div>
    </div>
  );
}
