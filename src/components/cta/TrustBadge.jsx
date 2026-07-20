import { Star } from "lucide-react";

export default function TrustBadge() {
  return (
    <div
      className="
        mt-10
        flex
        items-center
        gap-3
      "
    >
      <div className="flex text-yellow-400">
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
      </div>

      <p className="text-sm text-white/80">
        Trusted by international patients seeking
        affordable, world-class dental care.
      </p>
    </div>
  );
}