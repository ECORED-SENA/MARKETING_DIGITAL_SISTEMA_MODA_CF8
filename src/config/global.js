export default {
  global: {
    componenteFormativo: 'Productos del Sistema Moda',
    descripcionCurso:
      'El producto en la moda hace parte directamente de los elementos de la marca, a pesar de ser un artículo tangible hoy en día se transforma en un híbrido, porque además de lo físico se representa de forma intangible todas las asociaciones significativas que representa la marca para el consumidor. Es un diálogo íntimo de preferencia entre la persona y el producto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Atributos y características de productos de moda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipologías de producto moda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mix de productos de moda',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proceso de producción de colecciones de moda',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Análisis e identificación de la estructura del cuerpo y medidas anatómicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Análisis y clasificación de las medidas',
            hash: 't5_1',
          },
          {
            icono: 'far fa-play-circle',
            numero: '5.2',
            titulo: 'Encabezados',
            hash: 't5_2',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Lanzamiento del producto de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Planificación para lanzamiento de producto',
            hash: 't6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Encabezados',
            hash: 't6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bur, A. (2013). Moda, estilo y ciclo de vida de los productos de la industria textil. Centro de Estudios en Diseño y Comunicación.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4200830',
    },
    {
      referencia: 'Choklat, A. (2012) Diseño de calzado.',
      link: 'https://vdocuments.mx/reader/full/diseno-de-calzado-562d0eeeb3cd3',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. (2012). Dirección de Marketing Decimocuarta edición. México: Pearson Educación.',
    },
    {
      referencia:
        'Posner, H. (2011). Marketing Fashion. Barcelona: Gustavo Gili, SL.',
    },
    {
      referencia:
        'Quinayá, D. (2017). El ABC del proceso de producción para prendas de vestir.',
      link:
        'https://www.fadp.edu.co/wp-content/uploads/2018/06/revista-oblicua-11-3.pdf',
    },
    {
      referencia:
        'Rivera, L. M. (2016). Creación y lanzamiento de nuevos productos en la empresa (2a. ed.). Editorial de la Universidad Politécnica de Valencia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57409?page=62',
    },
    {
      referencia: 'SENA. (2020). YouTube: Maquinaria marroquinería.',
      link: 'https://www.youtube.com/watch?v=9SsLJIbLc8w',
    },
    {
      referencia: 'SENA, (2020). YouTube: Herrajes en la marroquinería.',
      link: 'https://www.youtube.com/watch?v=8kAVmkW_MG0',
    },
    {
      referencia:
        'SENA. (2021). YouTube: Categoría de Prendas - Tipologías - Bitácora de Formas.',
      link: 'https://www.youtube.com/watch?v=MPaIS2YaAXM&t=458s',
    },
    {
      referencia: 'SENA. (2020). YouTube: Estructura del Cuerpo.',
      link: 'https://www.youtube.com/watch?v=V81Fjuq8XWs',
    },
    {
      referencia: 'SENA. (2020). YouTube: Toma Medidas.',
      link: 'https://www.youtube.com/watch?v=7tzquX5wI-4',
    },
    {
      referencia: 'SENA. (2020). Reconocimiento de las partes de las prendas.',
      link: 'https://www.youtube.com/watch?v=FHhqkd0h4Kw',
    },
    {
      referencia:
        'Sordo, A. (2020). Hubspot: 5 estrategias para un lanzamiento de producto realmente exitoso.',
      link: 'https://blog.hubspot.es/marketing/lanzamiento-de-producto',
    },
    {
      referencia: 'Trekking Top (s.f.). Trekking Top: Guía de Tallas Culumbia.',
      link: 'https://trekkingtop.com/guia-tallas-columbia/',
    },
  ],
  glosario: [
    {
      termino: 'Altura del tacón',
      significado:
        '“Determina el grado de inclinación de la horma” (Choklat, 2012).',
    },
    {
      termino: 'Ángulo de inclinación del tacón',
      significado:
        '“Ángulo que forma la base de la horma al encontrarse con el tacón” (Choklat, 2012).',
    },
    {
      termino: 'Articulación',
      significado:
        '“Punto de la horma en el que se conectan de forma mecánica la parte posterior y delantera” (Choklat, 2012).',
    },
    {
      termino: 'Becerro',
      significado:
        '“Graneado piel de becerro curtida al cromo, con un grano que presenta una textura con marcas similares a pequeños cuadrados o arrugas” (Choklat, 2012).',
    },
    {
      termino: 'Curtido',
      significado:
        '“Proceso de obtención del cuero a partir de la piel del animal para evitar que se descomponga” (Choklat, 2012).',
    },
    {
      termino: 'Diseño',
      significado:
        '“Actividad creativa orientada a soluciones idóneas a ciertas problemática” (Choklat, 2012).',
    },
    {
      termino: 'Lengüeta',
      significado:
        '“Se encuentra generalmente en los zapatos de cordones, se trata de una tira que recorre el centro superior del zapato y descansa sobre el empeine del pie, protegiéndolo y evitando la fricción de los cordones” (Choklat, 2012).',
    },
    {
      termino: 'Moda',
      significado:
        'Hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Tipología',
      significado:
        'Estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
  ],
  complementario: [
    {
      texto: 'SENA, (2020). Reconocimiento de las partes de las prendas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHhqkd0h4Kw',
    },
    {
      texto:
        'Quinayá, D (2017). El ABC del proceso de producción para prendas de vestir.',
      tipo: 'Artículo',
      descarga: '/downloads/revista-oblicua-11-3.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
