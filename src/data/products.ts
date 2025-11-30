export interface Product {
    id: string;
    modelName: string;
    price: number;
    oldPrice: number;
    description: string;
    features: string[];
    colors: {
        name: string;
        hex: string;
        imageUrl: string;
        gallery: string[];
    }[];
}

const features = ["Llantas de goma", "Luces LED", "Control Remoto 2.4G", "Asiento de cuero", "Suspensión en 4 ruedas", "MP3 / USB / Bluetooth"];

// ==================================
// Helper function para rutas de imágenes más cortas
const img = (path: string) => `/images/products/${path}`;

// ==================================
const stormBreaker_features = [
    "Tracción 4x4 (4 Motores potentes)",
    "Llantas de goma EVA (Todoterreno y silenciosas)",
    "Asiento de cuero premium",
    "Conexión Bluetooth, MP3 y USB",
    "Suspensión independiente en las 4 ruedas",
    "Control Remoto Parental 2.4G (Sin interferencias)",
    "Barra de luces LED de búsqueda y faros reales",
    "Batería de alto rendimiento 12V 7AH",
    "Sistema de educación temprana y cuentos en inglés",
    "Portaequipajes trasero funcional",
    "Arranque suave con botón",
    "Puertas dobles con seguro"
];

export const products: Product[] = [
    {
        id: "1",
        modelName: "Storm Breaker",
        price: 1130,
        oldPrice: 1380,
        description: "¿Listo para la acción? El Storm Breaker combina potencia bruta y lujo. Equipado con 4 motores y tracción total para superar cualquier obstáculo, y ruedas de goma EVA para un paseo suave y silencioso. Tu pequeño piloto disfrutará de su playlist favorita vía Bluetooth desde su asiento de cuero, mientras tú mantienes la tranquilidad total con el control remoto parental. ¡No es solo un juguete, es su primera gran expedición!",
        features: stormBreaker_features,
        colors: [
            {
                name: "Azul Tormenta",
                hex: "#2169ec",
                imageUrl: img("stormBreaker/stormBreaker-portada/stormBreakerAzul-portada.webp"),
                gallery: [
                    img("stormBreaker/stormBreaker-galeria/azul/stormBreaker-galeria-1.webp"),
                    img("stormBreaker/stormBreaker-galeria/azul/stormBreaker-galeria-2.webp"),
                    img("stormBreaker/stormBreaker-galeria/azul/stormBreaker-galeria-3.webp"),
                ]
            },
            {
                name: "Blanco Glaciar",
                hex: "#fafaff",
                imageUrl: img("stormBreaker/stormBreaker-portada/stormBreakerBlanco-portada.webp"),
                gallery: []
            },
            {
                name: "Rojo Magma",
                hex: "#ff2f22",
                imageUrl: img("stormBreaker/stormBreaker-portada/stormBreakerRojo-portada.webp"),
                gallery: []
            },
        ],
    },
    {
        id: "2",
        modelName: "Speedster S",
        price: 999,
        oldPrice: 1200,
        description: "Velocidad y diseño aerodinámico para los pequeños pilotos.",
        features: features,
        colors: [
            {
                name: "Azul Eléctrico",
                hex: "#0000FF",
                imageUrl: "/images/verde-Photoroom.webp",
                gallery: [
                    "https://placehold.co/600x400/png?text=Speedster+Frente",
                    "https://placehold.co/600x400/png?text=Speedster+Lado",
                    "https://placehold.co/600x400/png?text=Speedster+Atras",
                ]
            },
            {
                name: "Amarillo Racing",
                hex: "#FFFF00",
                imageUrl: "https://placehold.co/600x400/png?text=Speedster+Amarillo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Speedster+Frente",
                    "https://placehold.co/600x400/png?text=Speedster+Lado",
                    "https://placehold.co/600x400/png?text=Speedster+Atras",
                ]
            },
        ],
    },
    {
        id: "3",
        modelName: "Urban Cruiser",
        price: 850,
        oldPrice: 1000,
        description: "Ideal para paseos por la ciudad con estilo y confort.",
        features: features,
        colors: [
            {
                name: "Rosa Pastel",
                hex: "#FFC0CB",
                imageUrl: "/images/3650070-blue(1)-Photoroom.webp",
                gallery: [
                    "https://placehold.co/600x400/png?text=Cruiser+Frente",
                    "https://placehold.co/600x400/png?text=Cruiser+Lado",
                    "https://placehold.co/600x400/png?text=Cruiser+Atras",
                ]
            },
            {
                name: "Verde Menta",
                hex: "#98FF98",
                imageUrl: "https://placehold.co/600x400/png?text=Cruiser+Verde",
                gallery: [
                    "https://placehold.co/600x400/png?text=Cruiser+Frente",
                    "https://placehold.co/600x400/png?text=Cruiser+Lado",
                    "https://placehold.co/600x400/png?text=Cruiser+Atras",
                ]
            },
        ],
    },
    {
        id: "4",
        modelName: "Monster Truck Z",
        price: 1450,
        oldPrice: 1800,
        description: "Nada lo detiene. Ruedas gigantes para diversión gigante.",
        features: features,
        colors: [
            {
                name: "Naranja",
                hex: "#FFA500",
                imageUrl: "https://placehold.co/600x400/png?text=Monster+Naranja",
                gallery: [
                    "https://placehold.co/600x400/png?text=Monster+Frente",
                    "https://placehold.co/600x400/png?text=Monster+Lado",
                    "https://placehold.co/600x400/png?text=Monster+Atras",
                ]
            },
            {
                name: "Verde Militar",
                hex: "#4B5320",
                imageUrl: "https://placehold.co/600x400/png?text=Monster+Verde",
                gallery: [
                    "https://placehold.co/600x400/png?text=Monster+Frente",
                    "https://placehold.co/600x400/png?text=Monster+Lado",
                    "https://placehold.co/600x400/png?text=Monster+Atras",
                ]
            },
        ],
    },
    {
        id: "5",
        modelName: "Classic 500",
        price: 1100,
        oldPrice: 1350,
        description: "Un clásico nunca pasa de moda. Elegancia vintage.",
        features: features,
        colors: [
            {
                name: "Beige",
                hex: "#F5F5DC",
                imageUrl: "https://placehold.co/600x400/png?text=Classic+Beige",
                gallery: [
                    "https://placehold.co/600x400/png?text=Classic+Frente",
                    "https://placehold.co/600x400/png?text=Classic+Lado",
                    "https://placehold.co/600x400/png?text=Classic+Atras",
                ]
            },
            {
                name: "Rojo Vino",
                hex: "#800000",
                imageUrl: "https://placehold.co/600x400/png?text=Classic+Rojo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Classic+Frente",
                    "https://placehold.co/600x400/png?text=Classic+Lado",
                    "https://placehold.co/600x400/png?text=Classic+Atras",
                ]
            },
        ],
    },
    {
        id: "6",
        modelName: "Future Tron",
        price: 1600,
        oldPrice: 2000,
        description: "Diseño futurista con luces neon y sonido espacial.",
        features: features,
        colors: [
            {
                name: "Cian",
                hex: "#00FFFF",
                imageUrl: "https://placehold.co/600x400/png?text=Tron+Cian",
                gallery: [
                    "https://placehold.co/600x400/png?text=Tron+Frente",
                    "https://placehold.co/600x400/png?text=Tron+Lado",
                    "https://placehold.co/600x400/png?text=Tron+Atras",
                ]
            },
            {
                name: "Magenta",
                hex: "#FF00FF",
                imageUrl: "https://placehold.co/600x400/png?text=Tron+Magenta",
                gallery: [
                    "https://placehold.co/600x400/png?text=Tron+Frente",
                    "https://placehold.co/600x400/png?text=Tron+Lado",
                    "https://placehold.co/600x400/png?text=Tron+Atras",
                ]
            },
        ],
    },
    {
        id: "7",
        modelName: "Safari Jeep",
        price: 1350,
        oldPrice: 1600,
        description: "Listo para la aventura en la selva o el parque.",
        features: features,
        colors: [
            {
                name: "Camuflaje",
                hex: "#556B2F",
                imageUrl: "https://placehold.co/600x400/png?text=Safari+Camuflaje",
                gallery: [
                    "https://placehold.co/600x400/png?text=Safari+Frente",
                    "https://placehold.co/600x400/png?text=Safari+Lado",
                    "https://placehold.co/600x400/png?text=Safari+Atras",
                ]
            },
            {
                name: "Arena",
                hex: "#C2B280",
                imageUrl: "https://placehold.co/600x400/png?text=Safari+Arena",
                gallery: [
                    "https://placehold.co/600x400/png?text=Safari+Frente",
                    "https://placehold.co/600x400/png?text=Safari+Lado",
                    "https://placehold.co/600x400/png?text=Safari+Atras",
                ]
            },
        ],
    },
    {
        id: "8",
        modelName: "Princess Carriage",
        price: 1500,
        oldPrice: 1900,
        description: "Un carruaje mágico para la princesa de la casa.",
        features: features,
        colors: [
            {
                name: "Rosa",
                hex: "#FF69B4",
                imageUrl: "https://placehold.co/600x400/png?text=Carriage+Rosa",
                gallery: [
                    "https://placehold.co/600x400/png?text=Carriage+Frente",
                    "https://placehold.co/600x400/png?text=Carriage+Lado",
                    "https://placehold.co/600x400/png?text=Carriage+Atras",
                ]
            },
            {
                name: "Blanco",
                hex: "#FFFFFF",
                imageUrl: "https://placehold.co/600x400/png?text=Carriage+Blanco",
                gallery: [
                    "https://placehold.co/600x400/png?text=Carriage+Frente",
                    "https://placehold.co/600x400/png?text=Carriage+Lado",
                    "https://placehold.co/600x400/png?text=Carriage+Atras",
                ]
            },
        ],
    },
    {
        id: "9",
        modelName: "Police Patrol",
        price: 1250,
        oldPrice: 1500,
        description: "¡Alto en nombre de la ley! Patrulla con sirena real.",
        features: features,
        colors: [
            {
                name: "Negro/Blanco",
                hex: "#000000",
                imageUrl: "https://placehold.co/600x400/png?text=Police+Negro",
                gallery: [
                    "https://placehold.co/600x400/png?text=Police+Frente",
                    "https://placehold.co/600x400/png?text=Police+Lado",
                    "https://placehold.co/600x400/png?text=Police+Atras",
                ]
            },
        ],
    },
    {
        id: "10",
        modelName: "Fire Truck",
        price: 1300,
        oldPrice: 1550,
        description: "Camión de bomberos con manguera de agua funcional.",
        features: features,
        colors: [
            {
                name: "Rojo",
                hex: "#FF0000",
                imageUrl: "https://placehold.co/600x400/png?text=Fire+Rojo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Fire+Frente",
                    "https://placehold.co/600x400/png?text=Fire+Lado",
                    "https://placehold.co/600x400/png?text=Fire+Atras",
                ]
            },
        ],
    },
    {
        id: "11",
        modelName: "Construction Digger",
        price: 1400,
        oldPrice: 1700,
        description: "Excavadora con brazo mecánico operativo.",
        features: features,
        colors: [
            {
                name: "Amarillo",
                hex: "#FFFF00",
                imageUrl: "https://placehold.co/600x400/png?text=Digger+Amarillo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Digger+Frente",
                    "https://placehold.co/600x400/png?text=Digger+Lado",
                    "https://placehold.co/600x400/png?text=Digger+Atras",
                ]
            },
        ],
    },
    {
        id: "12",
        modelName: "Super Bike",
        price: 700,
        oldPrice: 900,
        description: "Moto deportiva para los amantes de las dos ruedas.",
        features: ["Ruedas de apoyo", ...features],
        colors: [
            {
                name: "Rojo",
                hex: "#FF0000",
                imageUrl: "https://placehold.co/600x400/png?text=Bike+Rojo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Bike+Frente",
                    "https://placehold.co/600x400/png?text=Bike+Lado",
                    "https://placehold.co/600x400/png?text=Bike+Atras",
                ]
            },
            {
                name: "Azul",
                hex: "#0000FF",
                imageUrl: "https://placehold.co/600x400/png?text=Bike+Azul",
                gallery: [
                    "https://placehold.co/600x400/png?text=Bike+Frente",
                    "https://placehold.co/600x400/png?text=Bike+Lado",
                    "https://placehold.co/600x400/png?text=Bike+Atras",
                ]
            },
        ],
    },
    {
        id: "13",
        modelName: "Quad ATV",
        price: 950,
        oldPrice: 1150,
        description: "Cuatrimoto robusta para terrenos difíciles.",
        features: features,
        colors: [
            {
                name: "Verde",
                hex: "#008000",
                imageUrl: "https://placehold.co/600x400/png?text=ATV+Verde",
                gallery: [
                    "https://placehold.co/600x400/png?text=ATV+Frente",
                    "https://placehold.co/600x400/png?text=ATV+Lado",
                    "https://placehold.co/600x400/png?text=ATV+Atras",
                ]
            },
            {
                name: "Negro",
                hex: "#000000",
                imageUrl: "https://placehold.co/600x400/png?text=ATV+Negro",
                gallery: [
                    "https://placehold.co/600x400/png?text=ATV+Frente",
                    "https://placehold.co/600x400/png?text=ATV+Lado",
                    "https://placehold.co/600x400/png?text=ATV+Atras",
                ]
            },
        ],
    },
    {
        id: "14",
        modelName: "Luxury Sedan",
        price: 1150,
        oldPrice: 1400,
        description: "Lujo y confort en cada detalle.",
        features: features,
        colors: [
            {
                name: "Plata",
                hex: "#C0C0C0",
                imageUrl: "https://placehold.co/600x400/png?text=Sedan+Plata",
                gallery: [
                    "https://placehold.co/600x400/png?text=Sedan+Frente",
                    "https://placehold.co/600x400/png?text=Sedan+Lado",
                    "https://placehold.co/600x400/png?text=Sedan+Atras",
                ]
            },
            {
                name: "Negro",
                hex: "#000000",
                imageUrl: "https://placehold.co/600x400/png?text=Sedan+Negro",
                gallery: [
                    "https://placehold.co/600x400/png?text=Sedan+Frente",
                    "https://placehold.co/600x400/png?text=Sedan+Lado",
                    "https://placehold.co/600x400/png?text=Sedan+Atras",
                ]
            },
        ],
    },
    {
        id: "15",
        modelName: "Mini Cooper Style",
        price: 1050,
        oldPrice: 1250,
        description: "Estilo icónico y compacto.",
        features: features,
        colors: [
            {
                name: "Rojo/Blanco",
                hex: "#FF0000",
                imageUrl: "https://placehold.co/600x400/png?text=Mini+Rojo",
                gallery: [
                    "https://placehold.co/600x400/png?text=Mini+Frente",
                    "https://placehold.co/600x400/png?text=Mini+Lado",
                    "https://placehold.co/600x400/png?text=Mini+Atras",
                ]
            },
            {
                name: "Azul/Blanco",
                hex: "#0000FF",
                imageUrl: "https://placehold.co/600x400/png?text=Mini+Azul",
                gallery: [
                    "https://placehold.co/600x400/png?text=Mini+Frente",
                    "https://placehold.co/600x400/png?text=Mini+Lado",
                    "https://placehold.co/600x400/png?text=Mini+Atras",
                ]
            },
        ],
    },
    {
        id: "16",
        modelName: "Formula Racer",
        price: 1800,
        oldPrice: 2200,
        description: "Para los futuros campeones de F1.",
        features: features,
        colors: [
            {
                name: "Rojo",
                hex: "#FF0000",
                imageUrl: "https://placehold.co/600x400/png?text=F1+Rojo",
                gallery: [
                    "https://placehold.co/600x400/png?text=F1+Frente",
                    "https://placehold.co/600x400/png?text=F1+Lado",
                    "https://placehold.co/600x400/png?text=F1+Atras",
                ]
            },
        ],
    },
];
