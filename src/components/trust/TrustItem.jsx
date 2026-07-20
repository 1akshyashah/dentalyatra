import { IconBox } from "../common";

export default function TrustItem({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        px-5
        py-5
        md:px-6
        md:py-6
        transition-all
        duration-300
        hover:bg-primary-50/40
      "
    >
      <IconBox
        size="md"
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {icon}
      </IconBox>

      <div className="min-w-0">
        <h3
          className="
            text-base
            md:text-lg
            font-semibold
            text-slate-900
            leading-6
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}