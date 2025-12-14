// pages/index.js
import Section from '../components/Section';
import WeddingCountdown from '../components/Countdown';
import { motion } from "framer-motion";

export default function Home() {
  const weddingDate = new Date('2026-02-20T16:00:00-05:00');

  return (
    <div className="min-h-screen bg-beige text-center font-serif">

      {/* 🖋️ TÍTULO ARRIBA DEL VIDEO */}
      <section className="pt-10 pb-6">
        <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-wide">
          Nuestra boda
        </h1>
      </section>

      {/* 🎬 VIDEO HERO */}
      <section className="relative h-[65vh] sm:h-[70vh] bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* DEGRADADO INFERIOR */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige/90 to-transparent" />
      </section>

      {/* 🗓️ FECHA */}
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

      {/* ⏳ CUENTA REGRESIVA */}
      <Section id="contador" className="pt-2 pb-2">
        <h3 className="tracking-[0.25em] uppercase text-xs md:text-sm text-gray-700 mb-3">
          Cuenta regresiva
        </h3>
        <div className="flex justify-center">
          <WeddingCountdown date={weddingDate} />
        </div>
      </Section>

      {/* 💒 CEREMONIA Y RECEPCIÓN */}
      <Section id="ubicacion" className="bg-beige py-10">
        <h2 className="font-script text-3xl text-gold mb-8">
          Ceremonia & Recepción
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-16">

          {/* CEREMONIA */}
          <motion.div
            className="bg-white shadow-md rounded-2xl py-8 px-6 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {/* IGLESIA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14 mb-4"
                fill="none"
                stroke="#c6a664"
                strokeWidth="2"
              >
                <path d="M32 6v6M26 12h12M16 54V28l16-10 16 10v26M8 54h48M24 54V38h16v16" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="32" cy="24" r="2" fill="#c6a664"/>
              </svg>

              <h3 className="font-script text-2xl text-gray-800 mb-1">
                Ceremonia
              </h3>
              <h4 className="text-lg font-semibold tracking-wide text-gray-800">
                Parroquia María Madre de Dios
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Rionegro, Antioquia
              </p>
              <p className="mt-3 font-medium text-gray-800">
                4:00 PM
              </p>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {/* COPAS */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14 mb-4"
                fill="none"
                stroke="#c6a664"
                strokeWidth="2"
              >
                <path d="M20 12l8 16m16-16l-8 16M16 12h12l4 12H20l-4-12Zm32 0H36l-4 12h12l4-12ZM28 40l-8 12m16-12l8 12m-8-12v12m-8-12v12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <h3 className="font-script text-2xl text-gray-800 mb-1">
                Recepción
              </h3>
              <h4 className="text-lg font-semibold tracking-wide text-gray-800">
                Galilea Campestre
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Rionegro, Antioquia
              </p>
              <p className="mt-3 font-medium text-gray-800">
                5:30 PM
              </p>
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

      {/* 📸 FOTO DECORATIVA + NOTA */}
      <section className="pt-6 pb-14 px-4 sm:px-12 -mt-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
      
          {/* NOTA */}
          <p className="mb-4 text-xs sm:text-sm tracking-widest uppercase text-gray-600">
            Para disfrutar plenamente de la celebración, este evento es solo para adultos
          </p>
      
          {/* IMAGEN */}
          <img
            src="/pre_boda_susi_diego_046.jpg"
            alt="Susana y Diego"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* 🕰️ PROGRAMA DE LA BODA */}
      <Section id="programa" className="py-16">
        <h2 className="font-script text-3xl sm:text-4xl text-gold mb-16">
          Programa de la boda
        </h2>
      
        <div className="relative max-w-5xl mx-auto px-6">
      
          {/* LÍNEA CENTRAL */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />
      
          {/* ITEM */}
          {[
            { title: "Ceremonia Católica", time: "4:00 PM", img: "/ceremonia.png", side: "left" },
            { title: "Recepción", time: "5:30 PM", img: "/recepcion.png", side: "right" },
            { title: "Cena", time: "6:30 PM", img: "/cena.png", side: "left" },
            { title: "Baile de los novios", time: "7:30 PM", img: "/baile.png", side: "right" },
            { title: "Hora loca", time: "10:00 PM", img: "/hora_loca.png", side: "left" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center"
            >
      
              {/* PUNTO DORADO */}
              <span className="absolute left-1/2 top-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
      
              {/* TEXTO IZQUIERDA */}
              {item.side === "left" && (
                <div className="text-right pr-12">
                  <p className="text-xl sm:text-2xl font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-lg sm:text-xl text-gray-600 mt-1">
                    {item.time}
                  </p>
                </div>
              )}
      
              {/* IMAGEN */}
              <div
                className={`flex ${
                  item.side === "left" ? "justify-start pl-12" : "justify-end pr-12"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 sm:w-24"
                />
              </div>
      
              {/* TEXTO DERECHA */}
              {item.side === "right" && (
                <div className="text-left pl-12">
                  <p className="text-xl sm:text-2xl font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-lg sm:text-xl text-gray-600 mt-1">
                    {item.time}
                  </p>
                </div>
              )}
      
            </div>
          ))}
        </div>
      </Section>


      {/* 🌿 FOOTER */}
      <footer className="py-10 text-sm text-gray-600">
        Con amor, Susana & Diego 💛
      </footer>

    </div>
  );
}
