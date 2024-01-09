import { FC} from "react"
import Header from "../Header/header"
import Hero from "../Hero/hero"
import { ThemeProvider } from "../ThemeContent/themeContent"

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <Hero />
            {children}
        </div>

    )
}

export default Layout