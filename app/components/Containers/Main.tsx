'use client'
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'

const Main = ({ children }: Container) => {
  const pathname = usePathname()

  return (
    <body className={`${pathname === '/' ? 'body-bg-beige' : 'body-bg-black'}`}>
      {children}
      <Toaster position="bottom-center" />
    </body>
  )
}
export default Main
