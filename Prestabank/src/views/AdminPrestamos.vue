<template>
  <div>
      <my-header></my-header>
      admin prestamos
      <my-footer></my-footer>
  </div>
</template>

<script>

import Header from '../components/header.vue' 
import Footer from '../components/footer.vue' 

export default {
    components: {
    'my-header': Header,
    'my-footer': Footer
    }
}
</script>

<style>

</style>