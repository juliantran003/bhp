// Imports
import { useState } from "react";
import { useRouter } from "next/router";

// JSON
import overview from "../public/JSON/overview.json";

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState(overview[0]);

  return (
    <div className="home">
      <div>
        <div className="home_menu">
          {overview.map((overview) => {
            return (
              <button
                key={overview.title}
                onClick={() => setSelected(overview)}
                className={selected.title === overview.title ? "clicked" : ""}
              >
                {overview.title}
              </button>
            );
          })}
        </div>
        <div className="overview">
          <h2>Statement</h2>
          <div dangerouslySetInnerHTML={{ __html: selected.text }}></div>
        </div>
      </div>
    </div>
  );
}
