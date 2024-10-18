import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useState, useEffect } from 'react';

export default function Chart({ item, isVisible }) {
    const { img, name, value, colorClass } = item;
    
    const [newValue, setNewValue] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setNewValue((prev) => {
                    if (prev < value) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return value; // Вернем значение без изменений
                    }
                });
            }, 20);
            return () => clearInterval(interval);
        }
    }, [value, isVisible]);

    const getGradient = (value) => {
        const red = Math.min(255, Math.max(0, (1 - value / 100) * 255));
        const green = Math.min(255, Math.max(0, ((value - 20) / 60) * 255));
        return `rgb(${red}, ${green}, 0)`;
    };

    const settings = {
        width: 220,
        height: 220,
        value: newValue,
    };

    return (
        <div className="skills__div-box">
            <img src={img} alt="" className="skills__img" />

            <h2 className={`skills__title-sec ${colorClass}`}>{name}</h2>
            <Gauge
                {...settings}
                cornerRadius="50%"
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`] : {
                        fontSize: 45,
                        fill: '#ffaa00 !important',
                        stroke: '#ffaa00',
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: getGradient(newValue),
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
            
        </div>
    );
}
