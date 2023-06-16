export const prayerCategories = [
	"common",
	"novena",
	"litany",
	"chaplet"
]

export interface Prayer {
	name: string,
	type: string,
	content: string[]
}