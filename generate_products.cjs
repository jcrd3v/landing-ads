const fs = require('fs');
const path = require('path');

const rawData = {
    "3650070R": {
        base_price: 1050, features: `BATERÍA 12V 7AH,
MOTOR 380#*4, 2.4G R/C,
LUZ,
MÚSICA,
ARRANQUE CON UN BOTÓN,
PUERTAS DOBLES,
PANTALLA ELÉCTRICA,
FUNCIÓN DE GIRO HACIA
ADELANTE Y HACIA ATRÁS,
REPRODUCTOR DE MÚSICA
CON BLUETOOTH, EDUCACIÓN
TEMPRANA, CUENTO EN
INGLÉS,
LUZ LED,
ENCHUFES USB/MP3,
SUSPENSIÓN DE CUATRO
RUEDAS,
BARRA DE TRACCIÓN,
PORTAEQUIPAJES,
LUZ DE BÚSQUEDA,
ASIENTO DE CUERO,
RUEDAS DE EVA`},
    "2290018-5P": {
        base_price: 105, features: `LUZ
MÚSICA
RUEDA DELANTERA DE 10"
RUEDA TRASERA DE 8"
RUEDAS DE EVA`},
    "3650100-2R": {
        base_price: 550, features: `BATERÍA 12V7AH
MOTOR 380#*2
LUCES
MÚSICA, 2.4G
MANDO A DISTANCIA,
CONEXIÓN MP3/USB,
PANTALLA DE
ALIMENTACIÓN
CONTROL DE VOLUMEN
FUNCIÓN DE BALANCEO
FUNCIÓN BLUETOOTH
LUZ LED
DOS PUERTAS ABIERTAS
ASIENTO DE CUERO
RUEDAS DE EVA`},
    "2410001-5P": {
        base_price: 110, features: `RUEDAS CON LUZ
INTERMITENTE
MÚSICA`},
    "3720775-5P": {
        base_price: 110, features: `LUZ
MÚSICA
RUEDA DELANTERA DE
10"
RUEDA TRASERA DE 8"
,
RUEDA DE EVA, RUEDAS
TRASERAS CON LUZ`},
    "3450010C": {
        base_price: 300, features: `BATERÍA DE 12 V 7 AH,
MOTOR DE 380 Nm
LUZ
MÚSICA
MP3 ENCHUFE
ASIENTO DE PLÁSTICO
RUEDAS DE PLÁSTICO`},
    "3680021-2SR": {
        base_price: 1200, features: `BATERÍA 12V7AH
MOTOR 550#*2,
2.4GR/C
LUZ
MÚSICA
CUATRO RUEDAS DE
EVA CON SUSPENSIÓN,
ENCHUFE USB/MP3
VELOCIDAD ALTA/BAJA
BLUETOOTH
PANTALLA ELÉCTRICA
ACELERADOR DE MANO
ASIENTO DE CUERO
COLOR
WATERTRANSFER
POSTE DE BANDERA
CON LUZ`},
    "3010587-3": {
        base_price: 290, features: `BATERÍA 6V4AH*2
MOTOR 380#*2
LUZ
MÚSICA
EDUCACIÓN
TEMPRANA
MARCHA ADELANTE
Y ATRÁS
CONEXIÓN MP3/USB
ASIENTO DE
PLÁSTICO
RUEDAS DE EVA`},
    "2260003-2": {
        base_price: 400, features: `BATERÍA DE 12 V 7
AH
MOTOR DE 550 Nm
LUZ
MÚSICA
ARRANQUE CON UN
BOTÓN
CONEXIÓN USB
PARA MP3
MARCHA ADELANTE
Y ATRÁS
ASIENTO DE
PLÁSTICO
RUEDAS DE
PLÁSTICO`},
    "3760002-2B": {
        base_price: 420, features: `BATERÍA DE 12 V 7
AH
MOTOR N.
° 380*2
ARRANQUE DE UN
BOTÓN
MÚSICA
LUZ
VISOR DE BATERÍA
ENTRADA
USB/TARJETA
SD/MP3
VOLANTE CON LUZ
DOS RUEDAS,
RUEDAS Y ASIENTO
DE PLÁSTICO`},
    "3970023-3": {
        base_price: 305, features: `BATERÍA 12V 4.5AH.
MOTOR 380#*2
LUZ
MÚSICA
EDUCACIÓN
TEMPRANA
MARCHA
ADELANTE/ATRÁS
ASIENTO DE
PLÁSTICO
RUEDAS DE EVA`},
    "3970014A": {
        base_price: 260, features: `BATERIA 6V4AH
MOTOR 380#
FARO DELANTERO
MUSICA
EDUCACION
TEMPRANA
ADELANTE Y ATRAS
ASIENTO DE
PLASTICO
RUEDAS EVA`},
    "3970014B": {
        base_price: 280, features: `BATERIA 6V4AH
MOTOR 380#2
FARO DELANTERO
MUSICA
EDUCACION
TEMPRANA
ADELANTE Y ATRAS
ASIENTO DE
PLASTICO
RUEDAS EVA`},
    "3590072-2AR": {
        base_price: 830, features: `BATERIA 12V7AH*1
MOTOR 540#*2
MARCHA ADELANTE
Y ATRÁS
LUZ
MÚSICA
RUEDA TRASERA CON
SUSPENSIÓN
BLUETOOTH
ENCHUFE USB
CON CONTROL
REMOTO 2.4G
ASIENTO DE
PLÁSTICO
RUEDAS DE EVA`},
    "3400228-2R": {
        base_price: 1100, features: `BATERÍA 24V 5AH
MOTOR 550#*2,
2.4GR/C
LUCES
MÚSICA
PANTALLA DE
ALIMENTACIÓN
CUATRO RUEDAS
CON SUSPENSIÓN
EDUCACIÓN
TEMPRANA
ENCHUFE USB/MP3
ALTA Y BAJA
VELOCIDAD
BLUETOOTH
RUEDAS DE EVA
ASIENTO DE CUERO`},
    "3930068-4R": {
        base_price: 1150, features: `BATERÍA 24V 5AH
MOTOR 550#*2
2.4G/C
LUCES
MÚSICA
CUATRO RUEDAS
CON SUSPENSIÓN
ENCHUFE USB/MP3
BLUETOOTH
BOTÓN DE
ARRANQUE
EDUCACIÓN
TEMPRANA
RUEDAS DE EVA Y
ASIENTO DE CUERO`}
};

const colorMap = {
    "azul": "#0000FF",
    "rojo": "#FF0000",
    "blanco": "#FFFFFF",
    "negro": "#000000",
    "verde": "#008000",
    "rosa": "#FFC0CB",
    "rosado": "#FFC0CB",
    "plomo": "#808080",
    "celeste": "#87CEEB",
    "celesteblanco": "#87CEEB",
    "azulnegro": "#000080",
    "rojonegro": "#8B0000",
    "beige": "#F5F5DC",
    "naranja": "#FFA500",
    "amarillo": "#FFFF00",
};

function cleanFeatures(featuresStr) {
    return featuresStr.split(/[,\n]/).map(p => p.trim()).filter(p => p);
}

function getHex(colorName) {
    for (const [key, val] of Object.entries(colorMap)) {
        if (colorName.toLowerCase().includes(key)) {
            return val;
        }
    }
    return "#000000";
}

const productsDir = path.join('public', 'images', 'products');
const outputDir = path.join('src', 'content', 'products');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(productsDir).forEach(folder => {
    const folderPath = path.join(productsDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) return;

    let matchedId = null;
    for (const pid of Object.keys(rawData)) {
        if (folder.includes(pid)) {
            matchedId = pid;
            break;
        }
    }

    if (!matchedId) {
        console.log(`Skipping ${folder}, no matching ID found`);
        return;
    }

    const data = rawData[matchedId];
    const priceIncrement = Math.floor(Math.random() * (40 - 25 + 1)) + 25;
    const finalPrice = data.base_price + priceIncrement;
    const oldPricePercent = Math.random() * (0.3 - 0.1) + 0.1;
    const oldPrice = Math.floor(finalPrice * (1 + oldPricePercent));

    const galeriaPath = path.join(folderPath, 'galeria');
    const colors = [];

    if (fs.existsSync(galeriaPath)) {
        fs.readdirSync(galeriaPath).forEach(colorFolder => {
            const colorPath = path.join(galeriaPath, colorFolder);
            if (!fs.statSync(colorPath).isDirectory()) return;

            const galleryImages = [];
            fs.readdirSync(colorPath).forEach(img => {
                if (/\.(webp|jpg|png)$/i.test(img)) {
                    galleryImages.push(`/images/products/${folder}/galeria/${colorFolder}/${img}`);
                }
            });

            const portadaPath = path.join(folderPath, 'portada');
            let portadaImage = "";
            if (fs.existsSync(portadaPath)) {
                const portadaFiles = fs.readdirSync(portadaPath);
                for (const img of portadaFiles) {
                    if (img.toLowerCase().includes(colorFolder.toLowerCase()) && /\.(webp|jpg|png)$/i.test(img)) {
                        portadaImage = `/images/products/${folder}/portada/${img}`;
                        break;
                    }
                }
                if (!portadaImage && portadaFiles.length > 0) {
                    const validFiles = portadaFiles.filter(f => /\.(webp|jpg|png)$/i.test(f));
                    if (validFiles.length > 0) {
                        portadaImage = `/images/products/${folder}/portada/${validFiles[0]}`;
                    }
                }
            }

            colors.push({
                name: colorFolder.charAt(0).toUpperCase() + colorFolder.slice(1),
                hex: getHex(colorFolder),
                imageUrl: portadaImage,
                gallery: galleryImages
            });
        });
    }

    const features = cleanFeatures(data.features);

    // Manual YAML construction
    let yamlContent = `id: "${matchedId}"\n`;
    yamlContent += `modelName: "${folder.split('-')[0].charAt(0).toUpperCase() + folder.split('-')[0].slice(1)}"\n`;
    yamlContent += `price: ${finalPrice}\n`;
    yamlContent += `oldPrice: ${oldPrice}\n`;
    yamlContent += `description: "El mejor regalo para tus hijos. Diversión asegurada."\n`;
    yamlContent += `features:\n`;
    features.forEach(f => yamlContent += `  - "${f.replace(/"/g, '\\"')}"\n`);
    yamlContent += `colors:\n`;
    colors.forEach(c => {
        yamlContent += `  - name: "${c.name}"\n`;
        yamlContent += `    hex: "${c.hex}"\n`;
        yamlContent += `    imageUrl: "${c.imageUrl}"\n`;
        // FIX: Handle empty gallery array
        yamlContent += `    gallery: ${c.gallery.length ? '' : '[]'}\n`;
        c.gallery.forEach(g => yamlContent += `      - "${g}"\n`);
    });

    fs.writeFileSync(path.join(outputDir, `${folder}.yaml`), yamlContent);
    console.log(`Generated ${folder}.yaml`);
});

console.log("Done!");
