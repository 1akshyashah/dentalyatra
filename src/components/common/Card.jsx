import {
  radius,
  shadows,
  transitions,
} from "../../design";

export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        bg-white
        border
        border-slate-200/70
        ${radius.card}
        ${shadows.card}
        ${transitions.default}
        ${
          hover
            ? `${transitions.hover} ${shadows.hover}`
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}