import express from 'express'
import { createPlayer, getAllPlayers, getSinglePlayer,deletePlayer, updatePlayer } from '../controllers/team.controller.js'

const router = express.Router()

router.post('/api/player',createPlayer)
router.get('/api',getAllPlayers)
router.get('/api/player/:id',getSinglePlayer)
router.put('/api/player/update/:id',updatePlayer)
router.delete('/api/player/delete/:id',deletePlayer)







export default router