import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-12">
      <div className="hidden sm:block">
        <Image
          src="/logo_and_text.png"
          alt="we craft code"
          height={250}
          width={340}
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/logo_and_text.png"
          alt="we craft code"
          height={125}
          width={220}
          quality={75}
          priority={true}
        />
      </div>
      <Link
        href="https://discord.gg/Z87c4twuaX"
        prefetch={false}
        role="button"
        className="flex gap-3 font-semibold bg-gray-50 hover:bg-gray-300 text-gray-900 hover:text-gray-700 px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <div>Join our Discord Channel</div>
        <FaDiscord className="inline-block w-6 h-6" />
      </Link>
      <div className="sm:text-xl text-gray-50 sm:w-[600px] text-center p-8">
        We are a small group of people who leverage learning and programming
        through motivation, mentoring and craftsmanship.
      </div>
      <a
        href="mailto:wecraftcode@gmail.com"
        className="hover:underline font-semibold text-red-500 hover:text-red-700 transition-colors duration-300 ease-in-out"
      >
        wecraftcode@gmail.com
      </a>
      <div className="flex flex-col items-center text-xs">
        <div>2024 © we craft code</div>
        <div>all rights reserved</div>
      </div>
    </div>
  );
}
