// Imports
import { useState } from "react";
// import ml from "../public/ml.html";

export default function Newsletter() {
  // States
  const [subscriberEmail, setSubscriberEmail] = useState("");

  // Function
  const handleSubmit = async () => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",

        headers: { "Content-Type": "application/x-www-form-urlencoded" },

        body: new URLSearchParams(formData).toString(),
      });

      setFormState(FormState.SUCCESS);
      console.log(FormState.SUCCESS);
    } catch (error) {
      setFormState(FormState.ERROR);
      console.log(FormState.ERROR);
      console.error(error);
    }
  };
  return (
    <div className="newsletter">
      <div className="newsletter_container">
        <form
          name="subscribe"
          method="POST"
          data-netlify="true"
          onSubmit={() => handleSubmit()}
        >
          <label htmlFor="email">Subscribe to the PAA Newsletter : </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="email"
            value={subscriberEmail}
            placeholder="Your email address"
            onChange={(e) => setSubscriberEmail(e.target.value)}
          />

          <input type="submit" text="Subscribe" className="submit" />
        </form>
      </div>
    </div>
  );
}
