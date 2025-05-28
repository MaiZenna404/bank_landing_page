import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/svg/Zynor-removebg-preview.svg";

import type { ReactElement } from "react";

// Data for the Footer

// Social Media Links
interface SocialMediaLink {
  icon: ReactElement;
}
const socialMediaLinks: SocialMediaLink[] = [
  { icon: <i className="pi pi-facebook text-2xl" /> },
  { icon: <i className="pi pi-twitter text-2xl" /> },
  { icon: <i className="pi pi-instagram text-2xl" /> },
  { icon: <i className="pi pi-linkedin text-2xl" /> },
];

// Products Links
interface ProductLink {
  name: string;
  url?: string;
}

const productsLinks: ProductLink[] = [
  { name: "Features", url: "#" },
  { name: "Security", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "Resources", url: "#" },
  { name: "Referral Program", url: "#" },
];

// Company Links
interface CompanyLink {
  name: string;
  url?: string;
}

const companyLinks: CompanyLink[] = [
  { name: "About", url: "#" },
  { name: "Careers", url: "#" },
  { name: "Press", url: "#" },
  { name: "News", url: "#" },
];

// Legal Links
interface LegalLink {
  name: string;
  url?: string;
}

const legalLinks: LegalLink[] = [
  { name: "Privacy Policy", url: "#" },
  { name: "Terms of Service", url: "#" },
  { name: "Security & Cookies", url: "#" },
  { name: "Licenses", url: "#" },
  { name: "Banking Partners", url: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="w-full px-4 py-8 text-white/85">
        {/* Newsletter Section */}
        <section className="mt-8 mb-8 py-12 flex flex-col items-center">
          <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Stay Updated with Zynor Bank
          </h6>
          <p className="font-light text-lg mb-6 text-center text-green-400 max-w-2xl">
            Subscribe to our newsletter for the latest updates, financial tips,
            and exclusive offers.
          </p>
          <div className="flex items-center justify-center mt-1 w-1/3 mx-auto p-5">
            <Input
              type="email"
              placeholder="Enter your email"
              className="p-4"
            />
            <Button className="bg-green-700 hover:bg-green-800 text-base ml-2">
              Subscribe
              <i className="pi pi-arrow-right ml-2" />
            </Button>
          </div>
        </section>
        {/* Footer Links Section */}
        <section className="flex flex-row flex-wrap justify-center mb-8 mt-15 max-w-6xl mx-auto gap-24 text-lg">
          <div className="w-64">
            <div className="flex flex-row items-center mb-4">
              <img
                src={Logo}
                alt="Zynor Bank Logo"
                className="w-32 h-32"
              />
              <h3 className="text-2xl font-semibold mb-2">
                <span className="text-emerald-600">Z</span>ynor{" "}
                <span className="text-emerald-600">B</span>ank
              </h3>
            </div>
            <p>Modern banking for everyone.</p>
            <p>Secure, transparent, and designed for the digital age.</p>
            <ul className="flex flex-row mt-8">
              {socialMediaLinks.map((item, index) => (
                <li key={index} className="inline-block mr-4 rounded">
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-48">
            <h3 className="text-2xl font-semibold mb-8">
              <span className="text-emerald-600">P</span>roduct
            </h3>
            <ul>
              {productsLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-48">
            <h3 className="text-2xl font-semibold mb-8">
              <span className="text-emerald-600">C</span>ompany
            </h3>
            <ul>
              {companyLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-48">
            <h3 className="text-2xl font-semibold mb-8">
              <span className="text-emerald-600">L</span>egal
            </h3>
            <ul>
              {legalLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Copyright section */}
        <section>
          <div className="border-t border-green-400/50 pt-6 mt-8 text-center w-2/3 mx-auto items-center flex flex-col justify-between">
            <div className="text-sm text-green-400/75 mt-8">
              © {new Date().getFullYear()} Zynor Bank. All rights reserved.
            </div>
            <div className="mt-6 flex space-x-6 text-md font- text-green-400/75">
              <a href="#" className=" hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className=" hover:text-white">
                Terms of Service
              </a>
              <a href="#" className=" hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
