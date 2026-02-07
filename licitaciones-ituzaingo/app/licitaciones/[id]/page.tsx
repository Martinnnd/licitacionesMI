interface Props {
  params: { id: string }
}

export default function LicitacionDetalle({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Licitación {params.id}
      </h1>

      <p className="text-gray-600 mt-2">
        Detalle de la licitación (en construcción).
      </p>
    </main>
  );
}
