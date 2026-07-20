import { useState } from "react";
import { faqs } from "./faqData";
import FAQItem from "./FAQItem";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="
        rounded-[28px]
        lg:rounded-[36px]
        border
        border-slate-200/70
        bg-gradient-to-b
        from-white
        to-primary-50/20
        p-5
        sm:p-6
        lg:p-10
        shadow-[0_20px_60px_rgba(15,23,42,.06)]
      "
    >
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          open={activeIndex === index}
          onClick={() =>
            setActiveIndex(
              activeIndex === index ? -1 : index
            )
          }
        />
      ))}
    </div>
  );
}