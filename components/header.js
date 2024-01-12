// Imports
import Link from "next/link";
import menu from "../public/JSON/menu.json";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <div className="header_title" onClick={() => router.push("/")}>
        <h1>
          PRINT<br></br> AGAINST<br></br> APARTHEID
        </h1>

        <h2>BOYCOTT HEWLETT & PACKARD</h2>
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
