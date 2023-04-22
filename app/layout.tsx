// Import la font direct depuis Next
import { Nunito } from 'next/font/google';
//Import du CSS
import './globals.css';
// Import des Composants
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
// metadata premet de setup les info dans le <head>
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};
// Appel de la font avec comme format Latin
const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}> {/*pour utilier la font */}
        <ClientOnly >
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};
