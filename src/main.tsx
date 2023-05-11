import React from 'react';
import ReactDOM from 'react-dom/client';
import NotificationListener from './components/notifications.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.tsx';
import StatScreen from './pages/statScreen.tsx';

import './index.scss';
import ErrorPage from './pages/error.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/stats',
        element: <StatScreen />,
        errorElement: <ErrorPage />
    },
    {
        path: '/quests',
        errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <NotificationListener />
        <RouterProvider router={router} />
    </React.StrictMode>
);
