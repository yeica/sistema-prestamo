<template>
  <div>
      <footer>
          <div class="contenedor-footer">
              <div class="content-foo">
                  <h4>Phone</h4>
                  <p>809-225-5698</p>
              </div>
              <div class="content-foo">
                  <h4>Email</h4>
                  <p>contacto@prestabank.com</p>
              </div>
              <div class="content-foo">
                  <h4>Location</h4>
                  <p>Santo Domingo</p>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
footer {
  background: #414141;
  padding: 60px 0 30px 0;
  margin: 100px auto auto auto;
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
</style>