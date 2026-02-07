"use client";

import type { Licitacion } from "@/data/licitaciones";

interface Props {
  licitacion: Licitacion | null;
  onClose: () => void;
}

const estadoStyles: Record<string, string> = {
  vigente: "bg-green-100 text-green-800",
  proxima: "bg-blue-100 text-blue-800",
  historica: "bg-gray-200 text-gray-700",
};

export default function LicitacionModal({ licitacion, onClose }: Props) {
  if (!licitacion) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden">

        {/* HEADER */}
        <div
          className="px-6 py-4 flex justify-between items-center"
          style={{
            background:
              "linear-gradient(90deg, #0077b6 0%, #0096c7 40%, #7bbf3f 100%)",
          }}
        >
          <h2 className="text-lg font-semibold text-white">
            Detalle de Licitación
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="px-6 py-6 space-y-6 text-sm text-gray-700">

          {/* DATOS PRINCIPALES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-xs text-gray-500 mb-1">Tipo de contratación</p>
              <p className="font-medium">{licitacion.tipo}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-xs text-gray-500 mb-1">Número</p>
              <p className="font-medium">
                {licitacion.numero} / {licitacion.anio}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-xs text-gray-500 mb-1">Presupuesto oficial</p>
              <p className="font-semibold">
                ${licitacion.presupuesto.toLocaleString("es-AR")}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-xs text-gray-500 mb-1">Fecha de apertura</p>
              <p className="font-medium">
                {new Date(licitacion.fechaApertura).toLocaleString("es-AR")}
              </p>
            </div>

          </div>

          {/* OBJETO */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Objeto de la licitación</p>
            <div className="bg-gray-50 border rounded-lg p-4">
              {licitacion.objeto}
            </div>
          </div>

          {/* ESTADO */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Estado:</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold
              ${estadoStyles[licitacion.estado]}`}
            >
              {licitacion.estado.toUpperCase()}
            </span>
          </div>

          {/* INFO INSTITUCIONAL */}
          <div className="border-t pt-4 text-sm text-gray-600">
            Para iniciar el proceso de adquisición de pliegos es necesario
            encontrarse inscripto en el Registro de Proveedores del Municipio
            de Ituzaingó.
          </div>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border
                       text-gray-700 hover:bg-gray-100
                       text-sm font-medium"
          >
            Cerrar
          </button>

          <button
            className="px-4 py-2 rounded-md
                       bg-[color:var(--itu-blue)]
                       hover:bg-[color:var(--itu-blue-dark)]
                       text-white text-sm font-medium transition"
          >
            Iniciar trámite
          </button>

        </div>
      </div>
    </div>
  );
}
