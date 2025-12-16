import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Md. Shahnewaz Zaman</h3>
            <p className="text-gray-400 mb-4">
              Candidate for Sherpur-2 Constituency (Nakla-Nalitabari)
              <br />
              Bangladesh Parliament Election - Upcoming..
            </p>
            <p className="text-sm text-gray-500 italic">
              "Allah is Almighty"
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-white transition-colors">
                  Political Vision
                </Link>
              </li>
              <li>
                <Link href="/constituency" className="text-gray-400 hover:text-white transition-colors">
                  Constituency Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="mt-1 text-primary-400" />
                <div>
                  <div className="text-gray-400">Bangladesh:</div>
                  <a href="tel:+8801728014014" className="hover:text-primary-400 transition-colors">
                    +880 17 2801 4014
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="mt-1 text-primary-400" />
                <div>
                  <div className="text-gray-400">USA:</div>
                  <a href="tel:+19175616554" className="hover:text-primary-400 transition-colors">
                    +1 (917) 561-6554
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-primary-400" />
                <div className="text-gray-400">
                  Kaya Kori (Baliganj Bazar)
                  <br />
                  Nakla, Sherpur, Mymensingh
                  <br />
                  Bangladesh
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Md. Shahnewaz Zaman. All rights reserved.</p>
          <p className="mt-2">Standing for Truth, Morality, and Service to Humanity</p>
        </div>
      </div>
    </footer>
  );
}

