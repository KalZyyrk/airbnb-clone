'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

// Sert a attendre que la page soit bien charger

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}

export default ClientOnly;