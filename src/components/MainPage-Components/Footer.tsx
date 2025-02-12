import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-16 border-t-2 flex">
      <div className="flex-1 space-y-6">
        <h4 className="text-xl">Zakupy</h4>
        <ul className="space-y-2 text-sm font-semibold">
          <li>
            <Link href="/">Dodatkowe gwarancja</Link>
          </li>
          <li>
            <Link href="/">Motanż komputer</Link>
          </li>
          <li>
            <Link href="/">Usługi</Link>
          </li>
          <li>
            <Link href="/">Ubezpiecznie</Link>
          </li>
          <li>
            <Link href="/">Karta Podarunkowa</Link>
          </li>
          <li>
            <Link href="/">Leasing</Link>
          </li>
          <li>
            <Link href="/">Raty</Link>
          </li>
          <li>
            <Link href="/">Zakupy dla firmy</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 space-y-6">
        <h4 className="text-xl">Pomocne linki</h4>
        <ul className="space-y-2 text-sm font-semibold">
          <li>
            <Link href="/">Pomoc</Link>
          </li>
          <li>
            <Link href="/">Sposoby dostawy i płatności</Link>
          </li>
          <li>
            <Link href="/">Zwroty i reklamacje</Link>
          </li>
          <li>
            <Link href="/">Aktualne promocje</Link>
          </li>
          <li>
            <Link href="/">Poradniki</Link>
          </li>
          <li>
            <Link href="/">Wszystkie kategorie produktowe</Link>
          </li>
          <li>
            <Link href="/">Całodobowe wsparcie Klienta</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 space-y-6">
        <h4 className="text-xl">guguGaga</h4>
        <ul className="space-y-2 text-sm font-semibold">
          <li>
            <Link href="/">O nas</Link>
          </li>
          <li>
            <Link href="/">Dane firmy i numer konta</Link>
          </li>
          <li>
            <Link href="/">Newsletter</Link>
          </li>
          <li>
            <Link href="/">Nagrody i certyfikaty</Link>
          </li>
          <li>
            <Link href="/">Kariera</Link>
          </li>
          <li>
            <Link href="/">Dla prasy</Link>
          </li>
          <li>
            <Link href="/">Ustawienia cookies</Link>
          </li>
          <li>
            <Link href="/">Regulamin sklepu</Link>
          </li>
          <li>
            <Link href="/">Koszty gospodarowania odpadami</Link>
          </li>
          <li>
            <Link href="/">Dotacje i dofinansowania</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 space-y-6">
        <h4 className="text-xl">Marketplace</h4>
        <ul className="space-y-2 text-sm font-semibold">
          <li>
            <Link href="/">O Marketplace</Link>
          </li>
          <li>
            <Link href="/">Zostań sprzedawcą</Link>
          </li>
        </ul>
      </div>
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
            <span className="text-lg font-medium">Kontakt: +48 883 031 005</span>
          </div>
          <div className="flex gap-2 items-center">
          <Mail size={36}/>
          <span className="text-lg font-medium">Mail: froglonhouse@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
