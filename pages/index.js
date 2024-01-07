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
              <button onClick={() => setSelected(overview)}>
                {overview.title}
              </button>
            );
          })}
        </div>
        <div className="overview">
          <h2>{selected.title}</h2>
          <div>
            <p>{selected.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
