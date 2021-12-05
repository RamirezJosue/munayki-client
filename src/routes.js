import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import Courses from './pages/Courses';
import { LogoOnlyLayout } from './layouts/LogoOnlyLayout';
import { DashboardApp } from './pages/DashboardApp';
import { Login } from './pages/Login';
import { Page404 } from './pages/Page404';
import { User } from './pages/User';
import { Course } from './pages/Course';

export const Router = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        {
          path: 'courses',
          element: <Courses />,
        },
        {
          path: 'courses/:id',
          element: <Course />,
        },
        { path: 'user', element: <User /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <Page404 /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};
