import { Request, Response } from 'express'
import ExampleService from '../services/example'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
export class ExampleCtrl {
	getAll(req: Request, res: Response) {
		res.json(ExampleService.getAll())
	}
	getOne(req: Request, res: Response) {
		const { id } = req.params
		const user = ExampleService.getOne(id)
		if (!user) {
			res.status(400).send('User not found')
		}
		res.send(res)
	}
	create(req: Request, res: Response) {
		// write the logic here
	}
	update(req: Request, res: Response) {
		// write the logic here
	}
	deleteOne(req: Request, res: Response) {
		// write the logic here
	}
}

export default new ExampleCtrl()
