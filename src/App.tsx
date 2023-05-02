import { useState } from 'react';
import './App.scss';
import StatScreen from './pages/statScreen';

const App = () => {
    const [showStatScreen, setShowStatScreen] = useState(false);
    return (
        <div className='flex justify-center items-center h-screen select-none'>
            {!showStatScreen && <button onClick={() => setShowStatScreen(true)}>Stats</button>}
            {showStatScreen && <StatScreen callback={() => setShowStatScreen(false)} />}
        </div>
    );
};

export default App;
