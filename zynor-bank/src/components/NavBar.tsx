import { Button } from "@/components/ui/button";

export function NavBar() {

    {/* Navbar links */ }
    interface Navlink {
        name: string;
        href?: string;
    }

    const NavLinks: Navlink[] = [
        { name: "Features", href: "#features" },
        { name: "Testimonials", href: "#features" },
        { name: "Pricing", href: "#features" },
        { name: "FAQ", href: "#features" },
    ]

  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-20">
                      
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="font-heading font-bold text-white text-2xl">
                <span className="text-emerald-500">Z</span>ynor{" "}
                <span className="text-emerald-500">B</span>ank
              </div>
            </div>

            {/* Web format */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                
                              {NavLinks.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.href ? link.href : "#"}
                                  className="text-green-400 hover:inline-block px-3 py-1 hover:rounded-full hover:bg-emerald-500/75 hover:text-white font-medium text-sm"
                                >
                                  {link.name}
                                </a>
                              ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="font-medium hover:bg-gray-900/80">
                Sign In
              </Button>
              <Button className="bg-green-700 hover:bg-green-800 font-medium items-center">
                <i className="pi pi-sign-in pr-2"/>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
