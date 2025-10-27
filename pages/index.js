import Section from '../components/Section';
import WeddingCountdown from '../components/Countdown';
export default function Home() {
  const weddingDate = new Date('2026-04-12T16:00:00-05:00');
  return (
    <div className='min-h-screen bg-beige text-center font-serif'>
      <section className="relative h-screen flex justify-center items-center bg-black">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-90"
  >
    <source src="/Great Vibes.mp4" type="video/mp4" />
  </video>
</section>
      <Section>
        <p className='italic text-2xl'>“El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección.”</p>
      </Section>
      <Section>
        <h2 className='font-script text-3xl text-gold mb-6'>Nuestra Boda</h2>
        <p>📍 Torre mar eventos, Rionegro</p>
        <p>📅 Viernes 20 de febrero de 2026</p>
        <WeddingCountdown date={weddingDate} />
      </Section>
      <footer className='py-12 text-sm text-gray-600'>Con amor, Susana & Diego 💛</footer>
    </div>
  );
}
