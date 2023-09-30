import { Header } from "../../components/Header"
import { AboutSection } from "./AboutSection"
import { BannerSection } from "./BannerSection"
import { ContactForm } from "./ContactForm"
import { PortSection } from "./PortSection"
import { TechSection } from "./TechSection"

import "./styles.scss"

export const HomePage = () => {
  return (
    <div className="page__container">
        <Header/>
        <BannerSection/>
        <AboutSection/>
        <PortSection/>
        <TechSection/>
        <ContactForm/>
    </div>
  )
}