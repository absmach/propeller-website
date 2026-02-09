import Link from "fumadocs-core/link";
import { PhoneCall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FAQSection = () => (
  <div id="faq" className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Frequently Asked Questions
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Learn more about Propeller's WebAssembly orchestration
              capabilities and how it can transform your cloud-edge
              infrastructure.
            </p>
          </div>
          <div>
            <Link href="mailto:info@absmach.eu">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What is Propeller?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Propeller is a cutting-edge orchestrator for WebAssembly (Wasm)
                workloads across the Cloud-Edge continuum. It enables seamless
                deployment of Wasm applications from powerful cloud servers to
                constrained microcontrollers, combining flexibility, security,
                and performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What are the key features of Propeller?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Propeller offers cloud-edge orchestration, fast boot times with
                near-instant startup, FaaS deployment capabilities, OCI registry
                support, WAMR on Zephyr RTOS for constrained devices,
                integration with SuperMQ service mesh, and security-first design
                for IoT environments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                Which devices does Propeller support?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Propeller supports a wide range of devices from robust cloud
                servers to lightweight microcontrollers running Zephyr RTOS. It
                can deploy Wasm workloads across the entire cloud-edge
                continuum, making it ideal for diverse IoT and edge computing
                scenarios.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                How does Propeller integrate with existing infrastructure?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Propeller integrates with OCI-compliant registries for workload
                storage and retrieval, and connects with SuperMQ for secure IoT
                device communication. It supports standard protocols like MQTT,
                CoAP, and WebSocket for communication with edge devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What are common use cases for Propeller?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Common use cases include Industrial IoT (deploying analytics to
                factory edge devices), secure workload execution with isolated
                Wasm runtimes, smart cities with scalable IoT networks, and
                serverless applications leveraging FaaS capabilities across the
                cloud-edge continuum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                How do I get started with Propeller?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Getting started is easy: develop your application in
                WebAssembly, push your workloads to an OCI-compliant registry,
                use Propeller to orchestrate deployment across your
                infrastructure, and monitor and scale your workloads in
                real-time. Check our documentation for detailed setup
                instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
