import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    const location = useLocation(); 
    const { pathname } = location;
    const splitLocation = pathname.split("/"); 

    return(
        <div className="navigation">
            <div className="logo" >
                ProjectName
            </div>
            <nav className="item">
                <ul className="ul">
                    <li className={splitLocation[1] === "" ? 'active' : ""}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={splitLocation[1] === "foam-roll" ? 'active' : ""}>
                        <Link to='/foam-roll'>Foam Roll</Link>
                    </li>
                    <li className={splitLocation[1] === "abs" ? 'active' : ""}>
                        <Link to='/abs'>Abs</Link>
                    </li>
                    <li className={splitLocation[1] === "knee-strengthening" ? 'active' : ""}>
                        <Link to='/knee-strengthening'>Knee Strengthening</Link>
                    </li>
                    <li className={splitLocation[1] === "stretches" ? 'active' : ""}>
                        <Link to='/stretches'>Stretches</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;