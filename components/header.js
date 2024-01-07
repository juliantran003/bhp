// Imports
import Link from "next/link";
import menu from "../public/JSON/menu.json";

export default function Header() {
  return (
    <header className="header">
      <div className="header_title">
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
