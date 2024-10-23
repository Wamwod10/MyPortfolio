import React, { useState, useEffect, useRef } from 'react';
import "./skills.scss";
import Chart from './chart/Chart';

const Skills = () => {
    const SkillsRef = useRef(null)

    const [index, setIndex] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInterval(() => {
                        setIsVisible(true);
                    }, 1000);
                    observer.unobserve(SkillsRef.current);
                }
            });
        });

        if (SkillsRef.current) {
            observer.observe(SkillsRef.current);
        }

        return () => {
            if (SkillsRef.current) {
                observer.unobserve(SkillsRef.current);
            }
        };
    }, [])

    const skillsChart = [
        {
            img: "public/skills/react.svg",
            name: "React",
            value: 85,
            colorClass: "color-1",
            bgClass: "bg1"
        },
        {
            img: "public/skills/sass.svg",
            name: "Sass",
            value: 90,
            colorClass: "color-2",
            bgClass: "bg2"
        },
        {
            img: "public/skills/ts.svg",
            name: "TypeScript",
            value: 80,
            colorClass: "color-3",
            bgClass: "bg3"
        },
        {
            img: "public/skills/vercel.svg",
            name: "Vercel",
            value: 80,
            colorClass: "color-4",
            bgClass: "bg4"
        },
        {
            img: "public/skills/js.svg",
            name: "JavaScript",
            value: 60,
            colorClass: "color-5",
            bgClass: "bg5"
        },
        {
            img: "public/skills/html.svg",
            name: "HTML",
            value: 100,
            colorClass: "color-6",
            bgClass: "bg6"
        },
        {
            img: "public/skills/css.svg",
            name: "CSS",
            value: 100,
            colorClass: "color-7",
            bgClass: "bg7"
        },
        {
            img: "public/skills/bootstrap.svg",
            name: "Bootstrap",
            value: 75,
            colorClass: "color-8",
            bgClass: "bg8"
        },
        {
            img: "public/skills/github.svg",
            name: "GitHub",
            value: 75,
            colorClass: "color-9",
            bgClass: "bg9"
        }
    ];

    return (
        <div className="skills">

            <div className="container">
                <p className="skills__txt">Skills</p>
                <h2 className="skills__title">What I know <span>¿</span></h2>
                <div className="skills__box" ref={SkillsRef} >
                    {
                        skillsChart.map((item, index) => (
                            <Chart item={item} key={index} isVisible={isVisible} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Skills

