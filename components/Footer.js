import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-3xl font-serif font-bold tracking-widest text-cream">
              ASEFA<span className="text-champagne font-light">PARFUMERIE</span>
            </Link>
            <p className="text-cream/60 font-light leading-relaxed">
              Votre destination privilégiée pour les fragrances d&apos;exception et le luxe olfactif. Redéfinissez votre présence avec nos collections exclusives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-all duration-300">
                <FaWhatsapp />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-all duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-champagne font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 text-cream/70 font-light">
              <li><Link href="/" className="hover:text-champagne transition-colors">Accueil</Link></li>
              <li><Link href="/post/phomme" className="hover:text-champagne transition-colors">Parfums Homme</Link></li>
              <li><Link href="/post/pfemme" className="hover:text-champagne transition-colors">Parfums Femme</Link></li>
              <li><Link href="/post/spray" className="hover:text-champagne transition-colors">Sprays &amp; Déos</Link></li>
              <li><Link href="/post/huile" className="hover:text-champagne transition-colors">Huiles de Corps</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-champagne font-bold uppercase tracking-widest text-sm mb-8">Service Client</h4>
            <ul className="flex flex-col gap-4 text-cream/70 font-light">
              <li><Link href="#" className="hover:text-champagne transition-colors">Contactez-nous</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">Livraison &amp; Retours</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">Suivre ma commande</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-champagne font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-cream/60 font-light mb-6 text-sm">
              Inscrivez-vous pour recevoir nos offres exclusives et découvrir nos nouveautés en avant-première.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-champagne transition-colors"
              />
              <button className="bg-champagne text-charcoal font-bold tracking-widest uppercase text-xs py-3 rounded-lg hover:bg-cream transition-colors">
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs font-light tracking-widest">
            © {new Date().getFullYear()} ASEFA PARFUMERIE. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-6 text-cream/40 text-[10px] uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-cream transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-cream transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
