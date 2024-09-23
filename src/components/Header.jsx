import React from 'react'
import styles from '../styles/header.module.scss'
import { NavLink } from 'react-router-dom'
import { Github, Telegram } from '../images/icons'
const Header = () => {
  return (
    <header>
        <NavLink to={'/'}>
        <p className={styles.logo}>&lt;Max Monerus/&gt;</p>
        </NavLink>
        <nav>
            <NavLink to={'/projects'}>
            Мои работы
            </NavLink>
        </nav>
        <ul className={styles.contact}>
            <li>
            <NavLink>
                    <img src={Github} alt="github" width={30}/>
            </NavLink>
            </li>
            <li>
            <NavLink>
                    <img src={Telegram} alt="telegram" width={30}/>
            </NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header