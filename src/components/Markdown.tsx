"use client";

import MDEditor from "@uiw/react-md-editor";
import { div } from "framer-motion/client";
import React from "react";

export default function Markdown({ value }: { value: string }) {
  return (
    <div data-color-mode="light">
      <MDEditor.Markdown source={value} className="whitespace-pre-wrap" />;
    </div>
  );
}
