import React from 'react'
import styles from '../styles/projects.module.scss'
import { Link } from 'react-router-dom'
const Project = ({ title, image, link }) => {
  return (
    <div className={styles.component}>
        <div className={styles.text}>
            <h1>{title}</h1>
        </div>
        <div>      
            <img src={image} width={400} height={400}/>
            <p>GitHub</p>
            <Link to={link} />
        </div>
    </div>
  )
}

export default Project