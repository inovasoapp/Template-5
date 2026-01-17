import Image from "next/image";

import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default function Footer3() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-primary-soft border-t border-default py-4">
      <div className="w-full mx-auto max-w-7xl p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <Image
            src="/logos/logo-text.svg"
            alt=""
            width={220}
            height={200}
            className="w-32 h-auto lg:w-[220px]2"
          />

          <ul className="flex gap-2 text-zinc-500">
            <Link href="#">
              <InstagramLogoIcon
                className="w-6 h-6 hover:text-amber-500 transition-colors"
                weight="light"
              />
            </Link>
            <Link href="#">
              <XLogoIcon
                className="w-6 h-6 hover:text-amber-500 transition-colors"
                weight="light"
              />
            </Link>
            <Link href="#">
              <FacebookLogoIcon
                className="w-6 h-6 hover:text-amber-500 transition-colors"
                weight="light"
              />
            </Link>
            <Link href="#">
              <LinkedinLogoIcon
                className="w-6 h-6 hover:text-amber-500 transition-colors"
                weight="light"
              />
            </Link>
          </ul>
        </div>

        <span className="block text-sm font-light text-muted-foreground sm:text-center">
          © {currentYear}{" "}
          {/* <Link href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </Link> */}
          Dominio Corporal . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
