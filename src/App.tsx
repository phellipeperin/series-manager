import React from 'react';
import { NativeModules, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './config/ThemeConfig';
import routes from './routes/Routes';

import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <PaperProvider theme={theme}>
                <StatusBar barStyle="dark-content" />
                <AppBar />
                <Footer routes={routes} />
            </PaperProvider>
        </>
    );
};

export default App;
