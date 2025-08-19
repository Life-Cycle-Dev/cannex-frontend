import React from "react";

interface Props {
  label?: string;
  checked: boolean;
  labelCustom?: React.ReactNode;
  onChange: (checked: boolean) => void;
}

export default function CheckBox({
  label,
  checked,
  labelCustom,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2" onClick={() => onChange(!checked)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => e.stopPropagation()} // Prevent triggering onClick on the parent div
        className="m-[6px_6px_2px_2px] appearance-none w-4 h-4 rounded-sm border-[2px] border-black hover:bg-black checked:bg-black shrink-0 relative
      checked:after:content-[''] checked:after:block
      checked:after:absolute checked:after:w-[6px] checked:after:h-[10px]
      checked:after:border-crystalGreen
      checked:after:border-2 checked:after:border-t-0 checked:after:border-l-0
      checked:after:rotate-45
      checked:after:left-[3px] checked:after:-top-[1px]"
      />
      {labelCustom ? labelCustom : label}
    </div>
  );
}
