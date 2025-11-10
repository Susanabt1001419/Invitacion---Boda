// pages/index.js
// pages/index.js
import Section from '../components/Section';
import WeddingCountdown from '../components/Countdown';
import { motion } from "framer-motion";

export default function Home() {
  const weddingDate = new Date('2026-02-20T16:00:00-05:00');

  return (
    <div className="min-h-screen bg-beige text-center font-serif">

      {/* 🌸 VIDEO HERO */}
      <section className="relative h-screen flex items-end bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Degradado para transición con el fondo beige */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-beige/90 to-transparent" />
      </section>

      {/* 🗓️ FECHA DEBAJO DEL VIDEO */}
      <Section id="fecha" className="pt-6 pb-3">
        <p className="tracking-[0.35em] uppercase text-black text-base sm:text-lg md:text-xl">
          20 · 02 · 2026
        </p>
      </Section>

      {/* 💬 FRASE */}
      <Section className="pt-1 pb-4">
        <p className="italic text-xl md:text-2xl text-gray-800">
          “El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección.”
        </p>
      </Section>

      {/* ⏳ CUENTA REGRESIVA (espacio reducido) */}
      <Section id="contador" className="pt-2 pb-2">
        <h3 className="tracking-[0.25em] uppercase text-xs md:text-sm text-gray-700 mb-3">
          Cuenta regresiva
        </h3>
        <div className="flex justify-center">
          <WeddingCountdown date={weddingDate} />
        </div>
      </Section>

      {/* 💒 CEREMONIA Y RECEPCIÓN (menos padding vertical) */}
      <Section id="ubicacion" className="bg-beige py-10">
        <h2 className="font-script text-3xl text-gold mb-8">Ceremonia & Recepción</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-16">
          
          {/* CEREMONIA */}
          <motion.div
            className="bg-white shadow-md rounded-2xl py-8 px-6 border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {/* Ícono de iglesia */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1198/1198699.png"
                alt="Iglesia"
                className="w-14 mb-4 opacity-80"
              />
              <h3 className="font-script text-2xl text-gray-800 mb-1">Ceremonia Religiosa</h3>
              <h4 className="text-lg font-semibold tracking-wide text-gray-800">
                Parroquia María Madre de Dios
              </h4>
              <p className="text-sm text-gray-600 mt-1">Rionegro, Antioquia</p>
              <p className="mt-3 font-medium text-gray-800">5:00 PM</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parroquia+Mar%C3%ADa+Madre+de+Dios,+Rionegro,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border border-gold text-gold px-5 py-2 rounded-md hover:bg-gold hover:text-white transition"
              >
                Ver ubicación
              </a>
            </div>
          </motion.div>

          {/* RECEPCIÓN */}
          <motion.div
            className="bg-white shadow-md rounded-2xl py-8 px-6 border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {/* Ícono de recepción (copas) */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2738/2738820.png"
                alt="Recepción"
                className="w-14 mb-4 opacity-80"
              />
              <h3 className="font-script text-2xl text-gray-800 mb-1">Recepción</h3>
              <h4 className="text-lg font-semibold tracking-wide text-gray-800">
                Galilea Campestre
              </h4>
              <p className="text-sm text-gray-600 mt-1">Rionegro, Antioquia</p>
              <p className="mt-3 font-medium text-gray-800">7:00 PM</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Galilea+Campestre,+Rionegro,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border border-gold text-gold px-5 py-2 rounded-md hover:bg-gold hover:text-white transition"
              >
                Ver ubicación
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 🌿 PIE DE PÁGINA */}
      <footer className="py-10 text-sm text-gray-600">
        Con amor, Susana & Diego 💛
      </footer>
    </div>
  );
}


