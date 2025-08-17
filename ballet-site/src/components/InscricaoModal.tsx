"use client";
import { useState } from "react";

type ModalProps = {
  aberto: boolean;
  fechar: () => void;
  turmas: { nome: string }[];
};

export default function InscricaoModal({ aberto, fechar, turmas }: ModalProps) {
  const [form, setForm] = useState({ nome: "", idade: "", turma: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá! Gostaria de me inscrever no ballet:\nNome: ${form.nome}\nIdade: ${form.idade}\nTurma: ${form.turma}`;
    const telefone = "5535999372979";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    fechar();
    setForm({ nome: "", idade: "", turma: "" });
  };

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={fechar}
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-pink-700">Inscrição</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={form.idade}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
          <select
            name="turma"
            value={form.turma}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Escolha a turma</option>
            {turmas.map((t, idx) => (
              <option key={idx} value={t.nome}>
                {t.nome}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
