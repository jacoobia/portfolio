import Level from '../components/level';
import Stat, { StatValue } from '../components/stat';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const ExperinceValues: StatValue[] = [
    { name: 'Personal', value: 4, colour: '#5fcfa8' },
    { name: 'Professional', value: 3, colour: '#cfc35f' }
];

const StatScreen = () => {
    const navigate = useNavigate();
    const exitClick = () => navigate('/');
    return (
        <div className='flex justify-center items-center h-screen w-screen select-none'>
            <div className='w-11/12 h-11/12 flex flex-col sm:w-3/5 sm:h-3/4 p-8 relative select-none'>
                <div className='absolute top-4 left-0 cursor-pointer hover:transform hover:scale-125' onClick={exitClick}>
                    <Icon icon='mdi:arrow-left-bold' fontSize={75} />
                </div>
                <div className='flex items-center text-3xl'>
                    <div className='h-28 w-28 border-2 border-cyan-50 rounded-full overflow-hidden mr-7 shadow-lg shadow-black'>
                        <img src='/me.jpg' alt='Character image' className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-5xl font-bold'>Jacob</span>
                        <span className='text-sm font-medium opacity-80'>Full Stack Developer</span>
                    </div>
                </div>
                <Level />
                <Stat
                    icon='mdi:cards-heart'
                    iconPopDelay={575}
                    name='Experience'
                    showValueNames
                    description='7 years'
                    colour='#5fcfa8'
                    values={ExperinceValues}
                />
                <Stat icon='jam:sword-f' iconPopDelay={650} name='Problem Solving' colour='#b34644' values={[{ value: 8 }]} />
                <Stat icon='material-symbols:computer' iconPopDelay={725} name='Frontend' colour='#d67656' values={[{ value: 6 }]} />
                <Stat icon='ic:sharp-shield' iconPopDelay={800} name='Backend' colour='#3e7ea8' values={[{ value: 7 }]} />
                <Stat icon='bxs:coffee-alt' iconPopDelay={875} name='Coffee Addiction' colour='#734522' values={[{ value: 10 }]} />
            </div>
        </div>
    );
};

export default StatScreen;
