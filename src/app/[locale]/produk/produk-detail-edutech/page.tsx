import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { Link } from "@/navigation";
import { IoArrowBack } from "react-icons/io5";
import imgProduk1 from "../../../../../public/image/imgProduk1.svg";
import Image from "next/image";
import ContentPDOne from "@/components/Layout/produk/produk-detail-edutech/ContentPDOne";
import ContentPDTwo from "@/components/Layout/produk/produk-detail-edutech/ContentPDTwo";
import ContentPDThree from "@/components/Layout/produk/produk-detail-edutech/ContentPDThree";

const Page = () => {
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="bg-[url('/image/EduDetail.svg')] w-full h-[50rem] bg-no-repeat bg-cover flex flex-col gap-2 p-9">
          <Link
            href={"/produk"}
            className="flex justify-center items-center  gap-1 p-2 w-[12rem] border border-white rounded-full bg-transparent text-white"
          >
            <IoArrowBack /> Kembali
          </Link>
          <div className="flex flex-col gap-1 max-[716px]:gap-0 max-[627px]:-mt-[2rem]">
            <Image
              src={imgProduk1}
              alt=""
              width={120}
              height={120}
              className="w-[13rem] h-[10rem]"
            ></Image>
            <div className="flex flex-col gap-6 max-[716px]:gap-3 max-[627px]:-mt-[2rem]">
              <span className="text-[2rem] font-bold text-white">
                Eureka Edutech
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[716px]:w-[80%]">
                Eureka edutech memberikan program dan mengembangkan aplikasi
                pembelajaran untuk siswa di Indonesia. Layanan dan produk
                Edutech bertujuan untuk membantu siswa berlatih dan menilai
                kemampuan akademik secara mandiri melalui penilaian secara
                langsung. Aplikasi Eureka pertama kali diluncurkan pada tahun
                2021 dan dapat digunakan pada platform mobile (android). Didalam
                aplikasi siswa dapat belajar materi, mempelajari contoh soal dan
                melakukan simulasi ujian. Sampai saat ini, Eureka Edutech juga
                telah meluncurkan buku Asesmen Nasional untuk murid SMA sebagai
                bahan pendamping belajar siswa dalam mempersiapan ujian ANBK.
              </span>
            </div>
          </div>
        </div>
        <ContentPDOne />
        <ContentPDTwo />
        <ContentPDThree />
      </div>
    </RootLandingPage>
  );
};

export default Page;
