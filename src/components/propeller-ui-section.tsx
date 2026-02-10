"use client";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";

interface FeatureItem {
  id: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  title: string;
  content: string;
}

const features: FeatureItem[] = [
  {
    id: "item-1",
    image: "/propeller-ui/job.png",
    alt: "Propeller Job K8S Manifest",
    icon: Database,
    title: "Job Management",
    content:
      "Deploy and manage WebAssembly jobs across your infrastructure with full Kubernetes manifest support and real-time status tracking.",
  },
  {
    id: "item-2",
    image: "/propeller-ui/logs.png",
    alt: "Propeller Proplet K8S Logs",
    icon: Fingerprint,
    title: "Live Log Streaming",
    content:
      "Stream logs from proplets in real time directly from the Kubernetes cluster, giving you full observability into running Wasm workloads.",
  },
  {
    id: "item-3",
    image: "/propeller-ui/proplet.png",
    alt: "Propeller Proplet K8S Manifest",
    icon: IdCard,
    title: "Proplet Manifests",
    content:
      "Inspect and manage proplet manifests across cloud and edge nodes, with detailed resource and configuration visibility.",
  },
  {
    id: "item-4",
    image: "/propeller-ui/topology.png",
    alt: "Propeller K8S Connection Topology",
    icon: ChartBarIncreasingIcon,
    title: "Connection Topology",
    content:
      "Visualise the live connection topology of your Propeller cluster, tracking how proplets and jobs are distributed across the cloud-edge continuum.",
  },
];

export default function PropellerUISection() {
  const [activeId, setActiveId] = useState(features[0].id);

  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Propeller UI
          </h2>
          <p>
            A unified interface to deploy, monitor, and inspect WebAssembly
            workloads across the cloud-edge continuum — from Kubernetes
            manifests to live topology views.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-[2fr_3fr] lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeId}
            onValueChange={setActiveId}
            className="w-full"
          >
            {features.map(({ id, icon: Icon, title, content }) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <Icon className="size-4" />
                    {title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="aspect-video bg-background relative w-full rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={active.image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={active.alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
