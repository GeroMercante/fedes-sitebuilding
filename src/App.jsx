// Librerias
import GlobalStyles from "./styles/GlobalStyles";
import { motion } from "framer-motion";

// Imágenes
import PunteraSuperior from "./assets/punterasuperior.png";
import PunteraInferior from "./assets/punteraabajo.png";
import LogoLine from "./assets/2line.png";
import Flecha from "./assets/flecha.png";

// Redes
import Instagram from "./assets/instagram.png";
import Linkedin from "./assets/linkedin.png";

// Imagenes Main
import Creando from "./assets/creando.png";
import FedesLogo from "./assets/2.png";

// Logo
import Logo from "./assets/logo.png";
import { Background, Container, FedesMain, Line, LineContainer } from "./styles/StyleSite";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Container>
          <Background>
            <LineContainer
              initial={{ y: "1080px" }}
              animate={{ y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Line>
                <motion.h1
                  className="text-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                >
                  Marketing y <span>Comunicación</span>
                </motion.h1>
                <motion.img
                  src={LogoLine}
                  alt="Fedes Logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                  className="logo-line"
                />
                <motion.div
                  className="line-space"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                ></motion.div>
                <motion.div
                  className="social-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 3.5 }}
                >
                  <a
                    href="https://www.instagram.com/fedesagency"
                    target="_blank"
                    rel="noreferrer"
                    className="social-contain"
                  >
                    <img src={Instagram} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/fedesagency/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-contain"
                  >
                    <img src={Linkedin} alt="" />
                  </a>
                </motion.div>
              </Line>
            </LineContainer>
            <FedesMain>
              <div className="container-main">
                <motion.div
                  className="main-creando"
                  initial={{ y: "1005px" }}
                  animate={{ y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  <img src={Creando} alt="" />
                </motion.div>
                <motion.div
                  className="main-logo"
                  initial={{ y: "800px" }}
                  animate={{ y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                >
                  <img src={FedesLogo} alt="" />
                </motion.div>
                <motion.div
                  className="main-text"
                  initial={{ y: "-350px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2 }}
                >
                  <h1>
                    Nos seguimos <br />
                    <span>potenciando</span>
                  </h1>
                  <p>
                    ¡Estamos <br />
                    actualizando <br />
                    nuestra web!
                  </p>
                </motion.div>
              </div>
            </FedesMain>
            <motion.div
              className="absolute-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, transition: 2 }}
            >
              <div className="flecha">
                <img src={Flecha} alt="Flecha Fedes Agency" />
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5, transition: 2 }}
                >
                  ¡Contáctanos <br /> y seguínos!
                </motion.h4>
              </div>
            </motion.div>
            <motion.img
              src={Logo}
              alt="Logo Fedes Agency"
              className="logo-fa"
              initial={{ opacity: 0, x: "400px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
            <img
              src={PunteraSuperior}
              alt="Fedes Agency Puntero Superior"
              className="punters"
            />
            <img
              src={PunteraInferior}
              alt="Fedes Agency Puntero Inferior"
              className="puntera"
            />
          </Background>
        </Container>
      </main>
    </>
  );
}



export default App;
