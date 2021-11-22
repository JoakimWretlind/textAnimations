import React from 'react';
import { motion } from "framer-motion";
import { MainHeader } from './one.style';
import { Section } from '../style';

const Home = () => {
    const line1 = "And then the Sun";
    const line2 = "gazes into you..."

    const sentence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <Section>
            <MainHeader as={motion.h1}
                className="load-screen--message"
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {line1.split("").map((char, index) => {
                    return (
                        <motion.span
                            key={char + "-" + index}
                            variants={letter}
                        >
                            {char}
                        </motion.span>
                    )
                })}
                <br />
                {line2.split("").map((char, index) => {
                    return (
                        <motion.span
                            key={char + "-" + index}
                            variants={letter}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </MainHeader>
        </Section>
    )
}

export default Home
