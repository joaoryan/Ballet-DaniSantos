const fotos = [
  {
    id: 1,
    url: "https://drive.google.com/uc?id=ID_DA_FOTO",
    tipo: "foto"
  },
  {
    id: 2,
    url: "https://drive.google.com/file/d/ID_DO_VIDEO/preview",
    tipo: "video"
  }
];

export default function Galeria() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Galeria</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {fotos.map((item) =>
          item.tipo === "foto" ? (
            <img
              key={item.id}
              src={item.url}
              alt="Foto de apresentação"
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
    </div>
  );
}
