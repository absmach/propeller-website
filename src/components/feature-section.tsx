import {
  CloudyIcon,
  NetworkIcon,
  PackageIcon,
  ServerIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeatureSection() {
  const features = [
    {
      icon: CloudyIcon,
      title: "Cloud-Edge Orchestration",
      description:
        "Deploy Wasm workloads effortlessly across diverse environments, from robust cloud servers to lightweight microcontrollers running Zephyr RTOS.",
    },
    {
      icon: ZapIcon,
      title: "Fast Boot Times",
      description:
        "Take advantage of Wasm's near-instant startup for efficient workload execution. Deploy and scale functions in milliseconds.",
    },
    {
      icon: PackageIcon,
      title: "OCI Registry Support",
      description:
        "Push and pull Wasm workloads from OCI-compliant registries for streamlined workflow integration and version management.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Security at the Core",
      description:
        "Propeller ensures secure workload execution and communication for IoT environments with sandboxed Wasm runtimes.",
    },
    {
      icon: NetworkIcon,
      title: "Powerful Service Mesh",
      description:
        "Integrates with SuperMQ for secure, efficient IoT device communication across your entire infrastructure.",
    },
    {
      icon: ServerIcon,
      title: "FaaS Deployment",
      description:
        "Enable Function-as-a-Service capabilities for scalable and event-driven applications across the cloud-edge continuum.",
    },
  ];

  return (
    <section
      id="features"
      className="scroll-mt-24 py-12 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="text-indigo-600 text-xs sm:text-sm"
          >
            Features
          </Badge>
          <h2 className="font-heading mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-balance">
            WebAssembly Orchestration at Scale
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg">
            Deploy portable, secure, and high-performance Wasm workloads across
            any environment with Propeller's comprehensive feature set.
          </p>
        </header>
        <div className="mx-auto mt-10 sm:mt-16 max-w-2xl lg:mt-24 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="bg-primary mb-3 sm:mb-4 flex size-10 sm:size-12 items-center justify-center rounded-lg">
                      <Icon
                        aria-hidden="true"
                        className="text-primary-foreground size-5 sm:size-6"
                      />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <CardDescription className="text-sm sm:text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
