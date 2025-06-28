// src/components/Footer.jsx

import React from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#e8ded3] text-gray-800 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {renderLogoSection()}
        {renderCustomerServices()}
        {renderAssistanceSection()}
        {renderCurrencyAndCompany()}
      </div>
    </footer>
  );
}

// ✅ 1. Logo Section
function renderLogoSection() {
  return (
    <div>
      <img src="/logo.png" alt="Elisha Logo" className="h-14 mb-2" />
    </div>
  );
}

// ✅ 2. Customer Services
function renderCustomerServices() {
  const links = [
    "Contact Us",
    "Delivery & Orders",
    "Returns & Exchanges",
    "Terms & Conditions",
    "Privacy Policy",
    "Track My Order",
    "Payment Guides",
  ];

  return (
    <div>
      <h4 className="font-bold mb-2">CUSTOMER SERVICES</h4>
      <ul className="space-y-1">
        {links.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ 3. For Assistance
function renderAssistanceSection() {
  return (
    <div>
      <h4 className="font-bold mb-2">FOR ASSISTANCE</h4>
      <p>Whatsapp : 0322 6773534</p>
      <p>Email : elisha@gmail.com</p>
      <div className="w-20 h-[1px] bg-black my-3"></div>
      <div className="flex space-x-4 text-lg">
        <FaFacebookF />
        <FaTiktok />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
}

// ✅ 4. Currency + Company Section
function renderCurrencyAndCompany() {
  const companyLinks = ["About us", "Careers", "Store locator", "Store addresses"];

  return (
    <div>
      <h4 className="font-bold mb-2">CURRENCY</h4>
      <div className="flex items-center gap-2 mb-4">
        <FaFlag className="text-green-700" />
        <span>PRK</span>
      </div>

      <h4 className="font-bold mb-2">COMPANY</h4>
      <ul className="space-y-1">
        {companyLinks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
