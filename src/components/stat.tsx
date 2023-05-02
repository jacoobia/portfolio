import { Icon } from '@iconify/react';
import { useState } from 'react';
import './stat.scss';

export type StatValue = {
    name?: string;
    value: number;
    colour?: string;
};

type Props = {
    name: string;
    description?: string;
    icon: string;
    showValueNames?: boolean;
    colour?: string;
    values: StatValue[];
    iconPopDelay?: number;
};

const Stat = (props: Props) => {
    const { name, icon, description, showValueNames, colour, values, iconPopDelay } = props;

    const [popping, setPopping] = useState(false);
    const [isPopped, setIsPopped] = useState(false);

    if (iconPopDelay && !isPopped) {
        setTimeout(() => {
            setIsPopped(true);
            setPopping(true);
            setTimeout(() => {
                setPopping(false);
            }, 100);
        }, iconPopDelay);
    }

    return (
        <div className='flex flex-col md:flex-row select-none'>
            <div className='w-1/2 md:w-3/5 mb-1 flex items-center flex-grow' style={{ color: colour }}>
                <Icon className={`hover:transform hover:scale-125 ${popping ? 'scale-125' : ''}`} icon={icon} fontSize={50} />
                <span className='px-4 text-lg lg:text-2xl'>
                    {name} {description && <span className='text-base'>({description})</span>}
                </span>
            </div>
            <div className='bg-gray-200 h-10 mb-4 dark:bg-gray-700 flex items-center flex-grow' style={{ width: '100%' }}>
                {values.map((val: StatValue, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`bg-gray-600 h-10 ${val.name}`}
                            style={{
                                width: `${(val.value * 100) / 10}%`,
                                backgroundColor: val.colour ? val.colour : colour,
                                display: 'flex'
                            }}
                        >
                            {showValueNames && <span className='text-sm sm:text-xl w-full h-full flex items-center justify-center'>{val.name}</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stat;
