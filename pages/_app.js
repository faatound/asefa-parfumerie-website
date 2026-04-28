import "@/styles/globals.css";
import { Lato, Playfair_Display } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} ${playfair.variable} font-sans bg-cream text-charcoal min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
