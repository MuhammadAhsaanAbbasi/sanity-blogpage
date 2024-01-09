import Image from "next/image"
import Link from "next/link"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const RichTextComponent = {
    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({ children }: any) => <em className="text-gray-600 font-semibold">{children}</em>,

        // Ex. 2: rendering a custom `link` annotation
        link: ({ value, children }: any) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow' ? "" : ""}>
                    {children}
                </a>
            )
        },
        highlight: ({ children }: any) => (
            <h2 className="text-6xl text-[rgb(255,191,0)] my-5">{children}</h2>
        ),
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }: any) => <h1 className="text-6xl font-bold my-3">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-4xl font-bold my-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-3xl font-bold my-3">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-2xl font-bold my-3">{children}</h4>, 
        h5: ({ children }: any) => <h5 className="text-xl font-bold my-3">{children}</h5>,
        h6: ({ children }: any) => <h6 className="text-lg font-bold my-3">{children}</h6>,
        blockquote: ({ children }: any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

        // Ex. 2: rendering custom styles
        customHeading: ({ children }: any) => (
            <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
        number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }: any) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }:any) => <li className="px-10 text-lg"><div className="flex gap-x-4 items-center">
            <MdOutlineKeyboardDoubleArrowRight size={25} />
            {children}
            </div></li>,

        // Ex. 2: rendering custom list items
        checkmarks: ({ children }:any) => <li>✅ {children}</li>,
    },
}