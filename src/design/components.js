export const components = {
  card: {
    compact: "p-6",
    default: "p-8",
    large: "p-10",
  },

  iconBox: {
    base: `
      flex
      items-center
      justify-center
      bg-primary-50
      text-primary-600
      border
      border-primary-100/60
      shadow-sm
    `,

    sm: "h-12 w-12 rounded-xl",

    md: "h-16 w-16 rounded-2xl",

    lg: "h-20 w-20 rounded-3xl",
  },

  button: {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  },

  badge: {
    default: `
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-primary-50
      border
      border-primary-100
      px-5
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.22em]
      text-primary-700
      whitespace-nowrap
    `,

    sm: "px-4 py-1.5 text-[11px]",

    lg: "px-6 py-2.5 text-sm",
  },
};