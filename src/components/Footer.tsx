import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { footer } from "../data";

const Footer = () => {
  return (
    <div className="p-16 border-t-2 flex">
      {footer.map((category) => (
        <div key={category.title} className="flex-1 space-y-6">
          <h4 className="text-xl font-semibold">{category.title}</h4>
          <ul className="space-y-3 text-sm font-semibold">
            {category.links.map((subcategories) => (
              <li key={subcategories.name}>
                <Link href="/">{subcategories.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex-1 space-y-6">
        <h4 className="text-xl">SOCIAL MEDIA</h4>
        <div className="space-y-3">
          <span>Znajdziesz nas na:</span>
          <div className="flex gap-4">
            <Link href="/">
              <FaFacebook size={40} />
            </Link>
            <Link href="/">
              <FaSquareInstagram size={40} />
            </Link>
            <Link href="/">
              <FaSquareXTwitter size={40} />
            </Link>
            <Link href="/">
              <FaYoutube size={40} />
            </Link>
          </div>
          <div className="flex gap-2 items-center py-2">
            <Phone size={36} />
            <span className="text-lg font-medium">
              Kontakt: +48 883 031 005
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={36} />
            <span className="text-lg font-medium">
              Mail: froglonhouse@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
