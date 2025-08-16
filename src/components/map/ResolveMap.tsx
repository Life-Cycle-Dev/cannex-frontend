import React from "react";
import MapWithCursor from "./MapWithCursor";
import UnitedState from "../flags/UnitedState";
import Thailand from "../flags/Thailand";
import Japan from "../flags/Japan";

export default function ResolveMap() {
  return (
    <center className="relative w-full overflow-y-auto">
      <div className="relative w-[1310px] h-[480px]">
        <div className="absolute left-[254px]">
          <MapWithCursor />
        </div>
        <div className="absolute top-8 left-11">
          <div className="flex items-center gap-2 mb-2">
            <UnitedState />
            <div className="text-[20px] font-bold">The United States</div>
          </div>
          <div className="w-[350px] text-[14px]">
            Through <b>Cannex Pharma</b>, our founding team from{" "}
            <b>Cookies Maywood</b>
            brings world-class cultivation techniques, exclusive cannabis
            genetics, and global brand-building expertise. The result: premium,
            consistent products ready for international markets.
          </div>
        </div>

        {/* TH */}
        <div className="absolute bottom-13 left-[480px]">
          <div className="flex items-center gap-2 mb-2">
            <Thailand />
            <div className="text-[20px] font-bold">Thailand</div>
          </div>
          <div className="w-[350px] text-[14px]">
            Thailand is home to our <b>integrated operations</b> — from indoor
            cultivation to pharmaceutical-grade extraction. With government
            support, Thai regulatory alignment, and Southeast Asian
            accessibility, Cannex is uniquely positioned to serve Asia and
            beyond.
          </div>
        </div>

        {/* JP */}
        <div className="absolute top-6 right-0">
          <div className="flex items-center gap-2 mb-2">
            <Japan />
            <div className="text-[20px] font-bold">Japan</div>
          </div>
          <div className="w-[350px] text-[14px]">
            Japan contributes its{" "}
            <b>scientific discipline, pharmaceutical innovation,</b> and
            regulatory precision — enabling advanced
            <b>THC-removal technology,</b> lab-grade cleanliness, and
            world-class product safety that strengthens our extraction
            processes.
          </div>
        </div>
      </div>
    </center>
  );
}
