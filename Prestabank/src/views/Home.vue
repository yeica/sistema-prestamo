<template>
  <div class="home">
    <Inicio/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Inicio from '../components/inicio.vue'; // @ is an alias to /src

@Component({
  components: {
    Inicio,
  },
})
export default class Home extends Vue {}
</script>
