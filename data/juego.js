window.DATOS_JUEGO = {
    titulo: "Elige el mejor camino",
    intro: "Cinco situaciones parecidas a las que pueden pasar en internet. No hay respuestas para memorizar: se trata de pensar qué te cuida más. Al final vas a ver cuántas opciones recomendadas elegiste.",
    nota: "El juego no guarda tus respuestas ni tu resultado.",
    situacionFinal: "Ver resultado",
    situaciones: [
        {
            escenario: "Una persona que conociste en un juego te pide que no le cuentes a nadie que están hablando.",
            opciones: [
                {
                    texto: "Aceptar y mantener la conversación en secreto.",
                    valor: "riesgo",
                    comentario: "El secretismo es una de las señales de alerta más claras. Una amistad no necesita secretos frente a los adultos de confianza."
                },
                {
                    texto: "Contarle a un adulto de confianza.",
                    valor: "recomendada",
                    comentario: "Hablar con un adulto de confianza es la mejor salida. No estás exagerando ni tenés la culpa."
                },
                {
                    texto: "Dejar de responderle y no contarle a nadie.",
                    valor: "precaucion",
                    comentario: "Alejarte ayuda, pero callarlo te deja solo/a con la situación. Contarle a alguien te protege más."
                }
            ]
        },
        {
            escenario: "Alguien te ofrece diamantes o Robux a cambio de pasar a otra app y seguir hablando en privado.",
            opciones: [
                {
                    texto: "Aceptar el regalo y pasar a la otra app.",
                    valor: "riesgo",
                    comentario: "Un regalo de un desconocido casi nunca es gratis. Pasar a una app más privada reduce la moderación y aumenta el riesgo."
                },
                {
                    texto: "Rechazar, bloquear y contarle a un adulto.",
                    valor: "recomendada",
                    comentario: "Rechazar, bloquear y pedir ayuda es lo más seguro. No perdés nada importante por cuidarte."
                },
                {
                    texto: "Aceptar el regalo, pero no pasar a la otra app.",
                    valor: "precaucion",
                    comentario: "Aceptar regalos mantiene la conversación y crea una sensación de deuda. Lo más cuidado es rechazar y contar lo que pasó."
                }
            ]
        },
        {
            escenario: "Una persona dice que tiene tu edad, pero sus respuestas y sus fotos no coinciden.",
            opciones: [
                {
                    texto: "Seguir hablando para averiguar más por tu cuenta.",
                    valor: "riesgo",
                    comentario: "No necesitás investigar solo/a. Seguir la conversación te expone más tiempo a alguien que puede estar mintiendo."
                },
                {
                    texto: "Pedirle una videollamada para comprobar.",
                    valor: "precaucion",
                    comentario: "Una videollamada no garantiza que sea quien dice ser: también se pueden usar videos o filtros falsos."
                },
                {
                    texto: "Dejar de hablarle y contarlo a un adulto.",
                    valor: "recomendada",
                    comentario: "La opción más segura es cortar la conversación y compartir lo que pasó con un adulto de confianza."
                }
            ]
        },
        {
            escenario: "Un amigo o amiga te cuenta que alguien le pidió fotos y le dijo que no se lo cuente a sus padres.",
            opciones: [
                {
                    texto: "Guardar el secreto porque te lo pidió.",
                    valor: "riesgo",
                    comentario: "Un secreto que pone en riesgo a tu amigo no se guarda. Ayudarlo a hablar con un adulto es una forma de cuidarlo."
                },
                {
                    texto: "Ayudarlo a contarle a un adulto de confianza.",
                    valor: "recomendada",
                    comentario: "Acompañarlo a pedir ayuda es una decisión responsable. No tiene que enfrentar solo/a la situación."
                },
                {
                    texto: "Contarle a un adulto de confianza aunque tu amigo se enoje.",
                    valor: "recomendada",
                    comentario: "Si hay peligro, contar es más importante que el enojo. Después pueden hablarlo juntos."
                }
            ]
        },
        {
            escenario: "Recibís un audio de un familiar que te pide plata urgente por una aplicación de mensajes.",
            opciones: [
                {
                    texto: "Transferir rápido, sin preguntar.",
                    valor: "riesgo",
                    comentario: "La voz se puede clonar con inteligencia artificial. Transferir sin verificar puede ser una estafa."
                },
                {
                    texto: "Llamarlo al número de siempre para verificar.",
                    valor: "recomendada",
                    comentario: "Verificar por otro canal es la opción recomendada. Si es real, va a entender la precaución."
                },
                {
                    texto: "Responder por el mismo chat pidiendo más datos.",
                    valor: "precaucion",
                    comentario: "El mismo chat puede estar controlado por otra persona. Lo seguro es llamar al número de siempre."
                }
            ]
        }
    ],
    finales: [
        {
            minimo: 5,
            mensaje: "Elegiste la opción recomendada en todas las situaciones. Cuidarte, desconfiar de los secretos y pedir ayuda son las mejores herramientas."
        },
        {
            minimo: 3,
            mensaje: "Vas por buen camino. Repasá las situaciones que te generaron dudas y recordá: ante la incomodidad, contale a un adulto de confianza."
        },
        {
            minimo: 0,
            mensaje: "No pasa nada: esto es para practicar. Lo central es no guardar secretos que te incomodan y pedir ayuda a un adulto de confianza."
        }
    ]
};
