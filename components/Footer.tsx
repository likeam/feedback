import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t bg-background mt-auto">
      <div className=" container mx-auto px-4 py-5">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <span className=" text-sm text-muted-foreground">
            © {new Date().getFullYear()} HB Digital. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
