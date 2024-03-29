import { RxComponent2 } from "react-icons/rx";
import HighlightIcon from "@/components/Highlight/highlight";
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export const blockContent = {
    name: 'content',
    type: 'array',
    title: 'Content',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                    { "title": "Underline", "value": "underline" },
                    { "title": "Strike", "value": "strike-through" },
                    {
                        title: 'Highlight',
                        value: 'highlight',
                        icon: RxComponent2 ,
                        component: HighlightIcon
                    }
                ]
            },
        },
        {
            type: 'image'
        },
    ]
}