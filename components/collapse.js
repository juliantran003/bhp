import { useCollapse } from "react-collapsed";
import { useEffect, useState } from "react";

export default function Collapse({ title, content }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const config = {
    duration: 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    isMounted && (
      <li className="collapsible">
        <h3 {...getToggleProps()}>
          <span className="collapsible_arrow"> {isExpanded ? "▼ " : "► "}</span>
          <span className="collapsible_title">{title}</span>
        </h3>
        <p {...getCollapseProps()}>
          <span dangerouslySetInnerHTML={{ __html: content }}></span>
        </p>
      </li>
    )
  );
}
