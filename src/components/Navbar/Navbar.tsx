import React from "react";
import Button from "@components/ui/Button";

export const Navbar: React.FC = () => {
  return (
    <nav className="h-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 border-b border-orange-300 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-baseline space-x-1">
        <h1 className="text-3xl font-bold text-white drop-shadow-sm font-quokka">
          Quokka JS
        </h1>
        <span className="text-yellow-100 font-quokka text-sm">v0.2.0</span>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          href="https://github.com/UmutAkturk14/QuokkaDocs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:bg-white/20 font-semibold transition-colors"
        >
          GitHub
        </Button>
        <Button
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:bg-white/20 font-semibold transition-colors"
        >
          NPM
        </Button>
      </div>
    </nav>
  );
};
