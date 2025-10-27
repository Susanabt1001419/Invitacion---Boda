import Section from '../components/Section';
import WeddingCountdown from '../components/Countdown';
export default function Home() {
  const weddingDate = new Date('2026-04-12T16:00:00-05:00');
  return (
    <div className='min-h-screen bg-beige text-center font-serif'>
      <section className='h-screen flex flex-col justify-center items-center bg-[url(/hero.jpg)] bg-cover bg-center text-white'>
        <h1 className='font-script text-6xl mb-4 text-black'>Susana & Diego</h1>
        <p className='text-xl uppercase tracking-widest text-black'>20 de Febrero de 2026</p>
      </section>
      <Section>
        <p className='italic text-2xl'>“El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección.”</p>
      </Section>
      <Section>
        <h2 className='font-script text-3xl text-gold mb-6'>Nuestra Boda</h2>
        <p>📍 Hacienda La Toscana, Rionegro</p>
        <p>📅 Sábado 12 de abril de 2026</p>
        <WeddingCountdown date={weddingDate} />
      </Section>
      <footer className='py-12 text-sm text-gray-600'>Con amor, Diego & Luisa 💛</footer>
    </div>
  );
}
