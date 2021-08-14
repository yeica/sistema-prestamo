<template>
  <div>
    <my-header></my-header>
    <div class="container has-text-left">
      <h2 class="title mb-6">Información de Préstamos</h2>
      <div class="table-container">
        <table class="table is-striped">
          <tr>
            <th>Tipo</th>
            <th>De Consumo</th>
            <th>Hipotecario</th>
            <th>Educación</th>
          </tr>
          <tbody>
            <tr>
              <th>Descripción</th>
              <td>
                <p>
                  Contamos con préstamos destinados a cubrir tus necesidades de
                  efectivo para adquirir bienes de consumo, muebles,
                  electrodomésticos y realizar alguna actividad o pagar el
                  servicio que desees.
                </p>
              </td>
              <td>
                <p>
                  Con los préstamos hipotecarios Banreservas puedes obtener,
                  construir o remodelar tu vivienda o local comercial con
                  amplios beneficios.
                </p>
              </td>
              <td>
                <p>
                  Esta es la solución ideal si necesitas financiamiento para
                  cursos de idiomas, intercambios educativos y culturales,
                  campamentos, diplomados, maestrías y postgrados, tanto en el
                  país o en el extranjero.
                </p>
              </td>
            </tr>
            <tr>
              <th>Tasa de Interés</th>
              <td>1%</td>
              <td>3.5%</td>
              <td>1%</td>
            </tr>
            <tr>
              <th>Requisitos</th>
              <td>
                <ul>
                  <li>Formulario de solicitud</li>
                  <li>Constancia de ingresos</li>
                  <li>Estados financieros</li>
                  <li>
                    Fotocopia de cédula de identidad y electoral o pasaporte
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Formulario de solicitud</li>
                  <li>Constancia de ingresos</li>
                  <li>Estados financieros</li>
                  <li>
                    Fotocopia de cédula de identidad y electoral o pasaporte
                  </li>
                  <li>
                    Fotocopia de certificado de título y plano catastral del
                    inmueble
                  </li>
                  <li>
                    Dirección exacta del inmueble y croquis de su ubicación
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Formulario de solicitud</li>
                  <li>Constancia de ingresos</li>
                  <li>Estados financieros</li>
                  <li>
                    Fotocopia de Cédula de Identidad y Electoral o pasaporte
                  </li>
                  <li>
                    Cotización emitida por la entidad docente o intermediaria
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
};
</script>

<style scoped>
ul li {
  list-style-type: square;
}

table td {
  padding: 1.5rem;
}
</style>