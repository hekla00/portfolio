import Hero from './Hero'
import PortfolioSection from './PortfolioSection'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import Contact from './Contact'
import TimelineTwo from './TimelineTwo'

export default function Layout() {
    return (
        <div className="bg-rosyBrown text-ghostWhite">
            <Hero />
            {/* <About /> */}
            <Skills />
            <PortfolioSection />
            <TimelineTwo />
            <Contact />
            <Footer />
        </div>
    )
}
