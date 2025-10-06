import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Box, Tabs, Tab, Container } from '@mui/material';
import { BusinessCenter as WorkIcon, Business as OrgIcon, Functions as OperationsIcon } from '@mui/icons-material';
import WorkersPage from './pages/WorkersPage';
import OrganizationsPage from './pages/OrganizationsPage';
import SpecialOperationsPage from './pages/SpecialOperationsPage';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function NavigationTabs() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Tabs value={currentPath} textColor="inherit" indicatorColor="secondary">
      <Tab label="Работники" value="/workers" component={Link} to="/workers" icon={<WorkIcon />} iconPosition="start" />
      <Tab label="Организации" value="/organizations" component={Link} to="/organizations" icon={<OrgIcon />} iconPosition="start" />
      <Tab label="Спец. операции" value="/operations" component={Link} to="/operations" icon={<OperationsIcon />} iconPosition="start" />
    </Tabs>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static" elevation={0}>
            <Toolbar>
              <WorkIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Система управления работниками
              </Typography>
              <NavigationTabs />
              <Typography variant="body2" sx={{ ml: 2 }}>
                v1.0.0
              </Typography>
            </Toolbar>
          </AppBar>

          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/workers" replace />} />
              <Route path="/workers" element={<WorkersPage />} />
              <Route path="/organizations" element={<OrganizationsPage />} />
              <Route path="/operations" element={<SpecialOperationsPage />} />
            </Routes>
          </Box>

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="body2" color="text.secondary" align="center">
                © 2025 Информационная система управления работниками. ИТМО
              </Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

