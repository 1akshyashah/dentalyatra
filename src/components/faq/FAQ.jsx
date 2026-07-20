import { Section, Container } from "../common";
import FAQContent from "./FAQContent";
import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <Section
      spacing="section"
      className="
        bg-gradient-to-b
        from-primary-50/30
        to-white
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:gap-16
            lg:grid-cols-[420px_1fr]
            lg:gap-20
            xl:grid-cols-[500px_1fr]
            xl:gap-24
            items-start
          "
        >
          {/* Left */}
          <FAQContent />

          {/* Right */}
          <FAQAccordion />
        </div>
      </Container>
    </Section>
  );
}