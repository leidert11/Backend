"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Products", [
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119927/EcoShop/Televisor/TV_XIAOMI_43_PULGADAS_UHD_LED_Plano_SmartTV_aoxq9g.jpg",
        name: "TV Xiaomi 43 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 110 cm P1 4K-UHD, Resolución 4KUHD descubre cada detalle, Tecnología MEMC para imágenes suaves y nitidas, Control remoto Bluetooth activado por voz fácil de usar, Compatible con TDT. No compatible con TV Análoga, Sistema operativo AndroidTV 10, una interfaz fàcil de usar",
        description:
          "El TV XIAOMI 43 P1 ofrece resolución 4K para no perderte de ningún detalle que combinado con la compatibilidad Dolby Visión y acompañado de la tecnología MEMC, podrás disfrutar de imágenes con movimientos fluidos y más naturales, y así disfrutaras tu contenido sin perder detalle alguno. Así mismo, podrás simplificar tú experiencia de entretenimiento gracias a la cómoda interfaz de Android TV 10, además, con el uso del control remoto y su conectividad Bluetooth activado por voz junto con el Asistente de Google, te permitirá obtener experiencias únicas disfrutando tu contenido ¡Ven por el tuyo!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119911/EcoShop/Televisor/TV_TCL_75_PULGADAS_UHD_MINI_LED_Plano_SmartGoogleTV_y6cem4.jpg",
        name: "TV Tcl 75 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 190 cm 75C935 4K, Maximiza la calidad de tu contenido con su pantalla MiniLED, Agrega brillo extra a colores e imágenes con Dolby VisionIQ, Eleva tu experiencia de audio con sistema de sonido ONKYO, Con Hey Google dale comandos a tu TV sin usar el control, Entretenimiento personalizado con la ayuda de Google TV",
        description:
          "TCL eleva tu experiencia audiovisual con su nueva serie C935. Su pantalla Mini-LED 4K UHD brinda colores increíbles, precisión en el contraste y la mejor imagen. Las certificaciones IMAX Enhanced, Dolby Vision IQ y Atmos, te permitirán vivir una inmersión cinematográfica inigualable. Con modo Game Master, vive tus experiencias de juego con videos mas fluidos, menores latencias y tasas de refrescado superiores. Esta nueva serie cuenta con sistema operativo Google TV, Hands Free Voice Control 2.0 y compatible con Google Meet. Cuenta con 2 Años de Garantía. ¡Compra el tuyo ahora!",
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119906/EcoShop/Televisor/TV_TCL_55_UHD_KLED_Plano_SmartGoogleTV_nrcyqs.jpg",
        name: "TV Tcl 55 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 139 cm 55P635 4K, El entretenimiento que te gusta con la ayuda de Google TV, Con OK Google dale comandos a tu TV y simplifica tu vida, Disfruta increíbles imágenes con su Alto Rango Dinámico,  Sonido ultra realista y multidimensional con Dolby Audio, Interconectividad en tu hogar con la tecnología AI-IN",
        description:
          "TCL te ofrece la mejor mezcla de tecnología y entretenimiento Con el TV de 55 serie P635 tendrás asegurada la mejor calidad de imagen y audio gracias a su pantalla 4K compatible con HDR 10, Dolby Audio y su tecnología única y patentada AI-IN & IPQ Engine que permiten optimizar desempeño y maximizar el potencial de tu TV. Aprovecha su conexión HDMI 2.1 y WiFi de doble banda, además de todos los beneficios de su nuevo sistema operativo Google TV con +8000 apps y +300 juegos disponibles en Google Play. Disfruta de TCL y su experiencia en tecnología. ¡Compra el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119898/EcoShop/Televisor/TV_TCL_32_PULGADAS_HD_LED_Plano_SmartTV_Android_vvwbti.jpg",
        name: "TV Tcl 32 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: cm 32S60A HD, La más completa versión de OS Android TV 9.0 (Actualizable), Controla tu TV y Smart Home por voz (Google Assistant), Descarga de contenido ilimitado con Google Play Store, Tecnología AI-IN, que mejora la calidad de imagen y sonido, Servicio Extendido de Garantía por 2 años",
        description:
          "¡TCL te ofrece la mejor mezcla de tecnología y entretenimiento! Con el TV 32 serie S60A disfruta de una excelente calidad de imagen y audio gracias a su pantalla HD compatible con HDR10, Dolby Audio y su tecnología única y patentada AI-IN que permiten optimizar desempeño y maximizar el potencial de tu Televisor. Disfruta al máximo las alternativas de su OS Android TV (versión actualizable), con más de 5.000 apps desde el Google Play Store, control total por voz con Google Assistant, interacción con la aplicación Magiconnect. Conecta y sincroniza a traves de la App Google Home tus dispotivios Smart Home y contrólalos desde el TV. Incluye Control Remoto inteligente con micrófono incorporado. 2 años de Garantía.",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119883/EcoShop/Televisor/TV_SONY_75_PULGADAS_LED_SmarTV_bglvmt.jpg",
        name: "TV Sonyc 75 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 189 cm KD-75X80J 4K, Google TV , + 7000 apps de entretenimiento en un solo lugar, Con Triluminos pro tienes colores mas reales y precisos, Bocinas X Balance Speaker y Dolby Atmos para un sonido más claro y mejores bajos, Asistente de Google por voz: Busqueda fácil de contenidos, Con el Procesador X1 HDR mejora el contraste y colores",
        description:
          "Disfrute de sus contenidos favoritos en un TV SONY BRAVIA , que brinda colores mas reales y naturales, alto nivel de brillo y contraste , imágenes en movimiento mas nítidas y fluidas, una calidad de sonido con mayor claridad y sonidos bajos mas fuertes, con una experiencia de entretenimiento y conectividad que solo Google TV le puede ofrecer.",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119877/EcoShop/Televisor/TV_SAMSUNG_85_PULGADAS_NEO_MINI_LED_PLANO_SmarTV_tncn8h.jpg",
        name: "TV Samsung 85 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 215,9 cm QN85QN800B 8K,Escala tu contenido a la máxima resolución existente en 8K, Mini LEDs perfeccionados para escenas oscuras y brillantes, Diseño fino y sofisticado que se adapta a tus espacios, Olvidate de las baterias con el Control Remoto ECO",
        description:
          "Con el TV Neo QLED 8K QN800B de Samsung, disfrutarás la más alta calidad de imagen y sonido como nunca antes has experimentado. Su actualizado procesador Neo Quantum escala la imagen a 8K independiente de la fuente de origen y el resultado es una imagen capaz de mostrar detalles en ciertas escenas que antes eran irreconocibles El sonido 3D+ cuenta con 4.2.2 canales integrados que ofrecen un audio dinámico y realista que te acercan más a la acción de la escena. Con su Control Remoto Eco ya no tendrás que preocuparte por las pilas, ya que cuenta con un panel solar. No esperes más y compra el TV Samsung más innovador",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119870/EcoShop/Televisor/TV_SAMSUNG_70_PULGADAS_Smart_tv_suk0ch.jpg",
        name: "TV Samsung 70 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 177.8 cm 70BU8000, Olvidate de las baterias con el control remoto ECO, Todos los parlantes de tu barra y TV sincronizados para darte un sonido 360°, Disfruta tus aplicaciones favoritas en un solo lugar, ¿Buscas algo? Pregúntale a tu asistente de voz Bixby, Perfil delgado y minimalista para fácil instalación ",
        description:
          "Transforma tu entretenimiento con el TV BU8000 Crystal UHD 4K de Samsung.  Gracias a su diseño fino y perfil de fácil instalación podrás disfrutar de tu contenido favorito en cualquier espacio",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119863/EcoShop/Televisor/TV_SAMSUNG_55_PULGADAS_NEO_QLED_MINI_LED_wgzzaz.jpg",
        name: "TV Samsung 55 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 139.7 cm QN55QN85BA 4K,Diseño fino y sofisticado que se adapta a tus espacios, Inteligencia Artificial, Mejora la calidad 4K, Con tu control Eco olvidate de las baterias ",
        description:
          "El TV QN55QN85BA de SAMSUNG, te llevará a vivir la experiencia 4K más avanzada con su procesador Neo Quantum, el cual escala la imagen independiente de la fuente de origen para que disfrutes mayor brillo y contraste en cada escena. Además, cuenta con tecnología Dolby Atmos para que tengas una increíble experiencia de sonido envolvente y multidireccional. Su fino y sofisticado diseño, se adapta a tus espacios y hará que tu TV se vea increíble desde todos los ángulos. Incluye el Control Remoto Eco y ya no tendrás que preocuparte por las pilas pues cuenta con panel solar. ¡Cómpralo aqui y ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119853/EcoShop/Televisor/TV_PHILIP_55_PULGADAS_UHD_LED_Plano_SmartTV_ojj48c.jpg",
        name: "TV Philip 55 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 139 cm 55PUT7406/57 4K, Asistente de voz integrado en el contro remoto, Diseño atractivo y fino que se acomoda en cualquier lugar, Dolby ATMOS y VISION mejoran el sonido y la imagen de tu TV, ",
        description:
          "Si deseas ver hoy una película, espectáculos y juegos mañana, y deportes el fin de semana, este televisor Smart Philips 55PUT7406/57 te brindará una imagen vibrante. Obtendrás una imagen y un sonido cinematográfico con Dolby Vision y Dolby Atmos, además Android TV Philips te brinda el contenido que deseas, cuando lo deseas. Puede personalizar la pantalla de inicio para mostrar sus aplicaciones favoritas, lo que facilita comenzar a transmitir las películas y los programas que le encantan.",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119835/EcoShop/Televisor/TV_LG_48_PULGADAS_UHD_OLED_Plano_SmartTV_xnldst.jpg",
        name: "TV Lg 48 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 122 cm OLED48C2PSA 4K, OLED realismo único por su tecnología de pixel autoluminoso, Procesador con IA mejora imagen y sonido según el contenido, Con ThinQ-webOS recibe recomendaciones personalizadas, Magic remote, accede con tu voz a tus contenidos y mucho más",
        description:
          "Con el televisor LG OLED48C2 disfruta tus contenidos favoritos, con máxima calidad de imagen en sus 48 pulgadas. Su diseño ultra delgado complementa tus espacios y gracias a su tecnología OLED y sus pixeles auto luminosos que se prenden y apagan de manera independiente, podrás ver los detalles ocultos  y las imágenes coloridas con una gran semejanza a la realidad. Además, siente como si estuvieras  en tu película favorita con el sonido inmersivo y realista Dolby Atmos, y con el Magic Remote, controla tu televisor sin teclear ¡lleva el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119819/EcoShop/Televisor/TV_LG_24_PULGADAS_HD_LED_PlanoTV_jpu88q.png",
        name: "TV Lg 24 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 60 cm 24TL520V-PD, Flicker Safe: reduce al mínimo el nivel de parpadeo, 2 en 1: TV y Monitor personal, Entradas HDMI y USB, descarga tus fotos y videos",
        description:
          "Encuentra alta calidad de imagen con los monitores de TV LG.| Todos los monitores LG cuentan con la tecnología para ofrecerte un brillo excepcional y claridad de imagen increíble gracias a su resolución HD, la cual te brinda una imagen mucho mas realista y precisa. Además puedes ahorrar espacio en tu escritorio ya que puedes instalarlo en la pared. No esperes más y ¡adquiere el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119811/EcoShop/Televisor/TV_KALLEY_50_PULGADAS_UHD_QLED_Plano_SmartTV_xbn6o9.jpg",
        name: "TV Kalley 50 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 127 cm K-ATV50UHDQW 4K, Colores increíbles con la tecnología QLED y Dolby Vision, Sistema Android TV: última versión 11, el más completo, Control remoto con comando de voz (Google Assistant), Google Play: Entretenimiento sin fin con miles de Apps, Gran respaldo con 2 años de garantía.",
        description:
          "¡Disfruta de increíbles colores, calidad de imagen y audio excepcionales con el TV QLED KALLEY 50” serie QW con Sistema Android TV! Podrás experimentar imágenes vibrantes, gracias a los millones de puntos cuánticos y certificación Dolby Vision. Además, vive una experiencia de audio excepcional gracias a su procesamiento de audio Dolby Atmos. Tambien, podrás controlar el TV y todo tu ecosistema Smart Home a través de comandos de voz con el Asistente de Google, gracias al micrófono en el control remoto| Calidad y respaldo con 2 años de garantía más de 15 años de experiencia. ¡Cómpralo ya!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119803/EcoShop/Televisor/TV_KALLEY_32_PULGADAS_HD_LED_Plano_SmartTV_Android_be7bga.jpg",
        name: "TV Kalley 32 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 81 cm ATV32HDW HD, Sistema Android TV versión 11, el más completo y versátil, Entretenimiento sin fin con miles de Apps (Google Play), Usa comandos de voz para controlar tu TV (Google Assistant), Usa la mejor conectividad Bluetooth y WiFi, Gran respaldo con 2 años de garantía",
        description:
          "La experiencia de uso más versátil, rápida, fácil y completa en un Smart TV! Su SO Android TV versión 11 te permite disfrutar de +8000 apps disponibles en Google Play y +300 juegos. Podrás conectar múltiples dispositivos vía Bluetooth (incluso controles para juegos). Además, podrás controlar el TV y todo tu ecosistema Smart Home a través de comandos de voz con el Asistente de Google, gracias al micrófono en el control remoto. Controla y transmite contenido desde tu Smartphone usando su Chromecast incorporado. Calidad y respaldo con 2 años de garantía más de 15 años de experiencia",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
        name: "TV Hyundai 65 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 165 cm HYLED6508 4K, Encuentra en tu control acceso directo a las mejores apps, Mejor calidad de audio con un sonido más uniforme y claro, Amplio almacenamiento de 8 GB para descargar aplicaciones, Pantalla sin bordes que aportan mayor tamaño en la imagen, Magic Remote, apunta a la pantalla y elige lo que te gusta",
        description:
          "Con el Sistema operativo WebOS en tú TV HYLED6508W4KM experimentarás sensaciones únicas por su imagen Ultra HD 4K de ocho millones de píxeles y su navegación intuitiva, disfrutarás mucho más fácil de las apps que amas. Además, es para que te diviertas, encuentra rápidamente lo que te gusta: apps, juegos y todo lo que quieras en internet, cambiando de una aplicación a otra de manera sencilla, y así podrás explorar todo lo que te ofrece este nuevo sistema operativo. La red es tuya, ¡Adquiérelo YA!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119792/EcoShop/Televisor/TV_HYUNDAI_50_PULGADAS_UHD_QLED_Plano_SmartTV_orr9qf.jpg",
        name: "TV Hyundai 50 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 127 cm HYLED5019QA4KM 4K, Sin Bordes: Para que tu entretenimiento no tenga limites, Sistema Android de última generación, más velocidad, Sistema Dolby Audio: Disfruta un sonido tridimensional, Comparte tecnología de tu celular en tu TV",
        description:
          "Vive una experiencia inmersiva de color única con el TV QLED de 50 pulgadas HYLED5019QA4KM, el cual te dará imágenes más brillantes, colores más vibrantes y negros más profundos gracias a la tecnología Quantum DOT. Además la inmersión se hace realidad con tecnología 4K y sonido de audio impactante, para disfrutar en tu hogar de una imagen 10 de 10 gracias a la resolución HDR10 y su alta densidad de pixeles que te permitiran vivir cada detalle. Que esperas ¡Compra el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119789/EcoShop/Televisor/TV_HYUNDAI_40_PULGADAS_FHD_LED_Plano_SmartTV_jrl7gt.jpg",
        name: "TV Hyndai 40 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 101.6 cm HYLED4022AiM FHD, Android TV Licenciado por Google, Acceso directo a Netflix, Youtube, Amazon Prime y Google Play, Comparte tus aplicaciones desde tu celular al TV, Con el Go Control tendrás acceso a todas las funciones ",
        description:
          "Con tu televisor HYLED4022AiM podrás disfrutar de conexión Bluetooth, acceso directo a Netflix, Youtube, Amazon Prime y Google Play, pues cuenta con sistema operativo Android TV. Además, tiene Asistente de Voz desde el Go Control con el que podrás tener acceso a todas las funciones, disfrutarás de series originales, películas o tus shows preferidos con tan solo presionar un botón. Comparte pantalla desde tu celular hacia tu TV por medio de la función Chromecast, en donde podrás compartir tus aplicaciones, películas, programas de TV, música, juegos, deportes y mucho más. ¡Adquiere el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119784/EcoShop/Televisor/TV_CHALLENGER_65_PULGADAS_UHD_LED_Plano_SmartTV_tmu2jc.jpg",
        name: "TV Challenger 65 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 164 cm 65LO70BT T2 4K, Pantalla UHD-4K para que no te pierdas ningun detalle, Pantalla sin bordes para mayor amplitud visual, Sistema Andriod: interfaz de facil uso y conexión, Control remoto con asistente de voz y navegación intuitiva,  Comparte contenido desde cualquier dispositivo a tu TV",
        description:
          "Tú TV CHALLENGER 65LO70BT es un SMART TV 4K-UHD con el cual podrás ver colores más vívidos y negros más opacos gracias a su sistema HDR, es ideal para tus películas favoritas. Cuenta además con sistema operativo Android y aplicaciones pre-cargadas como Youtube, Netflix y Prime Video que facilitarán tu navegación y una App Store para descargar todo lo que necesites | Incluye control remoto con voz integrado, el cual facilitará la interacción con tu Smart TV y te permitirá tener todo al alcance de un click, llegando de forma sencilla y simple a tu contenido favorito ¡No te quedes sin el tuyo!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119779/EcoShop/Televisor/TV_CHALLENGER_24_PULGADAS_HD_LED_Plano_icjpxc.jpg",
        name: "TV Challenger 24 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 60 cm LED24H2T2, Graba tu programa favorito con TDT + USB, Conecta tus dispositivos via HDMI y expande tu pantalla,  Puedes conectarte a dispositivos como DVD, VHS y otros, Resolución HD para una Imagen realista",
        description:
          "Con tu TV Challenger de 24” disfruta imágenes de excelente calidad en resolución HD. Adicional, podrás conectar múltiples dispositivos (PC/DVD/Decodificadores/Consolas) a través de puertos HDMI, USB y video para proyectar imágenes, videos o música de alta calidad. Este TV incluye sintonizador TDT para acceder a canales digitales nacionales en HD y cuenta con una memoria USB para grabar los programas para no perder| Guarda el mejor contenido con la opción TimeShift y amplifica el audio de tu TV por medio de los puertos de salida, óptico digital o salida de audífonos. ¡No te quedes sin el tuyo!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119847/EcoShop/Televisor/TV_PANASONIC_55_PULGADAS_UHD_LED_Plano_SmartTV_Android_tsiqtb.jpg",
        name: "TV Panasonyc 55 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 139 cm 55HX550H 4K, Tecnología Android disfruta de tus Apps favoritas, Chromecast incorporado trasmite tus contenidos favoritos, Control de voz por Google search, Bluetooth Audio de entrada y salida",
        description:
          "La serie de televisores HX de PANASONIC con tecnología Android te permite acceder a tus aplicaciones y plataformas favoritas.| Ingresa fácilmente a Netflix, YouTube, Amazon prime, Disney + y disfruta de tus películas, series y videos favoritos. Ya sea directamente en el TV o transmitiendo desde tu smartphone gracias a que incorpora Chromecast y Bluetooth de 2 vías para que puedas disfrutar una experiencia audiovisual sin igual. Calidad de imagen 4K HDR superior gracias al procesador de imagen Vivid Digital Pro. Una experiencia audiovisual inigualable, ¡adquiere el tuyo ahora!",

        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119841/EcoShop/Televisor/TV_LG_50_PULGADAS_UHD_NanoCEll_Plano_SmartTV_uleera.jpg",
        name: "TV Lg 50 Pulgadas",
        idcategory: 2,
        features:
          "Dimensiones: 126 cm 50NANO75SQA 4K, Procesador IA potencia tus contenidos, experiencia más real,  Alertadeportes: Sigue tu equipo favorito desde el televisor, ThinQ-webOS Contu cuenta recibe recomendaciones para, Magic remote,controla tu televisor con voz ",
        description:
          "El televisor LG 50NANO75 trae a tu vida colores más puros e impresionantespor su tecnología Nanocell que filtra las degradaciones de color. En supantalla de 50 pulgadas disfrutarás tus series, deportes y películasfavoritas con una imagen nítida y detallada. Con FILMMAKER MODE™ verás tuscontenidos favoritos como fueron concebidos por el director sin agregar niquitar ningún efecto. Con Magic Remote, controla tu televisor con la voz, sinnecesidad de teclear ¡lleva el tuyo ahora!",
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
