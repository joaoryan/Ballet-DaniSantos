import HorarioCard from "../components/HorarioCard";
import turmas from "../data/turmas.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-700">Escola de Ballet Infantil</h1>
        <p className="text-gray-700 mt-2">
          Desenvolvendo graça, disciplina e alegria através da dança 🎀
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Quadro de Horários</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {turmas.map((turma, idx) => (
            <HorarioCard key={idx} turma={turma} />
          ))}
        </div>
      </section>
    </div>
  );
}
