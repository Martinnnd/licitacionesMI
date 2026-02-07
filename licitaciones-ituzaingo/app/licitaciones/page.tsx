"use client";

import { useState } from "react";
import { licitaciones } from "@/data/licitaciones";
import LicitacionesTabs from "@/components/licitaciones/LicitacionesTabs";
import LicitacionesTable from "@/components/licitaciones/LicitacionesTable";
import LicitacionModal from "@/components/licitaciones/LicitacionModal";
import BusquedaAvanzadaModal from "@/components/licitaciones/BusquedaAvanzadaModal";
import type { Licitacion } from "@/data/licitaciones";
import Header from "@/components/layout/Header";

export default function LicitacionesPage() {
  const [filter, setFilter] = useState("vigentes-proximas");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Licitacion | null>(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const filtered = licitaciones.filter((l) => {
    const matchesFilter =
      filter === "vigentes-proximas"
        ? l.estado === "vigente" || l.estado === "proxima"
        : l.estado === filter;

    const matchesSearch =
      l.objeto.toLowerCase().includes(search.toLowerCase()) ||
      l.tipo.toLowerCase().includes(search.toLowerCase()) ||
      l.numero.toString().includes(search);

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[color:var(--bg-page)]">

      <Header />

      {/* Franja institucional */}
      <div
        className="w-full py-10"
        style={{
          background:
            "linear-gradient(90deg, #0077b6 0%, #0096c7 35%, #7bbf3f 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-white">
            Licitaciones
          </h1>
          <p className="text-white/90 mt-2">
            Consulta de pliegos y procesos de contratación
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-sm border p-6">

          {/* Tabs */}
          <LicitacionesTabs
            active={filter}
            onChange={setFilter}
            onAdvancedSearch={() => setAdvancedOpen(true)}
          />

          {/* Buscador */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Buscar por objeto, número o tipo de contratación..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border rounded-md
                         focus:outline-none focus:ring-2 focus:ring-[color:var(--itu-blue)]"
            />
          </div>

          {/* Tabla */}
          <LicitacionesTable
            data={filtered}
            onSelect={(l) => setSelected(l)}
          />

        </div>
      </section>

      {/* Modal detalle */}
      <LicitacionModal
        licitacion={selected}
        onClose={() => setSelected(null)}
      />

      {/* Modal búsqueda avanzada */}
      <BusquedaAvanzadaModal
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        onApply={(filters) => {
          setSearch(filters.texto || filters.tipo || "");
          if (filters.estado) setFilter(filters.estado);
        }}
      />

    </main>
  );
}
