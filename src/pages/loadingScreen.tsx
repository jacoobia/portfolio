import React, { useEffect, useState } from 'react';

const puns = [
    'Unshifting all the bits...',
    'Constructing additional pylons...',
    'Installing new dependencies...',
    'Optimizing for IE6...',
    'Compiling shaders...',
    'Refactoring spaghetti code...',
    'Clearing merge conflicts...',
    'Deploying to production...',
    'Testing on Internet Explorer...',
    'Debugging with console.log()...',
    'Trying to fix the undefined error...',
    'Chasing down race conditions...',
    'Updating documentation...',
    'Reticulating splines...',
    'Forking the repository...',
    'Searching for the missing semicolon...',
    'Using Comic Sans for error messages...',
    'Abandoning ship and starting over...',
    'Designing with tables...',
    'Trying to understand other peoples code...'
];

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const [punIndex, setPunIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPunIndex((index) => (index + 1) % puns.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isLoading) {
            const timeout = setTimeout(() => {
                setProgress((progress) => Math.min(progress + 1, 100));
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [isLoading, progress]);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [progress]);

    const pun = puns[punIndex];

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {isLoading ? (
                <div className='relative w-96 h-6 border-4 border-black overflow-hidden'>
                    <div className='absolute top-0 left-0 h-full bg-green-500' style={{ width: `${progress}%` }}></div>
                </div>
            ) : (
                <button className='px-4 py-2 text-black font-bold text-lg bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-all'>
                    Click to Continue
                </button>
            )}
            {isLoading && <div className='mt-6 text-white text-center'>{pun}</div>}
        </div>
    );
};

export default LoadingScreen;
