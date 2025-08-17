"use client";
import { useEffect, useState, useRef } from "react";

type Arquivo = {
  id: string;
  nome: string;
  url: string;
  tipo: "foto" | "video";
};

export default function Galeria() {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetch("/api/galeria")
      .then((res) => res.json())
      .then((data) => setArquivos(data.filter((a: Arquivo) => a.tipo === "foto")));
  }, []);

  // Slideshow automático dentro do modal
  useEffect(() => {
    if (!modalAberto) return;
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % arquivos.length);
    }, 3000); // muda a cada 3 segundos
    return () => clearInterval(intervalo);
  }, [modalAberto, arquivos.length]);

  const abrirModal = () => {
    if (arquivos.length === 0) return;
    setIndiceAtual(0);
    setModalAberto(true);
    audioRef.current?.play();
  };

  const fecharModal = () => {
    setModalAberto(false);
    /*  audioRef.current?.pause();
     audioRef.current!.currentTime = 0; */
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Galeria</h1>

      {/* Botão para iniciar slideshow */}
      <button
        onClick={abrirModal}
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Iniciar Show
      </button>

      {/* Galeria normal */}
      <div className="grid gap-4 md:grid-cols-3 w-full">
        {arquivos.map((item) => (
          <div key={item.id} className="rounded-xl shadow-md overflow-hidden bg-white">
            <img
              src={item.url}
              alt={item.nome}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal do slideshow */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-11/12 md:w-2/3 h-96 rounded-xl overflow-hidden shadow-lg">
            {arquivos.map((item, i) => (
              <img
                key={item.id}
                src={item.url}
                alt={item.nome}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === indiceAtual ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            <button
              onClick={fecharModal}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Música clássica */}
      {/*  <audio ref={audioRef} src="/musica-classica.mp3" loop /> */}
    </div>
  );
}
