# REST API

Aqui encontrarás el funcionamiento general del API para el E-COMMERCE "CampusShop" a nivel de EndPoints generales. Por favor revisar a continuación sobre cómo los EndPoints funcionan para después ser consumidos por nuestra parte frontal.



## GetAll producto

### Request

`GET /producto`

`Headers Accept-version: 1.0.0`

```http
http://localhost:5010/producto
```

### Response

```json
{
  "link": "https://http.cat/images/200.jpg",
  "message": "Productos obtenidos",
  "data": [
    {
      "_id": "651fff3e5166c1b4fb20b154",
      "nombre": "Tenis Urban Para Hombre Zapatos De ",
      "imagen": [
        "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
      ],
      "valoracion": 5,
      "descripcion": "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
      "precio": 171491,
      "descuento": 0
    },
    ...
  ]
}
```

## GetOne producto

### Request

`GET /producto/:categoriaId?`

`Headers Accept-version: 1.0.1`

### Params

```http
http://localhost:5010/producto/651fff3e5166c1b4fb20b155
```

### Response

```json
{
  "link": "https://http.cat/images/200.jpg",
  "message": "Productos obtenidos",
  "data": [
    {
      "_id": "651fff3e5166c1b4fb20b154",
      "nombre": "Tenis Urban Para Hombre Zapatos De ",
      "imagen": [
        "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
      ],
      "valoracion": 5,
      "descripcion": "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
      "precio": 171491,
      "descuento": 0
    }
  ]
}
```

## PostOne producto

### Request

`POST /producto`

`Headers Accept-version: 1.0.0`
```http
http://localhost:5010/producto
```

### Body

```json
{
  "nombre": "Tenis Urban Para Hombre Zapatos De Golf De Mujer Air 1 Rojo",
    "imagen":[
        "https://http2.mlstatic.com/D_NQ_NP_2X_877527-CBT69406340833_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_747562-CBT69406340815_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_991580-CBT69406340817_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_843255-CBT69406340823_052023-F.webp",
        "https://http2.mlstatic.com/D_NQ_NP_2X_957710-CBT69406340809_052023-F.webp"
    ],
    "valoracion": 5,
    "descripcion": "¡Bienvenido a nuestra tienda, más colores y modelos, visite la tienda! Somos de tamaño estándar europeo, elija el tamaño adecuado de la longitud de los pies si confunde con el tamaño: si sus pies son más gruesos o más salvajes, elija un tamaño más grande tabla de tallas Referencia a continuación: EU35 = MX2.5 = MX22.5 = longitud de los pies 22,5 cm EU36 = MX3 = MX23 = Longitud de los pies 23 cm; EU37 = MX3.5 = MX23.5 = Longitud de los pies 23,5 cm; EU38 = MX4.5 = MX24 = Longitud de los pies 24 cm; EU39 = MX5 = MX24.5 = Longitud de los pies 24,5 cm; EU40 = MX6 = MX25 = Longitud de los pies 25 cm; EU41 = MX6.5 = MX26 = Longitud de los pies 25,5 cm; EU42 = MX7.5 = MX27 = Longitud de los pies 26 cm; EU43 = MX8 = MX27.5 = Longitud de los pies 26,5 cm; Nota: Debido a la diferencia entre diferentes monitores, es posible que la imagen no refleje el color real del artículo. Puede haber una diferencia de 1 a 2 cm debido a la medición manual; comprueba los detalles del tamaño antes de comprar. Gracias por su comprensión. Consejo: antes de realizar un pedido, solicite al servicio de atención al cliente la recomendación de tamaño, ya que la conversión de diferentes tamaños puede ser diferente, puede indicarnos su tamaño mexicano antes de realizar el pedido, podemos recomendarle el tamaño más adecuado para usted y ¡Evite comprar el tamaño incorrecto! Si hay un problema con el producto, no se queje de inmediato, comuníquese con nosotros en el pedido, ¡haremos todo lo posible para resolver el problema por usted! ¡Gracias por su cooperación!",
    "precio": 171491,
    "descuento": 0,
    "categoriaId": "651fff3e5166c1b4fb20b154"
}
```

### Response

```json
{
  "link": "https://http.cat/images/201.jpg",
  "message": "Producto guardado",
  "data": {
    "acknowledged": true,
    "insertedId": "652869c8a9c6e553f7d88956"
  }
}
```

