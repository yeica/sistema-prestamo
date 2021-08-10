<template>
  <div>
    <header class="header">
      <nav>
        <a href="/">Inicio</a>
        <a href="/#servicios">Servicios</a>
        <a href="/#about">Acerca de</a>
        <a v-if="isLoggedIn" href="/adminclientes">Admin Clientes</a>
        <a v-if="isLoggedIn" href="/adminprestamos">Admin Préstamos</a>
        <a v-if="isLoggedIn" href="/signup">Registrar Admin</a>
        <a v-if="isLoggedIn" @click="signOut">Cerrar sesión</a>
      </nav>
      <section class="textos-header"></section>
      <div class="wave" style="height: 150px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #fff"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</template>

<script lang="js">

import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        console.log(user);
      } else {
        this.isLoggedIn = false;
        console.log(user);
      }
    });
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const val = await firebase.auth().signOut();
        this.isLoggedIn = false;
        this.$router.replace({name: "Home"})
        console.log(val);

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>