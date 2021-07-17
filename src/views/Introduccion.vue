<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    
    
    p.mb-4 Apreciado aprendiz bienvenido a este momento de aprendizaje orientado desde los productos de moda. Un sector importante en nuestro país y con muchas oportunidades para su desarrollo personal y profesional. Con la intención de orientarlo en su desarrollo cognitivo, procedimental y actitudinal lo invitamos a explorar el siguiente recurso educativo para que tenga información previa sobre su aprendizaje. Adelante.

    figure.mb-4
      img(src="@/assets/curso/img-intro.svg", alt="De donde surge este momento de aprendizaje")
    
    .tarjeta.color-acento-botones.p-3.mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Infografía
              p.mb-0 ¿De dónde surge este momento de aprendizaje?
            .col-sm-auto
              a.boton.color-acento-contenido(:href="obtenerLink('/downloads/momento-aprendizaje.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-0 Luego de la observación del recurso de aprendizaje es momento de atreverse a seguir aprendiendo en un contexto donde la curiosidad y la socialización con los otros es un elemento esencial para fortalecer su proyecto de aprendizaje. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
