import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Logo from "../../assets/logo_wolf.svg";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside" }>
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="logo" />
                </Link>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link">
                                    <i className="icon-home"></i>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="/#about" className="nav__link">
                                    <i className="icon-user-follow"></i>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="/#portfolio" className="nav__link">
                                    <i className="icon-briefcase"></i>
                                </Link>
                            </li>
                            
                            <li className="nav__item">
                                <Link to="/#services" className="nav__link">
                                    <i className="icon-layers"></i>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="/#contact" className="nav__link">
                                    <i className="icon-bubble"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">The Wolf in the Tech World</span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    );
};

export default Sidebar;