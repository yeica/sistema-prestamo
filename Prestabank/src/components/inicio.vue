<template>
  <section>
    <section>
      <header class="header">
        <nav>
          <a href="/signup">Sign Up</a>
          <a href="/login">Login</a>
        </nav>
        <section class="textos-header"></section>
        <div class="wave" style="height: 150px; overflow: hidden;">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style="height: 100%; width: 100%;"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style="stroke: none; fill: #fff;"
            ></path>
          </svg>
        </div>
      </header>
      <main>
        <section class="contenedor sobre-nosotros">
          <h2 class="titulo">Acerca de nosotros</h2>
          <div class="contenedor-sobre-nosotros">
            <img
              src="../assets/img/ilustracion2.svg"
              alt=""
              class="imagen-about-us"
            />
            <div class="contenido-textos">
              <h3 style="font-weight: bold;"><span>x</span>Visión</h3>
              <p>
                Ser un banco prestamista, comunitario independiente,
                financieramente viable, comprometido con mejorar la calidad de
                vida de las comunidades a las que servimos, ganando la lealtad
                de los empleados, los clientes y la comunidad operando con
                integridad y equidad en todo momento.
              </p>
              <h3 style="font-weight: bold;"><span>x</span>Misión</h3>
              <p>
                Auxiliar a las personas en sus necesidades económicas y momentos
                de dificultad, brindándoles la posibilidad de construir un mejor
                futuro o iniciar el proyecto de sus vidas, en PrestaBank nuestra
                felicidad nace del éxito de nuestros clientes.
              </p>
              <h3 style="font-weight: bold;"><span>x</span>Valores</h3>
              <p>
                <b>Compromiso:</b> Nuestra pasión es poderosa. Impulsados por un
                propósito y una visión compartidos, trabajamos con ardor.
              </p>
              <p>
                <b>Responsabilidad:</b> Actuamos de manera responsable con
                nuestros colegas, consumidores, marcas, nuestra sociedad.
              </p>
              <p>
                <b>Empatía:</b> Nuestra definición de empatía es la capacidad de
                escuchar y considerar los pensamientos y sentimientos de los
                demás.
              </p>
              <p>
                <b>Servicio:</b> Estamos comprometidos con la interpretación y
                aplicación precisas y sensibles al contexto de los acuerdos.
              </p>
            </div>
          </div>
          <br />
        </section>
        <section class="about-services">
          <div class="contenedor">
            <h2 class="titulo">Nuestros servicios</h2>
            <div class="servicio-cont">
              <div class="servicio-ind">
                <img
                  src="https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2020/03/10/USATODAY/usatsports/getty-mortgage-house-calculator.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"
                  alt=""
                />
                <h3 class="link-servicio">Hipotecario</h3>
                <p>
                  Con nuestros préstamos hipotecarios, convierte en hogar tu
                  casa ideal. Siéntete libre de obtener, construir, remodelar tu
                  hogar, o cualquiera que sea tu sueño en tu hogar, hazlo
                  realidad con nuestro préstamo.
                </p>
              </div>
              <div class="servicio-ind">
                <img
                  src="https://ggsc.s3.amazonaws.com/images/uploads/Our_Best_Education_Articles_of_2020.jpg"
                  alt=""
                />
                <h3 class="link-servicio">Educación</h3>
                <p>
                  Esta es la solución ideal si necesitas financiamiento para
                  cursos de idiomas, intercambios educativos y culturales,
                  campamentos, diplomados, maestrías y postgrados, tanto en el
                  país o en el extranjero.
                </p>
                <br />
                <b-button rounded>Solicitar prestamo</b-button>
              </div>
              <div class="servicio-ind">
                <img
                  src="https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2017/04/1140-cashless.jpg"
                  alt=""
                />
                <h3 class="link-servicio">Consumo</h3>
                <p>
                  Contamos con préstamos destinados a cubrir tus necesidades de
                  efectivo para adquirir bienes de consumo, muebles,
                  electrodomésticos y realizar alguna actividad o pagar el
                  servicio que desees
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section class="clientes contenedor">
          <h2 class="titulo">Tecnologias</h2>
          <div class="cards">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKXtSb3SivBJ6CPkmQVGa2mh12-4hD1eFM2ky00jXaPS-ep3LEFRUFAkwAh81t-PNIgc&usqp=CAU"
                alt=""
              />
              <div class="contenido-texto-card">
                <h4>Vue</h4>
                <p>
                  Utilizamos vue como framework para visualizar nuestra pagina
                  donde visualizan nuestras diferentes paginas.
                </p>
              </div>
            </div>
            <div class="card">
              <img src="https://aspnetcoremaster.com/img/csharp.webp" alt="" />
              <div class="contenido-texto-card">
                <h4>C#</h4>
                <p>
                  Utilizamos C# para la creacion de nuestra API la que se
                  encarga de dar funcionalidad a nuestro plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
      <footer>
        <div class="contenedor-footer">
          <div class="content-foo">
            <h4>Phone</h4>
            <p>8296312</p>
          </div>
          <div class="content-foo">
            <h4>Email</h4>
            <p>8296312</p>
          </div>
          <div class="content-foo">
            <h4>Location</h4>
            <p>8296312</p>
          </div>
        </div>
      </footer>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "./menu.vue";

@Component({
  name: "AnotherComponent",
  components: {
    Menu,
  },
})
export default class Inicio extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contenedor {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
}
.link-servicio {
  color: #7ed09e;
  font-weight: bold;
}
.titulo {
  color: #285680;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
}

/* Header */

header {
  width: 100%;
  height: 600px;
  background: #bc4e9c;
  /* fallback for old browsers */
  background: url(../assets/img/fondo-logo-difuminacion.png);
  /* Chrome 10-25, Safari 5.1-6 */
  background: url(../assets/img/fondo-logo-difuminacion.png);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

nav {
  text-align: right;
  padding: 30px 50px 0 0;
}

nav > a {
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  margin-right: 10px;
}

nav > a:hover {
  text-decoration: underline;
}

header .textos-header {
  display: flex;
  height: 430px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.textos-header h1 {
  font-size: 50px;
  color: #fff;
}

.textos-header h2 {
  font-size: 30px;
  font-weight: 300;
  color: #fff;
}

.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
}

/* About us */

main .sobre-nosotros {
  padding: 30px 0 60px 0;
}
.contenedor-sobre-nosotros {
  display: flex;
  justify-content: space-evenly;
}

.imagen-about-us {
  width: 48%;
}

.sobre-nosotros .contenido-textos {
  width: 48%;
}

.contenido-textos h3 {
  margin-bottom: 15px;
}

.contenido-textos h3 span {
  background: #24ae5f;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  width: 30px;
  height: 30px;
  padding: 2px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  margin-right: 5px;
}

.contenido-textos p {
  padding: 0px 0px 30px 15px;
  font-weight: 300;
  text-align: justify;
}

/* Galeria */

.portafolio {
  background: #f2f2f2;
}

.galeria-port {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.imagen-port {
  width: 24%;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
}

.imagen-port > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hover-galeria {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(0);
  background: hsla(273, 91%, 27%, 0.7);
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hover-galeria img {
  width: 50px;
}

.hover-galeria p {
  color: #fff;
}

.imagen-port:hover .hover-galeria {
  transform: scale(1);
}

/* Clients */

.cards {
  display: flex;
  justify-content: space-evenly;
}

.cards .card {
  background: #4482c3;
  display: flex;
  width: 46%;
  height: 200px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
}

.cards .card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 3px solid #fff;
  border-radius: 50%;
  display: block;
}

.cards .card > .contenido-texto-card {
  width: 60%;
  color: #fff;
}

.cards .card > .contenido-texto-card p {
  font-weight: 300;
  padding-top: 5px;
}

/*  Our team */

.about-services {
  background: #f2f2f2;
  padding-bottom: 30px;
}

.servicio-cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.servicio-ind {
  width: 28%;
  text-align: center;
}

.servicio-ind img {
  width: 90%;
}

.servicio-ind h3 {
  margin: 10px 0;
}

.servicio-ind p {
  font-weight: 300;
  text-align: justify;
}

/* footer */

footer {
  background: #414141;
  padding: 60px 0 30px 0;
  margin: auto;
  overflow: hidden;
}

.contenedor-footer {
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  margin: auto;
  padding-bottom: 50px;
  border-bottom: 1px solid #ccc;
}

.content-foo {
  text-align: center;
}

.content-foo h4 {
  color: #fff;
  border-bottom: 3px solid #af20d3;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.content-foo p {
  color: #ccc;
}

.titulo-final {
  text-align: center;
  font-size: 24px;
  margin: 20px 0 0 0;
  color: #9e9797;
}

@media screen and (max-width: 900px) {
  header {
    background-position: center;
  }

  .contenedor-sobre-nosotros {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sobre-nosotros .contenido-textos {
    width: 90%;
  }

  .imagen-about-us {
    width: 90%;
  }

  /* Galeria */

  .imagen-port {
    width: 44%;
  }

  /* Clientes */

  .cards {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cards .card {
    width: 90%;
  }

  .cards .card:first-child {
    margin-bottom: 30px;
  }

  /* servicios */

  .servicio-cont {
    justify-content: center;
    flex-direction: column;
  }

  .servicio-ind {
    width: 100%;
    text-align: center;
  }

  .servicio-ind:nth-child(1),
  .servicio-ind:nth-child(2) {
    margin-bottom: 60px;
  }

  .servicio-ind img {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  nav {
    text-align: center;
    padding: 30px 0 0 0;
  }

  nav > a {
    margin-right: 5px;
  }

  .textos-header h1 {
    font-size: 35px;
  }

  .textos-header h2 {
    font-size: 20px;
  }

  /* ABOUT US */

  .imagen-about-us {
    margin-bottom: 60px;
    width: 99%;
  }

  .sobre-nosotros .contenido-textos {
    width: 95%;
  }

  /* Galeria */

  .imagen-port {
    width: 95%;
  }

  /* Clients */

  .cards .card {
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards .card img {
    width: 90px;
    height: 90px;
  }

  /* Footer */

  .contenedor-footer {
    flex-direction: column;
    border: none;
  }

  .content-foo {
    margin-bottom: 20px;
    text-align: center;
  }

  .content-foo h4 {
    border: none;
  }

  .content-foo p {
    color: #ccc;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 20px;
  }

  .titulo-final {
    font-size: 20px;
  }
}
</style>
