import Container from "./Container";
import { spacing } from "../../design";

export default function Section({
  children,
  className = "",
  container = true,
  divider = false,
  variant = "section",
  containerSize = "wide",
}) {
  return (
    <section
      className={`${spacing[variant]} ${className}`}
    >
      {container ? (
        <Container size={containerSize}>
          {children}
        </Container>
      ) : (
        children
      )}

      {divider && (
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      )}
    </section>
  );
}