import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
