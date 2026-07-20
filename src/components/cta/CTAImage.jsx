import { ShieldCheck } from "lucide-react";

// Recommended:
// import ctaImage from "../../assets/images/cta/cta-image.jpg";

export default function CTAImage() {
  return (
    <div className="relative group">

      {/* Main Image */}

      <div
        className="
          overflow-hidden
          rounded-[24px]
          lg:rounded-[32px]
          shadow-[0_35px_90px_rgba(15,23,42,.20)]
        "
      >
        <img
          // Replace with your local image
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&auto=format&fit=crop"
          // src={ctaImage}
          alt="International patient consulting a dental specialist"
          className="
            h-[420px]
            md:h-[520px]
            lg:h-[620px]
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Verified Clinics Card */}

      <div
        className="
          absolute
          -left-4
          top-8
          lg:-left-8
          lg:top-12

          rounded-2xl
          bg-white/95
          backdrop-blur-xl

          p-4
          lg:p-5

          shadow-[0_20px_40px_rgba(15,23,42,.15)]

          transition-all
          duration-500
          hover:-translate-y-1
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-primary-50
            "
          >
            <ShieldCheck className="h-6 w-6 text-primary-600" />
          </div>

          <div>

            <p className="font-bold text-slate-900">
              Verified Clinics
            </p>

            <p className="text-sm text-slate-500">
              Quality Assured
            </p>

          </div>

        </div>
      </div>

      {/* Bottom Rating Card */}

      <div
        className="
          absolute
          bottom-6
          right-6
          lg:bottom-8
          lg:right-8

          rounded-2xl
          bg-white/95
          backdrop-blur-xl

          px-5
          py-4

          shadow-[0_20px_40px_rgba(15,23,42,.15)]
        "
      >

        <div className="flex items-center gap-1 text-amber-400 text-lg">
          ★★★★★
        </div>

        <p
          className="
            mt-2
            text-base
            font-semibold
            text-slate-900
          "
        >
          Trusted Dental Care
        </p>

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Personalized patient support
        </p>

      </div>

    </div>
  );
}