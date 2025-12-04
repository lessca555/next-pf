import Image from "next/image";
import profilePic from '../public/profile.jpg'
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16  sm:items-start">
        <section className="intro px-4 py-10 flex">
          <div className="left pr-[50px]">
            <p className="title">INTRO</p>
            <h1 className="desc">
              Hai! Saya Christian, seorang tech enthusiast dan creator di balik
              Eduvoloper Tech. 
              
              <br />
              <br />
              Bagi saya, teknologi bukan hanya soal kode, tapi tentang
              menciptakan karya. Dengan latar belakang 4 tahun di dunia IT—mulai
              dari network administration hingga software engineering—saya kini
              menyalurkan passion saya ke dunia Web Development (Next.js &
              Laravel). 
              
              <br /><br />

              Selain mengulik kode, saya juga aktif di
              dunia investasi saham dan memiliki ketertarikan pada seni visual.
              Tujuan saya sederhana: membangun web yang powerful sekaligus berbagi
              wawasan teknologi yang mudah dipahami oleh semua orang
            </h1>
          </div>
          <div className="right">
              <Image src={profilePic} alt="no pic available" width={1000} />
          </div>
        </section>
      </main>
    </div>
  );
}
