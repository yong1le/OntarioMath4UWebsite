import { Roboto } from 'next/font/google'
import Appbar from './components/Appbar'

const roboto = Roboto({ subsets: ['latin'], weight: "300" })


export const metadata = {
  title: 'Ontario Math 4U',
  description: 'Ontario Math 4U',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Appbar/>
        {children}
      </body>
    </html>
  )
}
