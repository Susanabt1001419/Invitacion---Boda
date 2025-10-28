import Countdown from 'react-countdown';

// Función para agregar ceros a la izquierda (ej: 07)
const zpad = (n) => String(n).padStart(2, '0');

// Bloque individual de número + etiqueta
function Block({ value, label }) {
  return (
    <div className="mx-3 sm:mx-4 text-center">
      {/* NÚMEROS → elegantes tipo serif */}
      <div className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium text-gray-800 leading-none tracking-wide">
        {value}
      </div>


      {/* ETIQUETAS → estilo original */}
      <div className="mt-2 text-[10px] sm:text-xs tracking-widest uppercase text-gray-700">
        {label}
      </div>
    </div>
  );
}

// Componente principal
export default function WeddingCountdown({ date }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return <span className="text-xl">¡Es hoy! 💍</span>;
    return (
      <div className="flex justify-center items-end">
        <Block value={zpad(days)} label="DÍAS" />
        <div className="text-4xl mx-2 text-gray-700">:</div>
        <Block value={zpad(hours)} label="HORAS" />
        <div className="text-4xl mx-2 text-gray-700">:</div>
        <Block value={zpad(minutes)} label="MINUTOS" />
        <div className="text-4xl mx-2 text-gray-700">:</div>
        <Block value={zpad(seconds)} label="SEGUNDOS" />
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
}

