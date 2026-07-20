import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="
        relative
        -mt-6
        lg:-mt-8
        overflow-hidden

        rounded-t-[32px]
        md:rounded-t-[40px]
        lg:rounded-t-[56px]

        bg-slate-900
        text-white
        z-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-primary-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-teal-500/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10">
        <FooterTop />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}