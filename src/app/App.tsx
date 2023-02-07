import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui';
import { Navbar } from 'widgets/Navbar';

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;
