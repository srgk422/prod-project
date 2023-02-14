import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
