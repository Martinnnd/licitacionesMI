import type { Licitacion } from "@/data/licitaciones";

interface Props {
  data: Licitacion[];
  onSelect: (l: Licitacion) => void;
}

export default function LicitacionesTable({ data, onSelect }: Props) {
  return (
    <div className="overflow-x-auto rounded-md border mt-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr className="text-gray-700">
            <th className="px-4 py-3 text-left font-semibold">Contratación</th>
            <th className="px-4 py-3 text-center">Número</th>
            <th className="px-4 py-3 text-center">Año</th>
            <th className="px-4 py-3 text-left">Objeto</th>
            <th className="px-4 py-3 text-center">Presupuesto</th>
            <th className="px-4 py-3 text-center">Fecha de apertura</th>
            <th className="px-4 py-3 text-center">Estado</th>
            <th className="px-4 py-3 text-center">Acción</th>
          </tr>
        </thead>

        <tbody>
          {data.map((l) => (
            <tr
              key={l.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{l.tipo}</td>
              <td className="px-4 py-3 text-center">{l.numero}</td>
              <td className="px-4 py-3 text-center">{l.anio}</td>
              <td className="px-4 py-3">{l.objeto}</td>
              <td className="px-4 py-3 text-center font-medium">
                ${l.presupuesto.toLocaleString("es-AR")}
              </td>
              <td className="px-4 py-3 text-center">
                {new Date(l.fechaApertura).toLocaleString("es-AR")}
              </td>

              {/* Estado fijo */}
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  VIGENTE
                </span>
              </td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onSelect(l)}
                  className="inline-block bg-[color:var(--itu-blue)]
                             hover:bg-[color:var(--itu-blue-dark)]
                             text-white px-4 py-1.5 rounded-md
                             text-sm font-medium transition"
                >
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
