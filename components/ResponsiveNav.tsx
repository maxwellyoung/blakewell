import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'

const leftPages = ['Expertise', 'Portfolio']
const rightPages = ['Awards', 'Contact Us']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveNavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const trigger = useScrollTrigger()

	return (
		<nav className="navContainer">
			<nav className={navStyles.nav}>
				<Slide appear={false} direction="down" in={!trigger}>
					<AppBar
						position="static"
						sx={{
							backgroundColor: 'transparent',
							boxShadow: 0,
						}}
					>
						<Container maxWidth={false}>
							<Toolbar disableGutters>
								<Typography
									variant="h6"
									noWrap
									component="a"
									href="/"
									sx={{
										mr: 2,
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'Syne',
										fontSize: '16px',
										fontWeight: 700,
										letterSpacing: '.2rem',
										color: 'inherit',
										textDecoration: 'none',
									}}
								></Typography>

								<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										color="inherit"
									>
										<MenuIcon />
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
										{leftPages.map((page) => (
											<MenuItem key={page} onClick={handleCloseNavMenu}>
												<Typography textAlign="center">{page}</Typography>
											</MenuItem>
										))}
										{rightPages.map((page) => (
											<MenuItem key={page} onClick={handleCloseNavMenu}>
												<Typography textAlign="center">{page}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>

								<Typography
									variant="h5"
									noWrap
									component="a"
									className="button"
									href=""
									sx={{
										mr: 2,
										display: { xs: 'flex', md: 'none' },
										flexGrow: 1,
										fontFamily: 'Syne',
										fontSize: '16px',
										fontWeight: 700,
										letterSpacing: '.2rem',
										color: 'inherit',
										textDecoration: 'none',
									}}
								>
									<Image
										src="/Logo.svg"
										className="content-center"
										width={260}
										height={50}
										layout="intrinsic"
										alt="logo"
									/>
								</Typography>

								<Box
									sx={{
										flexGrow: 1,
										display: { xs: 'none', md: 'flex' },
										justifyContent: 'space-between',
									}}
								>
									{leftPages.map((page) => (
										<Button
											key={page}
											onClick={handleCloseNavMenu}
											sx={{
												my: 2,
												color: 'white',
												fontFamily: 'Syne',
												fontSize: '16px',
												fontWeight: 700,
												letterSpacing: '.2rem',
												textDecoration: 'none',
											}}
										>
											{page}
										</Button>
									))}
									<Image
										src="/Logo.svg"
										className="content-center"
										width={260}
										height={50}
										layout="intrinsic"
										alt="logo"
									/>
									{rightPages.map((page) => (
										<Button
											key={page}
											onClick={handleCloseNavMenu}
											sx={{
												my: 2,
												color: 'white',
												fontFamily: 'Syne',
												fontSize: '16px',
												fontWeight: 700,
												letterSpacing: '.2rem',
												textDecoration: 'none',
											}}
										>
											{page}
										</Button>
									))}
								</Box>

								<Box sx={{ flexGrow: 0 }}>
									<Menu
										sx={{ mt: '45px' }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										{settings.map((setting) => (
											<MenuItem key={setting} onClick={handleCloseUserMenu}>
												<Typography textAlign="center">{setting}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
							</Toolbar>
						</Container>
					</AppBar>
				</Slide>
			</nav>
		</nav>
	)
}
export default ResponsiveNavBar
