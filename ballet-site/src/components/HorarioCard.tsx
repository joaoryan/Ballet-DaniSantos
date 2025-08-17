type Turma = {
  nome: string;
  idade: string;
  nivel: string;
  professora: string;
  horarios: string[];
};

export default function HorarioCard({ turma }: { turma: Turma }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-pink-200">
      <h2 className="text-xl font-bold text-pink-600">{turma.nome}</h2>
      <p className="text-gray-600">Idade: {turma.idade}</p>
      <p className="text-gray-600">Nível: {turma.nivel}</p>
      <ul className="mt-2 text-gray-800">
        {turma.horarios.map((h, i) => (
          <li key={i}>🩰 {h}</li>
        ))}
      </ul>
    </div>
  );
}
