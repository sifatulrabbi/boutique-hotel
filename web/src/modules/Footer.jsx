import React from "react";
import {Link} from "react-router-dom";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import {v4} from "uuid";

const links = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Find rooms",
    path: "/rooms",
  },
  {
    title: "Locations",
    path: "/locations",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full flex flex-col px-container py-6 border-t-[1px] border-gray-400/60">
      {/* top part */}
      <div className="flex flex-col justify-center items-center gap-8 mt-6 md:flex-row md:justify-between md:items-start">
        {/* logo */}
        <span className="text-xl font-bold text-textPrimary w-full block text-center md:text-left">
          Boutique Hotel
        </span>

        {/* footer links */}
        <div className="w-full flex flex-col justify-center items-center gap-6 md:flex-row md:justify-end">
          {links.map((link) => (
            <Link
              key={v4()}
              to={link.path}
              className="text-sm text-textPrimary hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* horizontal line */}
      <div className="w-full bg-gray-400/60 h-px mt-12 mb-4" />

      {/* bottom part */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {/* copyright tag */}
        <div className="flex flex-row justify-center items-center text-xs gap-1">
          <span>© 2022 Boutique House</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <Link to="/" className="underline">
            Terms
          </Link>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <Link to="/" className="underline">
            Privacy
          </Link>
        </div>
        {/* Social media links */}
        <div className="flex flex-row justify-center items-center gap-6">
          <Link to="/">
            <FaFacebook className="text-2xl fill-textLight hover:fill-textPrimary" />
          </Link>
          <Link to="/">
            <FaTwitter className="text-2xl fill-textLight hover:fill-textPrimary" />
          </Link>
          <Link to="/">
            <FaInstagram className="text-2xl fill-textLight hover:fill-textPrimary" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
