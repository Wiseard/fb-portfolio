import Container from '../components/Containers/Container'
import Content from '../components/Containers/Content'
import styles from '../css/work.module.css'
import { projects } from '../utils/constants'
import { myFont } from '../utils/functions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Florent Baleinier - Projects',
  keywords: ['ecommerce', 'web project', 'web design', 'responsive', 'react'],
  description:
    "This is a showcase of my latest projects built with React, which is the javascript library I'm using daily.",
  openGraph: {
    title: 'Florent Baleinier - Projects',
    description:
      "This is a showcase of my latest projects built with React, which is the javascript library I'm using daily.",
  },
}

const Work = () => {
  return (
    <Container className={styles.work}>
      <div className={`${styles.workGrid} grid`}>
        {/* work content */}
        <header className={styles.header}>
          <Content duration={0.3} transition_delay={0.8}>
            Work
          </Content>
          <Content tags="h3" duration={0.5} transition_delay={0.8}>
            This is a showcase of my latest projects built with React, which is
            the javascript library I'm using daily. Click on the one you want to
            discover the demo.
          </Content>
          <Content tags="h3" duration={0.5} transition_delay={0.8}>
            Web development is constantly evolving and so as my role as a
            front-end developer. I'm still learning and gaining experience every
            day.
          </Content>
        </header>
        {/* work project list */}
        <section className={styles.projectList}>
          {projects.map(
            ({ title, description, project_number: number, url }) => {
              return (
                <article key={title} className={styles.project}>
                  <a className={myFont.className} href={url} target="_blank">
                    {title}
                  </a>
                  <h4>
                    <span>{number} - </span>
                    {description}
                  </h4>
                </article>
              )
            }
          )}
        </section>
      </div>
    </Container>
  )
}
export default Work
