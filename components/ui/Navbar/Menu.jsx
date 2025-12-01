"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";

import PrimaryBtn from '@/components/ui/Buttons/PrimaryBtn/PrimaryBtn';

export function Menu() {
  const navItems = [
    { name: "Home", link: "#features" },
    { name: "About", link: "#pricing" },
    { name: "Projects", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-all duration-500 ${isScrolled ? "fixed top-0 left-0 z-50" : "relative"
        }`}
    >
      <Navbar
        className={`transition-all duration-500 ${isScrolled ? "" : "pt-4"
          }`}
      >
        <NavBody>
          <NavbarLogo
            className={`transition-all duration-500 ${isScrolled ? "scale-90" : "scale-100"
              }`}
          />

          <NavItems items={navItems} />

          <div>
            <PrimaryBtn text="Get in touch" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-5">
              <PrimaryBtn text="Get in touch" />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
