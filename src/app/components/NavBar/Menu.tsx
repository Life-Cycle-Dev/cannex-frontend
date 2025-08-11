import React from "react";

interface Props {
  title: string;
  state?: "default" | "pressed";
}
export default function Menu({ title, state = "default" }: Props) {
  return (
    <div className="border-b-[2px] border-black">
      <p className="text-h2">{title}</p>
    </div>
  );
}
