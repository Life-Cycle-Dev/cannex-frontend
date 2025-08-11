import React from "react";

interface Props {
  title: string;
  state?: "default" | "pressed";
}
export default function Menu({ title, state = "default" }: Props) {
  return (
    <div className="border-b-[2px] border-black">
      <h2 className="text-[40px] desktop:text-[52px] font-bold">{title}</h2>
    </div>
  );
}
