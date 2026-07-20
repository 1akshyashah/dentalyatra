import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary-700 to-teal-500 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-primary-600 hover:text-primary-600 hover:shadow-lg",

    outline:
      "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800",

    ghost:
      "text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base",
  xl: "h-16 px-10 text-lg",
};

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2.5
    + min-w-[44px]
+ select-none
    rounded-full
    font-semibold
    transition-all
    duration-300
    whitespace-nowrap
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "pointer-events-none opacity-50" : ""}
    ${className}
    focus:outline-none
focus:ring-4
focus:ring-primary-200
  `;

  const content = (
    <>
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${classes} group`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${classes} group`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${classes} group`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}