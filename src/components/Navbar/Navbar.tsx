import React from "react";
import Button from "@components/ui/Button";

export const Navbar: React.FC = () => {
  return (
    <nav className="h-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 border-b border-orange-300 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-white drop-shadow-sm">Ramda</h1>
        <span className="text-yellow-100 text-sm">v0.29.0</span>
      </div>

      <div className="flex items-center space-x-4">
        <Button className="text-white hover:bg-white/20 transition-colors">
          GitHub
        </Button>
        <Button className="text-white hover:bg-white/20 transition-colors">
          NPM
        </Button>
      </div>
    </nav>
  );
};
