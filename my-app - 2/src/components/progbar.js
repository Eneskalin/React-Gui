import React, { useEffect, useState } from 'react';
import data from '../data.json'
import './Navigation.css';

function ProgressBar() {
    const { overview } = data;
    const [filled, setFilled] = useState(overview[5].xNavigation*0.31);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (filled < 100 && isLoading) {
            setTimeout(() => setFilled(prev => prev + 1), 50);
        }
    }, [filled, isLoading]);

    return (
        <div>
            <div className='progressbar' style={{
                width: `${filled}%`,
            }}>
                <span className='progressbarPercentage'>{filled/0.31} m</span>
            </div>
            
            </div>
    );
}

export default ProgressBar;
