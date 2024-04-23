import Router from 'express'
const router = Router()
import { getPing } from '../controllers/index.controller.js'

router.get('/ping', getPing)

export default router
