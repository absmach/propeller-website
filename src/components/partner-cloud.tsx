import { MarqueeEffect } from "@/components/ui/marquee-effect";

const logos = [
  {
    alt: "WebAssembly — workload runtime used by Propeller",
    img: "/logos/webassembly.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Kubernetes — cloud orchestration platform supported by Propeller",
    img: "/logos/kubernetes.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Docker — OCI-compatible container registry support",
    img: "/logos/docker.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Zephyr RTOS — embedded OS for Propeller microcontroller deployments",
    img: "/logos/zephyr.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Rust — language used to build the Proplet edge runtime",
    img: "/logos/rust.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Go — language used to build the Propeller Manager",
    img: "/logos/go.svg",
    width: 80,
    height: 60,
  },
  {
    alt: "Linux Foundation — open-source governance body",
    img: "/logos/linux-foundation.svg",
    width: 80,
    height: 60,
  },
];

export default function PartnerCloudSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="space-y-2 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Built on Industry Standards
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-balance md:text-lg">
            Propeller seamlessly integrates with leading WebAssembly runtimes,
            container orchestration platforms, and IoT protocols to power your
            cloud-edge infrastructure.
          </p>
        </header>
        {logos.length > 0 && (
          <MarqueeEffect
            className="mask-r-from-80% mask-l-from-80%"
            speed={30}
            gap={40}
          >
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center">
                <img
                  src={logo.img}
                  className="w-20 h-15 sm:w-25 sm:h-20 lg:w-32.5 lg:h-25 object-contain"
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </MarqueeEffect>
        )}
      </div>
    </section>
  );
}
