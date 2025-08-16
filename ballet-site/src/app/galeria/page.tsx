"use client";
import { useEffect, useState } from "react";

type Arquivo = {
  id: string;
  nome: string;
  url: string;
  tipo: "foto" | "video";
};

export default function Galeria() {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  console.log(arquivos)
  useEffect(() => {
    fetch("/api/galeria")
      .then((res) => res.json())
      .then((data) => setArquivos(data));
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Galeria</h1>

      {arquivos.length === 0 ? (
        <p className="text-gray-600">Nenhuma mídia encontrada.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {arquivos.map((item) =>
            item.tipo === "foto" ? (
              <img
                key={item.id}
                src={item.url} // agora já é Base64, sem depender do Google Drive
                alt={item.nome}
                className="rounded-xl shadow-md"
              />
            ) : (
              <iframe
                key={item.id}
                src={item.url}
                className="w-full h-64 rounded-xl shadow-md"
                allow="autoplay"
              ></iframe>
            )
          )}
        </div>
      )}
    </div>
  );
}
