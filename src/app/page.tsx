"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copiedSpinbara, setCopiedSpinbara] = useState(false);

  return (
    <div className="min-h-screen bg-[#111112] text-white font-sans flex flex-col items-center">
      
      {/* Hero + Background */}
      <section className="relative w-full flex flex-col items-center justify-start flex-1">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-center bg-cover opacity-10 pointer-events-none z-0" />

        {/* Icon na samej górze */}
        <div className="relative z-10 mt-0">
          <Image src="/icon3.png" alt="Logo" width={250} height={250} className="mx-auto" />
        </div>

        {/* Wąski baner Cold */}
        <div className="relative w-80 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl border border-[#1e3a8a]/60 mt-0 z-10">
          {/* Neon glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] opacity-30 blur-3xl -z-10"></div>

          <Image src="/cold.png" alt="Cold Logo" width={120} height={120} className="mt-4" />

          <div className="text-center text-lg font-bold text-white mt-2">
            100% BONUS POWITALNY + 150FS
          </div>
          <div className="text-sm text-gray-100 text-center">
            <span className="font-bold">Największe plusy:</span> Pakiet powitalny do 6338 PLN + 150 darmowych spinów
            <br />Z kodem <strong>SASHA</strong> 100% do pierwszej wpłaty!
          </div>

          <button
            className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#1e3a8a] text-white rounded-full px-4 py-2 font-bold text-sm mt-2 w-full"
            onClick={() => {
              navigator.clipboard.writeText("SASHA");
              setCopiedSpinbara(true);
              setTimeout(() => setCopiedSpinbara(false), 2000);
            }}
          >
            {copiedSpinbara ? "Skopiowano" : "KOD: SASHA"}
          </button>

          <a href="http://coldredir.com/L?tag=d_5039186m_126624c_&site=5039186&ad=126624" target="_blank" className="w-full">
            <button className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#1e3a8a] text-white rounded-full px-4 py-2 font-bold text-sm mt-2">
              Odbierz bonusy →
            </button>
          </a>
        </div>

{/* Footer */}
<footer className="w-full max-w-7xl mx-auto text-center text-xs text-gray-500 py-6 border-t border-[#222] mt-12 px-4">
  <div className="flex justify-center items-center gap-4 mb-3">
    {/* Instagram */}
    <a href="https://www.instagram.com/aleksandrmuzheiko" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full transition hover:opacity-80">
      <Image src="/instagram.png" alt="Instagram" width={40} height={40} />
    </a>

    {/* Telegram */}
    <a href="https://t.me/mrsashatrades" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full transition hover:opacity-80">
      <Image src="/telegram.png" alt="Telegram" width={40} height={40} />
    </a>

    {/* YouTube */}
    <a href="https://youtube.com/@seekershappiness" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full transition hover:opacity-80">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="4" fill="#ff0000"/>
        <polygon points="10,9 16,12 10,15" fill="white"/>
      </svg>
    </a>
  </div>

  <p>
    Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
    <br />
    Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.<br />
    &copy; {new Date().getFullYear()} Sasha 
  </p>
</footer>
      </section>
    </div>
  );
}