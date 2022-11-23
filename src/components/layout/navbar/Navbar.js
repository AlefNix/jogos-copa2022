import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link style={{ textDecoration: 'none', color: '#6F0E2D' }} to="/copa-ao-vivo2022">
            Copa ao Vivo 2022
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar