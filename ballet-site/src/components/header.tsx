// components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#eventos", label: "Eventos" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] z-50 flex items-center justify-center backdrop-blur-md shadow-sm ">
      <nav className="flex gap-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-[16px] font-semibold text-gray-600 hover:text-pink-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
