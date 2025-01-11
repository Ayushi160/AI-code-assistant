import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <span className="font-serif italic text-xl cursor-pointer text-blue-500" href="/">
        Bolt-Clone
      </span>
      <div className="flex gap-4">
        <Button variant="outline">Sign In</Button>
        <Button className="bg-blue-500 " variant="outline">Get Started</Button>
      </div>
    </div>
  );
}

export default Header;




