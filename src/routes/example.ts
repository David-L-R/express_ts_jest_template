import { Router, Request, Response } from 'express'
import ExampleCtrl from '../controllers/example'

const router = Router()

router.get('/', ExampleCtrl.getAll)

export default router
