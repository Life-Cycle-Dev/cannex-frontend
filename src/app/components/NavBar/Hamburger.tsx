import Image from "next/image";

export default function Hamburger({ state }: { state: "default" | "close" }) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      {state === "default" ? (
        <Image src="/hamburger-icon.svg" alt="Menu" width={24} height={24} />
      ) : (
        <Image src="/close-icon.svg" alt="Close" width={24} height={24} />
      )}
    </div>
  );
}
