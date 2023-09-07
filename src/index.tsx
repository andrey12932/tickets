import {render} from 'react-dom';
import App from "app/App";
import './app/styles/index.scss';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {HashRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";

render(
    <StoreProvider>
        <HashRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </HashRouter>
    </StoreProvider>,
    document.getElementById('root')
);
