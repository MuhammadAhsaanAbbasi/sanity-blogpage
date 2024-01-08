import { Children, FC } from "react"
import Header from "../Header/header"


const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout