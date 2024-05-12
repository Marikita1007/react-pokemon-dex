import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Pokedex</NavLink>
                </li>
                <li>
                    <NavLink to="/team">Team</NavLink>
                </li>
                <li>
                    <NavLink to="/logs">Logs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;