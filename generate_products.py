import os
import random
import yaml
import re

# User provided data
raw_data = {
    "3650070R": {"base_price": 1050, "features": """BATERÍA 12V 7AH,
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
RUEDAS DE EVA"""},
    "2290018-5P": {"base_price": 105, "features": """LUZ
MÚSICA
RUEDA DELANTERA DE 10"
RUEDA TRASERA DE 8"
RUEDAS DE EVA"""},
    "3650100-2R": {"base_price": 550, "features": """BATERÍA 12V7AH
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
RUEDAS DE EVA"""},
    "2410001-5P": {"base_price": 110, "features": """RUEDAS CON LUZ
INTERMITENTE
MÚSICA"""},
    "3720775-5P": {"base_price": 110, "features": """LUZ
MÚSICA
RUEDA DELANTERA DE
10"
RUEDA TRASERA DE 8"
,
RUEDA DE EVA, RUEDAS
TRASERAS CON LUZ"""},
    "3450010C": {"base_price": 300, "features": """BATERÍA DE 12 V 7 AH,
MOTOR DE 380 Nm
LUZ
MÚSICA
MP3 ENCHUFE
ASIENTO DE PLÁSTICO
RUEDAS DE PLÁSTICO"""},
    "3680021-2SR": {"base_price": 1200, "features": """BATERÍA 12V7AH
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
CON LUZ"""},
    "3010587-3": {"base_price": 290, "features": """BATERÍA 6V4AH*2
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
RUEDAS DE EVA"""},
    "2260003-2": {"base_price": 400, "features": """BATERÍA DE 12 V 7
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
PLÁSTICO"""},
    "3760002-2B": {"base_price": 420, "features": """BATERÍA DE 12 V 7
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
DE PLÁSTICO"""},
    "3970023-3": {"base_price": 305, "features": """BATERÍA 12V 4.5AH.
MOTOR 380#*2
LUZ
MÚSICA
EDUCACIÓN
TEMPRANA
MARCHA
ADELANTE/ATRÁS
ASIENTO DE
PLÁSTICO
RUEDAS DE EVA"""},
    "3970014A": {"base_price": 260, "features": """BATERIA 6V4AH
MOTOR 380#
FARO DELANTERO
MUSICA
EDUCACION
TEMPRANA
ADELANTE Y ATRAS
ASIENTO DE
PLASTICO
RUEDAS EVA"""},
    "3970014B": {"base_price": 280, "features": """BATERIA 6V4AH
MOTOR 380#2
FARO DELANTERO
MUSICA
EDUCACION
TEMPRANA
ADELANTE Y ATRAS
ASIENTO DE
PLASTICO
RUEDAS EVA"""},
    "3590072-2AR": {"base_price": 830, "features": """BATERIA 12V7AH*1
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
RUEDAS DE EVA"""},
    "3400228-2R": {"base_price": 1100, "features": """BATERÍA 24V 5AH
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
ASIENTO DE CUERO"""},
    "3930068-4R": {"base_price": 1150, "features": """BATERÍA 24V 5AH
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
ASIENTO DE CUERO"""}
}

color_map = {
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
}

def clean_features(features_str):
    # Split by newline or comma, strip whitespace, remove empty
    parts = re.split(r'[,\n]', features_str)
    return [p.strip() for p in parts if p.strip()]

def get_hex(color_name):
    for key, val in color_map.items():
        if key in color_name.lower():
            return val
    return "#000000" # Default

products_dir = "public/images/products"
output_dir = "src/content/products"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Scan directories
for folder in os.listdir(products_dir):
    folder_path = os.path.join(products_dir, folder)
    if not os.path.isdir(folder_path):
        continue
        
    # Find matching ID
    matched_id = None
    for pid in raw_data.keys():
        if pid in folder:
            matched_id = pid
            break
            
    if not matched_id:
        print(f"Skipping {folder}, no matching ID found")
        continue
        
    data = raw_data[matched_id]
    
    # Calculate prices
    price_increment = random.randint(25, 40)
    final_price = data['base_price'] + price_increment
    old_price_percent = random.uniform(0.1, 0.3)
    old_price = int(final_price * (1 + old_price_percent))
    
    # Get colors
    galeria_path = os.path.join(folder_path, "galeria")
    colors = []
    if os.path.exists(galeria_path):
        for color_folder in os.listdir(galeria_path):
            if os.path.isdir(os.path.join(galeria_path, color_folder)):
                # Find gallery images
                gallery_images = []
                color_path = os.path.join(galeria_path, color_folder)
                for img in os.listdir(color_path):
                    if img.endswith(('.webp', '.jpg', '.png')):
                        gallery_images.append(f"/images/products/{folder}/galeria/{color_folder}/{img}")
                
                # Find portada image
                portada_path = os.path.join(folder_path, "portada")
                portada_image = ""
                if os.path.exists(portada_path):
                     for img in os.listdir(portada_path):
                        if color_folder.lower() in img.lower() and img.endswith(('.webp', '.jpg', '.png')):
                            portada_image = f"/images/products/{folder}/portada/{img}"
                            break
                
                # Fallback if specific portada not found, just take any
                if not portada_image and os.path.exists(portada_path):
                     files = [f for f in os.listdir(portada_path) if f.endswith(('.webp', '.jpg', '.png'))]
                     if files:
                         portada_image = f"/images/products/{folder}/portada/{files[0]}"

                colors.append({
                    "name": color_folder.capitalize(),
                    "hex": get_hex(color_folder),
                    "imageUrl": portada_image,
                    "gallery": gallery_images
                })
    
    # Construct YAML
    product_yaml = {
        "id": matched_id,
        "modelName": folder.split('-')[0].capitalize(), # Simple name extraction
        "price": final_price,
        "oldPrice": old_price,
        "description": "El mejor regalo para tus hijos. Diversión asegurada.", # Placeholder
        "features": clean_features(data['features']),
        "colors": colors
    }
    
    output_file = os.path.join(output_dir, f"{folder}.yaml")
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(product_yaml, f, allow_unicode=True, sort_keys=False)
    
    print(f"Generated {output_file}")

print("Done!")
