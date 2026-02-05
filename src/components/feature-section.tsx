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
    <section id="features" className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-2xl lg:text-center">
          <Badge variant="outline" className="text-indigo-600">
            Features
          </Badge>
          <h3 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-balance">
            WebAssembly Orchestration at Scale
          </h3>
          <p className="text-muted-foreground mt-6 text-lg">
            Deploy portable, secure, and high-performance Wasm workloads across
            any environment with Propeller's comprehensive feature set.
          </p>
        </header>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="bg-primary mb-4 flex size-12 items-center justify-center rounded-lg">
                      <Icon
                        aria-hidden="true"
                        className="text-primary-foreground size-6"
                      />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
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
