import {defineField, defineType} from 'sanity'

export const pizzaType = defineType({
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [
	defineField({
		name: 'title',
		title: 'Titre',
		type: 'string',
		validation: (rule) => rule.required(),
	}),
	defineField({
		name: 'slug',
		type: 'slug',
		options: {source: 'title'},
		validation: (rule) => rule.required(),
	}),
	defineField({
		name: 'base',
		title: 'Base',
		type: 'string',
		options: {
			list: [
			{title: 'Tomate', value: 'tomate'},
			{title: 'Crème fraîche', value: 'creme'},
			{title: 'Sucrée', value: 'sucree'},
			],
			layout: 'dropdown',
		},
		validation: (rule) => rule.required(),
	}),
	defineField({
		name: 'ingredients',
		title: 'Ingrédients',
		type: 'string',
		validation: (rule) => rule.required(),
	}),
	defineField({
		name: 'price26',
		title: 'Prix 26 cm',
		type: 'number',
	}),
	defineField({
		name: 'price31',
		title: 'Prix 31 cm',
		type: 'number',
		validation: (rule) => rule.required(),
	}),
	],
})