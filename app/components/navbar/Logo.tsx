'use client';
// Import 
import { useRouter } from "next/navigation";
import Image from "next/image" //Import du composant Next Image pour afficher les images

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt='Logo'
      className='hidden md:block cursor-pointer object-scale-down'
      height='100'
      width='100'
      src='/images/logo.png'
    />
  )
}

export default Logo;