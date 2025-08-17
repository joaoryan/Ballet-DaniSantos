// pages/index.tsx
import Image from 'next/image';
import img from '../assets/image/img3.jpg'
import HorarioCard from '../components/HorarioCard';
import turmas from '../data/turmas.json';
/* import ImagensCard from '../components/ImagensCard'; */


export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] bg-gradient-to-tr from-[#FDECEF] via-transparent to-transparent">
        <Image
          src={img}
          alt="Ballet Dani Santos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end max-w-3xl w-full p-[120px_90px] md:p-[120px_20px]">
          <h1 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-pink-500 mb-6">
            Ballet Dani Santos
          </h1>
          <p className="text-lg md:text-base sm:text-sm text-gray-700">
            Na Ballet Dani Santos, oferecemos aulas de ballet infantil em um ambiente acolhedor, onde as crianças desenvolvem disciplina, coordenação motora e autoconfiança de forma divertida. Nossos professores experientes garantem que cada aluno evolua no seu próprio ritmo, explorando a arte da dança enquanto fazem novos amigos. Inscreva-se hoje e permita que seu filho descubra a magia do ballet!
          </p>
        </div>
      </div>

      {/* Imagens Card */}
      <section className="w-full mt-20">
        {/*    <ImagensCard /> */}
      </section>

      {/* Quadro de Horários */}
      <section className="w-full mt-20 p-6 bg-pink-50">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center md:text-left">
          Quadro de Horários
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {turmas.map((turma, idx) => (
            <HorarioCard key={idx} turma={turma} />
          ))}
        </div>
      </section>

      {/* Footer */}
      {/*  <Footer /> */}
    </div>
  );
}
