// pages/index.js
import Section from '../components/Section';
import WeddingCountdown from '../components/Countdown';
import { motion } from "framer-motion";

export default function Home() {
  const weddingDate = new Date('2026-02-20T16:00:00-05:00');

  return (
    <div className="min-h-screen bg-beige text-center font-serif">

      {/* 🖋️ TÍTULO */}
      <section className="pt-10 pb-4 text-center">
      
        <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-gold mb-3">
          Nuestra boda
        </h1>
      
        <p className="
        font-serif
        text-base
        sm:text-lg
        tracking-[0.3em]
        uppercase
        text-gray-700
      ">
        Diego & Susana
      </p>
      
      </section>

      {/* 🖼️ HERO CON FOTO (MISMAS DIMENSIONES DEL VIDEO) */}
      <section className="relative h-[65vh] sm:h-[70vh] bg-black overflow-hidden">
      
        <img
          src="/hero.jpeg"   // cambia por el nombre real de tu foto vertical
          alt="Susana y Diego"
          className="absolute inset-0 w-full h-full object-cover"
        />
      
        {/* DEGRADADO INFERIOR */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-beige/90 to-transparent" />
      
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
          <p className="
            max-w-md 
            mx-auto 
            mb-5 
            text-gray-800 
            text-sm 
            sm:text-base 
            tracking-widest 
            uppercase 
            leading-relaxed
          ">
            <span className="block mb-2 font-semibold text-gray-900">
              Nota
            </span>
            Para disfrutar plenamente de la celebración,
            este evento es <strong>solo para adultos</strong>
          </p>
      
          {/* IMAGEN */}
          <img
            src="/pre_boda_susi_diego_046.jpg"
            alt="Susana y Diego"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
      
        </motion.div>
      </section>


     {/* 🕊️ PROGRAMA DE LA BODA */}
      <Section className="py-8">
        <h2 className="font-script text-3xl text-gold mb-14">
          Programa de la boda
        </h2>
      
        <div className="relative max-w-3xl mx-auto">
      
          {/* LÍNEA CENTRAL */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2"></div>
      
          {/* ===== CEREMONIA ===== */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 text-right pr-14 max-w-[220px] ml-auto">
              <span className="block text-xl font-medium text-gray-800">
                Ceremonia<br />Católica
              </span>
              <span className="block text-lg text-gray-600 mt-1">
                4:00 PM
              </span>
            </div>
      
            <span className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2"></span>
      
            <div className="w-1/2 pl-14">
              <img src="/ceremonia.png" alt="Ceremonia" className="w-20 mx-auto opacity-90" />
            </div>
          </div>
      
          {/* ===== RECEPCIÓN ===== */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-14 flex justify-end">
              <img src="/recepcion.png" alt="Recepción" className="w-20 opacity-90" />
            </div>
      
            <span className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2"></span>
      
            <div className="w-1/2 pl-14 max-w-[220px]">
              <span className="block text-xl font-medium text-gray-800">
                Recepción
              </span>
              <span className="block text-lg text-gray-600 mt-1">
                5:30 PM
              </span>
            </div>
          </div>
      
          {/* ===== CENA ===== */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 text-right pr-14 max-w-[220px] ml-auto">
              <span className="block text-xl font-medium text-gray-800">
                Cena
              </span>
              <span className="block text-lg text-gray-600 mt-1">
                6:30 PM
              </span>
            </div>
      
            <span className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2"></span>
      
            <div className="w-1/2 pl-14">
              <img src="/cena.png" alt="Cena" className="w-20 mx-auto opacity-90" />
            </div>
          </div>
      
          {/* ===== BAILE DE LOS NOVIOS ===== */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-14 flex justify-end">
              <img src="/baile.png" alt="Baile" className="w-20 opacity-90" />
            </div>
      
            <span className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2"></span>
      
            <div className="w-1/2 pl-14 max-w-[220px]">
              <span className="block text-xl font-medium text-gray-800">
                Baile de<br />los Novios
              </span>
              <span className="block text-lg text-gray-600 mt-1">
                7:30 PM
              </span>
            </div>
          </div>
      
          {/* ===== HORA LOCA ===== */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 text-right pr-14 max-w-[220px] ml-auto">
              <span className="block text-xl font-medium text-gray-800">
                Hora Loca
              </span>
              <span className="block text-lg text-gray-600 mt-1">
                10:00 PM
              </span>
            </div>
      
            <span className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2"></span>
      
            <div className="w-1/2 pl-14">
              <img src="/hora_loca.png" alt="Hora loca" className="w-20 mx-auto opacity-90" />
            </div>
          </div>
      
        </div>
      </Section>

      {/* 📸 COLLAGE CON TRANSICIÓN */}
      <Section className="pt-6 pb-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -80 }}       // entra desde la izquierda
          whileInView={{ opacity: 1, x: 0 }}     // se centra
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }} // se activa al hacer scroll
          className="max-w-6xl mx-auto px-6"
        >
          <img
            src="/collage.png"
            alt="Susana y Diego"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </Section>

      {/* 👗 CÓDIGO DE VESTIMENTA */}
      <Section id="vestimenta" className="pt-6 pb-10">
      
        <h2 className="font-script text-3xl text-gold mb-4">
          Código de vestimenta
        </h2>
      
        <p className="
          max-w-md 
          mx-auto 
          text-gray-800 
          text-sm 
          sm:text-base 
          tracking-widest 
          uppercase 
          leading-relaxed 
          mb-6
        ">
          Estos colores estarán reservados para los novios,
          por lo que agradecemos amablemente evitarlos:
        </p>
      
        {/* COLORES PROHIBIDOS */}
        <div className="flex justify-center items-center gap-1">
          
          {/* BLANCO */}
          <span className="w-14 h-14 rounded-full bg-white border border-gray-300"></span>
      
          {/* BEIGE ARENA */}
          <span className="w-14 h-14 rounded-full bg-[#e3d3bf] border border-gray-300"></span>
      
        </div>
      
      </Section>
      {/* 🎁 LLUVIA DE SOBRES */}
      <Section id="regalos" className="pt-6 pb-12">
      
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md px-6 py-8 text-center">
      
          {/* TÍTULO */}
          <h2 className="font-script text-3xl text-gold mb-4">
            Detalles
          </h2>
      
          {/* TEXTO */}
          <p
            className="
              max-w-md
              mx-auto
              text-gray-700
              text-sm
              sm:text-base
              leading-relaxed
              mb-6
            "
          >

            Si desean hacernos algún detalle,
            agradecemos que sea en forma de lluvia de sobres.
          </p>
      
          {/* IMAGEN */}
          <img
            src="/lluvia.png"
            alt="Lluvia de sobres"
            className="
              w-full
              max-w-[120px]
              mx-auto
              mt-2
              object-contain
            "
          />
      
        </div>
      
      </Section>

      {/* ✅ CONFIRMACIÓN DE ASISTENCIA */}
      <Section id="rsvp" className="pt-6 pb-12">
      
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md px-6 py-8 text-center">
      
          {/* TÍTULO */}
          <h2 className="font-script text-3xl text-gold mb-4">
            Confirmación
          </h2>
      
          {/* TEXTO */}
          <p
            className="
              max-w-md
              mx-auto
              text-gray-800
              text-sm
              sm:text-base
              tracking-widest
              uppercase
              leading-relaxed
              mb-6
            "
          >
            Nos encantaría compartir este día tan especial con ustedes,
            por lo que agradecemos confirmar su asistencia.
          </p>
      
          {/* BOTÓN */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfLTF-SPrQvo_RqEFKqa9jlP_uwxDc1AvXihG2pBUzdE9Sp9w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-8
              py-3
              rounded-full
              border
              border-gold
              text-gold
              tracking-widest
              uppercase
              text-xs
              sm:text-sm
              hover:bg-gold
              hover:text-white
              transition
            "
          >
            Confirmar asistencia
          </a>
      
        </div>
      
      </Section>

      {/* 🌿 FOOTER */}
      <footer className="pt-4 pb-10 text-base sm:text-lg text-gray-700 font-serif">
        Con amor, Susana & Diego 💛
      </footer>

    </div>
  );
}
