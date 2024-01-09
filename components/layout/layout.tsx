import { FC} from "react"
import Header from "../Header/header"
import Hero from "../Hero/hero"
import { ThemeProvider } from "../ThemeContent/themeContent"
import Footer from "../Footer/footer"

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <Hero />
            {children}
            <Footer/>
        </div>

    )
}

export default Layout