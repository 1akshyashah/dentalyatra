import { CheckCircle2 } from "lucide-react";

export default function BenefitItem({ children }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0" />

      <span className="text-white/90 font-medium">
        {children}
      </span>
    </div>
  );
}