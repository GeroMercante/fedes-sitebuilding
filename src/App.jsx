// Librerias
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
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
                    href="https://www.linkedin.com/fedesagency"
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
                  whileInView={{ y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                >
                  <img src={FedesLogo} alt="" />
                </motion.div>
                <motion.div
                  className="main-text"
                  initial={{ y: "-350px", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
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
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, transition: 2 }}
            >
              <div className="flecha">
                <img src={Flecha} alt="Flecha Fedes Agency" />
                <h4>
                  ¡Contáctanos <br /> y seguínos!
                </h4>
              </div>
            </motion.div>
            <motion.img
              src={Logo}
              alt="Logo Fedes Agency"
              className="logo-fa"
              initial={{ opacity: 0, x: "400px" }}
              whileInView={{ opacity: 1, x: 0 }}
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

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;

  .logo-fa {
    width: 435px;
    position: absolute;
    bottom: 20%;
    right: 13%;
    z-index: 9999;
  }

  .punters {
    width: 575px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .puntera {
    width: 1200px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .absolute-container {
    position: absolute;
    bottom: 10%;
    left: 254px;
    height: 200px;
    width: 500px;
    z-index: 10;
    img {
      width: 120px;
      height: 13px;
      pointer-events: none;
    }
    h4 {
      font-family: "SohneLeicht";
      color: #8058a4;
      font-size: 33px;
      position: absolute;
      transform: rotateZ(-10deg);
      margin-left: 4.5rem;
      text-align: center;
      letter-spacing: 1px;
      top: 15px;
    }
  }
`;

const LineContainer = styled(motion.div)`
  height: 100vh;
  width: 250px;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Line = styled.div`
  height: 100vh;
  background: #000000;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .text-line {
    color: #fff;
    text-transform: uppercase;
    transform: rotateZ(270deg);
    width: 380px;
    margin: 170px 0;
    font-weight: 100;
    letter-spacing: 1px;
    span {
      font-family: "SohneBold";
    }
  }
  .line-space {
    width: 45px;
    height: 3px;
    background: #fff;
    border-radius: 8px;
    margin: 40px 0;
  }

  .logo-line {
    width: 45px;
    margin-top: 40px;
  }

  .social-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px 0;
    img {
      width: 40px;
    }
  }
`;

const FedesMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  .container-main {
    width: 80%;
    display: flex;
    align-items: center;
    z-index: 999;
    justify-content: flex-end;

    .main-creando {
      overflow-y: hidden;
      position: relative;
      right: -75px;
      z-index: -1;
      img {
        height: 100%;
        width: 450px;
      }
    }

    .main-logo {
      overflow-y: hidden;
      img {
        height: 90%;
        width: 450px;
      }
    }
    .main-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 300px;
      margin-right: 40px;
      h1 {
        color: #000;
        font-family: "SohneBold";
        font-size: 60px;
        letter-spacing: 1px;
        span {
          font-family: "SohneBold";
          color: #7827cc;
          font-size: 66px;
        }
      }
      p {
        margin: 10px 0;
        text-align: right;
        font-size: 54px;
        font-weight: 100;
        width: 100%;
        line-height: 55px;
        height: 170px;
      }
    }
  }
`;

export default App;
