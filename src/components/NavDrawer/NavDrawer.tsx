import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject, Box, Avatar, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BoardIcon, CompanyLogo, HelpIcon, HomeIcon, LogoutIcon, MenuIconDrawer, RectangleIconOne, RectangleIconThree, RectangleIconTwo, SettingsIcon, TeamIcon } from '../../assets/DrawerIcons';
import { ExpandMore } from '@mui/icons-material';
import { LogoRoundrush } from '../../assets/Logo';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  background: '#31394E',
  color: '#FFFFFF',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    background: '#31394E',
    color: '#FFFFFF',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  border: 2,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const upperElements = [
  {
    id: 1,
    text: 'YellowTech Inc.',
    icon: <CompanyLogo />,
  },
  {
    id: 2,
    text: 'Personal Board',
    icon: <BoardIcon />,
  },
  {
    id: 3,
    text: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    id: 4,
    text: 'Space Settings',
    icon: <SettingsIcon />,
  },
];
const middleElements1 = [
  {
    id: 1,
    icon: <RectangleIconOne />,
    text: 'Coraly Tech & Dev',
  },
  {
    id: 2,
    icon: <RectangleIconTwo />,
    text: 'Design Board',
  },
  {
    id: 3,
    icon: <RectangleIconThree />,
    text: 'Growth Hacking',
  },
];

const middleElements2 = [
  {
    id: 1,
    icon: <RectangleIconOne />,
    text: 'Website',
  },
  {
    id: 2,
    icon: <RectangleIconTwo />,
    text: 'Growth Hacking',
  },
  {
    id: 3,
    icon: <RectangleIconThree />,
    text: 'UI / UX Design',
  },
];

const middleElements3 = [
  {
    id: 1,
    icon: <RectangleIconOne />,
    text: 'VL - Tech & Dev',
  },
  {
    id: 2,
    icon: <RectangleIconTwo />,
    text: 'VL - Growth Hacking',
  },
];

const lowerElements = [
  {
    id: 1,
    icon: <LogoutIcon />,
  },
  {
    id: 2,
    icon: <HelpIcon />,
  },
  {
    id: 3,
    icon: <Avatar sx={{ width: '26px', height: '26px' }} alt="Cindy Baker" src="https://source.unsplash.com/mEZ3PoFGs_k" />,
  },
];

export const NavDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: open ? 'space-between' : 'center' }}>
          <IconButton sx={{ display: open ? 'block' : 'none' }}>
            <LogoRoundrush />
          </IconButton>

          <IconButton onClick={toggleDrawer}>
            <MenuIconDrawer />
          </IconButton>

          {/* <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {upperElements.map(({ id, text, icon }) => (
            <ListItem key={id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ background: '#FFFFFF' }} />
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {open ? (
            <Accordion sx={{ background: '#31394E', color: '#FFFFFF', borderBottom: 'none' }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#FFFFFF' }} />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px', ml: open ? '4px' : 12 }}>
                  <TeamIcon />
                  <Typography sx={{ opacity: open ? 1 : 0 }}>Teams</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Coraly</Typography>
                <List>
                  {middleElements1.map(({ id, text, icon }) => (
                    <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{text}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Lasting Dynamics</Typography>
                <List>
                  {middleElements2.map(({ id, text, icon }) => (
                    <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{text}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Vetrina Live</Typography>
                <List>
                  {middleElements3.map(({ id, text, icon }) => (
                    <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{text}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Box sx={{ padding: '20px' }}>
              <TeamIcon />
            </Box>
          )}

          <List sx={{ display: `${open ? 'flex' : 'block'}`, flexDirection: 'row-reverse' }}>
            {lowerElements.map(({ id, icon }) => (
              <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* <Stack sx={{ backgroundColor: 'black' }}>
          <LogoutIcon />
          <HelpIcon />

          <Avatar alt="Cindy Baker" src="https://source.unsplash.com/mEZ3PoFGs_k" />
        </Stack> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
          Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
          commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
          proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare
          suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere
          sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};
