import './globals.css';
import { Inter, Karla, Rubik_Mono_One, Space_Grotesk } from 'next/font/google';

import Navbar from './components/Navbar';
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] });
const grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-grotesk',
});
const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });
const rubik = Rubik_Mono_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const metadata = {
  title: 'Console Botanesia',
  description: 'Coding Journal, Programming Web Development',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${rubik.variable}  ${karla.variable} ${grotesk.variable} `}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
