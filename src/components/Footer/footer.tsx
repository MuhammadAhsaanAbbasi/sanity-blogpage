
import Link from "next/link"
import LinkComponent from "../LinkComponent/linkComponent"
import { Contact , Home, BookOpen, Mail} from "lucide-react"
import { IoMdBook } from "react-icons/io";

const Footer = () => {
    // const book = <IoMdBook />
    const QuickLinks = [
        {
            name: "Home",
            link: "/",
            icon: Home
        },
        {
            name: "Blog",
            link: "#blog",
            icon: BookOpen
        },
        {
            name: "Contact",
            link: "/contact",
            icon: Mail
        }
    ]
    const contact = [
        {
            name: "Email",
            contact: "mahsaanabbasi@gmail.com"
        },
        {
            name: "Phone",
            contact: "+92 349-204-7381"
        },
        {
            name: "Address",
            contact: "Azam Basti, Karachi, Pakistan"
        }
    ]
    return (
        <section className="bg-gray-200 -mt-16 dark:bg-[rgb(6,12,26)] dark:text-white" id="contact">
                <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-3 m-auto gap-16">
                    <div className="my-3">
                    <h2 className="text-2xl font-semibold">Quick Links</h2>
                    <div className="my-4 space-y-5">
                    {QuickLinks.map((link) => (
                        <Link key={link.name} href={link.link} className="flex items-center space-x-3">
                        {link.icon && <link.icon className="text-gray-400"/>}
                        <p className="dark:hover:text-blue-500 text-xl font-normal font-sans">{link.name}</p>
                        </Link>
                    ))}
                    </div>
                    </div>
                    <div className="my-3">
                        <h2 className="text-2xl font-semibold">Contact</h2>
                        <div className="my-4 space-y-5">
                        {contact.map((contact) => (
                            <div key={contact.name} className="flex items-center space-x-3">
                                <Contact className="text-gray-400"/>
                                <p className="dark:hover:text-blue-500 text-xl font-medium font-sans">{contact.name}:</p>
                                <p className="dark:hover:text-blue-500 text-xl font-normal font-sans">{contact.contact}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="my-3">
                        <h2 className="text-2xl font-semibold">Social Links</h2>
                        <LinkComponent/>
                    </div>
                </div>
        </section>
    )
}

export default Footer