import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";


export default function Social() {
  return (
    <div className='text-2xl flex justify-center text-gray-800 gap-5'>
      <Link href='https://twitter.com/abramkadabramm' className='social'>
        <BiLogoTwitter />
      </Link>
      <Link href='https://linkedin.com/in/bbimo' className='social'>
        <BiLogoLinkedin />
      </Link>
      <Link href='https://github.com/abram-stack' className='social'>
        <BiLogoGithub />
      </Link>
    </div>
  );
}
