import "./globals.css";
import Image from "next/image";
import logoWeb from "../public/logo.png"
import { EB_Garamond } from 'next/font/google'
import localFont from 'next/font/local'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond'
})



const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica Neue/Helvetica Neue Regular/Helvetica-Neue-Regular.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Helvetica Neue/Helvetica Neue Condensed Bold/Helvetica-Neue-Condensed-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-helvetica'
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={ebGaramond.variable && helvetica.variable}>
        <header className="${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}">
          <div className="mx-auto py-5 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                  <Image src={logoWeb} alt="no logo" width={85} height={60} />
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-white  transition hover:text-white"
                        href="#"
                      >
                        Self-desc
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white  transition hover:text-white"
                        href="#"
                      >
                        Career History
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white  transition hover:text-white"
                        href="#"
                      >
                        Hobbies
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white  transition hover:text-white"
                        href="#"
                      >
                        {" "}
                        Projects{" "}
                      </a>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
