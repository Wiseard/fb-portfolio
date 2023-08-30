'use client'
import { motion as m } from 'framer-motion'

const Container = ({ children, className }: Container) => {
  return (
    <m.section
      className={`container ${className}`}
      initial={{ visibility: 'hidden' }}
      animate={{ visibility: 'visible' }}
      exit={{ visibility: 'hidden' }}
    >
      {children}
    </m.section>
  )
}
export default Container
