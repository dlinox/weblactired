<template>
  <section class="service_one">

    <div class="container">
      <div class="block-title text-center">
        <p>nuestros productos</p>
        <h3>Productos</h3>
        
      </div>
      <div class="row">
        <div v-for="(item, index) in productos" :key="index" class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp">
            <div class="content">
              <h3>

                {{ item.prod_nombre }}
              </h3>

            </div>
            <div class="service_1_img">
              <img :src="item.prod_imagen_url" alt="Service Image">

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceOne",
  props: {
    productos: Array
  }
}
</script>

<style scoped></style>
