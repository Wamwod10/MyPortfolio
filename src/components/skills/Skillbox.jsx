import React, { useState, useEffect } from 'react';

const SkillBox = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; 
        const increment = Math.floor(value / (duration / 100)); 

        const timer = setInterval(() => {
            if (start < value) {
                start += increment;
                if (start > value) start = value;
                setCount(start);
            } else {
                clearInterval(timer);
            }
        }, 100); 

        return () => clearInterval(timer);
    }, [value]);

    return <h2 className="skills__box-title">{count}%</h2>;
};

export default SkillBox;