// Import la font direct depuis Next
import { Nunito } from 'next/font/google';
//Import du CSS
import './globals.css';
// Import des Composants
import getCurrentUser from './actions/getCurrentUser';

import ToasterProvider from './providers/ToasterProvider';

import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
// metadata premet de setup les info dans le <head>
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};
// Appel de la font avec comme format Latin
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}> {/*pour utilier la font */}
        <ClientOnly >
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  );
};
