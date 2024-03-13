import React from "react";
import { IoMdClose } from "react-icons/io";

const Description = ({ setModal }: { setModal: any }) => {
  return (
    <div className="flex justify-center items-center bg-black-colorNew w-full h-[100vh] left-0 top-0 z-50 fixed">
      <div className="box flex flex-col items-center justify-center w-[70%]">
        <div className="w-full bg-black-colorNew flex justify-end items-center p-3">
          <IoMdClose
            className="text-white cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="w-full bg-white h-[40rem] flex flex-col">
          <div className="w-full h-[20rem] bg-[url('/image/FotoBG.svg')] bg-no-repeat bg-cover"></div>
          <div className="flex flex-col gap-3 overflow-auto p-6 px-[10rem]">
            <span className="text-[2rem] font-bold">
              Eureka, untuk Edukasi di Indonesia
            </span>
            <span className="font-extralight">
              Di sebuah negeri yang kaya akan potensi dan bakat, terdapat sebuah
              semangat yang bertujuan untuk menerangi jalan menuju masa depan
              yang cerah bagi pendidikan di Indonesia.
            </span>
            <span>
              Eureka percaya, semangat yang timbul merupakan panggilan hati
              untuk memberikan yang terbaik bagi pendidikan di negeri ini. Kami
              percaya bahwa setiap anak memiliki potensi yang luar biasa dan
              layak mendapatkan pendidikan berkualitas untuk mewujudkan impian
              mereka.
            </span>
            <span>
              Dengan berbagai produk dan layanan yang di tawarkan, Eureka
              berkomitmen untuk meningkatkan mutu pendidikan di Indonesia. Mulai
              dari model pembelajaran yang inovatif, perangkat pembelajaran
              interaktif, hingga program pelatihan dan pengembangan bagi para
              pendidik, kami berupaya untuk menciptakan lingkungan belajar yang
              merangsang kreativitas dan pemikiran kritis.
            </span>
            <span>
              Namun, visi kami tidak hanya sebatas pada ruang kelas. Kami juga
              turut berperan aktif dalam mendukung program-program sosial yang
              bertujuan untuk meningkatkan akses pendidikan bagi anak-anak di
              daerah terpencil dan kurang mampu. Melalui berbagai program CSR,
              kami berharap dapat memberikan kesempatan yang sama bagi setiap
              anak untuk menggapai impian mereka, tanpa terhalang oleh
              keterbatasan ekonomi.
            </span>
            <span>
              Eureka adalah cermin dari semangat perubahan dan inovasi di dunia
              pendidikan. Kami berusaha untuk terus mengembangkan diri,
              mengeksplorasi ide-ide baru, dan bekerja sama dengan berbagai
              pihak untuk menciptakan sistem pendidikan yang inklusif dan
              berkesinambungan bagi masa depan Indonesia yang lebih baik.
            </span>
            <span>
              Bersama-sama, mari kita wujudkan mimpi-mimpi besar anak-anak
              Indonesia, karena di tangan mereka terletak kunci kejayaan bangsa
              ini.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
