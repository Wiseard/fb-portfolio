'use client'
import { motion as m } from 'framer-motion'

const Content = ({
  children,
  tags = 'h2',
  transition_delay,
  duration,
  className,
}: Content) => {
  return (
    <div className="content">
      {tags === 'h3' ? (
        <m.h3
          className={className}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: transition_delay,
            duration: duration,
            ease: [0.61, 0, 0.4, 1],
          }}
        >
          {children}
        </m.h3>
      ) : (
        <m.h2
          className={className}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: transition_delay,
            duration: duration,
            ease: [0.61, 0, 0.4, 1],
          }}
        >
          {children}
        </m.h2>
      )}
    </div>
  )
}
export default Content
