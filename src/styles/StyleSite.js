import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    height: 1000px;
  }
`;

export const Background = styled.div`
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
  @media screen and (max-width: 1400px) {
    .absolute-container {
      bottom: 0;
      left: 204px;
      height: 200px;
      width: 500px;
      z-index: 10;
      img {
        width: 100px;
        height: 10px;
      }
      h4 {
        font-size: 27px;
        position: absolute;
      }
    }

    .logo-fa {
      width: 305px;
      position: absolute;
      bottom: 15%;
      right: 8%;
      z-index: 9999;
    }

    .punters {
      width: 455px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .puntera {
      width: 750px;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }


  @media screen and (max-width: 700px) {
    .absolute-container {
      bottom: 0;
      left: 70px;
      height: 250px;
      width: 500px;
      z-index: 10;
      img {
        width: 70px;
        height: 10px;
      }
      h4 {
        font-size: 27px;
        position: absolute;
      }
    }

    .logo-fa {
      width: 200px;
      position: absolute;
      bottom: 5%;
      right: 15%;
      z-index: 9999;
    }

    .punters {
      width: 0px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .puntera {
      width: 750px;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
`;

export const LineContainer = styled(motion.div)`
  height: 100vh;
  width: 250px;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 200px;
  }

  @media screen and (max-width: 700px) {
    height: 100%;
    width: 85px;
    justify-content: flex-start;
  }
`;

export const Line = styled.div`
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

  /* MEDIA QUERIES */
  @media screen and (max-width: 700px) {
    width: 75px;
    height: 100%;

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
      width: 35px;
      margin-top: 40px;
    }

    .social-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px 0;
      img {
        width: 25px;
      }
    }
  }
`;

export const FedesMain = styled.div`
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

  /* MEDIA QUERIES 1400 */
  @media screen and (max-width: 1400px) {
    justify-content: center;
    .main-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 300px;
      margin-right: 50px;
      h1 {
        font-size: 40px;
        span {
          font-size: 46px;
        }
      }
      p {
        font-size: 40px;
      }
    }
    .container-main {
      width: 100%;
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
          height: 100vh;
          width: auto;
        }
      }
      .main-logo {
        overflow-y: hidden;
        img {
          height: 90%;
          width: 350px;
        }
      }
    }
  }

  /* MEDIA QUERIES 700 */
  @media screen and (max-width: 700px) {
    height: 90%;
    .container-main {
      width: 80%;
      display: flex;
      z-index: 999;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px 0;

      .main-creando {
        overflow-y: hidden;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        img {
          height: 350px;
          width: 160px;
        }
      }
      .main-logo {
        overflow-y: hidden;
        img {
          height: 270px;
          width: 175px;
        }
      }
      .main-text {
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 3.5rem;
        h1 {
          font-size: 30px;
          text-align: center;
          letter-spacing: 1px;
          span {
            font-family: "SohneBold";
            color: #7827cc;
            font-size: 33px;
          }
        }
        p {
          margin: 10px 0;
          text-align: left;
          font-size: 24px;
          font-weight: 300;
          line-height: 35px;
          height: 170px;
        }
      }
    }
  }
`;
