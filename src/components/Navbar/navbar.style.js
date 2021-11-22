import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 26rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled(Link)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1.2rem;
    transition: .3s ease-out;
    &:hover{
        background: #ececec;
        cursor: pointer;
    }
    &.active{
        background: #000;
        color: #fff;
    }
`;