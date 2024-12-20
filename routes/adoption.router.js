import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     responses:
 *       200:
 *         description: Listado de adopciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   animalId:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   date:
 *                     type: string
 *                     format: date
 */
router.get('/', (req, res) => {
  //logica para obtener adopciones
  res.status(200).json([
    { animalId: 1, userId: 2, date: '2024-12-01' },
    { animalId: 2, userId: 3, date: '2024-12-10' },
  ]);
});

/**
 * @swagger
 * /adoptions:
 *   post:
 *     summary: Crear una nueva adopción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               animalId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Adopción creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Adopción creada"
 */
router.post('/', (req, res) => {
  const { animalId, userId } = req.body;
  //logica para crear adopcion
  res.status(201).json({ message: 'Adopción creada' });
});

export { router };
