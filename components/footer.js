// Imports
import Image from "next/image";

// IMG
import logo from "../public/img/PAA logo_cream.svg";
import insta from "../public/img/insta.svg";
import mail from "../public/img/mail.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="header_container">
          <div className="header_logo" onClick={() => router.push("/")}>
            <Image src={logo} alt="logo" fill />
          </div>
          <h1>
            Print<br></br>Against<br></br>Apartheid
          </h1>
        </div>
        <div className="links">
          <div>
            <a
              href="mailto:printagainstapartheid@proton.me"
              className="socials"
            >
              {/* <div className="icon_container">
                <Image src={mail} alt="mail" fill />
              </div> */}
              Email : printagainstapartheid@proton.me
            </a>
            <a
              href="https://www.instagram.com/printagainstapartheid/"
              className="socials"
            >
              {/* <div className="icon_container">
                <Image src={insta} alt="insta" fill />
              </div> */}
              Instagram : @printagainstapartheid
            </a>
          </div>
          <p>
            Thank you to{" "}
            <a href="https://abcdinamo.com/" className="dinamo">
              {" "}
              Dinamo Typefaces{" "}
            </a>{" "}
            for kindly donating the typeface.
          </p>
        </div>
      </div>
    </footer>
  );
}
