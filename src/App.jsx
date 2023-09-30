import { HomePage } from "./pages/home"
import "./styles/reset.scss"
import "./styles/globalStyles.scss"
import { LateralBar } from "./components/LateralBar"

function App() {

  return (
    <>
      <LateralBar/>
      <HomePage/>
    </>
  )
}

export default App
