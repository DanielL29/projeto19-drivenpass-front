import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { UserProvider } from './contexts/UserContext';
import Router from './Router';

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Router />
            </BrowserRouter>
        </UserProvider>
    );
}