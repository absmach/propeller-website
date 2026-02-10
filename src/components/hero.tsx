import Link from "fumadocs-core/link";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/base-path";

export const HeroSection = () => (
  <div className="w-full py-6 sm:py-10 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-3 sm:gap-4 flex-col order-1 lg:order-1 p-4 sm:p-6 lg:p-4 xl:p-8">
          <div>
            <Badge variant="outline" className="text-xs sm:text-sm">
              Orchestrate WebAssembly Anywhere
            </Badge>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-col">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Deploy Wasm from Cloud to Microcontrollers
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Propeller is a cutting-edge orchestrator for WebAssembly workloads
              across the Cloud-Edge continuum. Seamlessly deploy portable,
              lightweight Wasm applications from powerful cloud servers to
              constrained microcontrollers with security and performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <Link href="/docs" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="gap-2 w-full sm:w-auto"
                variant="outline"
              >
                View Documentation <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/docs/getting-started" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-md aspect-square flex items-center justify-center p-4 sm:p-6 lg:p-4 xl:p-8 order-1 lg:order-2">
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
