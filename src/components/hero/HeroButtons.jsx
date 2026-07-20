import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "../common";

export default function HeroButtons() {
  return (
   <div
  className="
    mt-10
    flex
    flex-col
    gap-4
    sm:grid
    sm:grid-cols-2
    lg:flex
    lg:flex-row
  "
>
      <Button
        to="/contact"
        size="lg"
        leftIcon={<Stethoscope className="h-5 w-5" />}
        rightIcon={<ArrowRight className="h-4 w-4" />}
      >
        Start Your Dental Journey
      </Button>

      <Button
        to="/treatments"
        variant="secondary"
        size="lg"
      >
        Explore Treatments
      </Button>
    </div>
  );
}