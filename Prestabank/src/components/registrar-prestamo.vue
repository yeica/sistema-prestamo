<template>
  <section>
    <div class="columns">
      <div class="column is-4">
        <b-dropdown v-model="selectedCliente" aria-role="list" expanded>
          <template #trigger="{ active }">
            <b-button
              expanded
              label="Seleccionar Cliente"
              type="is-primary is-light"
              :icon-right="active ? 'menu-up' : 'menu-down'"
            />
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="cliente in clientes"
            :key="cliente.Id"
            :value="cliente"
            >{{ cliente.Nombre + " " + cliente.Apellido }}</b-dropdown-item
          >
        </b-dropdown>

        <b-field label="Fecha Inicio" class="mt-5">
          <b-datepicker
            v-model="fechaInicio"
            :show-week-number="showWeekNumber"
            :locale="locale"
            placeholder="Click para seleccionar..."
            icon="calendar-today"
            trap-focus
          >
          </b-datepicker>
        </b-field>

        <b-field label="Monto" class="mt-3">
          <b-input v-model="monto" type="number" required></b-input>
        </b-field>

        <b-field label="Cuota" class="mt-3">
          <b-input v-model="cuota" type="number" disabled></b-input>
        </b-field>
      </div>
      <div class="column is-4">
        <b-dropdown v-model="selectedTipoPrestamo" aria-role="list" expanded>
          <template #trigger="{ active }">
            <b-button
              expanded
              label="Seleccionar Tipo de Préstamo"
              type="is-primary is-light"
              :icon-right="active ? 'menu-up' : 'menu-down'"
            />
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="tipoPrestamo in tipoPrestamos"
            :key="tipoPrestamo.Id"
            :value="tipoPrestamo"
            >{{
              tipoPrestamo.Descripcion + ": " + tipoPrestamo.TasaInteres + "%"
            }}</b-dropdown-item
          >
        </b-dropdown>

        <b-field label="Fecha Fin" class="mt-5">
          <b-datepicker
            v-model="fechaFin"
            :show-week-number="showWeekNumber"
            :locale="locale"
            placeholder="Click para seleccionar..."
            icon="calendar-today"
            trap-focus
          >
          </b-datepicker>
        </b-field>

        <b-field label="Admin ID" class="mt-3">
          <b-input v-model="adminId" type="number"></b-input>
        </b-field>

        <b-field label="Total a pagar" class="mt-3">
          <b-input v-model="total" type="number" disabled></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-variable is-1">
      <div class="column is-8">
        <div class="buttons is-right mt-5">
          <b-button
            v-on:click="calcularCuota"
            type="is-light"
            icon-left="calculator-variant"
            size="is-medium"
            >Calcular cuota</b-button
          >

          <b-button
            v-on:click="agregarPrestamo"
            type="is-primary"
            icon-left="plus-thick"
            size="is-medium"
            >Agregar préstamo</b-button
          >
        </div>
      </div>
    </div>
    <div class="column is-8">
      <p class="error">{{ error }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("http://cdim18-001-site1.itempurl.com/api/Cliente")
      .then((response) => (this.clientes = response.data))
      .catch((error) => console.log(error));

    axios
      .get("http://cdim18-001-site1.itempurl.com/api/TipoPrestamo")
      .then((response) => (this.tipoPrestamos = response.data))
      .catch((error) => console.log(error));
  },

  data() {
    return {
      clientes: null,
      tipoPrestamos: null,
      selectedCliente: null,
      selectedTipoPrestamo: null,
      adminId: 0,
      monto: 0,
      cuota: 0,
      total: 0,
      fechaInicio: null,
      fechaFin: null,
      showWeekNumber: false,
      locale: undefined,
      error: "",
    };
  },

  methods: {
    async agregarPrestamo() {
      if (this.validarInputs() && this.calcularCuota()) {
        let formatFechaInicio = this.fechaInicio.toISOString();
        let formatFechaFin = this.fechaFin.toISOString();

        let prestamo = {
          clienteId: this.selectedCliente.Id,
          usuarioId: parseInt(this.adminId),
          tipoPrestamoId: this.selectedTipoPrestamo.Id,
          monto: parseInt(this.monto),
          cuota: parseInt(this.cuota),
          total: parseInt(this.total),
          fechaInicio: formatFechaInicio,
          fechaFin: formatFechaFin,
        };

        try {
          let response = await axios.post(
            "http://cdim18-001-site1.itempurl.com/api/Prestamo/addPrestamo",
            prestamo
          );
          alert("Préstamo agregado.");
        } catch (error) {
          console.log(error);
        }
      }
    },

    calcularCuota() {
      if (this.validarInputs()) {
        this.error = "";

        let interes = this.selectedTipoPrestamo.TasaInteres / 100;
        let periodoMeses = this.getDiferenciaMeses();

        this.cuota = (
          ((Math.pow(1 + interes, periodoMeses) * interes) /
            (Math.pow(1 + interes, periodoMeses) - 1)) *
          this.monto
        ).toFixed(2);
        this.total = (this.cuota * periodoMeses).toFixed(2);

        return true;
      }
    },

    validarInputs() {
      if (this.fechaInicio == null || this.fechaFin == null) {
        this.error = "Seleccione la fecha de inicio y la fecha fin.";
      } else if (this.getDiferenciaMeses() < 12) {
        this.error = "La diferencia en tiempo debe ser mayor o igual a un año.";
        return false;
      } else if (this.adminId <= 0) {
        this.error = "Proporcione un ID de admin correcto.";
        return false;
      } else if (this.monto < 1000) {
        this.error = "El monto debe ser mayor o igual a 1,000.";
        return false;
      } else if (this.selectedTipoPrestamo == null) {
        this.error = "Debe seleccionar un tipo de préstamo.";
        return false;
      } else if (this.selectedCliente == null) {
        this.error = "Debe seleccionar un cliente para el préstamo.";
        return false;
      } else {
        this.error = "";
        return true;
      }
    },

    getDiferenciaMeses() {
      return (
        (this.fechaFin.getFullYear() - this.fechaInicio.getFullYear()) * 12 +
        (this.fechaFin.getMonth() - this.fechaInicio.getMonth())
      );
    },
  },
};
</script>

<style scoped>
section {
  text-align: left;
}

.error {
  color: red;
  font-weight: bold;
}
</style>