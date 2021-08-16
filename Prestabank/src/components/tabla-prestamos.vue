<template>
  <section>
    <div class="columns">
      <div class="column is-12"></div>
    </div>
    <b-table
      :data="prestamos"
      :columns="columns"
      :striped="true"
      class="has-text-left"
    >
    </b-table>
  </section>
</template>

 <script>
import axios from "axios";
import "@mdi/font/css/materialdesignicons.css";

export default {
  created() {
    this.getData();
  },
  data() {
    return {
      prestamos: [],
      columns: [
        {
          field: "Id",
          label: "ID Préstamo",
        },
        {
          field: "ClienteId",
          label: "ID Cliente",
        },
        {
          field: "Monto",
          label: "Monto",
        },
        {
          field: "Cuota",
          label: "Cuota",
        },
        {
          field: "Total",
          label: "Total",
        },
        {
          field: "FechaInicio",
          label: "Fecha Inicio",
        },
        {
          field: "FechaFin",
          label: "Fecha Fin",
        },
      ],
    };
  },
  methods: {
    async getData() {
      await axios
        .get(
          "http://cdim18-001-site1.itempurl.com/api/Prestamo/GetAllPrestamos"
        )
        .then((response) => (this.prestamos = response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>