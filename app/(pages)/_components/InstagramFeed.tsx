"use client";

import Script from "next/script";

export default function InstagramFeed() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-gradient-to-r from-gray-50 to-white overflow-hidden">      
      {/* Load Elfsight Script */}
      <Script
        src="https://apps.elfsight.com/p/platform.js"
        strategy="lazyOnload"
      />

      
      {/* Instagram Feed Widget */}
      <div className="elfsight-app-1fcd3f23-2678-4e68-b966-22b8c1a89c0b" data-elfsight-app-lazy></div>

    </section>
  );
}