"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FadeIn from "./components/FadeIn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import profilePic from "../public/profile.jpeg";

// import required modules
import { Mousewheel } from "swiper/modules";

export default function SnapHome() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        speed={1500}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <section className="intro px-4 py-10">
              {isActive && (
                <div className="up flex">
                  <div className="left pr-[50px]">
                    <FadeIn delay={0.2}>
                      <p className="title">
                        Christian Samuel | Web Developer & IT Support
                        Specialist.
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <h1 className="desc">
                        Teknologi bukan sekadar kode, melainkan ekosistem solusi
                        yang menyeluruh.
                        <br />
                        <br />
                        Dengan 4 tahun pengalaman sebagai Web Developer, saya
                        menguasai pembangunan aplikasi modern yang scalable dan
                        responsif menggunakan Next.js dan Laravel. Fokus saya
                        adalah menciptakan sistem yang tidak hanya canggih, tapi
                        juga berdampak nyata bagi bisnis.
                        <br />
                        <br />
                        Keahlian ini diperkuat oleh fondasi 1 tahun di bidang IT
                        Support. Latar belakang menangani Network Administration
                        dan hardware troubleshooting melatih saya untuk memahami
                        teknologi dari infrastruktur fisik hingga ke antarmuka
                        pengguna. Saya menulis kode dengan pemahaman mendalam
                        tentang bagaimana sistem bekerja di balik layar.
                      </h1>
                    </FadeIn>
                  </div>
                  <div className="right">
                    <Image
                      src={profilePic}
                      alt="no pic available"
                      width={1100}
                    />
                  </div>
                </div>
              )}
              <div className="down"></div>
            </section>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <section className="intro px-4 py-10">
              {isActive && (
                <div className="up flex">
                  <div className="left pr-[50px]">
                    <FadeIn delay={0.2}>
                      <p className="title">
                        Educational
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <h1 className="desc">
                        Teknologi bukan sekadar kode, melainkan ekosistem solusi
                        yang menyeluruh.
                        <br />
                        <br />
                        Dengan 4 tahun pengalaman sebagai Web Developer, saya
                        menguasai pembangunan aplikasi modern yang scalable dan
                        responsif menggunakan Next.js dan Laravel. Fokus saya
                        adalah menciptakan sistem yang tidak hanya canggih, tapi
                        juga berdampak nyata bagi bisnis.
                        <br />
                        <br />
                        Keahlian ini diperkuat oleh fondasi 1 tahun di bidang IT
                        Support. Latar belakang menangani Network Administration
                        dan hardware troubleshooting melatih saya untuk memahami
                        teknologi dari infrastruktur fisik hingga ke antarmuka
                        pengguna. Saya menulis kode dengan pemahaman mendalam
                        tentang bagaimana sistem bekerja di balik layar.
                      </h1>
                    </FadeIn>
                  </div>
                </div>
              )}
              <div className="down"></div>
            </section>
          )}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
