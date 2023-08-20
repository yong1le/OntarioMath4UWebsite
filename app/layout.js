import { Roboto } from 'next/font/google'
import Appbar from '../components/Appbar'
import { ThemeProvider, createTheme } from '@mui/material'

const roboto = Roboto({ subsets: ['latin'], weight: "300" })


export const metadata = {
  title: 'Ontario Math 4U',
  description: 'Ontario Math 4U',
}

const theme = {
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={roboto.className}>
          <Appbar />
          {children}
        </body>
      </html>
    </ThemeProvider>

  )
}
