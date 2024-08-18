import Logo from "../public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import HeaderBtnLayout from "./headerButtons/HeaderBtnLayout";

export default function Header() {
  return (
    <header className="w-full px-[20px] py-[25px] flex items-center justify-between">
      <div>
        {" "}
        <Link href="./" className="cursor-pointer flex items-center">
          <Image
            src={Logo}
            alt="header-logo"
            width={40}
            height={40}
            priority
            className="mr-[10px] object-contain"
            placeholder="empty"
          />
          <h1>Promptopia</h1>
        </Link>
      </div>
      <HeaderBtnLayout />
    </header>
  );
}
