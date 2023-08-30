import Container from './components/Containers/Container'
import styles from './css/home.module.css'
import Header from './components/Home/Header'
import { links } from './utils/constants'
import Link from 'next/link'
import localFont from 'next/font/local'
import Navigation from './components/Home/Navigation'

export default function Home() {
  return (
    <Container className={styles.home}>
      <Header />
      <Navigation />
    </Container>
  )
}
