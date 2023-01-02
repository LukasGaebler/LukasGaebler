import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.scss"
import {Fade} from "react-reveal";
import linkedIn from "../public/linkedin.png"

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.profilePic}>
            <Image className={styles.profilePicImage} src={"/cio_talk.jpg"} width={260} height={275} alt="Lukas Gäbler"/>
          </div>
          <h1>Lukas Gäbler</h1>
          <Fade bottom delay={200}>
            <h2>Software Developer / Consultant</h2>
          </Fade>
          <Fade bottom delay={200}>
            <div className={styles.contactContainer}>
              <div className={styles.email}>
                <Link href={"mailto:lukas.gaebler@gmail.com"}>lukas.gaebler@gmail.com</Link>
              </div>
              <div className={styles.linkedInLink}>
                <div className={styles.linkedInLogoContainer}>
                  <a href="https://www.linkedin.com/in/lukas-gaebler/">
                    <Image  src={linkedIn} alt="linked in" />
                  </a>
                </div>
              </div>
            </div>
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
        </div>
      </div> 
    </>
  )
}

export default Home
