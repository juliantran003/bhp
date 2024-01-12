// Imports
import { CopyToClipboard } from "react-copy-to-clipboard";
import text from "../public/JSON/template.json";

export default function Template() {
  return (
    <div className="template">
      <div className="template_email">
        <CopyToClipboard
          text={text}
          // onCopy={(text, result) => console.log(result)}
        >
          <button className="copypaste">Copy</button>
        </CopyToClipboard>
        <h2>Email Template</h2>
        <p>
          Dear [Congressman’s Last Name],
          <br></br>
          <br></br>I am writing as a concerned constituent from the great state
          of (Your State Here) to express my deep reservations about the
          allocation of my tax dollars towards supporting the Israeli
          government’s actions in Gaza and the West Bank.<br></br>
          <br></br>
          The situation in these regions has been marked by profound suffering,
          and the restrictions on access to food, water, medical care, and
          humanitarian aid have led to a dire humanitarian crisis. Some would
          argue that the actions of the Israeli government in these areas may
          constitute what international law defines as war crimes. I
          unequivocally oppose my tax dollars potentially contributing to these
          circumstances.<br></br>
          <br></br>
          However, it is imperative that I stress my unwavering support for the
          release of Israeli hostages held by Hamas. This crisis is a tragic
          reminder of the human toll that conflicts exact, regardless of which
          side of the divide one resides. My call for a humanitarian approach
          extends to the innocent people of Israel and Palestine who are
          enduring immense pain and loss as a result of the ongoing hostilities.
          <br></br>
          <br></br>I want to emphasize that my stance is focused on condemning
          the actions of governments and militant groups, not the individuals
          who are caught in the crossfire. It is crucial to distinguish between
          political leadership and the people who yearn for peace, stability,
          and a life free from violence. As my representative, I urge you to be
          outspoken in denouncing the Israeli government’s actions against
          Palestine while also condemning the acts of terror perpetrated by
          Hamas. Additionally, I implore you to call for the immediate release
          of Israeli hostages.<br></br>
          <br></br>
          Equally vital is the need for careful consideration of the words we
          use. Anti-Semitism and Islamophobia have reached concerning levels,
          and our language can significantly influence public sentiment and
          behavior. I request your thoughtful and sensitive approach to this
          issue in your public statements.<br></br>
          <br></br>I kindly ask for your attention to these concerns, and I look
          forward to hearing about your actions in response.<br></br>
          <br></br>
          Thank you for your service to our great state and our nation.<br></br>
          <br></br>
          Sincerely,<br></br>
          <br></br>
          [Your Name]
        </p>
      </div>
    </div>
  );
}
