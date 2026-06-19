import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
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
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshStandardMaterial color="#111827" wireframe />
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

  const projects = [
    {
      title: "NDAKO",
      desc: "Plateforme de gestion locative moderne",
      url: "https://ndako-lg8h.onrender.com/",
      img:"./ndak.PNG"
    },
    {
      title: "Bilanga Backend",
      desc: "API agriculture + authentification + IA",
      url: "https://github.com/muniecodechristian/BilangaApp_Backend",
        img:"./ndak.PNG"
    },
    {
      title: "Bilanga Mobile",
      desc: "App mobile agriculture connectée",
      url: "https://github.com/muniecodechristian/BilangaApp_Backend",
        img:"./ndak.PNG"
    },
    {
      title: "ftEmploi",
      desc: "Plateforme  d'offre d'emploi",
      url: "https://ft-emploi-front.vercel.app",
        img:"./ndak.PNG"
    },
    {
      title: "Billeterie app",
      desc: "une app web qui est en cours dvelopement poir le championnat national",
      url: "https://billeterie-app.vercel.app",
        img:"./ndak.PNG"
    },
    {
      title: "Bac SARLU",
      desc: "une app web de la sociéte bac sarlu pour la demande de leur services ",
      url: "https://www.bacsarlu.com",
        img:"./ndak.PNG"
    },
  ];

  return (
    <div className="app">
      <ContactModal open={open} onClose={() => setOpen(false)} />

      <Canvas className="bg">
        <ambientLight intensity={0.7}   color="#0b5d2a"/>
        <FloatingSphere   />
      </Canvas>

      <header className="nav">
        <div className="logo"> Christian Munie</div>
        <nav>
          <a href="#projects">Projets</a>
          <a href="#skills">Skills</a>
          <button onClick={() => setOpen(true)}>Me Contacter</button>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="badge">FullStack Developer</p>
          <h1>
            Dévelopement d'application web et mobile modernes, rapides, <span>scalables</span>
          </h1>
          <p>
            Je construis des produits web et mobiles orientés performance et
            expérience utilisateur.
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
      </section>

      <section className="section" id="projects">
        <h2>Mes Projets</h2>

        <div className="grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <img src={p?.img} alt="" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.url} target="_blank">
                Ouvrir
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>

        <div className="skills">
          {[
            ["HTML/CSS", 95],
            ["JavaScript", 92],
            ["React", 96],
            ["Node.js", 80],
            ["MongoDB", 75],
            ["React Native", 78],
          ].map(([name, value], i) => (
            <div className="skill" key={i}>
              <div className="skillTop">
                <span>{name}</span>
                <span>{value}%</span>
              </div>
              <div className="bar">
                <div style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Christian Munie
      </footer>
    </div>
  );
}