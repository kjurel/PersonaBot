import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <div
      className="relative flex flex-col md:flex-row"
      style={{ height: availableHeight }}
    >
      <div className="md:bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 md:h-full md:w-[50%] items-center flex justify-center h-[50%] w-full bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/logo.png"
            alt="Logo"
            width="150"
            height="150"
            className="rounded-full"
          />
          <p className="xl:text-[7rem] text-[4rem] font-mono">Persona</p>
          <p className="xl:text-[7rem] text-[4rem] font-mono">Bot</p>
        </div>
      </div>
      <div className="md:bg-gradient-to-r from-blue-500 to-indigo-500 absolute right-0 md:h-full md:w-[50%] h-[50%] w-full bottom-0 bg-gradient-to-b from-blue-500 to-indigo-500">
        <Link
          href="/temp_traits"
          className="flex flex-col items-center justify-items-center w-full h-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Personality Traits
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            MBTI Personality Types{" "}
          </p>
        </Link>
        <Link
          href="/abstract"
          className="flex flex-col items-center justify-items-center w-full h-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Comprehension Analysis
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Provide us with an Abstract and ask any questions from it!
          </p>
        </Link>
      </div>
    </div>
  );
}
