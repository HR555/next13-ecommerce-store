"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
  open: boolean;
}

const MainNav: React.FC<MainNavProps> = ({
  data, open
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav
      className="mx-0 md:mx-6 flex items-center pl-4 md:pl-0 md:space-x-4 lg:space-x-6 flex-col md:flex-row absolute md:relative pt-10 md:pt-0 z-40 w-screen md:w-max left-0 top-10 md:top-0"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-xl md:text-sm font-medium transition-colors hover:text-black hidden md:block bg-white w-screen md:w-auto pb-6 pl-4 md:p-0',
            route.active ? 'text-black' : 'text-neutral-500', open ? 'block':'hidden'
          )}
        >
          {route.label}
      </Link>
      ))}
      <Link href={'/about'} className={cn(
            'text-xl md:text-sm font-medium transition-colors hover:text-black hidden md:block bg-white w-screen md:w-auto pb-6 pl-4 md:p-0',
            pathname === `/about` ? 'text-black' : 'text-neutral-500', open ? 'block':'hidden'
          )}>About</Link>
    </nav>
  )
};

export default MainNav;
