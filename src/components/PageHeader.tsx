import { Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTE_ABOUT_ME, ROUTE_CONTACT, ROUTE_WHAT_I_OFFER } from '@DRXPath/App'
import logoImage from '@DRXPath/assets/Images/logoPlain_v1.png'
import facebookImage from '@DRXPath/assets/Images/icons8-facebook-50.svg'
import instagramImage from '@DRXPath/assets/Images/icons8-instagram-50.svg'

const PageHeader = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (page: Page) => {
    setAnchorElNav(null)
    navigate(page.url)
  }

  const Logo = () => {
    return (
      <Link to={ROUTE_ABOUT_ME}>
        <img src={logoImage} height="50px" />
      </Link>
    )
  }

  type Page = {
    displayText: string,
    url: string
  }

  const pages: Page[] = [
    {
      displayText: 'About Me',
      url: ROUTE_ABOUT_ME
    },
    {
      displayText: 'What I Offer',
      url: ROUTE_WHAT_I_OFFER
    },
    {
      displayText: 'Contact', url: ROUTE_CONTACT
    }
  ]

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' }
          }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color={'primary'} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.displayText + page.url} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page.displayText}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 5 } }}>
            {pages.map((page) => (
              <Button
                variant={'text'}
                key={page.displayText}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, display: 'block' }}
              >
                {page.displayText}
              </Button>
            ))}
          </Box>
          <Box display="flex" flexGrow={0} gap={0.5}>
            <Tooltip title="Go to Day Dot on Facebook" placement="bottom" arrow={true}>
              <Link to="https://www.facebook.com/profile.php?id=61559121684280" target="_blank">
                <img src={facebookImage}/>
              </Link>
            </Tooltip>
            <Tooltip title="Go to Day Dot on Instagram">
              <Link to="https://www.instagram.com/daydot_midwifery" target="_blank">
                <img src={instagramImage}/>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default PageHeader
