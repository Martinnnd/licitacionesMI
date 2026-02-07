"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  onApply: (filters: {
    texto: string;
    tipo: string;
    estado: string;
    anio: string;
  }) => void;
}

export default function BusquedaAvanzadaModal({
  open,
  onClose,
  onApply,
}: Props) {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    onApply({
      texto: String(form.get("texto") || ""),
      tipo: String(form.get("tipo") || ""),
      estado: String(form.get("estado") || ""),
      anio: String(form.get("anio") || ""),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden">

        {/* Header */}
        <div
          className="px-6 py-4 text-white flex justify-between items-center"
          style={{
            background:
              "linear-gradient(90deg, #0077b6 0%, #0096c7 40%, #7bbf3f 100%)",
          }}
        >
          <h2 className="text-lg font-semibold">Búsqueda avanzada</h2>
          <button onClick={onClose} className="text-xl">×</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">

          <input
            name="texto"
            placeholder="Objeto de la licitación"
            className="w-full px-3 py-2 border rounded-md"
          />

          <select name="tipo" className="w-full px-3 py-2 border rounded-md">
            <option value="">Tipo de contratación</option>
            <option>Licitación Pública</option>
            <option>Concurso de Precios</option>
          </select>

          <select name="estado" className="w-full px-3 py-2 border rounded-md">
            <option value="">Estado</option>
            <option value="vigente">Vigente</option>
            <option value="proxima">Próxima</option>
            <option value="historica">Histórica</option>
          </select>

          <input
            name="anio"
            placeholder="Año"
            className="w-full px-3 py-2 border rounded-md"
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md text-white
                         bg-[color:var(--itu-blue)]
                         hover:bg-[color:var(--itu-blue-dark)]"
            >
              Aplicar filtros
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
