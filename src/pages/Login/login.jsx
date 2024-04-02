import * as reactIconsFa from "https://cdn.skypack.dev/react-icons@4.2.0/fa";
import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";
import React, { useState, createContext, useContext } from 'react';
import { ThemeProvider, withStyles } from 'react-jss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaChessBishop, FaPlusCircle, FaArrowLeft } from 'react-icons/fa';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import ReactDOM from 'react-dom';

const mainTheme = {
   sizes: {
      container: '850px'
   },
   colors: {
      primary: '#4299e1',
      primaryLight: '#fff',
      secondary: '#818CF8',
      secondaryLight: '#fff',
      green: '#10B981'
   }
}

const lightTheme = {
   ...mainTheme,
   type: 'light',
   background: {
      default: '#f7fafc',
      paper: '#fff',
      linkHover: '#edf2f7',
      input: '#fff',
   },
   alert: {
      error: '#fff0f3',
      success: '#a7f3d0'
   },
   border: {
      primary: '#e2e2e2',
      input: '#e2e8f0'
   },
   progress: {
      linear: '#e6fffa',
      linearBar: '#bde8e0'
   },
   text: {
      primary: '#000',
      link: '#718096',
      activeLink: '#2b3044',
      outlinedButton: '#4c4f52',
      input: '#4a5568',
   },
   snackbar: {
      background: '#323232',
      text: '#fff'
   },
   blob: 'C7D2FE'
}

const darkTheme = {
   ...mainTheme,
   type: 'dark',
   background: {
      default: '#161a23',
      paper: '#252836',
      linkHover: '#1c2633',
      input: '#2d303e',
   },
   alert: {
      error: '#a54a5c',
      success: '#359a6c'
   },
   border: {
      primary: '#43454e',
      input: '#505261'
   },
   progress: {
      linear: '#588e83',
      linearBar: '#32695f'
   },
   text: {
      primary: '#fff',
      link: '#8493a9',
      activeLink: '#9b9fb1',
      outlinedButton: '#fff',
      input: '#cccede',
   },
   snackbar: {
      background: '#fff',
      text: '#000'
   },
   blob: '6373b3'
}

const loginLayoutStyles = theme => ({
   loginLayout: {
      maxWidth: '100vw',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `${theme.background.default} url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve" height="800px" width="800px"><g><path fill="%23${theme.blob}" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" fill-rule="nonzero"/></g></svg>') 50% no-repeat`,
   },
   rightAngleAction: {
      position: 'absolute',
      top: '10px',
      right: '20px'
   }
});

const loginPageStyles = theme => ({
   '@keyframes slideLeft': {
      from: {
         opacity: 0,
         transform: 'translateX(30px) scale(0.98)'
      },
      to: {
         opacity: 1,
         transform: 'translateX(0px) scale(1)'
      }
   },
   loginCard: {
      animation: '$slideLeft ease-in 0.3s',
      boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
      background: theme.background.paper,
      color: theme.text.primary,
      width: '410px',
      padding: '2rem',
      position: 'relative'
   },
   forgotPassLink: {
      color: theme.text.activeLink,
      textDecoration: 'none',
      fontSize: '0.9em',
      '&:hover': {
         textDecoration: 'underline'
      }
   },
   cardHeader: {
      color: theme.text.activeLink,
      fontWeight: 600,
      fontSize: '1.6em'
   }
});

const mainLayoutStyles = theme => ({
   mainLayout: {
      maxWidth: theme.sizes.container,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: '2rem',
      position: 'relative',
      background: theme.background.default,
      color: theme.text.primary
   },
   container: {
      padding: '2rem 1rem'
   },
   header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem'
   },
   headerTitle: {
      fontSize: '1.5rem'
   },
   toggleThemeButton: {
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      color: theme.text.link,
      transition: 'color 0.3s ease',
      '&:hover': {
         color: theme.text.activeLink
      }
   }
});

const appContext = createContext();

const useAppContext = () => useContext(appContext);

const ThemeProviderWithStyles = withStyles((theme) => ({
   ...mainLayoutStyles(theme)
}))(ThemeProvider);

const LoginLayout = ({ children }) => {
   const classes = reactJss.useStyles(loginLayoutStyles);
   return <div className={classes.loginLayout}>{children}</div>
};

// LoginPage.jsx
const LoginPage = () => {
   return (
      <div>
         <h1>Welcome to Our Website!</h1>
         <p>Please login to access your account.</p>
         {/* Your login form can go here */}
         <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};


// Main layout component for dashboard
const MainLayout = ({ children }) => {
   const { classes } = useAppContext();
   const handleLogout = () => {
      // handle logout logic
   };

   return (
      <div className={classes.mainLayout}>
         <header className={classes.header}>
            <h1 className={classes.headerTitle}>Dashboard</h1>
            <button className={classes.toggleThemeButton} onClick={handleLogout}>
               <RiMoonClearLine />
            </button>
         </header>
         <div className={classes.container}>{children}</div>
      </div>
   );
};

// Dashboard page component
const DashboardPage = () => {
   // Dashboard content
   return <h1>Dashboard Page</h1>;
};

// App component
const App = () => {
   const [theme, setTheme] = useState(darkTheme);
   const toggleTheme = () => {
      setTheme(theme.type === 'light' ? darkTheme : lightTheme);
   };

   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <appContext.Provider value={{ toggleTheme }}>
               <ThemeProviderWithStyles>
                  <Routes>
                     <Route path="/pages/Login/login" element={<LoginPage />} />
                  </Routes>
               </ThemeProviderWithStyles>
            </appContext.Provider>
         </BrowserRouter>
      </ThemeProvider>
   );
};

export default LoginPage;
// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));
