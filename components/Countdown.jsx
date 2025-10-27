// components/Countdown.jsx
import Countdown, { zeroPad } from 'react-countdown';

function Block({ value, label }) {
  return (
    <div className="mx-2 sm:mx-3">
      <div className="text-5xl sm:text-6xl md:text-7xl font-semibold tabular-nums leading-none">
        {value}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs tracking-widest uppercase text-gray-700">
        {label}
      </div>
    </div>
  );
}

export default function WeddingCountdown({ date }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-xl">¡Es hoy! 💍</span>;
    }
    return (
      <div className="flex items-end justify-center">
        <Block value={zeroPad(days)} label="DÍAS" />
        <div className="text-4xl sm:text-5xl md:text-6xl mx-1 md:mx-2">:</div>
        <Block value={zeroPad(hours)} label="HORAS" />
        <div className="text-4xl sm:text-5xl md:text-6xl mx-1 md:mx-2">:</div>
        <Block value={zeroPad(minutes)} label="MINUTOS" />
        <div className="text-4xl sm:text-5xl md:text-6xl mx-1 md:mx-2">:</div>
        <Block value={zeroPad(seconds)} label="SEGUNDOS" />
      </div>
    );
  };

  // React-Countdown ya refresca cada segundo por defecto
  return <Countdown date={date} renderer={renderer} />;
}
