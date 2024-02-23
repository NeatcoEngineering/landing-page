import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/Logo.png';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'
// import { loadFull } from 'tsparticles';

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#1ed42d",
      },
      links: {
        color: "#1ed42d",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 4,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden'}}>
      {init && <Particles style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      <div style={{position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="min-h-screen opacity-90 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Logo and Company Description */}
          <div className="mb-4 text-center">
            <img src={logo} alt="Neatco Engineering Services Inc Logo" className="mx-auto h-20 w-20" />
            <h1 className="text-xl font-semibold text-gray-800 mt-2">Neatco Engineering Services Inc.</h1>
            <p className="text-gray-600 mt-2">Pioneering the future of the Circular Economy with AI and Vision technologies, AI-driven robotics, and cutting-edge IIoT Web Applications.</p>
            <p className="text-gray-600 mt-2">Crafting solutions that redefine advanced manufacturing, automation and robotics industries.</p>
          </div>

          {/* Links */}
          <div className="flex justify-around mt-6 text-center">
            <a href="https://www.neatcoeng.com" className="text-gray-600 hover:text-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faGlobe} size="2x" />
              <span className="block text-sm mt-2">Website</span>
            </a>
            <a href="https://www.linkedin.com/company/42872230/" className="text-blue-600 hover:text-blue-800 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <span className="block text-sm mt-2">LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/channel/UCeVTUXQMhMoxSp2MsiKuJsg" className="text-red-600 hover:text-red-800 transition duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <span className="block text-sm mt-2">YouTube</span>
            </a>
            <a href="https://twitter.com/neatcoeng?lang=en" className="text-black hover:text-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
              <span className="block text-sm mt-2">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
