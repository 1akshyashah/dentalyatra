import { components, transitions } from "../../design";

export default function Badge({
  children,
  size = "default",
  className = "",
}) {
  return (
    <span
      className={`
        ${components.badge.default}
        ${
          size !== "default"
            ? components.badge[size]
            : ""
        }
        ${transitions.default}
        ${className}
      `}
    >
      {children}
    </span>
  );
}