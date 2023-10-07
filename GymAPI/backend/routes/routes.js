const { MongoClient, ObjectId } = require("mongodb");
const { Router } = require("express");

const router = Router();

const client = new MongoClient(process.env.DDBB256);

const db = client.db("GymDB");

const musculos = db.collection("musculos");
const ejercicios = db.collection("ejercicios");
const maquinas = db.collection("maquinas");
const rutinas = db.collection("rutinas");
const suplementos = db.collection("suplementos");

/**
 * @swagger
 * components:
 *   schemas:
 *     Ejercicios:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         musculos_trabajados:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               musculo:
 *                 type: string
 *               idMusculo:
 *                 type: integer
 *               porcentaje_activacion:
 *                 type: integer
 *               porcentaje_trabajado:
 *                 type: integer
 *               notas:
 *                 type: string
 *         equipamiento:
 *           type: array
 *           items:
 *             type: string
 *         nivel:
 *           type: string
 *         imagen:
 *           type: string
 *         video_url:
 *           type: string
 *         pasos:
 *           type: array
 *           items:
 *             type: string
 *         variaciones:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               idVariacion:
 *                 type: integer
 *               nombre:
 *                 type: string
 *         series_recomendadas:
 *           type: integer
 *         repeticiones_recomendadas:
 *           type: string
 *       example:
 *         nombre: "Press de banca"
 *         descripcion: "Ejercicio de levantamiento de pesas para trabajar los músculos pectorales, deltoides anteriores y tríceps."
 *         musculos_trabajados:
 *           - musculo: "Pectorales"
 *             idMusculo: 1
 *             porcentaje_activacion: 85
 *             porcentaje_trabajado: 70
 *             notas: "Mayor activación en la fase concéntrica."
 *           - musculo: "Deltoides anteriores"
 *             idMusculo: 2
 *             porcentaje_activacion: 10
 *             porcentaje_trabajado: 20
 *             notas: "Menor activación en comparación con los pectorales."
 *           - musculo: "Tríceps"
 *             idMusculo: 3
 *             porcentaje_activacion: 5
 *             porcentaje_trabajado: 10
 *             notas: "Contribuye en la fase final del movimiento."
 *         equipamiento:
 *           - "Banco"
 *           - "Barra y pesas"
 *         nivel: "Intermedio"
 *         imagen: "imagen_press_banca.jpg"
 *         video_url: "video_press_banca.mp4"
 *         pasos:
 *           - "1. Acuéstate en el banco con los pies en el suelo y agarra la barra con un agarre ligeramente más ancho que el ancho de los hombros."
 *           - "2. Baja la barra lentamente hasta que toque tu pecho."
 *           - "3. Empuja la barra hacia arriba hasta que tus brazos estén completamente extendidos."
 *         variaciones:
 *           - idVariacion: 1
 *             nombre: "Press de banca inclinado"
 *           - idVariacion: 2
 *             nombre: "Flexiones de pecho"
 *         series_recomendadas: 3
 *         repeticiones_recomendadas: "8-12"
 *
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Maquinas:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del equipo
 *         tipo:
 *           type: string
 *           description: Tipo de equipo (e.g., Máquina de fuerza, Cardio)
 *         descripcion:
 *           type: string
 *           description: Descripción del equipo
 *         idMusculo:
 *           type: object
 *           properties:
 *             $oid:
 *               type: string
 *           description: ID del músculo asociado
 *         fabricante:
 *           type: string
 *           description: Fabricante del equipo
 *         precio:
 *           type: object
 *           properties:
 *             valor:
 *               type: number
 *               description: Valor del equipo
 *             moneda:
 *               type: string
 *               description: Moneda del valor (e.g., dólar)
 *           description: Precio del equipo
 *         imagen:
 *           type: string
 *           description: URL de la imagen del equipo
 *       example:
 *         nombre: "Máquina de Pectorales Multipower"
 *         tipo: "Máquina de fuerza"
 *         descripcion: "Máquina para ejercicios de pectorales con el uso de multipower."
 *         idMusculo:
 *           $oid: "6512e7ceb80a7f0f12647fce"
 *         fabricante: "Life Fitness"
 *         precio:
 *           valor: 2000.00
 *           moneda: "dólar"
 *         imagen: "https://www.titaniumstrength.es/media/catalog/product/cache/c45ea26cbb944c251f9f48b1c5d6a404/t/i/titanium-strength-total-smith-machine.jpg"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Musculos:
 *       type: object
 *       properties:
 *         _id:
 *           type: object
 *           properties:
 *             $oid:
 *               type: string
 *           description: ID del grupo de músculos de tríceps
 *         nombre:
 *           type: string
 *           description: Nombre del grupo de músculos de tríceps
 *         descripcion:
 *           type: string
 *           description: Descripción del grupo de músculos de tríceps
 *         funciones_principales:
 *           type: array
 *           items:
 *             type: string
 *           description: Funciones principales del grupo de músculos de tríceps
 *         imagen:
 *           type: string
 *           description: URL de la imagen del grupo de músculos de tríceps
 *         musculos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del músculo
 *               descripcion:
 *                 type: string
 *                 description: Descripción del músculo
 *               ubicacion:
 *                 type: string
 *                 description: Ubicación del músculo en el brazo
 *               funcion:
 *                 type: string
 *                 description: Función del músculo
 *               ejercicios:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idEjercicio:
 *                       type: integer
 *                       description: ID del ejercicio
 *                     nombre:
 *                       type: string
 *                       description: Nombre del ejercicio
 *                 description: Ejercicios asociados al músculo
 *               imagen:
 *                 type: string
 *                 description: URL de la imagen del músculo
 *           description: Músculos dentro del grupo de músculos de tríceps
 *       example:
 *         _id:
 *           $oid: "6512e7ceb80a7f0f12647fd5"
 *         nombre: "Tríceps"
 *         descripcion: "Grupo de músculos ubicados en la parte posterior del brazo."
 *         funciones_principales:
 *           - "Movimientos de extensión del codo."
 *           - "Estabilización del brazo."
 *         imagen: "imagen_triceps.jpg"
 *         musculos:
 *           - nombre: "Tríceps braquial"
 *             descripcion: "Músculo principal del tríceps ubicado en la parte posterior del brazo."
 *             ubicacion: "Parte posterior del brazo."
 *             funcion: "Realiza movimientos de extensión del codo."
 *             ejercicios:
 *               - idEjercicio: 1
 *                 nombre: "Extensiones de tríceps en polea"
 *               - idEjercicio: 2
 *                 nombre: "Press francés"
 *             imagen: "imagen_triceps_braquial.jpg"
 *           - nombre: "Tríceps lateral"
 *             descripcion: "Músculo ubicado en la parte lateral del tríceps."
 *             ubicacion: "Parte lateral del brazo."
 *             funcion: "Asiste en la extensión del codo y estabilización del brazo."
 *             ejercicios:
 *               - idEjercicio: 3
 *                 nombre: "Patada de tríceps"
 *               - idEjercicio: 4
 *                 nombre: "Extensiones de tríceps en banco"
 *             imagen: "imagen_triceps_lateral.jpg"
 *           - nombre: "Tríceps largo"
 *             descripcion: "Músculo ubicado en la parte interna del tríceps."
 *             ubicacion: "Parte interna del brazo."
 *             funcion: "Realiza movimientos de extensión del codo y estabilización del brazo."
 *             ejercicios:
 *               - idEjercicio: 5
 *                 nombre: "Flexiones diamante"
 *               - idEjercicio: 6
 *                 nombre: "Extensiones de tríceps con mancuerna"
 *             imagen: "imagen_triceps_largo.jpg"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Rutinas:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre de la rutina
 *         musculo:
 *           type: string
 *           description: Músculo principal de la rutina
 *         idMusculo:
 *           type: object
 *           properties:
 *             $oid:
 *               type: string
 *           description: ID del músculo asociado
 *         ejercicios:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del ejercicio
 *               idEjercicio:
 *                 type: string
 *                 description: ID del ejercicio
 *               series:
 *                 type: integer
 *                 description: Número de series
 *               repeticiones:
 *                 type: string
 *                 description: Rango de repeticiones
 *               RIR:
 *                 type: string
 *                 description: Rango de repeticiones en reserva (RIR)
 *             description: Ejercicio dentro de la rutina
 *       example:
 *         nombre: "Rutina de pectorales"
 *         musculo: "Pectorales"
 *         idMusculo:
 *           $oid: "6512e7ceb80a7f0f12647fce"
 *         ejercicios:
 *           - nombre: "Press de banca"
 *             idEjercicio: "1"
 *             series: 4
 *             repeticiones: "8-10"
 *             RIR: "1-2"
 *           - nombre: "Aperturas con mancuernas"
 *             idEjercicio: "2"
 *             series: 3
 *             repeticiones: "10-12"
 *             RIR: "1-2"
 *           - nombre: "Pull-over"
 *             idEjercicio: "3"
 *             series: 3
 *             repeticiones: "10-12"
 *             RIR: "1-2"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Suplementos:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del suplemento de proteína en polvo
 *         marca:
 *           type: string
 *           description: Marca del suplemento
 *         descripcion:
 *           type: string
 *           description: Descripción del suplemento
 *         precio:
 *           type: number
 *           description: Precio del suplemento
 *         forma:
 *           type: string
 *           description: Forma del suplemento (por ejemplo, polvo)
 *         sabor:
 *           type: string
 *           description: Sabor del suplemento
 *         cantidad_porcion:
 *           type: string
 *           description: Cantidad por porción
 *         porciones_por_envase:
 *           type: integer
 *           description: Número de porciones por envase
 *         moneda:
 *           type: string
 *           description: Moneda en la que se indica el precio
 *         imagen:
 *           type: string
 *           format: uri
 *           description: URL de la imagen del suplemento
 *       example:
 *         nombre: "Proteína en polvo"
 *         marca: "Optimum Nutrition"
 *         descripcion: "Suplemento de proteína en polvo para aumentar la ingesta proteica."
 *         precio: 30.99
 *         forma: "Polvo"
 *         sabor: "Chocolate"
 *         cantidad_porcion: "1 cucharada"
 *         porciones_por_envase: 30
 *         moneda: "dólar"
 *         imagen: "https://m.media-amazon.com/images/I/71NBonSLFqL._AC_SX569_.jpg"
 */

/**
 * @swagger
 * /ejercicios:
 *  get:
 *      summary: Obtiene todos los ejercicios
 *      tags: [Ejercicios]
 *      responses:
 *          202:
 *              description: Obtiene todos los ejercicios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '$/components/schemas/Ejercicios'
 */

/**
 * @swagger
 * /ejercicios/{id}:
 *   get:
 *     summary: Obtiene un ejercicio por el ID
 *     tags:
 *       - Ejercicios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ejercicio a obtener
 *     responses:
 *       200:
 *         description: Devuelve un ejercicio por el ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ejercicios'
 *       404:
 *         description: Ejercicio no encontrado
 */

/**
 * @swagger
 * /ejercicios:
 *   post:
 *     summary: Crea un nuevo ejercicio
 *     tags:
 *       - Ejercicios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ejercicios'
 *     responses:
 *       201:
 *         description: Ejercicio creado exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ejercicios'
 */

/**
 * @swagger
 * /ejercicios/{id}:
 *   put:
 *     summary: Edita un ejercicio existente
 *     tags:
 *       - Ejercicios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ejercicio a editar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ejercicios'
 *     responses:
 *       200:
 *         description: Ejercicio actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ejercicios'
 *       404:
 *         description: Ejercicio no encontrado
 */

/**
 * @swagger
 * /ejercicios/{id}:
 *   delete:
 *     summary: Elimina un ejercicio por el ID
 *     tags:
 *       - Ejercicios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ejercicio a eliminar
 *     responses:
 *       204:
 *         description: Ejercicio eliminado exitosamente
 *       404:
 *         description: Ejercicio no encontrado
 */

/**
 * @swagger
 * /maquinas:
 *   get:
 *     summary: Obtener todas las máquinas
 *     description: Obtiene una lista de todas las máquinas disponibles.
 *     tags:
 *       - Máquinas
 *     responses:
 *       200:
 *         description: Devuelve una lista de máquinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Maquinas'
 */

/**
 * @swagger
 * /maquinas/{id}:
 *   get:
 *     summary: Obtener una máquina por ID
 *     description: Obtiene una máquina según su ID.
 *     tags:
 *       - Máquinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la máquina a obtener
 *     responses:
 *       200:
 *         description: Devuelve una máquina por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Maquinas'
 *       404:
 *         description: Máquina no encontrada
 */

/**
 * @swagger
 * /maquinas:
 *   post:
 *     summary: Crear una nueva máquina
 *     description: Crea una nueva máquina de ejercicio.
 *     tags:
 *       - Máquinas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Maquinas'
 *     responses:
 *       201:
 *         description: Máquina creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Maquinas'
 */

/**
 * @swagger
 * /maquinas/{id}:
 *   put:
 *     summary: Actualizar una máquina existente
 *     description: Actualiza una máquina de ejercicio existente.
 *     tags:
 *       - Máquinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la máquina a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Maquinas'
 *     responses:
 *       200:
 *         description: Máquina actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Maquinas'
 *       404:
 *         description: Máquina no encontrada
 */

/**
 * @swagger
 * /maquinas/{id}:
 *   delete:
 *     summary: Eliminar una máquina por ID
 *     description: Elimina una máquina de ejercicio por su ID.
 *     tags:
 *       - Máquinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la máquina a eliminar
 *     responses:
 *       204:
 *         description: Máquina eliminada exitosamente
 *       404:
 *         description: Máquina no encontrada
 */

/**
 * @swagger
 * /musculos:
 *   get:
 *     summary: Obtener todos los músculos
 *     description: Obtiene una lista de todos los músculos disponibles.
 *     tags:
 *       - Musculos
 *     responses:
 *       200:
 *         description: Devuelve una lista de músculos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Musculos'
 */

/**
 * @swagger
 * /musculos/{id}:
 *   get:
 *     summary: Obtener un músculo por ID
 *     description: Obtiene un músculo según su ID.
 *     tags:
 *       - Musculos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del músculo a obtener
 *     responses:
 *       200:
 *         description: Devuelve un músculo por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Musculos'
 *       404:
 *         description: Músculo no encontrado
 */

/**
 * @swagger
 * /musculos:
 *   post:
 *     summary: Crear un nuevo músculo
 *     description: Crea un nuevo músculo del cuerpo.
 *     tags:
 *       - Musculos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Musculos'
 *     responses:
 *       201:
 *         description: Músculo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Musculos'
 */

/**
 * @swagger
 * /musculos/{id}:
 *   put:
 *     summary: Actualizar un músculo existente
 *     description: Actualiza un músculo del cuerpo existente.
 *     tags:
 *       - Musculos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del músculo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Musculos'
 *     responses:
 *       200:
 *         description: Músculo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Musculos'
 *       404:
 *         description: Músculo no encontrado
 */

/**
 * @swagger
 * /musculos/{id}:
 *   delete:
 *     summary: Eliminar un músculo por ID
 *     description: Elimina un músculo del cuerpo por su ID.
 *     tags:
 *       - Musculos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del músculo a eliminar
 *     responses:
 *       204:
 *         description: Músculo eliminado exitosamente
 *       404:
 *         description: Músculo no encontrado
 */

/**
 * @swagger
 * /rutinas:
 *   get:
 *     summary: Obtener todas las rutinas
 *     description: Obtiene una lista de todas las rutinas disponibles.
 *     tags:
 *       - Rutinas
 *     responses:
 *       200:
 *         description: Devuelve una lista de rutinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rutinas'
 */

/**
 * @swagger
 * /rutinas/{id}:
 *   get:
 *     summary: Obtener una rutina por ID
 *     description: Obtiene una rutina según su ID.
 *     tags:
 *       - Rutinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la rutina a obtener
 *     responses:
 *       200:
 *         description: Devuelve una rutina por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rutinas'
 *       404:
 *         description: Rutina no encontrada
 */

/**
 * @swagger
 * /rutinas:
 *   post:
 *     summary: Crear una nueva rutina
 *     description: Crea una nueva rutina de ejercicios.
 *     tags:
 *       - Rutinas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rutinas'
 *     responses:
 *       201:
 *         description: Rutina creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rutinas'
 */

/**
 * @swagger
 * /rutinas/{id}:
 *   put:
 *     summary: Actualizar una rutina existente
 *     description: Actualiza una rutina de ejercicios existente.
 *     tags:
 *       - Rutinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la rutina a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rutinas'
 *     responses:
 *       200:
 *         description: Rutina actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rutinas'
 *       404:
 *         description: Rutina no encontrada
 */

/**
 * @swagger
 * /rutinas/{id}:
 *   delete:
 *     summary: Eliminar una rutina por ID
 *     description: Elimina una rutina de ejercicios por su ID.
 *     tags:
 *       - Rutinas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la rutina a eliminar
 *     responses:
 *       204:
 *         description: Rutina eliminada exitosamente
 *       404:
 *         description: Rutina no encontrada
 */

/**
 * @swagger
 * /suplementos:
 *   get:
 *     summary: Obtener todos los suplementos
 *     description: Obtiene una lista de todos los suplementos disponibles.
 *     tags:
 *       - Suplementos
 *     responses:
 *       200:
 *         description: Devuelve una lista de suplementos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Suplementos'
 */

/**
 * @swagger
 * /suplementos/{id}:
 *   get:
 *     summary: Obtener un suplemento por ID
 *     description: Obtiene un suplemento según su ID.
 *     tags:
 *       - Suplementos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del suplemento a obtener
 *     responses:
 *       200:
 *         description: Devuelve un suplemento por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suplementos'
 *       404:
 *         description: Suplemento no encontrado
 */

/**
 * @swagger
 * /suplementos:
 *   post:
 *     summary: Crear un nuevo suplemento
 *     description: Crea un nuevo suplemento.
 *     tags:
 *       - Suplementos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Suplementos'
 *     responses:
 *       201:
 *         description: Suplemento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suplementos'
 */

/**
 * @swagger
 * /suplementos/{id}:
 *   put:
 *     summary: Actualizar un suplemento existente
 *     description: Actualiza un suplemento existente.
 *     tags:
 *       - Suplementos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del suplemento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Suplementos'
 *     responses:
 *       200:
 *         description: Suplemento actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suplementos'
 *       404:
 *         description: Suplemento no encontrado
 */

/**
 * @swagger
 * /suplementos/{id}:
 *   delete:
 *     summary: Eliminar un suplemento por ID
 *     description: Elimina un suplemento por su ID.
 *     tags:
 *       - Suplementos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del suplemento a eliminar
 *     responses:
 *       204:
 *         description: Suplemento eliminado exitosamente
 *       404:
 *         description: Suplemento no encontrado
 */

/**
 * MUSCULOS
 */

router.get("/musculos", async (req, res) => {
  try {
    await client.connect();
    //
    const result = await musculos.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Agregar

router.post("/musculos", async (req, res) => {
  try {
    await client.connect();
    const body = req.body;
    //
    const result = await musculos.insertOne(body);
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Eliminar

router.delete("/musculos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);

    //
    const result = await musculos.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Actualizar

router.put("/musculos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    const body = req.body;
    //
    const result = await musculos.findOneAndUpdate({ _id: id }, { $set: body });
    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Obtener por ID

router.get("/musculos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    //
    const result = await musculos.find({ _id: id }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

/**
 * SUPLEMENTOS
 */

router.get("/suplementos", async (req, res) => {
  try {
    await client.connect();
    //
    const result = await suplementos.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Agregar

router.post("/suplementos", async (req, res) => {
  try {
    await client.connect();
    const body = req.body;
    //
    const result = await suplementos.insertOne(body);
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Eliminar

router.delete("/suplementos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);

    //
    const result = await suplementos.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Actualizar

router.put("/suplementos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    const body = req.body;
    //
    const result = await suplementos.findOneAndUpdate(
      { _id: id },
      { $set: body }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Obtener por ID

router.get("/suplementos/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    //
    const result = await suplementos.find({ _id: id }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

/**
 * Rutinas
 */

router.get("/rutinas", async (req, res) => {
  try {
    await client.connect();
    //
    const result = await rutinas
      .aggregate([
        {
          $lookup: {
            from: "musculos", // Nombre de la colección a unir
            localField: "idMusculo", // Campo local para unir
            foreignField: "_id", // Campo de la colección externa para unir
            as: "musculoData", // Nombre del nuevo campo con los resultados de la unión
          },
        },
      ])
      .toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Agregar

router.post("/rutinas", async (req, res) => {
  try {
    await client.connect();
    const body = req.body;
    //
    const result = await rutinas.insertOne(body);
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Eliminar

router.delete("/rutinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);

    //
    const result = await rutinas.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Actualizar

router.put("/rutinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    const body = req.body;
    //
    const result = await rutinas.findOneAndUpdate({ _id: id }, { $set: body });
    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Obtener por ID

router.get("/rutinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    //
    const result = await rutinas.find({ _id: id }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

/**
 * Rutinas
 */

router.get("/maquinas", async (req, res) => {
  try {
    await client.connect();
    //
    const result = await maquinas
      .aggregate([
        {
          $lookup: {
            from: "musculos", // Nombre de la colección a unir
            localField: "idMusculo", // Campo local para unir
            foreignField: "_id", // Campo de la colección externa para unir
            as: "musculoData", // Nombre del nuevo campo con los resultados de la unión
          },
        },
      ])
      .toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Agregar

router.post("/maquinas", async (req, res) => {
  try {
    await client.connect();
    const body = req.body;
    //
    const result = await maquinas.insertOne(body);
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Eliminar

router.delete("/maquinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);

    //
    const result = await maquinas.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Actualizar

router.put("/maquinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    const body = req.body;
    //
    const result = await maquinas.findOneAndUpdate({ _id: id }, { $set: body });
    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Obtener por ID

router.get("/maquinas/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    //
    const result = await maquinas.find({ _id: id }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

/**
 * Rutinas
 */

router.get("/ejercicios", async (req, res) => {
  try {
    await client.connect();
    //
    const result = await ejercicios.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Agregar

router.post("/ejercicios", async (req, res) => {
  try {
    await client.connect();
    const body = req.body;
    //
    const result = await ejercicios.insertOne(body);
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Eliminar

router.delete("/ejercicios/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);

    //
    const result = await ejercicios.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Actualizar

router.put("/ejercicios/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    const body = req.body;
    //
    const result = await ejercicios.findOneAndUpdate(
      { _id: id },
      { $set: body }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

// Obtener por ID

router.get("/ejercicios/:id", async (req, res) => {
  try {
    await client.connect();
    const id = new ObjectId(req.params.id);
    //
    const result = await ejercicios.find({ _id: id }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

module.exports = router;
