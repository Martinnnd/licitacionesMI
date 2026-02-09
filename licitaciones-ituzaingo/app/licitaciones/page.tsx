"use client";

import { useMemo, useState } from "react";
import { licitaciones } from "@/data/licitaciones";
import LicitacionesTabs from "@/components/licitaciones/LicitacionesTabs";
import LicitacionesTable from "@/components/licitaciones/LicitacionesTable";
import LicitacionModal from "@/components/licitaciones/LicitacionModal";
import BusquedaAvanzadaModal from "@/components/licitaciones/BusquedaAvanzadaModal";
import type { Licitacion } from "@/data/licitaciones";
import Header from "@/components/layout/Header";

type AdvancedFilters = {
  texto: string;
  tipo: string;
  estado: string;
  anio: string;
};

export default function LicitacionesPage() {
  const [filter, setFilter] = useState<"todas" | "vigente">("todas");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Licitacion | null>(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    texto: "",
    tipo: "",
    estado: "",
    anio: "",
  });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return licitaciones.filter((l) => {
      // Tabs
      const matchesTab = filter === "todas" ? true : l.estado === "vigente";

      // Buscador simple
      const matchesSearch =
        q === ""
          ? true
          : l.objeto.toLowerCase().includes(q) ||
            l.tipo.toLowerCase().includes(q) ||
            l.numero.toString().includes(q);

      // Modal - tipo / rubro
      const matchesTipo =
        advancedFilters.tipo === ""
          ? true
          : l.tipo === advancedFilters.tipo;

      // Modal - año (ESTO ES LO QUE FALTABA)
      const matchesAnio =
        advancedFilters.anio === ""
          ? true
          : String(l.anio) === advancedFilters.anio;

      // Modal - texto
      const matchesTexto =
        advancedFilters.texto === ""
          ? true
          : l.objeto
              .toLowerCase()
              .includes(advancedFilters.texto.toLowerCase());

      return (
        matchesTab &&
        matchesSearch &&
        matchesTipo &&
        matchesAnio &&
        matchesTexto
      );
    });
  }, [filter, search, advancedFilters]);

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
          <h1 className="text-4xl font-semibold text-white">Licitaciones</h1>
          <p className="text-white/90 mt-2">
            Consulta de pliegos y procesos de contratación
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <LicitacionesTabs
            active={filter}
            onChange={(v) => setFilter(v as "todas" | "vigente")}
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

          <LicitacionesTable
            data={filtered}
            onSelect={(l) => setSelected(l)}
          />
        </div>
      </section>

      <LicitacionModal
        licitacion={selected}
        onClose={() => setSelected(null)}
      />

      <BusquedaAvanzadaModal
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        onApply={(filters) => {
          setAdvancedFilters(filters);

          // opcional: reflejar texto en el input principal
          if (filters.texto) setSearch(filters.texto);

          setFilter("todas");
        }}
      />
    </main>
  );
}
