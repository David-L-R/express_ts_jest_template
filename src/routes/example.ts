import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response): void => {
	res.send('This is just an example, you can remove it')
})

export default router
