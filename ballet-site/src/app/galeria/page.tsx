"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Arquivo = {
  id: string;
  nome: string;
  url: string;
  tipo: "foto" | "video";
};

export default function Galeria() {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    fetch("/api/galeria")
      .then((res) => res.json())
      .then((data) => {
        setArquivos(data.filter((a: Arquivo) => a.tipo === "foto"));
        setLoading(false);
      });
  }, []);

  const abrirModal = (index: number) => {
    setIndiceAtual(index);
    setModalAberto(true);
  };

  const fecharModal = () => setModalAberto(false);

  const proximaImagem = () =>
    setIndiceAtual((prev) => (prev + 1) % arquivos.length);

  const imagemAnterior = () =>
    setIndiceAtual((prev) => (prev - 1 + arquivos.length) % arquivos.length);

  return (
    <div className="relative min-h-screen p-6 flex flex-col items-center overflow-hidden bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 relative z-10">
        Nossa Galeria
      </h1>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-3 w-full animate-pulse relative z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-pink-200 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3 w-full relative z-10">
          {arquivos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              }}
              className="rounded-xl overflow-hidden bg-white cursor-pointer border border-pink-100 transition-all duration-300"
              onClick={() => abrirModal(i)}
            >
              <img
                src={item.url}
                alt={item.nome}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {modalAberto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-11/12 md:w-2/3 h-auto max-h-[90vh] rounded-xl overflow-hidden shadow-lg flex flex-col items-center bg-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Foto expandida */}
              <img
                src={arquivos[indiceAtual].url}
                alt={arquivos[indiceAtual].nome}
                className="w-full max-h-[80vh] object-contain bg-black"
              />

              {/* Botões de navegação */}
              <button
                onClick={imagemAnterior}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-pink-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-pink-700 transition"
              >
                ⬅️
              </button>
              <button
                onClick={proximaImagem}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-pink-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-pink-700 transition"
              >
                ➡️
              </button>

              {/* Botão de download e fechar */}
              <div className="absolute top-3 right-3 flex gap-2">
                <a
                  href={arquivos[indiceAtual].url}
                  download={arquivos[indiceAtual].nome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-green-700 transition"
                >
                  ⬇️ Download
                </a>
                <button
                  onClick={fecharModal}
                  className="bg-red-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-red-700 transition"
                >
                  ✖
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
