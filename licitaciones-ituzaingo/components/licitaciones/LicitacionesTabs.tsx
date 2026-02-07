"use client";

interface Props {
  active: string;
  onChange: (value: string) => void;
  onAdvancedSearch: () => void;
}

const tabs = [
  { id: "vigentes-proximas", label: "Vigentes y próximas" },
  { id: "vigente", label: "Vigentes" },
  { id: "proxima", label: "Próximas" },
  { id: "historica", label: "Históricas" },
];

export default function LicitacionesTabs({
  active,
  onChange,
  onAdvancedSearch,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 items-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-md border text-sm font-medium transition
            ${
              active === tab.id
                ? "bg-[color:var(--itu-blue)] text-white border-[color:var(--itu-blue)] shadow-sm"
                : "bg-white text-[color:var(--itu-blue)] border-[color:var(--itu-blue)] hover:bg-blue-50"
            }`}
        >
          {tab.label}
        </button>
      ))}

      <button
        onClick={onAdvancedSearch}
        className="ml-auto flex items-center gap-2 px-4 py-2 rounded-md
                   border border-gray-300 text-gray-700 hover:bg-gray-100
                   text-sm font-medium transition"
      >
        🔍 Búsqueda avanzada
      </button>
    </div>
  );
}
