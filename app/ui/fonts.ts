import { Noto_Sans, Poppins } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'block',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'block',
})

export { notoSans, poppins}