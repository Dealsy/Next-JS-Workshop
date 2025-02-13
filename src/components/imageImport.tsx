import bwm from './../../public/images/jpg/bmw.jpg'
import Image from 'next/image'

export default function ImageImport() {
  return <Image src={bwm} alt="BMW S1000RR" width={800} height={1000} placeholder="blur" />
}
