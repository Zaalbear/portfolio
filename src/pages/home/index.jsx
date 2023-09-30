import { Header } from "../../components/Header"
import { AboutSection } from "./AboutSection"
import { BannerSection } from "./BannerSection"
import { PortSection } from "./PortSection"

import "./styles.scss"

export const HomePage = () => {
  return (
    <div className="page__container">
        <Header/>
        <BannerSection/>
        <AboutSection/>
        <PortSection/>
    </div>
  )
}