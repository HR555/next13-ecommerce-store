"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import Hamburger from "./hamburger";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import { Category } from "@/types";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getData = async () => {
      let categories = await getCategories();
      setCategories(categories);
    }
    setIsMounted(true);
    getData();
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
  

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
        <MainNav data={categories} open={hamburgerOpen} />
                
        <div className="relative block z-40 md:hidden" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
        </div>
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;