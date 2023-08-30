import Container from '../components/Containers/Container'
import Content from '../components/Containers/Content'
import styles from '../css/about.module.css'
import { myFont } from '../utils/functions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Florent Baleinier - About',
  description:
    'I work in Web Design as a freelancer. I also provide my marketing experience to make your SEO even better and build a solid online brand.',
  openGraph: {
    title: 'Florent Baleinier - About',
    description:
      'I work in Web Design as a freelancer. I also provide my marketing experience to make your SEO even better and build a solid online brand.',
  },
}

export default function About() {
  return (
    <Container className={styles.about}>
      <div className={`${styles.aboutGrid} grid`}>
        {/* about content */}
        <article className={styles.content}>
          <Content
            className={myFont.className}
            duration={1}
            transition_delay={0.8}
          >
            About
          </Content>
          <header className={`${styles.header} ${myFont.className}`}>
            <h3>I'm Florent. A front-end developer and problem solver.</h3>
          </header>
          <div className={styles.description}>
            <p>
              As a Digital Marketing graduate , web development has always been
              part of my work. Social media strategies, SEO improvements and
              websites content updates were my daily routines.
            </p>
            <p>
              Fast forward to 2023 and I’ve tried it all, from HTML/CSS, PHP,
              No-Code Web Development. Everything I have done, small or big, has
              been a vital stepping stone for where I am today.
            </p>
            <p>
              What excites me most about being a web designer is being able to
              create things that have purpose and solve real problems. It goes
              beyond just creating functional websites and involves having a
              passion for designing experiences and solutions that help people.
            </p>
          </div>
        </article>
        {/* about quote */}
        <div className={styles.quote}>
          <blockquote>
            <p
              className={myFont.className}
            >{`“What separates design from art is that design is meant to be...
              functional.”`}</p>
            <footer>—Cameron Moll</footer>
          </blockquote>
        </div>
      </div>
    </Container>
  )
}
