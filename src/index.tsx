import {render} from 'react-dom';
import App from "app/App";
import './app/styles/index.scss';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
);
