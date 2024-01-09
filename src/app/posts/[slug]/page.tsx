import { groq } from "next-sanity"
import { client } from "../../../../sanity/lib/client"
import Layout from "../../../../components/layout/layout"
import Image from "next/image"
import { PortableText } from '@portabletext/react'
import { RichTextComponent } from "../../../../components/RichTextComponent/RichTextComponent"

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams(){
    const query = groq`*[_type=="post"]{
        slug
    }`
    const slugs:Post[] = await client.fetch(query)
    const slugRoutes = slugs.map((slug)=>slug.slug.current)
    return slugRoutes.map((slug)=>({
        slug
    }))
}

export const revalidate = 300

async function Post({ params: { slug } }: Props) {
    const query = groq`*[_type=="post" && slug.current == $slug][0] 
    {
        ...,
        "imageSrc": mainImage.asset->url,
        "authorImage": authors -> image.asset-> url,
        authors->,
        categories[]->
      }`
    const post: Post = await client.fetch(query, { slug },{ next: { revalidate: 30 } })
    // console.log(post.authorImage)
    return (
        <>
            <Layout>
                <article className="px-10 pb-28">
                    <section className="space-y-2 border border-[rgb(255,220,115)] text-white">
                        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-2">
                                <Image
                                    className="object-cover object-center mx-auto w-full h-full"
                                    src={post.imageSrc}
                                    alt={post.authors.name}
                                    height={300}
                                    width={300}
                                />
                            </div>
                            <section className="p-5 bg-[rgb(255,220,115)] w-full">
                                <div className="flex flex-col md:flex-row justify-between gap-y-5 items-center">
                                    <div>
                                        <h1 className="text-4xl font-extrabold max-w-xl">{post.title}</h1>
                                        <p>{new Date(post._createdAt).toLocaleDateString
                                            ("en-US", {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        }</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Image
                                            className="rounded-full"
                                            src={post.authorImage}
                                            alt={post.authors.name}
                                            height={40}
                                            width={40}
                                        />
                                        <div className="w-[24rem]">
                                            <h3 className="text-lg font-bold">{post.authors.name}</h3>
                                            <div className="line-clamp-3">
                                                <PortableText
                                                    value={post.authors.bio}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="italic pt-10">{post.description}</h2>
                                    <div className="flex justify-end items-center mt-auto space-x-2">
                                        {post.categories.map((categrory) => (
                                            <p key={categrory._id}
                                                className="text-white bg-zinc-800 px-3 py-1 rounded-full text-sm font-semibold mt-4"
                                            >
                                                {categrory.title}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="text-lg text-zinc-600">
                    <PortableText value={post.body} components={RichTextComponent}/>
                    </section>
                </article>
            </Layout>
        </>
    )
}

export default Post