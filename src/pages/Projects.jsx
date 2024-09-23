import React from 'react'
import styles from '../styles/projects.module.scss'
import { Link } from 'react-router-dom'
import Project from '../components/Project'
import PHOTO from '../images/projectOne.jpg'
import PHOTOTWO from '../images/projectTwo.png'
const Projects = () => {
  return (
    <section className={styles.project}>
      <h1 className={styles.text}>Мои работы</h1>
      <div className={styles.wrapper}>
        <Link to={'https://github.com/Monerus/Non-metallic-materials'}>
        <Project 
        title={'Многостраничный сайт — Нерудные материалы, Адаптив'}
        image={PHOTO}
        />
        </Link>
      <Link to={'https://github.com/Monerus/deploy-react-js'}>
       <Project 
      title={'Многостраничный сайт — интернет-магазин'}
      image={PHOTOTWO}
      />
      </Link>
      </div>
    </section>
  )
}

export default Projects