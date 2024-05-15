import { useCollapse } from "react-collapsed";

export default function Collapse({ title, content }) {
  const config = {
    duration: 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <li className="collapsible">
      <h3 {...getToggleProps()}>
        <span className="collapsible_arrow"> {isExpanded ? "▼ " : "► "}</span>
        <span className="collapsible_title">{title}</span>
      </h3>
      <p {...getCollapseProps()}>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </p>
    </li>
  );
}
