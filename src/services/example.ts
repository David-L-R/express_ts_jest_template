/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

import { User } from '../types/example'
import users from './example.json'

export class ExampleService {
	getAll() {
		return users
	}
	getOne(id: string) {
		const user = users.find((user) => user.id === id)
		if (!user) {
			throw Error('User not found')
		}
		return user
	}
	create(user: User) {
		users.push(user)
		return user
	}
	update(id: string, data: Partial<Omit<User, 'id'>>) {
		const pokemonIndex = users.findIndex((user) => user.id === id)
		users[pokemonIndex] = { ...users[pokemonIndex], ...data }
		return users[pokemonIndex]
	}
	deleteOne(id: number) {}
}
export default new ExampleService()
