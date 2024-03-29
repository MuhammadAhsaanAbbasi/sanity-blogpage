import Link from "next/link"
import { FC } from "react"

const ClientSideRoute: FC<{ children: React.ReactNode, Route:string }> = ({ children, Route }) => {
    return <Link href={Route}>
            {children}
        </Link>
}

export default ClientSideRoute