<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipologías de Producto Moda
    
    P.mb-5 Antes de identificar los productos de moda es necesario preguntarse ¿qué es un producto?, inicialmente debemos entenderlo como todo aquello que está disponible en un mercado para resolver una necesidad humana. A diferencia de un servicio, este es un objeto tangible que se consume; sin embargo, tiene unas características intangibles que generan valor emocional al segmento de clientes. Entre el tipo de productos que se hallan en el sector moda están: el calzado, marroquinería, vestuario y accesorios. Lo invitamos a observar el siguiente recurso de aprendizaje para identificar sus propiedades y usos:

    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Calzado")
        p.mb-3 Cuando se habla de calzado se refiere a un artículo que es complemento en la indumentaria, este históricamente nace como protección para los pies debido a los cambios extremos de clima o para prevenir lastimaduras y suciedad. Las evidencias de su nacimiento nos trasladan al periodo paleolítico 10.000 A.C donde se usaban unas simples bolsas de piel, ya para la edad media se emplearon otros materiales que se adaptaron mejor la horma del pie.

        
        figure.mb-4
          img(src="@/assets/curso/tema2/img01.jpg", alt="Atributos y Características")

        .col-12.mb-4.px-4  
          .row.mb-4.bgC02.rounded19
            .col-lg-6.p-4
              p.text-white.mb-0 En la mitad siglo XX se incorpora la tecnología en los procesos, generando nuevos materiales y una construcción menos artesanal, sin embargo actualmente las empresas pequeñas y medianas ya que no cuentan con el tipo de maquinaria especial continúan con el armado y montado a mano. 
            .col-lg-6.bgImg02.rounded19
        
        p.text-center 
          strong Las partes que se pueden identificar en la mayoría de los calzados son:
        
        ImagenInfografica.color-secundario.mb-5

          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img03.png', alt='calzado')

          .tarjeta.color-secundario.text-white.p-3(x="9%" y="60%")
            .h4.mb-2 Puntera
            p.mb-0 Está ubicada en la parte delantera del zapato que cubre los dedos.
          
          .tarjeta.color-secundario.text-white.p-3(x="13%" y="84%")
            .h4.mb-2 Suela
            p.mb-0 Generalmente se hace de cuero fuerte o de materiales sintéticos, para obtener resistencia debido al contacto con el suelo.

          .tarjeta.color-secundario.text-white.p-3(x="31%" y="70%")
            .h4.mb-2 Palas
            p.mb-0 Su función es cubrir al pie por encima.

          .tarjeta.color-secundario.text-white.p-3(x="58%" y="100%")
            .h4.mb-2 Cuarto
            p.mb-0 Es la zona que queda en el aire para que el pie no quede plano y amortigüe a la hora de la pisada.
          
          .tarjeta.color-secundario.text-white.p-3(x="81%" y="86%")
            .h4.mb-2 Tacón
            p.mb-0 Da soporte al talón del pie.
          
          .tarjeta.color-secundario.text-white.p-3(x="93%" y="56%")
            .h4.mb-2 Talón
            p.mb-0 Parte de atrás del pie.
        
        p.text-center 
          strong Las partes externas del calzado son:
        
        ImagenInfografica.color-secundario.mb-5

          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img04.png', alt='calzado')

          .tarjeta.color-secundario.text-white.p-3(x="9%" y="42%")
            .h4.mb-2 Puntera
            p.mb-0 Está ubicada en la parte delantera del zapato que cubre los dedos.

          
          .tarjeta.color-secundario.text-white.p-3(x="12%" y="17%")
            .h4.mb-2 Cerco
            p.mb-0 Es una tira flexible que se ubica por todo el borde del zapato.

          .tarjeta.color-secundario.text-white.p-3(x="31%" y="74%")
            .h4.mb-2 Empeines
            p.mb-0 Está ubicado en la parte superior del pie y sirve para sujetarlo.

          .tarjeta.color-secundario.text-white.p-3(x="39%" y="55%")
            .h4.mb-2 Ojales
            p.mb-0 Son perforaciones que se realizan para ser usadas como pasadores para cordones, cintas o resortes. En algunas ocasiones son decorativos.
          
          .tarjeta.color-secundario.text-white.p-3(x="45%" y="44%")
            .h4.mb-2 Cordoneras
            p.mb-0 No todos los zapatos lo tienen, solo aquellos que tendrán cordones o resortes.
          
          .tarjeta.color-secundario.text-white.p-3(x="57%" y="44%")
            .h4.mb-2 Lengüeta
            p.mb-0 Es una pieza que se ubica debajo de los cordones.
          
          .tarjeta.color-secundario.text-white.p-3(x="69%" y="50%")
            .h4.mb-2 Planta
            p.mb-0 También llamada plantilla. Es una pieza que se encuentra en el interior del calzado, ayuda a reducir el impacto del pie contra al suelo cada vez que caminamos.
          
          .tarjeta.color-secundario.text-white.p-3(x="42%" y="23%")
            .h4.mb-2 Orejas
            p.mb-0 Se encarga de sujetar el empeine.
          
          .tarjeta.color-secundario.text-white.p-3(x="65%" y="25%")
            .h4.mb-2 Forro
            p.mb-0 Este generalmente se hace en un material más delgado como el cuero del cerdo, siempre va en la parte interna.
        
        p.mb-4 Existe una gran variedad de tipos de calzado, entre los más comunes encontramos: sandalias, botas, alpargatas, calzado urbano, calzado deportivo, tacones, calzado para el trabajo y zapatos ortopédicos.
        
        figure.mb-4
          img(src="@/assets/curso/tema2/img05.png", alt="tipos de calzado")
        
        p.mb-4 Las materias primas más utilizadas son: caucho, plástico, cuero regenerado o pieles, textiles, fieltro, material no tejido, materiales trenzados como la paja.
        
        p.mb-4 Durante el proceso productivo se utilizan diferentes fases:

        .row.justify-content-center
          .col-lg-11
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Corte de piezas.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Aparado: unión de piezas.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Adhesión: montado de suelas.
      
      .row(numero="2" titulo="Marroquinería")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 La marroquinera es la industria que se encargar de trabajar el arte del cuero, como billeteras, malatas, llaveros, empaques, cinturones, etc.
          p La utilización del cuero data al año 3000 A.C en donde los egipcios ya realizaban gravados en pieles y labores de curtido.
          figure.d-md-none
            img(src="@/assets/curso/tema2/img06.png", alt="marroquinera")
        .col-md-6
          p Los griegos comercializaron fuertemente las pieles y durante los pueblos fueron generando procesos manuales para retirar el vello animal e iniciar la utilización del cuero. En el siglo XVIII, la técnica del curtido en pieles estaba perfeccionada y a finales del siglo XIX la incorporación de maquinaria especializada genero un gran impulso al comercio del cuero.
          figure.d-md-none
            img(src="@/assets/curso/tema2/img07.png", alt="procesos manuales")
          
        .col-md-6.d-none.d-md-block
          figure.mb-4
            img(src="@/assets/curso/tema2/img06.png", alt="marroquinera")
        .col-md-6.d-none.d-md-block
          figure.mb-4
            img(src="@/assets/curso/tema2/img07.png", alt="procesos manuales")
        
        p.mb-4 Hoy en día existen varias organizaciones que luchan por el bienestar y la protección de animales que son usados como si fueran insumos para empresas por sus pieles. 

        p.mb-4 En el proceso de creación de los productos pensados desde la marroquinería se utilizan una diversidad de maquinaria y elementos. Lo invitamos  a observar los siguiente videos.

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9SsLJIbLc8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Maquinaria marroquinería
        
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8kAVmkW_MG0 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Herrajes para marroquinería
      
      .row(numero="3" titulo="Vestuario")
        .col-lg-6.mb-3.mb-lg-0
          p.mb-4 Todo o el conjunto de prendas de vestir interior y exterior, a su vez comprende accesorios, engloba los elementos que usa un ser humano en su diario vivir. El vestuario es considerado una de las principales necesidades básicas.

          p Al contemplar el vestuario como una necesidad en sus diferentes escalas se llega a comprender que el vestuario llega a representar una agrupación de símbolos que se adquieren a través de la cultura en sociedad y lo que busca expresar una persona con las prendas que usa dependerá del objetivo que persiga y las experiencias a las que este ha estado expuesto.      
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/img08.png", alt="vestuario")
      
      .row(numero="4" titulo="Tipologías en el vestuario")
        p.mb-4 Una tipología es el estudio de los tipos o modelos que se usan para clasificar diversas cosas, en lo referente para la moda, se unirán dos conceptos; tipologías de prendas, las cuales permitirán basarse en la división del cuerpo para prendas inferiores y prendas superiores como se observa en el siguiente recurso de aprendizaje.

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8kAVmkW_MG0 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Categoría de prendas - Tipologías - Bitácora de formas
      
      .row(numero="5" titulo="Accesorios en la moda")
        .col-lg-6.mb-3.mb-lg-0
          p.mb-4 Los accesorios en la moda son vistos como aquellos complementos que adornan el cuerpo junto con el vestuario que se porta, pero su origen se remonta casi que hasta los inicios que se tienen registrados en figuras rupestres sobre civilizaciones antiguas como la egipcia e incluso más atrás. 

          p.mb-4 En la historia los accesorios empiezan a aparecer en estas civilizaciones dado que más que un aporte estético al cuerpo era el protector a nivel espiritual, estos protectores eran amuletos hechos con elementos rústicos como piedras o los encontrados en la naturaleza que reflejaban creencias de una cultura.

          p En la actualidad dada la globalización y masificación de tendencias en países y ciudades los accesorios juegan un papel estético y pese a que las personas en ciudades y países no pertenezcan a tribus, estos simbolizan la personalidad y el estilo de un individuo, por tanto, la carga o herencia de los antepasados sigue estando presente para el uso de estos dentro de los atuendos.     
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/img09.png", alt="vestuario")
        
        p.text-center 
          strong A continuación, se presentan algunas tipologías de accesorios. Observa las imágenes y su descripción para identificarlas:

        .col-12
          .cajon.color-primario.p-3.pt-4.bgC03          
            .row.mb-4
              .col-lg-6.mb-4.mb-lg-0
                h4 Joyería
                p.mb-4 Representan muchos de los productos considerados accesorios, y son los más relevantes para adornar el vestuario, además de que varios de estos productos contienen significados profundos que han logrado permanecer en el tiempo como lo son los anillos de boda. 
                figure.d-lg-none
                  img(src="@/assets/curso/tema2/img10.png", alt="marroquinera")
              .col-lg-6
                h4 Sombreros
                p.mb-4 Utilizados por hombre y mujer, muy popular hasta los años 50.  Actualmente los sombreros varían de acuerdo a la ocasión de uso y el universo de vestuario.
                figure.d-lg-none
                  img(src="@/assets/curso/tema2/img11.png", alt="procesos manuales")
                
              .col-lg-6.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema2/img10.png", alt="marroquinera")
              .col-lg-6.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema2/img11.png", alt="procesos manuales")
            
            .row
              .col-lg-6.mb-4.mb-lg-0
                h4 Guantes
                p.mb-4 Empleados inicialmente para la protección e inclemencias del clima, pero con el tiempo fueron vistos como un accesorio decorativo también, así mismo estos también se emplean para diferentes usos de protección a elementos, como por ejemplo en el sector de la salud, así como también en sectores que implican la manipulación de elementos que pueden ser peligrosos para la persona. 
                figure.d-lg-none
                  img(src="@/assets/curso/tema2/img12.png", alt="marroquinera")
              .col-lg-6
                h4 Gafas
                p.mb-4 Destinadas para diferentes fines, de protección, decorativos, depende de la ocasión de uso y de las necesidades de una persona. 
                figure.d-lg-none
                  img(src="@/assets/curso/tema2/img13.png", alt="procesos manuales")
                
              .col-lg-6.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema2/img12.png", alt="marroquinera")
              .col-lg-6.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema2/img13.png", alt="procesos manuales")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
