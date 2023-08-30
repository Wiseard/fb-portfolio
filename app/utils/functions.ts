import localFont from 'next/font/local'

export function getModalStyle(pathname: string): React.CSSProperties {
  const modalStyles: React.CSSProperties =
    pathname === '/'
      ? {
          bottom: 0,
          height: '0%',
        }
      : {
          top: 0,
          height: '0%',
        }

  return modalStyles
}

export const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/grandslang.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})
