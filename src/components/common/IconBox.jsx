import { components, transitions } from "../../design";

export default function IconBox({
  children,
  size = "md",
  className = "",
}) {
  return (
    <div
      className={`
        ${components.iconBox.base}
        ${components.iconBox[size]}
        ${transitions.default}
        ${className}
      `}
    >
      {children}
    </div>
  );
}