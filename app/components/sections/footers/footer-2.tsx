import Link from "next/link";

export default function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-primary-soft border-t border-default py-4">
      <div className="w-full mx-auto max-w-7xl p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <span className="block text-sm font-light text-muted-foreground sm:text-center">
          © {currentYear}{" "}
          {/* <Link href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </Link> */}
          Dominio Corporal . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-light text-muted-foreground sm:mb-0">
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Termos de uso
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Cookies
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
