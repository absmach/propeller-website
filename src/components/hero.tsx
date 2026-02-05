import Link from "fumadocs-core/link";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/base-path";

export const HeroSection = () => (
  <div className="w-full  py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Orchestrate WebAssembly Anywhere</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Deploy Wasm from Cloud to Microcontrollers
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Propeller is a cutting-edge orchestrator for WebAssembly workloads
              across the Cloud-Edge continuum. Seamlessly deploy portable,
              lightweight Wasm applications from powerful cloud servers to
              constrained microcontrollers with security and performance.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/docs">
              <Button size="lg" className="gap-4" variant="outline">
                View Documentation <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/docs/getting-started">
              <Button size="lg" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-md aspect-square flex items-center justify-center p-8">
          <img
            src={assetPath("/architecture-white.png")}
            className="w-full h-full rounded-md object-contain dark:hidden"
            alt="Propeller Architecture Diagram showing WebAssembly orchestration"
          />
          <img
            src={assetPath("/architecture-black.png")}
            className="w-full h-full rounded-md object-contain hidden dark:block"
            alt="Propeller Architecture Diagram showing WebAssembly orchestration"
          />
        </div>
      </div>
    </div>
  </div>
);
