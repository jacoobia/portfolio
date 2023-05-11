import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface NotificationPayload {
    title: string;
    message: string;
    action: string;
}

const SERVER_URL = 'http://localhost:8009';

const NotificationListener = () => {
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const newSocket = io(SERVER_URL);
        setSocket(newSocket);
    }, []);

    useEffect(() => {
        if (!socket) {
            return;
        }

        const handleNotification = (payload: NotificationPayload) => {
            console.log(`Received notification: ${JSON.stringify(payload)}`);
            // Do something with the notification, e.g. show a push notification
        };

        socket.on('notification', handleNotification);

        return () => {
            socket.off('notification', handleNotification);
        };
    }, [socket]);

    return null;
};

export default NotificationListener;
