// Imports
import Link from "next/link";
import menu from "../public/JSON/menu.json";
import { useRouter } from "next/router";
import Image from "next/image";

// IMG
import logo from "../public/img/PAA logo_cream.svg";

export default function Header() {
  const router = useRouter();
  console.log(router.path);
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo" onClick={() => router.push("/")}>
          <Image src={logo} alt="logo" fill />
        </div>
        <h1>
          Print<br></br>Against<br></br>Apartheid
        </h1>
      </div>

      <menu>
        {menu.map((option) => {
          return (
            <Link href={option.url} key={option.url}>
              <span className={router.pathname === option.url ? "red" : ""}>
                {option.title}
              </span>
            </Link>
          );
        })}
      </menu>
    </header>
  );
}
