import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

import { MessageCircle, Menu, X } from "lucide-react";

import cv from "./assets/CV Christian Munie .pdf";
import "./App.css";

function FloatingSphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 64, 68]} />
      <meshStandardMaterial color="#fff" wireframe />
    </mesh>
  );
}

function ContactModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <h3>Contact</h3>
        <div className="modalLinks">
          <a href="https://wa.me/243998032140">WhatsApp</a>
          <a href="tel:+243974827978">Appel</a>
          <a href="mailto:muniecodechristian@gmail.com">Email</a>
        </div>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const projects = [
  {
    title: "NDAKO",
    desc: "Plateforme moderne de gestion locative reliant propriétaires et locataires.",
    url: "https://ndako-lg8h.onrender.com/",
    img: "./ndak.PNG",
  },
  {
    title: "Bilanga Backend",
    desc: "API complète dédiée à l'agriculture avec authentification et services IA.",
    url: "https://github.com/muniecodechristian/BilangaApp_Backend",
    img: "./bilangaback.png",
  },
  {
    title: "Bilanga Mobile",
    desc: "Application mobile connectée destinée aux acteurs du secteur agricole ,réconnaissance plante par IA méteo en temps réel ,NB:je n'ai pas deployer cette app sur playstore faute de finalisation et moyen de payer d'autres services.",
    url: "https://github.com/muniecodechristian/BilangaApp_Backend",
    img: "./bilangaApp.png",
  },
  {
    title: "ftEmploi",
    desc: "Plateforme moderne de recherche et de publication d'offres d'emploi.",
    url: "https://ft-emploi-front.vercel.app",
    img: "./ftemploi.png",
  },
  {
    title: "Billetterie App",
    desc: "Application web de gestion de billetterie actuellement en développement pour le championnat national.",
    url: "https://billeterie-app.vercel.app",
    img: "./billet.png"
  },
  {
    title: "Bac SARLU",
    desc: "Plateforme digitale permettant aux clients de solliciter les services de l'entreprise.",
    url: "https://www.bacsarlu.com",
    img: "./bac.png",
  },
  {
    title: "stream & cours ",

    desc: "un réseau social  actuellement en développement permettant aux communautés de s'apprendre des langues entre eux EX:un indien qui connait le lingala et apprend un congolais le hindi en appel vidéo en streaming",
    url: "https://github.com/muniecodechristian/streamCours",
    img: "./stream.png",
  },
];







const reveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};





const cardReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};








  return (
    <div className="app" style={{overflowY:'hidden'}}>
      <ContactModal open={open} onClose={() => setOpen(false)} />

      <Canvas className="bg" style={{ overflowY: "hidden" }}>
  <ambientLight intensity={0.7} color="#60a5fa" />

  <pointLight
    position={[5, 5, 5]}
    intensity={3}
    color="#2563eb"
  />

  <pointLight
    position={[-5, -5, -5]}
    intensity={2}
    color="#1e40af"
  />

  <FloatingSphere />
</Canvas>

    <header className="nav">
  <div className="logo">Christian Munie</div>

  <nav className="desktopNav">
    <a href="#projects">Projets</a>
    <a href="#skills">Compétences</a>
    <button onClick={() => setOpen(true)}>
       Me contacter
    </button>
  </nav>

  <button
    className="hamburger"
    onClick={() => setMobileMenu(true)}
  >
    <Menu size={24} />
  </button>
</header>












      <motion.section
  className="hero"
  variants={reveal}
  initial="hidden"
  animate="visible"
>
        <div className="heroText">
         <p className="badge">Développeur Full-Stack</p>

<h1>
  Développement d'applications web et mobiles modernes,
  rapides et <span>scalables</span>
</h1>

<p>
  Je conçois et développe des produits web et mobiles
  performants, centrés sur l'expérience utilisateur et la qualité technique.
</p>

          <div className="cta">
            <a className="primary" href={cv} download>
              Télécharger mon CV
            </a>
            <a className="secondary" href="#projects">
              Voir mes projets
            </a>
          </div>
        </div>
      </motion.section>





<motion.section
  className="section"
  id="about"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
>
  <h2>À propos</h2>

  <p
    style={{
      maxWidth: "850px",
      margin: "0 auto",
      textAlign: "center",
      lineHeight: 1.8,
    }}
  >
    Je suis <span style={{fontWeight:'bold',fontSize:'20px'}}>CHRISTIAN MUNIE </span>
    Développeur Full-Stack basé à Kinshasa, spécialisé dans la création
    d'applications web et mobiles modernes. J'accorde une attention
    particulière à la performance, à l'expérience utilisateur et à la qualité
    du code afin de concevoir des produits fiables, rapides et évolutifs.
  </p>
</motion.section>






<motion.section
  className="section"
  id="projects"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
        <h2>Mes Projets</h2>

        <div className="grid">
          {projects.map((p, i) => (
           <motion.div
  className="card"
  key={i}
  custom={i}
  variants={cardReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
              <img src={p?.img} alt="" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.url} target="_blank">
                Ouvrir
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
  className="section"
  id="skills"
  style={{msOverflowY:'hidden'}}
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
       <h2>Compétences</h2>

        <div className="skills">
          {[
            ["HTML/CSS", 95],
            ["JavaScript", 92],
            ["React", 96],
            ["Node.js", 80],
            ["MongoDB", 75],
            ["React Native", 78],
          ].map(([name, value], i) => (
            <motion.div 
                initial={{ width: 0 }}
  whileInView={{ width: `${value}%` }}
  viewport={{ once: true }}
  transition={{
    duration: 1.6,
    ease: [0.22, 1, 0.36, 1],
  }}

            className="skill" key={i}>
              <div 
              
              
              className="skillTop">
                <span>{name}</span>
                <span>{value}%</span>
              </div>
              <div className="bar">
                <div style={{ width: `${value}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

<motion.button
style={{overflowY:'hidden'}}
  className="floatingContact"
  onClick={() => setOpen(true)}
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  whileHover={{
    scale: 1.1,
  }}
>
  <MessageCircle height={20} width={20}/>
  
</motion.button>







<AnimatePresence>
  {mobileMenu && (
    <>
      <motion.div
        className="mobileOverlay"
        onClick={() => setMobileMenu(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="mobileDrawer"
        initial={{
          x: "100%",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: "100%",
          opacity: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mobileHeader">
          <span>Navigation</span>

          <button
            onClick={() => setMobileMenu(false)}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobileLinks">
          <a
            href="#about"
            onClick={() => setMobileMenu(false)}
          >
            À propos
          </a>

          <a
            href="#projects"
            onClick={() => setMobileMenu(false)}
          >
            Projets
          </a>

          <a
            href="#skills"
            onClick={() => setMobileMenu(false)}
          >
            Compétences
          </a>

          <button
            onClick={() => {
              setMobileMenu(false);
              setOpen(true);
            }}
          >
            Me contacter
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>


 <motion.footer
  className="footer"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  © {new Date().getFullYear()} Christian Munie — Développeur Full-Stack
</motion.footer>
    </div>
  );
}