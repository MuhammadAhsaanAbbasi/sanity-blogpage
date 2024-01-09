// sanity/post.ts
import { defineField, defineType } from 'sanity'

// import authorType from './author'
import {blockContent } from './blockContent'
// import categoryType from './category'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField(
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField(
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug',
                options: {
                    source: 'title',
                    maxLength: 200, // will be ignored if slugify is set
                    slugify: (input: any) => input
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .slice(0, 200)
                }
            }
        ),
        {
            name: 'authors',
            title: 'Author',
            type: 'reference',
            to: { type: "author"},
        },
        defineField(
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: "category" } }],
        },
        defineField(
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField(
        {
            name: 'body',
            title: 'Body',
            type: blockContent.name,
        }),
        defineField(
        {
            name: 'description',
            title: 'Description',
            type:"string",
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection: any) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
