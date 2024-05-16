import resources from "../public/JSON/resourcesUse.json";
import resourcesNot from "../public/JSON/resourcesDontUse.json";
import further from "../public/JSON/furtherReading.json";

export default function Resources() {
  return (
    <div className="resources">
      <div>
        {" "}
        <h3>Printing</h3>
        <p>
          The HP Indigo is a commonly used commercial digital printer. Below we
          have compiled a list of printing companies, split into those who do
          and those who do not use HP printers. <br></br>
          <br></br>Printing companies continually update and change the
          technology they use, so it is worth emailing to ask which 'press' your
          project will be printed on. Companies are generally very happy to
          share this information with their customers, so do not feel worried
          about asking for clarification.
          <span className="green">
            {" "}
            It is your right and your responsibility to be informed about the
            ways your products are produced.
          </span>{" "}
          <br></br>
          <br></br>
          <span className="green">
            The following companies do not use HP products and are safe to print
            with whilst following the boycott{" "}
          </span>
          (however please always double check, to ensure you have the most
          up-to-date information):
        </p>
        <h3>UK</h3>
        {resources.map((resource) => {
          return (
            <p key={resource.title}>
              {resource.title}
              <br></br>
              <a href={"mailto:" + resource.mail}>{resource.mail}</a> <br></br>
              <a href={resource.website}>{resource.website}</a>
            </p>
          );
        })}
        <p>
          {" "}
          <span className="red">
            The following businesses do use HP products, please do not print
            with these places:
          </span>
        </p>
        <h3>UK</h3>
        {resourcesNot.map((resource) => {
          return (
            <p key={resource.title}>
              {resource.title}
              <br></br>
              <a href={"mailto:" + resource.mail}>{resource.mail}</a> <br></br>
              <a href={resource.website}>{resource.website}</a>
            </p>
          );
        })}
        <p>
          <span className="italic">
            (The above list was compiled in December 2023 and last checked in
            May 2024)
          </span>
        </p>
        <p>
          This list currently covers U.K. based printers, however we are keen
          for it to span as many global locations as possible. If you would like
          to research and contribute a list of printers for a location not
          listed, please send it to us at{" "}
          <a href="mailto:printagainstapartheid@proton.me">
            printagainstapartheid@proton.me
          </a>{" "}
          and we will publish it here.<br></br>
          <br></br>
          If you are a business featured on this list and would like to chat
          about making a commitment to move away from HP products, please get in
          touch via email.
        </p>
        <br></br>
        <br></br>
        <h3>Further Reading</h3>
        {further.map((further) => {
          return (
            <p>
              {further.title}
              <br></br>
              <a href={further.link}>{further.link}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
}
