import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import { LogoOnlyLayout } from './layouts/LogoOnlyLayout';
import { DashboardApp } from './pages/DashboardApp';
import { Login } from './pages/Login';
import { Page404 } from './pages/Page404';
import { User } from './pages/User';

export const Router = () => {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/app" replace /> },
                { path: 'app', element: <DashboardApp /> },
                { path: 'user', element: <User /> },
            ]
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: 'login', element: <Login /> },
                { path: '404', element: <Page404 /> },
                { path: '/', element: <Navigate to="/dashboard" /> },
                { path: '*', element: <Navigate to="/404" /> },
            ]
        }, 
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}
