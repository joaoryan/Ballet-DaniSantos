// pages/index.tsx
"use client";
import Image from "next/image";
import imgHero from "../assets/image/image.png";
import HorarioCard from "../components/HorarioCard";
import turmas from "../data/turmas.json";
import Header from "@/components/header";
import { useState } from "react";
import InscricaoModal from "@/components/InscricaoModal";
import { motion } from "framer-motion";

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

        <motion.div
          className="absolute inset-0 flex flex-col justify-end items-start p-10 md:p-20 bg-gradient-to-r from-pink-200/50 via-pink-100/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-4xl sm:text-3xl font-bold text-pink-700 drop-shadow-lg mb-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ballet Dani Santos
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Descubra a magia do ballet! Um espaço acolhedor para crianças
            desenvolverem disciplina, coordenação motora e autoconfiança através
            da dança. Inscreva-se hoje e permita que sua filha viva a arte do
            movimento com alegria e amizade.
          </motion.p>
        </motion.div>
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

        <motion.h1
          className="text-3xl font-semibold text-pink-700 mb-6"
          initial={{ y: 50, opacity: 0 }} // começa 50px abaixo
          animate={{ y: 0, opacity: 1 }}   // sobe para posição normal
          transition={{ duration: 1 }}
        >
          Viva a Experiência do Ballet
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-gray-600"
          initial={{ y: 50, opacity: 0 }} // começa 50px abaixo
          animate={{ y: 0, opacity: 1 }}   // sobe para posição normal
          transition={{ duration: 1, delay: 0.5 }}
        >
          Do primeiro plié até as apresentações, cada passo é uma conquista.
          Venha fazer parte dessa jornada encantadora e inesquecível.
        </motion.p>

      </section>

      <div className=" bottom-0 left-0 w-full h-20 bg-gradient-to-b from-pink-50 to-white" />

      <motion.section
        id="eventos"
        className="w-full py-10 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-12">
          Eventos
        </h2>
        <div className="grid gap-6 md:grid-cols-4 px-6">
          {turmas.slice(0, 4).map((turma, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-md overflow-hidden bg-pink-50 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imgHero}
                alt={`Turma ${idx + 1}`}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-pink-700">{turma.nome}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Venha viver essa experiência incrível!
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="galeria" className="relative w-full py-10 bg-gradient-to-b from-white to-pink-50 flex flex-col items-center text-center" initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
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
      </motion.section>
      <motion.section
        id="feedback"
        className="w-full py-16 bg-pink-50 flex flex-col items-center text-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-12">
          O que Nossos Alunos Dizem
        </h2>

        <div className="relative w-full max-w-5xl py-5 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }} // movimenta horizontalmente
            transition={{
              duration: 60, // muito lento
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              "Minha filha adora as aulas! Aprendeu disciplina e se divertiu muito. - Mariana S.",
              "Ótima metodologia e professores incríveis! Recomendo. - Ana P.",
              "Ambiente acolhedor e muita dedicação. Minha filha está encantada! - Carla R.",
              "Sempre uma experiência encantadora. O ballet mudou nossa rotina para melhor! - Luiza M.",
            ].map((feedback, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-80 h-48 text-gray-700 flex items-center justify-center text-left cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }} // leve zoom e levanta sutilmente
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feedback}
              </motion.div>
            ))}

            {/* Repetir os feedbacks para loop infinito */}
            {[
              "Minha filha adora as aulas! Aprendeu disciplina e se divertiu muito. - Mariana S.",
              "Ótima metodologia e professores incríveis! Recomendo. - Ana P.",
              "Ambiente acolhedor e muita dedicação. Minha filha está encantada! - Carla R.",
              "Sempre uma experiência encantadora. O ballet mudou nossa rotina para melhor! - Luiza M.",
            ].map((feedback, i) => (
              <motion.div
                key={`dup-${i}`}
                className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-80 h-48 text-gray-700 flex items-center justify-center text-left cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feedback}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


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
            <motion.button
              onClick={() => setModalAberto(true)}
              className="bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              Inscreva-se
            </motion.button>
          </div>

          <InscricaoModal
            aberto={modalAberto}
            fechar={() => setModalAberto(false)}
            turmas={turmas}
          />
        </div>
      </section>


      <footer className="w-full bg-pink-100 text-gray-600 py-1 text-center">
        <p>© {new Date().getFullYear()} Ballet Dani Santos - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
