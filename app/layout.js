import { Roboto } from 'next/font/google'
import Appbar from './components/Appbar'
import Script from 'next/script'

const roboto = Roboto({ subsets: ['latin'], weight: "300" })


export const metadata = {
  title: 'Ontario Math 4U',
  description: 'Ontario Math 4U',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Appbar />
        {children}
        <Script strategy="beforeInteractive" src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6">
          {`console.log("Hello world")`}
        </Script>
      </body>
    </html>
  )
}
