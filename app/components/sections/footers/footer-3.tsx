import Image from "next/image";

export default function Footer3() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-primary-soft border-t border-default py-4">
      <div className="w-full mx-auto max-w-7xl p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <Image
          src="/logos/logo-text.svg"
          alt=""
          width={220}
          height={200}
          className="w-32 h-auto lg:w-[220px]2"
        />

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
