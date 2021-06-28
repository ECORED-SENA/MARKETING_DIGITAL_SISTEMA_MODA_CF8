<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 
        em Mix  
        | de Productos de Moda
      
    .row.mb-4.justify-content-center
      .col-lg-7
        p
          | Los 
          em Mix 
          | (mezcla-cartera) de productos son liderados por muchas marcas dedicadas al sector de la moda a través de la lectura dada al comportamiento de consumo, y muchas de estas toman la tendencia de brindar una gama completa de productos que permitan al consumidor identificarse aún más con el estilo y valor de una marca. Estas marcas suelen brindar una oferta variada y diversificada para explotar el potencial de su valor y objetivo de marca, comprendidas ya sea en prendas de vestir, accesorios, complementos, calzado y marroquinería, hasta productos para el hogar que brindan un sin número de posibilidades agrupados por elementos o cartera de productos (total look), alineados al estilo de vida de un consumidor en particular, agrupados por nichos. 

        p A partir de esos elementos o productos las marcas o empresas logran asegurar cuotas de mercado en otros sectores, en los que no necesariamente sea el vestuario, se ha abordado, ya que las tendencias por sí solas no solo están dedicadas al vestuario, si no que nacen de lo que socialmente una comunidad demanda o simboliza en su cultura, las empresas de moda al dar una lectura mucho más concienzuda de las tendencias han conseguido entender que tener una cartera de productos asegura una experiencia completa de compra al consumidor y por ende lograr la fidelización.
      .col-8.col-lg-5
        figure
          img(src="@/assets/curso/tema3/img01.jpg", alt="Mix (mezcla-cartera)")
    
    .cajon.color-secundario.bg03.p-4.mb-5
      p.mb-0
       | A partir de lo anterior y para lograr entender un poco lo que significa una cartera de productos o línea de productos bajo una sola marca, se destacan tres elementos que logran definir esta estrategia de marketing enfocada en productos o colección. Le sugerimos observar el siguiente recurso educativo para que usted tenga la capacidad para definir una estrategia de 
       em marketing. 
       | Adelante.
    
    .row.g-3.justify-content-center.mb-5
      .col-lg-4.d-flex
        .bg01.p-4.rounded19.shadow-sm
          figure.mb-3
            img(src="@/assets/curso/tema3/img02.png", alt="Amplitud")
          h4.text-center.mb-3 Amplitud
          p Hace referencia a las distintas líneas que comprenden una cartera o mix de producto.
      .col-lg-4.d-flex
        .tarjeta--gris.p-4.rounded19.shadow-sm
          figure.mb-3
            img(src="@/assets/curso/tema3/img03.png", alt="Profundidad")
          h4.text-center.mb-3 Profundidad
          p Referente al número de modelos ofrecidos dentro de cada línea en una marca, por ejemplo, calzado, pero en diferentes diseños acordes a una ocasión de uso específica.
      .col-lg-4.d-flex
        .bg01.p-4.rounded19.shadow-sm
          figure.mb-3
            img(src="@/assets/curso/tema3/img05.png", alt="Longitud")
          h4.text-center.mb-3 Longitud
          p Correspondiente a la suma de las líneas y diseños que comprenden cada una de ellas.
    
    .row.mb-4.justify-content-center
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/tema3/img04.png", alt="Mixmix (mezcla) de producto")
      .col-8.col-lg-7
        p.mb-4
          | El 
          em Mix 
          | (mezcla) de productos en una marca se compone de todos los productos que esta oferta y que a su vez están agrupados dentro de las diferentes líneas. Las líneas que contienen estos productos suelen responder a una homogeneidad dada la familiaridad y función que cumple cada uno de ellos, también pueden llamarse familia de productos, definidas y agrupadas de acuerdo a:
        
        .row.justify-content-center
          .col-lg-11
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Línea: masculino o femenino, pueden ser ambas, esto depende de la marca.
              li 
                i.fas.fa-check
                | Edad.
              li 
                i.fas.fa-check
                | Nivel socioeconómico.
              li 
                i.fas.fa-check
                | Ubicación geográfica.
              li 
                i.fas.fa-check
                | Ocasión de uso.
              li 
                i.fas.fa-check
                | Universo de vestuario.

    

        
          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
