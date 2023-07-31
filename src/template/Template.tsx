import { memo } from "react";
import logo from "@/assets/img/logo.svg";
import user from "@/assets/img/user.svg";
import footer from "@/assets/img/footer.png";
import icons from "@/assets/img/footer-icons.png";

interface ITemplate {
  children: JSX.Element;
}

const Template = memo(({ children }: ITemplate) => {
  return (
    <main className="main">
      <header>
        {" "}
        <img src={logo} alt="logo" />
        <img
          src={user}
          className="userLogo"
          alt="user"
          title={
            sessionStorage.getItem("token") ? "Cerrar Sesión" : "Iniciar Sesión"
          }
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.assign("/");
          }}
        />
      </header>
      <div className="container">
        <>{children}</>
      </div>

      <footer>
        <div className="information">
          <h1>We are coding the world of tomorrow_</h1>

          <span>
            DaCodes es una de las mejores empresas de desarrollo de software en
            México y LATAM. Lo que nos separa de los demás es el nivel de
            involucramiento que tenemos en nuestros proyectos y la pasión que
            tenemos por desarrollar productos digitales de calidad mundial.
            Somos un equipo de 220+ dacoders especializados en la planeación,
            diseño, desarrollo, implementación e innovación continua de
            productos digitales disruptivos.
          </span>

          <img src={icons} className="icons" alt="icons" />
        </div>

        <img src={footer} className="bgFooter" alt="background" />
      </footer>
    </main>
  );
});

export default Template;
