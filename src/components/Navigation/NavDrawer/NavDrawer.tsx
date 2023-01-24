import { styled, Theme, CSSObject, Box, Avatar, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { BoardIcon, CompanyLogo, HelpIcon, HomeIcon, LogoutIcon, MenuIconDrawer, RectangleIconOne, RectangleIconThree, RectangleIconTwo, SettingsIcon, TeamIcon } from '../../../assets/DrawerIcons';
import { ExpandMore } from '@mui/icons-material';
import { LogoRoundrush } from '../../../assets/Logo';
import appRoutes from '../../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../../app/features/hooks';
import { openDrawer } from '../../../app/features/Drawer/drawerSlice';

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
    icon: (
      <Link href={appRoutes.DASHBOARD}>
        <HomeIcon />
      </Link>
    ),
  },
  {
    id: 4,
    text: 'Space Settings',
    icon: (
      <Link href={appRoutes.SPACESETTINGSINFO}>
        <SettingsIcon />
      </Link>
    ),
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
    icon: (
      <Link href={appRoutes.LOGIN} onClick={() => localStorage.clear()}>
        <LogoutIcon />
      </Link>
    ),
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
  const { open } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(openDrawer(!open));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: open ? 'space-between' : 'center' }}>
          <IconButton sx={{ display: open ? 'block' : 'none' }}>
            <LogoRoundrush />
          </IconButton>

          <IconButton onClick={toggleDrawer}>
            <MenuIconDrawer />
          </IconButton>
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
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
