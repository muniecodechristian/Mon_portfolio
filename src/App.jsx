import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import bilanga from "./assets/bilangaapp.png";

// Composant sphere 3D
function FloatingSphere() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#00ff88" wireframe />
    </mesh>
  );
}

// Hook progress scroll
function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const value = scrollTop / docHeight;
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// Modal de contact
function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Contactez-moi</h2>
            <div className="contact-buttons">
              <a href="https://wa.me/243998032140" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href="tel:+243974827978">Appel</a>
              <a href="mailto:muniecodechristian@gmail.com">Email</a>
            </div>
            <button onClick={onClose} className="close-btn">Fermer</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const scroll = useScrollProgress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { image:'ndak.PNG',title: "l'application NDAKO", desc: "App mobile Expo + Backend Node.js" },
    {image:'weather.png', title: "bilanga APP backend", desc: "expo + backend + Auth" },
    { image:'ndakTik.png',title: "bilanga APP mobile" , desc: "plateforme des agriculteurs" },
  ];

  return (
    <div className="app-container">
      {/* NAVBAR FIXE */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Christian Munie</h3>
        <button
          className="contact-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Contact
        </button>
      </motion.nav>

      {/* MODAL CONTACT */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* BOUTON FLOTTANT CONTACT */}
     {/* BOUTON FLOTTANT RETOUR EN HAUT */}




      {/* BACKGROUND 3D FIXE */}
      <Canvas className="canvas-bg" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <FloatingSphere />
      </Canvas>

      {/* BARRE DE SCROLL */}
      <div className="scroll-progress" style={{ width: `${scroll * 100}%` }} />

      {/* HERO */}
      <section className="section hero">
        <h2>
          salut ,je suis <span style={{color:"white"}}>Christian Munie</span>
        </h2>
        <h1>Développeur Frontend</h1>
        <p>Création d'interfaces modernes, rapides et élégantes.</p>
        <a href={bilanga} download={true}>
          <button style={{backgroundColor: "#00ff88",padding: "10px 20px",borderRadius: "5px",border: "none",cursor: "pointer"}}>
            Télécharger CV
          </button>
        </a>
      </section>

      {/* PROJETS */}
      <section className="section projets">
        <h2>Mes Projets</h2>
        <motion.div 
          initial={{ opacity: 0, y: 200, x:-50 }}
          whileInView={{ opacity: 1, y: 0, x:0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="project-list"
        >
          {projects.map((p, index) => (
            <div key={index} className="project-card">
              <img src={p.image} alt='' />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section className="section skills fade-section">
        <h2>Mes Compétences</h2>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: false }}>
          <span>HTML / CSS</span>
          <div className="progress-bar"><div style={{ width: "95%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false }}>
          <span>JavaScript</span>
          <div className="progress-bar"><div style={{ width: "90%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: false }}>
          <span>React.js</span>
          <div className="progress-bar"><div style={{ width: "98%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once:false }}>
          <span>Node.js</span>
          <div className="progress-bar"><div style={{ width: "75%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: false }}>
          <span>Express</span>
          <div className="progress-bar"><div style={{ width: "75%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: false }}>
          <span>MongoDB (en cours)</span>
          <div className="progress-bar"><div style={{ width: "75%" }} /></div>
        </motion.div>

        <motion.div className="skill" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once:false }}>
          <span>React Native (en cours)</span>
          <div className="progress-bar"><div style={{ width: "80%" }} /></div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="footer">© {new Date().getFullYear()} Portfolio – Design Christian Munie</footer>
    </div>
  );
}
