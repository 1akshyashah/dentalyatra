import {
  ShieldCheck,
  UserRoundCheck,
  Plane,
  HeartHandshake,
} from "lucide-react";

import { Container } from "../common";
import TrustItem from "./TrustItem";

const trustItems = [
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary-600" />,
    title: "Verified Clinics",
    description: "Carefully selected partners",
  },
  {
    icon: <UserRoundCheck className="h-7 w-7 text-primary-600" />,
    title: "Experienced Dentists",
    description: "Highly skilled professionals",
  },
  {
    icon: <Plane className="h-7 w-7 text-primary-600" />,
    title: "Travel Assistance",
    description: "Before & during your visit",
  },
  {
    icon: <HeartHandshake className="h-7 w-7 text-primary-600" />,
    title: "Care Coordinator",
    description: "Personal support throughout",
  },
];

export default function TrustBar() {
  return (
    <section
      className="
        relative
        z-20
        -mt-6
        md:-mt-8
        lg:-mt-10
      "
    >
      <Container>

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-white/70
            bg-white/95
            backdrop-blur-xl
            shadow-[0_18px_50px_rgba(15,23,42,.08)]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-primary-100/40

              sm:grid-cols-2
              sm:divide-y-0
              sm:divide-x

              lg:grid-cols-4
            "
          >
            {trustItems.map((item) => (
              <TrustItem
                key={item.title}
                {...item}
              />
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}