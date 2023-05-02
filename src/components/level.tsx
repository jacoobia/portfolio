import { useEffect, useState } from 'react';
import './level.scss';
import moment from 'moment-timezone';

const birthDate = '19970214';

const Level = () => {
    const [age, setAge] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [exp, setExp] = useState<number>(0);

    useEffect(() => {
        calculations();
    }, []);

    const calculations = () => {
        let daysBetween = 0;
        let daysTillNext = 0;

        const now = moment.utc();
        const tyb = thisYear();
        const lyb = lastYear();
        const nyb = nextYear();

        const tybDiff = tyb.diff(now, 'days'); //if negative, it has passed

        if (tybDiff >= 0) {
            daysBetween = tyb.diff(lyb, 'days');
            daysTillNext = tyb.diff(now, 'days');
        } else {
            daysBetween = nyb.diff(tyb, 'days');
            daysTillNext = nyb.diff(now, 'days');
        }

        const percentage = (daysTillNext * 100) / daysBetween;
        setProgress(Math.round(percentage));

        const daysLived = now.diff(moment.utc(birthDate, 'YYYYMMDD'), 'days');
        setExp(daysLived);

        const yearsLived = now.diff(moment.utc(birthDate, 'YYYYMMDD'), 'years');
        setAge(Math.floor(yearsLived));
    };

    const thisYear = () => {
        const now = moment.utc();
        const date = moment.utc(birthDate, 'YYYYMMDD');
        date.set('year', now.year());
        return date;
    };

    const lastYear = () => {
        const date = thisYear();
        const last = date.year() - 1;
        date.set('year', last);
        return date;
    };

    const nextYear = () => {
        const date = thisYear();
        const next = date.year() + 1;
        date.set('year', next);
        return date;
    };

    return (
        <div className='level-container select-none'>
            <span>{age}</span>
            <div className='level-bar'>
                <div className='level-text'>
                    <span>Level</span>
                    <span>{progress}%</span>
                </div>
                <div
                    className='bg-gray-200 h-5 mb-4 dark:bg-gray-700'
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, width: '175px' }}
                >
                    <span style={{ fontSize: '12px', textAlign: 'center', zIndex: 1, position: 'absolute', marginLeft: '10px' }}>{exp}xp</span>
                    <div
                        className='bg-gray-600 h-5'
                        style={{ width: `${progress}%`, backgroundColor: '#3bcc58', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Level;
