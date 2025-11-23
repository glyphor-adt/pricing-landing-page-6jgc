import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">Anytown, CA 12345</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-zinc-200 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-zinc-200 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-zinc-200 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here (e.g., FontAwesome, Heroicons) */}
              {/* Example using text links (replace with actual icons) */}
              <a href="#" className="hover:text-zinc-200 transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="hover:text-zinc-200 transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="hover:text-zinc-200 transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-700 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Example Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;