import { FormatListBulleted, SportsSoccer } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

function TabsFooter() {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Paper sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        sx={{ span: { color: 'black' }, svg: { fontSize: 32, color: "#984B43" } }}
      >
        <BottomNavigationAction sx={{ backgroundColor: location.pathname === '/copa-ao-vivo2022/jogos-do-dia' ? '#b6c6cb' : '' }} onClick={() => navigate('/copa-ao-vivo2022/jogos-do-dia')} label="Jogos" icon={<SportsSoccer />} />
        <BottomNavigationAction sx={{ backgroundColor: location.pathname === '/copa-ao-vivo2022/grupos' ? '#b6c6cb' : '' }} onClick={() => navigate('/copa-ao-vivo2022/grupos')} label="Grupos" icon={<FormatListBulleted />} />
      </BottomNavigation>
    </Paper>
  )
}

export default TabsFooter