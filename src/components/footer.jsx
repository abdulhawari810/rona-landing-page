import { NavLink } from "react-router-dom";
import ButtonStyle from "./button";
import { MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section id="visit-us" className="flex flex-col w-full mt-10">
        <section className="w-full bg-caramel-gold text-espresso px-10 py-20 md:flex grid-cols-1 grid justify-between items-center font-sans">
          <div className="flex flex-col max-w-xl">
            <span className="uppercase tracking-widest text-xs font-semibold mb-4 opacity-80">
              Come Say Hi
            </span>
            <h1 className="text-[49px] md:text-[64px] leading-[1.05] font-serif tracking-tight font-medium">
              Your table <br />
              <span className="italic">is waiting.</span>
            </h1>
          </div>

          <div className="flex flex-col mt-5 md:mt-0 items-start text-md font-normal space-y-6 tracking-wide">
            <div className="flex flex-col space-y-1 opacity-90">
              <span>Jl. Kemang Raya No. 8</span>
              <span>Jakarta Selatan 12730</span>
            </div>

            <div className="flex flex-col space-y-1 opacity-95">
              <span>Senin — Minggu</span>
              <span>07.00 — 22.00</span>
            </div>

            <NavLink>
              <ButtonStyle
                text={"get directions"}
                icons={<MoveUpRight className="w-3! h-3!" />}
                style={"bg-espresso text-cream uppercase tracking-2 p-5"}
              />
            </NavLink>
          </div>
        </section>
        <section className="flex flex-col md:flex-row w-full md:items-center py-5 md:justify-between md:h-16 px-10 bg-espresso gap-5 md:gap-0">
          <h1 className="text-2xl text-cream">
            Rona<span className="text-caramel-gold">.</span>
          </h1>
          <span className="text-cream">
            @2026 Rona Coffe Club. Made with care.
          </span>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-5">
            <NavLink className={"uppercase text-cream font-title"}>
              facebook
            </NavLink>
            <NavLink className={"uppercase text-cream font-title"}>
              whatsapp
            </NavLink>
          </div>
        </section>
      </section>
    </>
  );
}
