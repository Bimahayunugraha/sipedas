import { NavbarBrand } from "./navbar-brand";
import { NavbarItem } from "./navbar-item";
import { Container } from "./ui/container";

export const Navbar = () => {
  return (
    <header className="border-border bg-primary/95 supports-[backdrop-filter]:bg-primary/75 sticky top-0 z-50 w-full border-b drop-shadow-sm backdrop-blur">
      <Container className="flex h-12 w-full items-center">
        <div className="flex w-full items-center gap-14">
          <NavbarBrand />
          <NavbarItem />
        </div>
      </Container>
    </header>
  );
};
