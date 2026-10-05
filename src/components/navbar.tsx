import { useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { profile } from "@/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond Work" },
  { id: "contact", label: "Contact" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => /^[A-Z]/.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 font-display text-lg font-semibold text-foreground"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-surface-muted border border-border font-mono text-sm text-accent-brand">
            {getInitials(profile.name)}
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  data-active={activeId === link.id}
                  className={cn(
                    "relative",
                    activeId === link.id && "text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-3 right-3 h-px bg-accent-brand transition-opacity",
                      activeId === link.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <Button size="sm" asChild>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Let's Talk
            </a>
          </Button>
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface">
            <SheetHeader>
              <SheetTitle>{profile.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      activeId === link.id
                        ? "bg-surface-muted text-foreground"
                        : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button className="w-full" asChild>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                  Let's Talk
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
