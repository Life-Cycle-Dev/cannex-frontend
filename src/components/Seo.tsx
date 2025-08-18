/* eslint-disable react-hooks/exhaustive-deps */
// components/Seo.tsx
"use client";
import { NextSeo, type NextSeoProps } from "next-seo";
import { useEffect } from "react";

export default function Seo(props: NextSeoProps) {
  useEffect(() => {
    document.title = props.title ?? "cannex";
  }, []);

  return <NextSeo {...props} />;
}
