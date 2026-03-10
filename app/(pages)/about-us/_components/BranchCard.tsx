import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function BranchCard() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-5"  >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-blue-900"
          data-aos="fade-up">
          OUR BRANCH
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="w-full flex justify-center py-5 px-2 ">
        <div className="max-w-4xl w-full bg-blue-900 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

          {/* LEFT SECTION */}
          <div className="flex-1 p-2 md:ps-6 flex flex-col justify-center gap-2">

            {/* Logo */}
            <div className="w-16 h-16  relative">

              <Image
                src="/images/MapPin.png"
                alt="Arise Medical Academy"
                fill
                sizes="40px"
                className="object-contain"
              />

            </div>

            {/* Branch Info */}
            <h2 className="text-2xl md:text-3xl font-bold">
              ARISE – Jaipur
            </h2>

            <div className="md:space-y-1 text-sm md:text-base">
              <p className="text-white/80">
                <Link
                  href="tel:+91 9929113115"
                >
                  +91 9929113115
                </Link>
                /
                <Link
                  href="tel:+91 9929113116"
                >
                  +91 9929113116
                </Link>
              </p>

              <p className="text-white/80">
                <Link
                  href="tel:+91 9799902054"
                >
                  +91 9799902054
                </Link>
                /
                <Link
                  href="tel:+91 9799902064"
                >
                  +91 9799902064
                </Link>
              </p>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <Link
                href="https://maps.app.goo.gl/L8STX88Bf25zAabX6"
                target="_blank">
                plot no -26, Tonk Rd, near Pushp Enclave, Krishna Vihar, Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033
              </Link>
            </p>
          </div>

          {/* RIGHT QR SECTION */}
          <div className="relative bg-blue-100 text-blue-900 flex flex-col items-center justify-center md:w-80">

            <h3 className="text-xl font-bold">
              For Registration
            </h3>

            <div>
              <QRCodeSVG value="https://registerjaipur.arisemedicalacademy.com/" size={200} />
            </div>

            <h3 className="font-semibold -rotate-90  absolute -right-2">
              Scan the code
            </h3>

          </div>

        </div>
      </div>
    </section>
  );
}