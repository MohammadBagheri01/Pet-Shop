import React from 'react'
import styles from './Footer.module.scss'
import Nav from '../../Nav/Nav'
import Social from '../../Social/Social'
import { FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__brand}>
          <h2 className={styles.title}>میــو‌لند</h2>
          <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
        <div className={styles.footer__list}>
          <Nav/>
        </div>
        <div className={styles.footer__socialMedia}>
         <Social tooltip='Instagram'><FiInstagram /></Social>
         <Social tooltip='Telegram'><BiLogoTelegram /></Social>
         <Social tooltip='Whatsapp'><FaWhatsapp /></Social>
         <Social tooltip='X'><FaXTwitter /></Social>
         <Social tooltip='Linkedin'><CiLinkedin /></Social>
        </div>

      </div>
    </footer>
  )
}

export default Footer