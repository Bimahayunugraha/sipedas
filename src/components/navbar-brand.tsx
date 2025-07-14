import Link from "next/link";

export const NavbarBrand = () => {
  return (
    <Link
      href="/"
      className="text-background cursor-pointer text-2xl font-bold tracking-normal text-nowrap"
      title="Analisis Sipedas"
    >
      ANALISA SIPEDAS
    </Link>
  );
};
