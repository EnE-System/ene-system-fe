import React from "react";
import { getCurrentYear } from "../utils/CurrentYear";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p className="text-sm">© {getCurrentYear()} EnT Systems. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
