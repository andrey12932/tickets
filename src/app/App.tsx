import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={'app ' + theme}>
            <Suspense fallback={''}>
                <div className={'content-page'}>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
