import { Container } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import TabsFooter from "./components/layout/tabs/TabsFooter";
import { useLoader } from "./components/loading/LoadingProvider";
import DaysGames from "./pages/days-games/DaysGames";
import Groups from "./pages/groups/Groups";
import Home from "./pages/home/Home";

function App() {

  const { startLoader, stopLoader } = useLoader()

  useEffect(() => {
    startLoader()

    //Waiting request the API
    setTimeout(() => {
      stopLoader()
    }, 3500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: '4em', pb: '1em' }}>
        <Routes>
          <Route path='/copa-ao-vivo2022' element={<Home />} />
          <Route path='/copa-ao-vivo2022/jogos-do-dia' element={<DaysGames />} />
          <Route path='/copa-ao-vivo2022/grupos' element={<Groups />} />
        </Routes>
      </Container>
      <TabsFooter />
    </Router>
  )
}

export default App;
