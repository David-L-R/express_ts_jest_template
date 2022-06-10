export interface User {
	id: string
	isActive: boolean
	avatar: string
	username: string
	gender: 'male' | 'female'
	email: string
	tags: string[]
}
