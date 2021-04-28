export interface Persons{
	id?: number,
	name: string,
	surname: string,
	patronymic: string,
	phone: number,
	email: string,
	birthday: any,
	direction: number,
	group: any
}
export enum TypeDirection{
	IT,
	design,
	economic,
}
