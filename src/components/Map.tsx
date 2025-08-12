import React from "react";

export default function Map() {
  return (
    <div className="w-full h-[480px]">
      <iframe
        width="600"
        height="450"
        className="w-full h-full border-0 object-cover"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=YOUR_MAP_DATA"
      ></iframe>
    </div>
  );
}
