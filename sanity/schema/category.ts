import { defineField, defineType } from "sanity";

export const category = defineType(
    {
        name: 'category',
        type: 'document',
        title: "Category",
        fields: [
            defineField({
                name: 'title',
                type: 'string',
                title: 'Title'
            }),
            defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
            }),
        ],
    })
