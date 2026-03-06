"use client";

import Script from "next/script";

export default function JotformWidget() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-7xl">
        
        {/* Jotform Widget Container */}
        <div id="JFWebsiteWidget-019cc18fa6ae7f78bc80e0b797fd6ad9a622"></div>

        {/* Jotform Script */}
        <Script
          src="https://www.jotform.com/website-widgets/embed/019cc18fa6ae7f78bc80e0b797fd6ad9a622"
          strategy="lazyOnload"
        />

      </div>
    </div>
  );
}