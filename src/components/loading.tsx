import { useEffect, useState } from 'react';

interface CSSPropertiesWithCustomProps extends React.CSSProperties {
    '--n'?: string;
    '--f'?: string;
}

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress) => progress + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container mx-auto mt-64 text-center relative w-96'>
            <i className='fas fa-3x fa-battery-full icon text-yellow-400 animate-icon'></i>

            <div className='progress2 rounded-full bg-white'>
                <div className='progress-bar2 h-6 rounded-full bg-yellow-400 transition-all duration-400'></div>
                <div
                    className='loader absolute bottom-8 left-72 font-mono text-2xl text-yellow-400'
                    style={{ '--n': `${progress}`, '--f': `${progress}%` } as CSSPropertiesWithCustomProps}
                ></div>
            </div>
        </div>
    );
};

export default Loading;
