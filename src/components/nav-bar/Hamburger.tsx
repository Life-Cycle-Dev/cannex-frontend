import HamburgerIcon from "../icons/HamburgerIcon";
import CloseIcon from "../icons/CloseIcon";

export default function Hamburger({ state }: { state: "default" | "close" }) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      {state === "default" ? (
        <HamburgerIcon className="text-white" />
      ) : (
        <CloseIcon className="text-black" />
      )}
    </div>
  );
}
