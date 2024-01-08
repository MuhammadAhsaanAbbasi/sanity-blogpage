import { type SchemaTypeDefinition } from 'sanity'
import { blockContent } from './blockContent'
import { author } from './author'
import post from './post'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author,blockContent,category],
}
