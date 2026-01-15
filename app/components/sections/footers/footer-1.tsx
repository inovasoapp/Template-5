import Link from "next/link";
import { Command } from "lucide-react";

export default function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Command className="h-8 w-8 text-zinc-500" strokeWidth={1} />
            <span className="self-center text-2xl font-light whitespace-nowrap text-zinc-500">
              Flowbite
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-light text-muted-foreground sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Termes of use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <span className="block text-sm font-light text-muted-foreground sm:text-center">
          © {currentYear}{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
