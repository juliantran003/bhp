// IMPORTS
import Header from "./header";
import Footer from "./footer";
import Newsletter from "./newsletter";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <title>Print Against Apartheid</title>
      <meta
        name="description"
        content="PRINT AGAINST APARTHEID is a collective boycott of all HP-branded goods and services in solidarity with Palestinian liberation.
        In November 2015 The Hewlett-Packard Company (HP) split into two companies, HP Inc. for consumer hardware such as PCs and printers, and Hewlett Packard Enterprise (HPE) for enterprise products and services (business and government services). Both HP-branded corporations have played key roles in Israeli apartheid, providing services to the Israeli army and police, making them complicit in settler colonialism and the racial segregation of Palestinians "
        key="desc"
      />
      <meta property="og:title" content={"Print Against Apartheid"} />
      <meta
        property="og:description"
        content="PRINT AGAINST APARTHEID is a collective boycott of all HP-branded goods and services in solidarity with Palestinian liberation.
        In November 2015 The Hewlett-Packard Company (HP) split into two companies, HP Inc. for consumer hardware such as PCs and printers, and Hewlett Packard Enterprise (HPE) for enterprise products and services (business and government services). Both HP-branded corporations have played key roles in Israeli apartheid, providing services to the Israeli army and police, making them complicit in settler colonialism and the racial segregation of Palestinians"
      />
      <meta property="og:image" content="/favicon.ico" />
      <meta
        name="keywords"
        content="Print Against Apartheid, Hewlett-Packard Company (HP)"
      />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      <main>{children}</main>
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}
