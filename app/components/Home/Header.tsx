import styles from '../../css/home.module.css'
import Content from '../Containers/Content'

const Header = () => {
  return (
    <header className={styles.header}>
      <Content duration={0.6} transition_delay={0.6}>
        Florent Baleinier
      </Content>
      <Content tags="h3" duration={0.6} transition_delay={0.7}>
        Web Developer / React
      </Content>
      <Content tags="h3" duration={0.6} transition_delay={0.7}>
        Currently working as a freelancer
      </Content>
    </header>
  )
}
export default Header
