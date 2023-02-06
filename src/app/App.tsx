import { Link } from 'react-router-dom';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui';

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
