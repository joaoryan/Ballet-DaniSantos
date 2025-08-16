import { NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_API_KEY;
const FOLDER_ID = process.env.NEXT_PUBLIC_FOLDER_ID;

export async function GET() {
  // Pega lista de arquivos da pasta
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.files || data.files.length === 0) {
    return NextResponse.json({ error: "Nenhum arquivo encontrado" }, { status: 404 });
  }

  // Monta URLs ou Base64
  const arquivos = await Promise.all(
    data.files.map(async (file: any) => {
      if (file.mimeType.includes("video")) {
        // Vídeo: mantemos link de preview
        return {
          id: file.id,
          nome: file.name,
          url: `https://drive.google.com/file/d/${file.id}/preview`,
          tipo: "video",
        };
      } else {
        // Foto: pega o conteúdo como Base64 para evitar CORS
        const imgRes = await fetch(
          `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`
        );
        const arrayBuffer = await imgRes.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        // Detecta o tipo de imagem pelo MIME
        const mimeType = file.mimeType || "image/jpeg";

        return {
          id: file.id,
          nome: file.name,
          url: `data:${mimeType};base64,${base64}`,
          tipo: "foto",
        };
      }
    })
  );

  return NextResponse.json(arquivos);
}
