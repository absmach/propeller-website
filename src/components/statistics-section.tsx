import { Cpu, Network, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Zap,
    value: "<10ms",
    label: "Boot Time",
    description: "Near-instant Wasm startup",
  },
  {
    icon: Cpu,
    value: "Cloud to MCU",
    label: "Device Range",
    description: "From servers to microcontrollers",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Sandboxed",
    description: "Secure workload isolation",
  },
  {
    icon: Network,
    value: "MQTT-Based",
    label: "Connectivity",
    description: "MQTT-based device communication",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-3 sm:mb-5 flex justify-center">
            <Badge variant="default" className="text-xs sm:text-sm">
              By the numbers
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-balance md:text-5xl">
            WebAssembly Performance at Scale
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-sm sm:text-base text-balance md:text-lg">
            Propeller delivers unmatched performance, security, and flexibility
            for WebAssembly orchestration across any environment.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-background rounded-lg border p-4 sm:p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 mx-auto mb-3 sm:mb-4 flex size-10 sm:size-12 items-center justify-center rounded-full">
                  <Icon className="text-primary size-5 sm:size-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="mt-1 sm:mt-2 text-base sm:text-lg font-semibold">
                  {stat.label}
                </div>
                <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
