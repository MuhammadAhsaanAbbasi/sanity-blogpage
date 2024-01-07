// sanity/author.ts

import { defineField, defineType } from "sanity";

export const author = defineType(
    {
        name: 'author',
        type: 'document',
        title: "Author",
        fields: [
            defineField({
                name: 'name',
                type: 'string',
                title: 'Name'
            }),
            defineField(
                {
                    name: 'slug',
                    type: 'slug',
                    title: 'Slug',
                    options: {
                        source: 'name',
                        maxLength: 200, // will be ignored if slugify is set
                        slugify: (input: any) => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
                    }
                }
            ),
            defineField({
                name: 'image',
                type: 'image',
                title: 'Main Image'
            }),
        ],
        preview: {
            select: {
                title: 'name',
                media: 'image',
            },
        },
    })
