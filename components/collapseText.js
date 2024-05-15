// Import
import { useState } from "react";

export default function CollapseText({ content }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={expanded === true ? "collapsibleText" : "collapsedText"}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="collapsible_arrow"> {expanded ? "▼ " : "► "}</span>
      {content}
    </div>
  );
}
