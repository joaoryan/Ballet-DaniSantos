// pages/index.tsx
"use client";
import Image from "next/image";
import imgHero from "../assets/image/img3.jpg";
import HorarioCard from "../components/HorarioCard";
import turmas from "../data/turmas.json";
import Header from "@/components/header";
import { useState } from "react";
import InscricaoModal from "@/components/InscricaoModal";

export default function Home() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-white text-gray-800">
      <Header />
      <div id="inicio" className="relative  w-full h-[500px]">
        <Image
          src={imgHero}
          alt="Ballet Dani Santos"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0  flex flex-col justify-end items-start p-10 md:p-20 bg-gradient-to-r from-pink-200/50 via-pink-100/40 to-transparent">
          <h1 className="text-5xl md:text-4xl sm:text-3xl font-bold text-pink-700 drop-shadow-lg mb-2">
            Ballet Dani Santos
          </h1>
          <p className="max-w-2xl text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed pb-10">
            Descubra a magia do ballet! Um espaço acolhedor para crianças
            desenvolverem disciplina, coordenação motora e autoconfiança através
            da dança. Inscreva-se hoje e permita que sua filha viva a arte do
            movimento com alegria e amizade.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[100px] transform scale-y-[-1]"
            preserveAspectRatio="none"
          >
            <path
              fill="#FDF2F8" // cor do bg-pink-50
              d="M0,0 C360,120 1080,0 1440,120 L1440,0 L0,0 Z"
            />
          </svg>
        </div>
      </div>



      <section className="relative w-full py-10 text-center bg-pink-50">
        <h2 className="text-3xl font-semibold text-pink-700 mb-6">
          Viva a Experiência do Ballet
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Do primeiro plié até as apresentações, cada passo é uma conquista.
          Venha fazer parte dessa jornada encantadora e inesquecível.
        </p>
      </section>

      <div className=" bottom-0 left-0 w-full h-20 bg-gradient-to-b from-pink-50 to-white" />

      <section id="eventos" className="w-full py-10 bg-white">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-12">
          Eventos
        </h2>
        <div className="grid gap-6 md:grid-cols-4 px-6">
          {turmas.slice(0, 4).map((turma, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-md overflow-hidden bg-pink-50 hover:shadow-lg transition"
            >
              <Image
                src={imgHero}
                alt={`Turma ${idx + 1}`}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-pink-700">
                  {turma.nome}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {/* turma.descricao  ||*/ "Venha viver essa experiência incrível!"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="relative w-full py-10 bg-gradient-to-b from-white to-pink-50 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">
          Veja Nossa Galeria de Fotos
        </h2>
        <p className="max-w-2xl text-gray-600 mb-8">
          Reviva momentos especiais, apresentações inesquecíveis e a beleza do
          ballet através de nossa galeria exclusiva.
        </p>
        <a
          href="/galeria"
          className="px-8 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition"
        >
          Explorar Galeria
        </a>
      </section>

      <section id="contato" className="w-full bg-pink-50 ">
        <div className="w-full bg-pink-100 py-16 px-6 rounded-t-[3rem]">
          <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">
            Quadro de Horários
          </h2>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {turmas.map((turma, idx) => (
              <HorarioCard key={idx} turma={turma} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setModalAberto(true)}
              className="bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Inscreva-se
            </button>
          </div>

          <InscricaoModal
            aberto={modalAberto}
            fechar={() => setModalAberto(false)}
            turmas={turmas}
          />
        </div>
      </section>
      <div className="bottom-0 left-0 w-full h-10 bg-gradient-to-t from-pink-300 to-pink-100 " />

      <footer className="w-full bg-pink-300 text-white py-1 text-center">
        <p>© {new Date().getFullYear()} Ballet Dani Santos - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
