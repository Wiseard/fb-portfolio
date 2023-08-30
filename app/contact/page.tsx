import Form from '../components/Contact/Form'
import Container from '../components/Containers/Container'
import Content from '../components/Containers/Content'
import styles from '../css/contact.module.css'
import { myFont } from '../utils/functions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Florent Baleinier - Contact',
  description: 'Need a beautiful, well-structured website ? Get in touch.',
  openGraph: {
    title: 'Florent Baleinier - Contact',
    description: 'Need a beautiful, well-structured website ? Get in touch.',
  },
}

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <div className={`${styles.contactGrid} grid`}>
        {/* about content */}
        <header className={styles.header}>
          <Content
            className={myFont.className}
            duration={1}
            transition_delay={0.8}
          >
            Hello.
          </Content>
          <div className={styles.socials}>
            <p>
              Wether you're looking to collaborate, if you have a project in
              mind or are simply interested in finding out more, get in touch
              and let’s get things moving.
            </p>
            <p>
              Email:&nbsp;
              <a href="mailto:florentbaleinier@gmail.com" target="_blank">
                florentbaleinier@gmail.com
              </a>
            </p>
            <p>
              My socials:&nbsp;
              <a
                href="http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/"
                target="_blank"
              >
                Linkedin
              </a>
              &nbsp;/&nbsp;
              <a href="https://github.com/Wiseard" target="_blank">
                Github
              </a>
            </p>
          </div>
        </header>
        {/* contact form */}
        <Form />
      </div>
    </Container>
  )
}
export default Contact
