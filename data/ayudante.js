window.DATOS_AYUDANTE = {
    saludo: "¡Hola! Soy el ayudante de Prevención Digital. Puedo explicarte temas del sitio y orientarte si algo te preocupa.",
    agradecimiento: "De nada. Si tenés otra duda, preguntame. Y si algo te preocupa, contale a un adulto de confianza.",
    noEntendido: "No estoy seguro de haber entendido. Probá con preguntas como: ¿Qué es el grooming? ¿Cómo cuido mi cuenta de Roblox? ¿Qué es la ludopatía? ¿A dónde puedo llamar?",
    cierreAyuda: "Si hay peligro ahora, llamá al 911. Para orientación: Línea 137 (violencia y grooming) o Línea 102 (niñez y adolescencia).",
    preguntasSugeridas: [
        "¿Qué es el grooming?",
        "¿Qué hago si alguien me pide fotos?",
        "¿Cómo cuido mi cuenta de Roblox?",
        "¿Qué es la ludopatía?",
        "¿Qué riesgos tiene la IA?",
        "¿A dónde puedo llamar?"
    ],
    temas: [
        {
            id: "grooming",
            nombre: "el grooming",
            claves: ["grooming", "ciberacoso"],
            resumen: "El grooming es cuando una persona adulta contacta a un chico o chica por internet para cometer un delito contra su integridad sexual. La Ley 27.590 lo define y el Código Penal lo castiga. No importa si la persona es desconocida o conocida: la ley no distingue.",
            senales: [
                "Piden mantener la conversación en secreto.",
                "Piden fotos, videos o videollamadas.",
                "Ofrecen regalos, dinero o ayuda en el juego para ganar confianza.",
                "Insisten en pasar a otra app más privada.",
                "Mienten sobre su edad o se muestran muy insistentes."
            ],
            actuar: [
                "No borres nada: guardá capturas, usuarios y enlaces.",
                "No enfrentes a la persona ni sigas la conversación.",
                "Contale a un adulto de confianza. No es tu culpa.",
                "Denunciá en una fiscalía o comisaría."
            ],
            pagina: "grooming.html"
        },
        {
            id: "ley",
            nombre: "la Ley Mica Ortega",
            claves: ["ley mica", "mica ortega", "micaela", "27.590", "27590"],
            resumen: "La Ley 27.590, conocida como Ley Mica Ortega, crea el Programa Nacional de Prevención y Concientización del Grooming o Ciberacoso. Lleva el nombre de Micaela Ortega, una nena de 12 años engañada por un adulto en Facebook en 2016.",
            puntos: [
                "Prevención y concientización para la comunidad educativa.",
                "Capacitación para docentes y familias.",
                "Campañas e información sobre cómo y dónde denunciar."
            ],
            pagina: "ley-mica-ortega.html"
        },
        {
            id: "leyes",
            nombre: "las leyes argentinas",
            claves: ["leyes", "ley 26.904", "26.904", "26.061", "27.206", "25.326", "26.388"],
            resumen: "Varias leyes argentinas protegen a niñas, niños y adolescentes en internet. La 26.904 creó el delito de grooming; la 27.590 agregó prevención; la 26.061 protege la niñez; la 25.326 protege datos personales; la 26.388 regula delitos informáticos; y la 27.206 cuida los tiempos de las víctimas.",
            puntos: [
                "26.904: incorpora el artículo 131 al Código Penal y crea el delito de grooming.",
                "27.590: crea el Programa Nacional de Prevención y Concientización del Grooming.",
                "26.061: protección integral de los derechos de niñas, niños y adolescentes.",
                "25.326: protección de los datos personales.",
                "26.388: delitos informáticos.",
                "27.206: respeto a los tiempos de las víctimas."
            ],
            pagina: "leyes.html"
        },
        {
            id: "discord",
            nombre: "Discord",
            claves: ["discord"],
            resumen: "Discord es una plataforma de chat de texto, voz y video organizada en servidores y canales. La edad mínima según sus términos es de 13 años, y puede ser mayor en algunos países.",
            riesgos: [
                "Mensajes directos de personas desconocidas.",
                "Servidores con poca moderación.",
                "Invitaciones a servidores desconocidos o enlaces falsos.",
                "Estafas con “Nitro gratis” para robar la cuenta.",
                "Videollamadas o chats de voz con desconocidos.",
                "Pedidos para pasar a otra app más privada."
            ],
            medidas: [
                "Revisá quién puede enviarte mensajes directos y solicitudes de amistad.",
                "Activá la verificación en dos pasos.",
                "Configurá los filtros de contenido de la plataforma.",
                "Entrá solo a servidores conocidos, con reglas claras y moderadores visibles.",
                "No hagas clic en enlaces desconocidos ni abras archivos de extraños.",
                "Contale a un adulto si alguien te pide secreto o insiste para pasar a otra app."
            ],
            grooming: "En Discord, un adulto puede empezar con una invitación a un servidor, ganarse la confianza y después pedir pasar a un chat privado o a otra app. Ante un pedido de secreto o de fotos, cortá la conversación y contale a un adulto.",
            pagina: "plataformas/discord.html"
        },
        {
            id: "roblox",
            nombre: "Roblox",
            claves: ["roblox", "robux"],
            resumen: "Roblox es una plataforma donde las personas crean y juegan experiencias. Tiene chat de texto, chat de voz en algunas experiencias y una moneda propia, los Robux.",
            riesgos: [
                "Chat con personas desconocidas.",
                "Experiencias creadas por usuarios con temáticas inapropiadas.",
                "Presión para comprar Robux.",
                "Estafas de “Robux gratis” que piden contraseñas.",
                "Intercambios en los que se engaña a chicos para quedarse con sus objetos.",
                "Pedidos para pasar a otra red o app."
            ],
            medidas: [
                "Configurá los controles parentales y el PIN de la cuenta.",
                "Limitá el chat a amigos o desactivalo.",
                "Revisá las restricciones de contenido según la edad.",
                "Vinculá la cuenta a una cuenta de adulto cuando corresponda.",
                "Fijá límites de gasto y no guardes tarjetas en la cuenta del menor.",
                "Activá la verificación en dos pasos."
            ],
            grooming: "El contacto puede empezar con regalos de Robux u objetos y después pasar a otra app para pedir fotos o secretos. Los regalos de un desconocido no son gratis: suelen buscar algo a cambio.",
            pagina: "plataformas/roblox.html"
        },
        {
            id: "minecraft",
            nombre: "Minecraft",
            claves: ["minecraft", "realms"],
            resumen: "Minecraft es un juego de construcción y exploración. Se puede jugar solo, en familia o en servidores multijugador. Muchos servidores públicos tienen sus propias reglas y no siempre moderan todo lo que pasa en el chat.",
            riesgos: [
                "Servidores públicos sin moderación.",
                "Invitaciones a otras redes, como Discord.",
                "Mods o archivos descargados de sitios no confiables.",
                "Chat público y mensajes privados con desconocidos.",
                "Compras en servidores no oficiales que piden datos de pago.",
                "Acoso o insultos dentro de las partidas."
            ],
            medidas: [
                "Jugá en servidores privados o con personas conocidas.",
                "No descargues mods de sitios no verificados.",
                "Usá los controles familiares de Microsoft/Xbox para limitar multijugador y chat.",
                "Descargá mods solo de fuentes confiables y analizá los archivos.",
                "Acordá con tu familia a qué servidores entrás."
            ],
            grooming: "Puede empezar de forma amable: alguien ayuda a construir, regala recursos o invita a un servidor “especial”. Después propone pasar a Discord u otra red para seguir la conversación sin moderación.",
            pagina: "plataformas/minecraft.html"
        },
        {
            id: "free-fire",
            nombre: "Free Fire",
            claves: ["free fire", "freefire", "diamantes", "garena"],
            resumen: "Free Fire es un juego de supervivencia para celular, con partidas cortas y escuadras. Tiene chat de voz en vivo y una tienda de diamantes, skins y pases de temporada.",
            riesgos: [
                "Chat de voz con desconocidos en escuadras aleatorias.",
                "Pedidos para pasar a WhatsApp, Discord u otra app.",
                "Estafas con diamantes, cuentas o skins “gratis”.",
                "Robo de cuentas mediante enlaces falsos.",
                "Presión para gastar dinero.",
                "Juego excesivo por recompensas diarias y eventos con tiempo limitado."
            ],
            medidas: [
                "Silenciá el micrófono y el chat de voz con personas que no conocés.",
                "Jugá en escuadras con amigos reales.",
                "No compartas contraseñas, códigos ni datos de pago.",
                "Hacé las recargas solo en los canales oficiales.",
                "Vinculá la cuenta a un correo de un adulto de confianza.",
                "Acordá horarios y pausas."
            ],
            grooming: "El contacto puede empezar en el chat de voz de una partida: alguien se muestra amable, ayuda a subir de nivel o regala diamantes y después pide el número de WhatsApp o el usuario de otra red. Ante un pedido de pasar a otra app, negate y avisá a un adulto.",
            pagina: "plataformas/free-fire.html"
        },
        {
            id: "ludopatia",
            nombre: "la ludopatía",
            claves: ["ludopatia", "apuesta", "apuestas", "apostar", "casino", "azar", "tragamonedas"],
            resumen: "La ludopatía digital es el impulso incontrolable por apostar o jugar por azar, aunque cause pérdidas económicas y problemas en la vida diaria. No es lo mismo el juego recreativo que el juego problemático.",
            senales: [
                "Cambios de humor, ansiedad o irritabilidad.",
                "Pérdida de interés en actividades que antes gustaban.",
                "Preocupación constante por apostar o consultar resultados.",
                "Problemas de dinero o deudas.",
                "Aumento del tiempo dedicado al juego.",
                "Mentiras o minimización del problema."
            ],
            medidas: [
                "Mantené una comunicación abierta.",
                "Establecé límites de tiempo y de dinero.",
                "Informate sobre los riesgos del azar y la ludopatía.",
                "Promové otras actividades: deporte, arte, salidas.",
                "Supervisá el tiempo de pantalla y el tipo de juegos.",
                "Pedí ayuda profesional si hace falta."
            ],
            grooming: "Las apuestas y los juegos con recompensas también pueden combinarse con regalos o presión de desconocidos. Si alguien te pide dinero, datos o secretos, contale a un adulto.",
            pagina: "temas/ludopatia.html"
        },
        {
            id: "ia",
            nombre: "la inteligencia artificial",
            claves: ["inteligencia artificial", "ia", "deepfake", "deepfakes", "clonacion de voz", "chatbot"],
            resumen: "La inteligencia artificial puede ayudar a estudiar, crear, traducir y acceder a información. Pero también puede usarse para engañar con imágenes, audios o videos falsos.",
            riesgos: [
                "Deepfakes: imágenes, audios o videos falsos, incluso de contenido sexual, hechos con la imagen de una persona real.",
                "Clonación de voz: audios que imitan a un familiar para pedir dinero o datos.",
                "Perfiles falsos: cuentas con fotos generadas y conversaciones automáticas.",
                "Desinformación presentada con seguridad.",
                "Apps que piden datos, fotos o permisos innecesarios.",
                "Chatbots que simulan vínculos y generan dependencia emocional."
            ],
            medidas: [
                "No subas fotos íntimas, documentos ni datos personales a herramientas de IA.",
                "Revisá la privacidad y los permisos de las apps antes de instalarlas.",
                "Contrastá la información con fuentes confiables.",
                "Si recibís un audio o un mensaje raro de un familiar, verificá por otro canal.",
                "Pensá antes de publicar fotos de chicos o chicas.",
                "No compartas montajes ni imágenes íntimas de otras personas."
            ],
            grooming: "Con IA se pueden crear perfiles falsos o voces clonadas para ganar confianza y pedir fotos, datos o dinero. Si una conversación se vuelve rara, cortala y contale a un adulto.",
            pagina: "temas/ia.html"
        },
        {
            id: "ayuda",
            nombre: "las líneas de ayuda",
            claves: ["ayuda", "denunciar", "denuncia", "linea", "telefono", "137", "102", "911", "llamar"],
            resumen: "Si hay peligro ahora, llamá al 911. Para orientación, la Línea 137 atiende violencia y grooming las 24 horas, y la Línea 102 escucha y orienta a niñas, niños y adolescentes. Podés llamar aunque no tengas todo claro.",
            pasos: [
                "No borres nada: guardá capturas, usuarios y enlaces antes de hacer cualquier otra cosa.",
                "No enfrentes a la persona señalada.",
                "Contale a un adulto de confianza.",
                "Denunciá en una fiscalía o comisaría.",
                "Llamá al 137 para orientación. Si hay peligro, llamá al 911."
            ],
            pagina: "ayuda.html"
        }
    ]
};
