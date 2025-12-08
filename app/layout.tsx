import "./globals.css";
import Image from "next/image";
import logoWeb from "../public/logo.png";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import PrelineScriptWrapper from "./PrelineScriptWrapper";
import SplashCursor from '../components/SplashCursor'

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica Neue/Helvetica Neue Regular/Helvetica-Neue-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica Neue/Helvetica Neue Condensed Bold/Helvetica-Neue-Condensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.variable && helvetica.variable}>
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap bg-black/80">
          <nav className="max-w-7xl w-full mx-auto px-4 py-5 sm:flex sm:items-center sm:justify-center">
            <div className="flex items-center justify-between">
              <a href="#">
                  <Image src={logoWeb} alt="no logo" width={80} height={60} />
                </a>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg  text-white disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-navbar-example-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-example"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-example"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span className="sr-only">Toggle navigation</span>
                </button>
              </div>
            </div>
            <div
              id="hs-navbar-example"
              className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              aria-labelledby="hs-navbar-example-collapse"
            >
              <div className="links flex flex-col text-center items-stretch gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a
                  className=" text-white focus:outline-hidden"
                  href="#"
                  aria-current="page"
                >
                  Intro
                </a>
                <a
                  className=" text-white focus:outline-hidden"
                  href="#"
                >
                  Educational
                </a>
                <a
                  className=" text-white focus:outline-hidden"
                  href="#"
                >
                  Career History
                </a>
                <a
                  className=" text-white focus:outline-hidden"
                  href="#"
                >
                  Hobbies
                </a>
                <a
                  className=" text-white focus:outline-hidden"
                  href="#"
                >
                  Projects
                </a>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <SplashCursor />
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
