import { lazy } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import { useURL } from './hooks/useURL';

const DashboardLayout = lazy(() => import('./layouts/Dashboard'));

const Menu = lazy(() => import('./pages/Menu'));
const ModMenu = lazy(() => import('./pages/ModMenu'));
const Home = lazy(() => import('./pages/Home'));
const Root = () => {
  const url = useURL();
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path={url.ModMenu.path} element={<ModMenu />} />
        <Route path={url.Menu.path} element={<Menu />} />
      </Route>
    </Routes>
  );
};

const router = createBrowserRouter([{ path: '*', Component: Root }]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <App />
      <Root />
    </RouterProvider>
  );
};

export default App;
