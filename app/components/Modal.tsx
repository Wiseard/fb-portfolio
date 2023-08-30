'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion as m, useAnimationControls } from 'framer-motion'
import { getModalStyle } from '../utils/functions'

const Modal = () => {
  const pathname = usePathname()
  const controls = useAnimationControls()
  const styles = getModalStyle(pathname)

  useEffect(() => {
    controls.start({ height: ['100%', '0%'] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <m.div
      className={`modal ${pathname !== '/' ? 'modal-beige' : ''}`}
      style={styles}
      initial={{ height: '100%' }}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: [0.61, 0, 0.4, 1],
      }}
    ></m.div>
  )
}

export default Modal
