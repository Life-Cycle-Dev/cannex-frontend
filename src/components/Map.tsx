/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import { useHelperContext } from "./providers/helper-provider";
import { WebConfig } from "@/types/web-config";

export default function Map() {
  const { backendClient } = useHelperContext()();
  const [linkAddress, setLinkAddress] = useState("");
  const [googleMaps, setGoogleMaps] = useState<WebConfig[]>([]);

  const fetchData = async () => {
    const response = await backendClient.getGoogleMaps();
    if (response.data) {
      setLinkAddress(
        response.data.find(
          (item) => item.key === "contact.headquarter-google-map"
        )?.value ?? ""
      );
      setGoogleMaps(response.data);
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
      <div className="flex flex-col gap-4 absolute top-4 right-4 tablet:right-20 tablet:top-10">
        <Button
          text="HQ Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon className="w-4 h-4" />}
          onClick={() => {
            setLinkAddress(
              googleMaps.find(
                (item) => item.key === "contact.headquarter-google-map"
              )?.value ?? ""
            );
          }}
        />
        <Button
          text="Lab Directions"
          type="secondaryBlack"
          className="w-fit bg-white"
          suffixIcon={<RightUpIcon className="w-4 h-4" />}
          onClick={() => {
            setLinkAddress(
              googleMaps.find((item) => item.key === "contact.lab-google-map")
                ?.value ?? ""
            );
          }}
        />
      </div>
    </div>
  );
}
