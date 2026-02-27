import React from "react";
import styles from "./About.module.scss";

const teamMembers = [
  {
    name: "علی محمدی",
    role: "مدیر پروژه",
    img: "/images/team1.jpg",
  },
  {
    name: "امیر حسینی",
    role: "توسعه‌دهنده فرانت‌اند",
    img: "/images/team2.jpg",
  },
  {
    name: "مهراد رضایی",
    role: "طراح رابط کاربری",
    img: "/images/team3.jpg",
  },
];

function About() {
  return (
    <main className={styles.about}>
      <section className={styles.about__hero}>
        <div className={styles.about__hero_overlay}></div>
        <h1 className={styles.about__hero_title}>با میولند آشنا بشید</h1>
      </section>

      <section className={styles.about__info}>
        <div className={styles.about__info_image}>
          <img src="/images/about.webp" alt="درباره میولند" />
        </div>

        <div className={styles.about__info_content}>
          <h2 className={styles.about__info_title}>درباره میولند</h2>
          <p className={styles.about__info_text}>
            میولند یک برند خلاق و نوآور است که با تمرکز بر کیفیت، طراحی مدرن و
            تجربه کاربری عالی فعالیت می‌کند. ما باور داریم که جزئیات کوچک،
            تفاوت‌های بزرگ می‌سازند.
          </p>
        </div>
      </section>

      <section className={styles.about__team}>
        <h2 className={styles.about__team_title}>تیم میولند</h2>

        <div className={styles.about__team_list}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.about__team_card}>
              <img
                className={styles.about__team_avatar}
                src={member.img}
                alt={member.name}
              />
              <div className={styles.about__team_description}>
              <h3 className={styles.about__team_name}>{member.name}</h3>
              <span className={styles.about__team_role}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
