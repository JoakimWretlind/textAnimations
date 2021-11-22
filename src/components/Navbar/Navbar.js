import { useState } from 'react';
import { Nav, NavUL, NavLink } from "./navbar.style";
import { navbarData } from './navbarData';

const Navbar = () => {
    const [isActive, setIsActive] = useState()

    return (
        <Nav>
            <NavUL>
                {navbarData.map((item, index) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={() => setIsActive(index)}
                        className={`${index === isActive && 'active'}`}
                    >{item.title}</NavLink>
                ))}
            </NavUL>
        </Nav>
    )
}

export default Navbar
