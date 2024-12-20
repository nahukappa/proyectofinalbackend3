/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', (req, res) => {
    
  });
  
  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary:obtiene un usuario especfico por ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del usuario
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description:usuario encontrado
   *       404:
   *         description:usuario no encontrado
   */
  router.get('/:id', (req, res) => {
    
  });
  