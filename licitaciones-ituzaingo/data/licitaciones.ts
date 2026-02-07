export type EstadoLicitacion = "vigente" | "proxima" | "historica";

export interface Licitacion {
  id: string;
  tipo: string;
  numero: number;
  anio: number;
  objeto: string;
  presupuesto: number;
  fechaApertura: string;
  estado: EstadoLicitacion;
}

export const licitaciones: Licitacion[] = [
  {
    id: "lp-10-2026",
    tipo: "Licitación Pública",
    numero: 10,
    anio: 2026,
    objeto: "Adquisición de un camión equipado con plataforma hidráulica",
    presupuesto: 150000000,
    fechaApertura: "2026-02-24T10:00:00",
    estado: "vigente",
  },
  {
    id: "lp-9-2026",
    tipo: "Licitación Pública",
    numero: 9,
    anio: 2026,
    objeto: "Ejecución de cubierta metálica en Cemina Florida Oeste",
    presupuesto: 180000000,
    fechaApertura: "2026-02-23T10:00:00",
    estado: "proxima",
  },
  {
    id: "lp-8-2026",
    tipo: "Licitación Pública",
    numero: 8,
    anio: 2026,
    objeto: "Puesta en valor sala de internación del 1° piso en el Hospital Houssay",
    presupuesto: 359930183,
    fechaApertura: "2026-02-20T10:00:00",
    estado: "vigente",
  },

  /* ================= VIGENTES ================= */

  {
    id: "lp-7-2026",
    tipo: "Licitación Pública",
    numero: 7,
    anio: 2026,
    objeto: "Servicio de poda en altura y mantenimiento del arbolado urbano",
    presupuesto: 1302500000,
    fechaApertura: "2026-02-13T12:00:00",
    estado: "vigente",
  },
  {
    id: "cp-6-2026",
    tipo: "Concurso de Precios",
    numero: 6,
    anio: 2026,
    objeto: "Adquisición de microesferas de vidrio para señalización vial",
    presupuesto: 85000000,
    fechaApertura: "2026-02-12T11:30:00",
    estado: "vigente",
  },
  {
    id: "lp-5-2026",
    tipo: "Licitación Pública",
    numero: 5,
    anio: 2026,
    objeto: "Contratación de servicio de mantenimiento de espacios verdes",
    presupuesto: 420000000,
    fechaApertura: "2026-02-10T10:00:00",
    estado: "vigente",
  },
  {
    id: "lp-4-2026",
    tipo: "Licitación Pública",
    numero: 4,
    anio: 2026,
    objeto: "Adquisición de luminarias LED para alumbrado público",
    presupuesto: 275000000,
    fechaApertura: "2026-02-08T10:00:00",
    estado: "vigente",
  },

  /* ================= PRÓXIMAS ================= */

  {
    id: "lp-3-2026",
    tipo: "Licitación Pública",
    numero: 3,
    anio: 2026,
    objeto: "Construcción de veredas accesibles en distintos barrios",
    presupuesto: 510000000,
    fechaApertura: "2026-03-01T10:00:00",
    estado: "proxima",
  },
  {
    id: "lp-2-2026",
    tipo: "Licitación Pública",
    numero: 2,
    anio: 2026,
    objeto: "Refacción integral de edificio municipal",
    presupuesto: 890000000,
    fechaApertura: "2026-03-05T10:00:00",
    estado: "proxima",
  },
  {
    id: "cp-1-2026",
    tipo: "Concurso de Precios",
    numero: 1,
    anio: 2026,
    objeto: "Adquisición de insumos informáticos para dependencias municipales",
    presupuesto: 95000000,
    fechaApertura: "2026-03-10T11:00:00",
    estado: "proxima",
  },
  {
    id: "lp-11-2026",
    tipo: "Licitación Pública",
    numero: 11,
    anio: 2026,
    objeto: "Servicio de limpieza integral de edificios públicos",
    presupuesto: 360000000,
    fechaApertura: "2026-03-12T10:00:00",
    estado: "proxima",
  },

  /* ================= HISTÓRICAS ================= */

  {
    id: "lp-12-2025",
    tipo: "Licitación Pública",
    numero: 12,
    anio: 2025,
    objeto: "Adquisición de equipamiento médico para centros de salud",
    presupuesto: 240000000,
    fechaApertura: "2025-11-15T10:00:00",
    estado: "historica",
  },
  {
    id: "lp-13-2025",
    tipo: "Licitación Pública",
    numero: 13,
    anio: 2025,
    objeto: "Obra de bacheo y repavimentación de calles",
    presupuesto: 780000000,
    fechaApertura: "2025-10-20T10:00:00",
    estado: "historica",
  },
  {
    id: "cp-14-2025",
    tipo: "Concurso de Precios",
    numero: 14,
    anio: 2025,
    objeto: "Compra de mobiliario para escuelas municipales",
    presupuesto: 120000000,
    fechaApertura: "2025-09-10T11:00:00",
    estado: "historica",
  },
  {
    id: "lp-15-2025",
    tipo: "Licitación Pública",
    numero: 15,
    anio: 2025,
    objeto: "Contratación de servicio de seguridad privada",
    presupuesto: 310000000,
    fechaApertura: "2025-08-18T10:00:00",
    estado: "historica",
  },
  {
    id: "lp-16-2025",
    tipo: "Licitación Pública",
    numero: 16,
    anio: 2025,
    objeto: "Mantenimiento preventivo de flota vehicular municipal",
    presupuesto: 190000000,
    fechaApertura: "2025-07-22T10:00:00",
    estado: "historica",
  },
];
