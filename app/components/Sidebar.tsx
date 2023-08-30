'use client'
import { usePathname } from 'next/navigation'
import styles from '../css/sidebar.module.css'
import { socials } from '../utils/constants'
import Link from 'next/link'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className={styles.sidebar}>
      {pathname === '/' ? (
        <ul className={styles.socialLinks}>
          {socials.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      ) : (
        <Link className={styles.homeLink} href="/">
          home
        </Link>
      )}
      <div
        className={`${styles.underline} ${
          pathname !== '/' ? styles.underlineBeige : ''
        }`}
      ></div>
      <p
        className={`${styles.copy} ${pathname !== '/' ? styles.copyBeige : ''}`}
      >
        &copy;{new Date().getFullYear()}
      </p>
    </aside>
  )
}
export default Sidebar
