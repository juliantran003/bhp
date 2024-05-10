// IMPORTS
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <main>{children}</main>
    </>
  );
}
