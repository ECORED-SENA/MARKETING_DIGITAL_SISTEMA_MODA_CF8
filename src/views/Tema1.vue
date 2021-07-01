<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Atributos y Características de Productos de Moda

    .row.mb-4.justify-content-center
      .col-lg-8
        p El producto en la moda hace parte directamente de los elementos de la marca, a pesar de ser un artículo tangible hoy en día se transforma en un híbrido donde representa de forma intangible los valores, la filosofía y todas las asociaciones significativas que representa la marca para el consumidor. Es un diálogo íntimo de preferencia entre la persona y el producto.
        p Sumado a lo anterior, las políticas del marketing se relacionan estrechamente con los productos de moda, desde su propia estética hasta lo que representa en el sistema de compra. La definición de un producto de moda es la relación entre materia, forma y una serie de atributos estéticos que encajan con el estilo de vida, gustos y necesidades del que lo consume.
        p Los productos de moda se dividen en tres (3) grupos según los atributos de contenga, estos son: interiores, exteriores y simbólicos. A continuación, se realiza una explicación de cada uno:
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/img01.jpg", alt="Atributos y Características")
    
    .row.g-3.justify-content-center.mb-5
      .col-lg-3.d-flex
        .bg01.p-4.rounded
          figure.mb-4
            img.imgW250.mx-auto(src="@/assets/curso/tema1/img02.png", alt="Interiores")
          h4.text-center.mb-4 Interiores
          p.mb-0 Los atributos por interiores hacen referencia a la composición de los tejidos en que están elaborados (tela, plástico, cuero, no tejido, etc.), también se relacionan con el diseño, la calidad y un aspecto de tamaño que en moda se denomina tallaje.
          
      .col-lg-3.d-flex
        .tarjeta--gris.p-4.rounded
          figure.mb-4
            img.imgW250.mx-auto(src="@/assets/curso/tema1/img03.png", alt="Exteriores")
          h4.text-center.mb-4 Exteriores
          p.mb-0 Los atributos por exteriores se refieren a todos los elementos que acompañan al producto como son las etiquetas, empaque, embalaje, etc.
          
      .col-lg-3.d-flex
        .bg01.p-4.rounded
          figure.mb-4
            img.imgW250.mx-auto(src="@/assets/curso/tema1/img04.png", alt="Simbólicos")
          h4.text-center.mb-4 Simbólicos
          p.mb-0 Los atributos simbólicos hacen referencia a todo lo que representa la marca, su estatus y hasta el servicio. Tienen una relación estrecha al contexto social, situación geográfica, nivel cultural y aspectos psicológicos del consumidor. Los atributos más valorados son: la marca, lo novedoso, el diseño, el precio, la calidad y la utilidad.
          

    p.mb-4 Cuando se habla de una clasificación esta se puede ejecutar desde diferentes criterios como son por precio y exclusividad, por consumidor, por ocasión de uso, por materiales o por categorías. A medida que se desarrolla esta temática se abordarán cada uno de los criterios anteriormente expuestos.

    .cajon.color-acento-contenido.p-4.mb-4.bg02
      p Cuando se habla de una clasificación esta se puede ejecutar desde diferentes criterios como son por precio y exclusividad, por consumidor, por ocasión de uso, por materiales o por categorías. A medida que se desarrolla esta temática se abordarán cada uno de los criterios anteriormente expuestos.
      p.mb-0
        | Cuando se habla de 
        strong precio y exclusividad, 
        | se relacionan directamente con la pirámide según la gama de moda (alta costura, gran difusión, gama baja). Por 
        strong consumidor
        | , se enfoca según el sexo y la edad (femenino, masculino, infantil). Por otra parte, van dirigidos según los diferentes usos del producto (tiempo libre, deportivo, laboral, ejercicio, fiesta, casa, etc.). Por 
        strong materiales
        | , depende del tipo de materia prima se genera una diferenciación según las características físicas (tejido punto o plano, confección, piel, etc.). Y, por último, por 
        strong aplicación 
        | del producto, acá depende de la función será para vestuario externo o interno (accesorios, calzado, gafas, bolsos, medias, cinturones, joyas, perfumes, sombreros, relojes, etc.).
  
    .row.justify-content-center
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img05.png", alt="productos de moda")
      .col-lg-8
        p Los productos de moda tienen un grupo conformado por dimensiones, que analizan diferentes capas que se encuentran en los artículos físicos de forma implícita y que son intangibles. Dichas dimensiones, son esos factores que aportan algo más que los atributos tangibles, son los que acercan al consumidor a experimentar una sensación de protección y en el momento de interactuar con ellos, perciban bienestar y logren una percepción psicológica de plenitud. Por consiguiente, podemos encontrar 4 niveles en los productos de moda, relacionados a continuación.
        p.mb-0
          | El 
          strong nivel genérico 
          | es la parte física del artículo o producto (color, material, forma, etc.). 
          strong El nivel esperado 
          | es donde el producto cumple las expectativas más relacionadas con la calidad. El 
          strong nivel aumentado 
          | cuando el cliente recibe algo agregado que no esperaba y genera una gran experiencia. Y, por último, el 
          strong nivel potencial 
          | en donde se busca mejorar el producto e ir adaptarlo al consumidor.
      
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
