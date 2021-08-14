<template>
  <div>
      <my-header></my-header>
      <div class="container">
        <h2 class="title has-text-left mb-6">Administrar Préstamos</h2>
        <registro-prestamo></registro-prestamo>
        <my-table></my-table>
      </div>
      <my-footer></my-footer>
  </div>
</template>

<script>

import Header from '../components/header.vue' 
import Footer from '../components/footer.vue'
import TablaPrestamos from '../components/tabla-prestamos.vue'
import RegistroPrestamo from '../components/registrar-prestamo.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

export default {
    components: {
    'my-header': Header,
    'my-footer': Footer,
    'my-table': TablaPrestamos,
    'registro-prestamo': RegistroPrestamo
    }
}
</script>

<style>

</style>