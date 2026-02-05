import { Activity, Code, Rocket, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-5 flex justify-center">
            <Badge variant="default">How It Works</Badge>
          </div>
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            Deploy WebAssembly in Four Steps
          </h2>
          <p className="text-muted-foreground mt-6 text-base text-balance md:text-lg">
            From development to deployment, Propeller makes it easy to
            orchestrate Wasm workloads across your entire infrastructure.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="bg-border absolute right-0 left-0 mt-6 h-0.5" />
            <div className="absolute right-0 left-0 mt-6 h-0.5 overflow-hidden">
              <div className="absolute inset-0 h-full w-32 animate-[progress-beam_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Code className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Develop in WebAssembly
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Write portable, lightweight Wasm workloads for your
                    application using your preferred language.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Upload className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Register Workloads
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Push your workloads to an OCI-compliant registry for easy
                    deployment and version control.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Rocket className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Deploy Anywhere
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Use Propeller to orchestrate and manage workload deployment
                    across cloud, edge, and IoT devices.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Activity className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Monitor & Scale
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Leverage real-time monitoring and dynamic scaling to
                    optimize your system's performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative space-y-4">
            <div className="bg-border absolute top-0 bottom-0 left-4 w-px" />

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Code className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 1
                  </span>
                  <h3 className="mt-1 font-semibold">Develop in WebAssembly</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Write portable, lightweight Wasm workloads for your
                  application using your preferred language.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Upload className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 2
                  </span>
                  <h3 className="mt-1 font-semibold">Register Workloads</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Push your workloads to an OCI-compliant registry for easy
                  deployment and version control.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Rocket className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 3
                  </span>
                  <h3 className="mt-1 font-semibold">Deploy Anywhere</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Use Propeller to orchestrate and manage workload deployment
                  across cloud, edge, and IoT devices.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Activity className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 4
                  </span>
                  <h3 className="mt-1 font-semibold">Monitor & Scale</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Leverage real-time monitoring and dynamic scaling to optimize
                  your system's performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
