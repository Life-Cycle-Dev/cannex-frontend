/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useHelperContext } from "./providers/helper-provider";

interface WebConfigProp {
  key: string;
}

export default function WebConfig({ key }: WebConfigProp) {
  const { backendClient } = useHelperContext()();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await backendClient.getWebConfigByKey(key);
    setValue(response.data[0].value);
  };

  return <>{value}</>;
}
