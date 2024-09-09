import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <div className="flex w-screen items-end ">
      <ThemeSwitcher />
    </div>
  );
}

export default Header;
