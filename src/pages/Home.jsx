import React from 'react'
import styles from '../styles/home.module.scss'
import { Link } from 'react-router-dom'
import Man from '../images/image.png'
const Home = () => {
  return (
    <main>
     <div className={styles.container}>
      <div className={styles.text}>
      <h1>Hi, my</h1>
      <h1>name is Maxim.</h1>
      <h1>I am a beginner front-end developer</h1>
      <h1>I am good with technology <span>HTML, CSS, JavaScript</span></h1>
      <h1>I write code <span>REACT.JS, MERN</span></h1>
      <h1>My works <Link to={'/projects'}><span>Мои работы</span></Link></h1>
      </div>
      <div className={styles.image}>
      <img src={Man} />
      </div>
     </div>
    </main>
  )
}

export default Home