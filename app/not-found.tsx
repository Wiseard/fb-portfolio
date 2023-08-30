import Link from 'next/link'
import Container from './components/Containers/Container'
import styles from './css/error.module.css'
import { links } from './utils/constants'
import { myFont } from './utils/functions'
import Content from './components/Containers/Content'

const NotFound = () => {
  return (
    <Container className={styles.error}>
      <div className={`${styles.errorFlex} flex`}>
        <h2 className={myFont.className}>
          Error, I couldn't find the page you were looking for...
        </h2>
        <div className={styles.linksContainer}>
          <h3>You should try one of these links :</h3>
          <div className={styles.links}>
            {links.map(({ name, url }) => {
              return (
                <Content
                  duration={1}
                  transition_delay={0.8}
                  tags="h3"
                  key={name + url}
                >
                  <Link href={url}>{name}</Link>
                </Content>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NotFound
