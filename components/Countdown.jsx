import Countdown from 'react-countdown';
export default function WeddingCountdown({ date }) {
  return <Countdown date={date} renderer={({days, hours, minutes}) => <span>{days}d {hours}h {minutes}m</span>} />;
}