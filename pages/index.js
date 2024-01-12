// Imports
import { useState } from "react";
import { useRouter } from "next/router";

// JSON
import overview from "../public/JSON/overview.json";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";
import pledge from "../public/JSON/pledge.json";
import impact from "../public/JSON/impact.json";

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState(overview[0]);
  const [main, setMain] = useState("");

  function reset() {
    setMain("");
    setSelected(overview[0]);
  }

  return (
    <div className="home">
      <div>
        <div className="home_menu">
          <button className={main === "overview" ? "clicked" : ""}>
            {main === "overview" ? (
              <span
                onClick={() =>
                  main === "overview" ? reset() : setMain("overview")
                }
              >
                ⎖
              </span>
            ) : (
              <></>
            )}
            &nbsp;
            <span
              onClick={() =>
                main === "overview" ? reset() : setMain("overview")
              }
            >
              {overview[0].title}
            </span>
          </button>
          {overview.slice(1).map((overview) => {
            return main === "overview" ? (
              <button
                key={overview.title}
                onClick={() => setSelected(overview)}
                className={
                  selected.title === overview.title
                    ? "clicked smaller"
                    : "smaller"
                }
              >
                {overview.title}
              </button>
            ) : (
              <></>
            );
          })}
          {main === "overview" ? (
            <></>
          ) : (
            <button
              className={main === "impact" ? "clicked" : ""}
              onClick={() => setMain("impact")}
            >
              Impact
            </button>
          )}
          {main === "overview" ? (
            <></>
          ) : (
            <button
              className={main === "pledge" ? "clicked" : ""}
              onClick={() => setMain("pledge")}
            >
              Pledge
            </button>
          )}
        </div>
        <div className="overview">
          <h2>Statement</h2>

          {main === "" ? (
            <div dangerouslySetInnerHTML={{ __html: selected.text }}></div>
          ) : main === "overview" ? (
            <div dangerouslySetInnerHTML={{ __html: selected.text }}></div>
          ) : main === "impact" ? (
            <div dangerouslySetInnerHTML={{ __html: impact[0].text }}></div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: pledge[0].text }}></div>
          )}
        </div>
      </div>
    </div>
  );
}
