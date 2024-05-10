// Imports
import Link from "next/link";
import menu from "../public/JSON/menu.json";
import { useRouter } from "next/router";
import Image from "next/image";

// IMG
import logo from "../public/img/PAA logo_cream.svg";

export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <div className="header_logo" onClick={() => router.push("/")}>
        <Image src={logo} alt="logo" fill />
      </div>

      <menu>
        {menu.map((option) => {
          return (
            <Link href={option.url} key={option.url}>
              {option.title}
            </Link>
          );
        })}
      </menu>
    </header>
  );
}
