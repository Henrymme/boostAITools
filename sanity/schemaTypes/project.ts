import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url"
        }),
        defineField({
            name: "priceMode",
            title: "Price Mode",
            type: "string"
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{type:"string"}]
        })
    ]
})