import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Section } from "../style"
import { H1, TopHeaderBox, LowerHeaderBox, HR } from "./two.style"

const Two = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.from(lineRef.current, 1.5, { width: "0" }, 0.3);
        tl.from(bottomRef.current, 2.5, { bottom: "-45rem" }, "<1.5");
        tl.from(topRef.current, 2.5, { top: "24rem" }, "<");
    }, []);

    return (
        <Section id="two">
            <TopHeaderBox>
                <H1 ref={topRef}>ONE</H1>
            </TopHeaderBox>
            <HR ref={lineRef} />
            <LowerHeaderBox>
                <H1 ref={bottomRef}>TWO</H1>
            </LowerHeaderBox>
        </Section>
    )
}

export default Two
