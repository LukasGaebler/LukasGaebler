import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.scss"
import {BiChevronDown} from "react-icons/bi"
import Fade from "react-reveal/Fade";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>

      
      <div className={styles.header}>
        <div className={styles.profilePic}>
          <Image className={styles.profilePicImage} src={"/cio_talk.jpg"} width={260} height={275}/>
        </div>
        <h1>Lukas Gäbler</h1>
        <Fade bottom delay={200}>
          <h2>Software Developer / Consultant</h2>
        </Fade>
        <Fade bottom delay={200}>
          <p className={styles.email}>
            <Link href={"mailto:lukas.gaebler@gmail.com"}>lukas.gaebler@gmail.com</Link>
          </p>
        </Fade>
        <Fade bottom delay={200}>
          <p className={styles.skills}>
            Software Development (Web, Mobile, Desktop)
          </p>
          <p className={styles.skills}>
            React, Angular, C#, Java, Microservices, TDD
          </p>
          <p className={styles.skills}>
            Agile Project Management
          </p>
        </Fade>
        {/*<p className={styles.down}>
          <BiChevronDown></BiChevronDown>
      </p>*/}
      </div> 
    </>
  )
}

export default Home
