import styled from 'styled-components';

export const TopHeaderBox = styled.div`
    position: relative;
    height: 13rem;
    width: 100%;
    overflow: hidden;
`;

export const LowerHeaderBox = styled.div`
    position: relative;
    height: 13rem;
    width: 100%;
    overflow: hidden;
`;

export const H1 = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 16rem;
    letter-spacing: .5rem;
`;

export const HR = styled.hr`
    height:.1rem;
    border: none;
    width: 30vw;
    background: rgba(0,0,0,.5);
`;