'use client'
import { motion as m } from 'framer-motion'
import { links } from '../../utils/constants'
import Link from 'next/link'
import localFont from 'next/font/local'
import styles from '../../css/home.module.css'

const myFont = localFont({
  src: [
    {
      path: '../../../public/fonts/grandslang.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        {links.map(({ name, url }) => {
          return (
            <m.li
              key={name}
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{
                duration: 0.3,
                delay: 0.7,
                ease: [0.61, 0, 0.4, 1],
              }}
            >
              <Link className={myFont.className} href={url}>
                {name}
              </Link>
            </m.li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navigation
