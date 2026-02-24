"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import { licitaciones } from "@/data/licitaciones";

type TabKey =
  | "convocatoria"
  | "acto"
  | "dictamen"
  | "adjudicacion"
  | "orden";

const tabs: { key: TabKey; label: string }[] = [
  { key: "convocatoria", label: "Convocatoria" },
  { key: "acto", label: "Acto de apertura" },
  { key: "dictamen", label: "Dictamen de evaluación" },
  { key: "adjudicacion", label: "Adjudicación" },
  { key: "orden", label: "Orden de compra" },
];

const BLANK_PDF_URL = "/pdfs/blank.pdf";

export default function TramitePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [active, setActive] = useState<TabKey>("convocatoria");

  const lic = useMemo(
    () => licitaciones.find((l) => l.id === params.id),
    [params.id]
  );

  if (!lic) {
    return (
      <main className="min-h-screen bg-[color:var(--bg-page)]">
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-700">No se encontró la licitación.</p>
            <button
              onClick={() => router.push("/licitaciones")}
              className="mt-4 px-4 py-2 rounded-md text-white
                         bg-[color:var(--itu-blue)] hover:bg-[color:var(--itu-blue-dark)]"
            >
              Volver
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[color:var(--bg-page)]">
      <Header />

      {/* Franja institucional */}
      <div
        className="w-full py-8"
        style={{
          background:
            "linear-gradient(90deg, #0077b6 0%, #0096c7 35%, #7bbf3f 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Portal de Compras Públicas
            </h1>
            <p className="text-white/90 mt-2">
              {lic.tipo} {lic.numero}/{lic.anio}
            </p>
            <p className="text-white/90 text-sm mt-1">{lic.objeto}</p>
          </div>

          <button
            onClick={() => router.push("/licitaciones")}
            className="shrink-0 px-4 py-2 rounded-md text-sm font-semibold
                       bg-white/95 hover:bg-white text-[color:var(--itu-blue)] transition"
          >
            Volver
          </button>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="p-4 border-b bg-white sticky top-0 z-10">
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`px-4 py-2 rounded-md border text-sm font-semibold transition
                    ${
                      active === t.key
                        ? "bg-[color:var(--itu-blue)] text-white border-[color:var(--itu-blue)]"
                        : "bg-white text-[color:var(--itu-blue)] border-[color:var(--itu-blue)] hover:bg-blue-50"
                    }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {active === "convocatoria" && (
              <CardSection title="Convocatoria">
                <GridInfo
                  items={[
                    { label: "Objeto", value: lic.objeto },
                    { label: "Tipo", value: lic.tipo },
                    { label: "Número", value: `${lic.numero}/${lic.anio}` },
                    {
                      label: "Fecha de apertura",
                      value: new Date(lic.fechaApertura).toLocaleString("es-AR"),
                    },
                    {
                      label: "Presupuesto oficial",
                      value: `$${lic.presupuesto.toLocaleString("es-AR")}`,
                    },
                    {
                      label: "Oficina de contratación",
                      value: "Dirección de Compras y Licitaciones",
                    },
                  ]}
                />

                <Divider />

                <h3 className="font-semibold text-gray-800 mb-2">
                  Descarga de documentación
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <DocRow label="Pliego" href={BLANK_PDF_URL} />
                  <DocRow label="Anexos" href={BLANK_PDF_URL} />
                  <DocRow label="Planilla de cotización" href={BLANK_PDF_URL} />
                </div>
              </CardSection>
            )}

            {active === "acto" && (
              <CardSection title="Acto de apertura">
                <GridInfo
                  items={[
                    {
                      label: "Fecha y hora de inicio",
                      value: new Date(lic.fechaApertura).toLocaleString("es-AR"),
                    },
                    {
                      label: "Lugar de apertura",
                      value: "Sala de Reuniones — Municipio de Ituzaingó",
                    },
                    { label: "Oficina", value: "Dirección de Compras y Licitaciones" },
                    { label: "Estado", value: "En apertura" },
                  ]}
                />
                <Divider />
                <p className="text-sm text-gray-700">
                  En esta sección se publicará el acta correspondiente al acto de apertura, con
                  la nómina de oferentes y observaciones.
                </p>
              </CardSection>
            )}

            {active === "dictamen" && (
              <CardSection title="Dictamen de evaluación">
                <p className="text-sm text-gray-700">
                  Aquí se incorporará el dictamen de evaluación de ofertas, con el análisis técnico,
                  económico y administrativo.
                </p>
                <Divider />
                <DocRow label="Dictamen (PDF)" href={BLANK_PDF_URL} />
              </CardSection>
            )}

            {active === "adjudicacion" && (
              <CardSection title="Adjudicación">
                <GridInfo
                  items={[
                    { label: "Acto administrativo", value: "—" },
                    { label: "Adjudicatario", value: "—" },
                    { label: "CUIT", value: "—" },
                    { label: "Importe adjudicado", value: "—" },
                  ]}
                />
                <Divider />
                <p className="text-sm text-gray-700">
                  Esta sección mostrará la resolución de adjudicación y el detalle del adjudicatario.
                </p>
              </CardSection>
            )}

            {active === "orden" && (
              <CardSection title="Orden de compra">
                <p className="text-sm text-gray-700">
                  En esta etapa se publicarán las órdenes de compra emitidas y su estado.
                </p>
                <Divider />
                <DocRow label="Orden de compra (PDF)" href={BLANK_PDF_URL} />
              </CardSection>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ UI Helpers ============ */

function CardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        Información oficial del proceso
      </p>

      <div className="mt-5 bg-[color:var(--bg-card, #f8fafc)] border rounded-xl p-5">
        {children}
      </div>
    </div>
  );
}

function GridInfo({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it) => (
        <div key={it.label} className="bg-white border rounded-lg p-4">
          <div className="text-xs text-gray-500">{it.label}</div>
          <div className="text-sm font-semibold text-gray-900 mt-1">
            {it.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-5" />;
}

function DocRow({ label, href }: { label: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white border rounded-lg p-3">
      <div className="text-sm font-medium text-gray-800">{label}</div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[color:var(--itu-blue)] hover:underline"
      >
        Consultar
      </a>
    </div>
  );
}