import { spacing, typography } from "../../design";

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  size = "section",
  maxWidth = "max-w-3xl",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div
      className={`
        ${spacing.headerGap}
        ${maxWidth}
        ${alignment}
        ${className}
      `}
    >
      {badge && (
        <span
          className={`
            inline-flex
            rounded-full
            bg-primary-50
            px-4
            py-2
            sm:px-5
            ${typography.eyebrow}
            text-primary-700
          `}
        >
          {badge}
        </span>
      )}

      <h2
        className={`
          mt-5
          lg:mt-6
          ${typography[size]}
          text-slate-900
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            mt-4
            lg:mt-6
            max-w-full
            sm:max-w-2xl
            ${align === "center" ? "mx-auto" : ""}
            ${typography.body}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}