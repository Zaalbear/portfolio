import { useState } from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Projects } from "./components/Pages/Projects";
import './styles/reset.scss'
import './styles/globalStyles.scss'
import './styles/typography.scss'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header />
      <SideBar setPage={setPage} page={page} />

      {page === "home" ? <Home setPage={setPage} page={page} /> : null}
      {page === "about" ? <About /> : null}
      {page === "services" ? <Services /> : null}
      {page === "projects" ? <Projects /> : null}
    </>
  )
}

export default App
