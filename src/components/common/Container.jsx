export default function Container({
  children,
  className = "",
  size = "default",
}) {
  const sizes = {
    narrow: "max-w-5xl",
    content: "max-w-6xl",
    default: "max-w-7xl",
    wide: "max-w-[1380px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        ${sizes[size]}
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-0
        ${className}
      `}
    >
      {children}
    </div>
  );
}