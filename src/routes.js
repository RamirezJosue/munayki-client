import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import { LogoOnlyLayout } from './layouts/LogoOnlyLayout';
import { DashboardApp } from './pages/DashboardApp';
import { Login } from './pages/Login';
import { Page404 } from './pages/Page404';
import { User } from './pages/User';
import { startChecking } from './store/actions/auth';

export const Router = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector( state => state.auth);

    useEffect(() => {
      dispatch( startChecking() );
    }, [dispatch])

    return useRoutes([
        {
            path: '/dashboard',
            element: isLoggedIn ? <DashboardLayout /> :  <Navigate to="/login"/>,
            children: [
                { element: <Navigate to="/dashboard/app" replace /> },
                { path: 'app', element: <DashboardApp /> },
                { path: 'user', element: <User /> },
            ]
        },
        {
            path: '/',
            element: !isLoggedIn? <LogoOnlyLayout />: <Navigate to="/dashboard/app" replace />,
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
