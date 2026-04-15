import Link from "fumadocs-core/link";
import {
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE_URL } from "@/lib/geo-constants";
import { founderPersonSchema, organizationSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Abstract Machines — Propeller WebAssembly Orchestrator",
  description:
    "Abstract Machines is a Paris-based open-source engineering team building Propeller, a WebAssembly orchestration platform co-funded by EU Horizon Europe (Grant No. 101139067).",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    url: `${SITE_URL}/about`,
  },
};

interface TeamMember {
  name: string;
  role: string;
  github: string;
  bio: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Drasko Draskovic",
    role: "Founder, Abstract Machines",
    github: "drasko",
    bio: "Drasko founded Abstract Machines and initiated the Propeller project. He focuses on distributed systems architecture and Cloud-Edge orchestration research, coordinating the EU ELASTIC project collaboration from Paris.",
  },
  {
    name: "Rodney Osodo",
    role: "Software Engineer",
    github: "rodneyosodo",
    bio: "Rodney is the primary contributor to Propeller's Go-based manager and CI infrastructure. He works on the orchestration engine, API layer, and SuperMQ integration from Nairobi.",
  },
  {
    name: "Jeff Mboya",
    role: "Embedded Systems Engineer",
    github: "JeffMboya",
    bio: "Jeff brings Mechatronic Engineering expertise to Propeller's edge runtime. He works on the Rust-based Proplet agent, Zephyr RTOS integration, and constrained-device deployment pipelines.",
  },
  {
    name: "Steve Munene",
    role: "Systems Engineer",
    github: "nyagamunene",
    bio: "Steve contributes to Propeller's core systems and Wasm execution layer, with a background in Mechatronics and embedded systems development.",
  },
  {
    name: "Dušan Borovčanin",
    role: "Software Engineer",
    github: "dborovcanin",
    bio: "Dušan contributes to Propeller's backend infrastructure and distributed systems components, bringing experience from open-source systems engineering.",
  },
];

const researchPartners = [
  {
    name: "ELASTIC Project",
    description:
      "EU Horizon Europe research project exploring resilient cloud-edge-IoT architectures for smart networks.",
    url: "https://elasticproject.eu/",
    grant: "Grant Agreement No. 101139067",
  },
  {
    name: "Smart Networks & Services JU (SNS JU)",
    description:
      "European Joint Undertaking funding next-generation smart network infrastructure.",
    url: "https://smart-networks.europa.eu/",
  },
];

const values = [
  {
    title: "Open by Default",
    description:
      "Every line of Propeller is Apache-2.0 licensed and developed in the open on GitHub. No proprietary lock-in.",
  },
  {
    title: "Security at the Core",
    description:
      "WebAssembly's sandboxed execution model means workloads are isolated by default — not as an afterthought.",
  },
  {
    title: "Standards-Driven",
    description:
      "Built on OCI, MQTT, and WASI. Propeller integrates with what you already use rather than replacing it.",
  },
  {
    title: "Edge-First",
    description:
      "Designed from day one to run on microcontrollers with 128 KB RAM, not retrofitted from a cloud-only architecture.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full space-y-16">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={founderPersonSchema()} />
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 items-start">
          <Badge variant="outline">About Abstract Machines</Badge>
          <h1 className="text-3xl sm:text-5xl font-regular tracking-tighter">
            Building the Missing Layer Between Cloud Orchestration and
            Microcontrollers
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Abstract Machines is a Paris-based research and engineering team. We
            build open-source infrastructure for the Cloud-Edge continuum — the
            space between cloud data centres and the billions of constrained IoT
            devices that will define the next decade of computing.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Propeller is our flagship project: an open-source WebAssembly
            orchestrator that makes deploying Wasm workloads from cloud servers
            to Zephyr RTOS microcontrollers as simple as a single CLI command.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="https://github.com/absmach/propeller" target="_blank">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </Link>
            <Link href="mailto:info@absmach.eu">
              <Button variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <Badge variant="outline">Our Principles</Badge>
            <h2 className="text-2xl sm:text-4xl font-regular tracking-tighter">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border p-6 space-y-2 bg-background"
              >
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <Badge variant="outline">The Team</Badge>
            <h2 className="text-2xl sm:text-4xl font-regular tracking-tighter">
              The Engineers Behind Propeller
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are a small team of engineers and researchers with backgrounds
              in distributed systems, embedded development, and cloud
              infrastructure. We contribute to open standards and collaborate
              with European research institutions.
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-lg border p-6 space-y-3 bg-background"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold text-lg ring-1 ring-border">
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 pt-1">
                    <Link
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      aria-label={`${member.name} on GitHub`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="size-4" />
                    </Link>
                    {member.linkedin && (
                      <Link
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        aria-label={`${member.name} on LinkedIn`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm max-w-2xl">
              Team profiles coming soon. In the meantime,{" "}
              <Link
                href="https://github.com/absmach/propeller/graphs/contributors"
                target="_blank"
                className="underline hover:no-underline"
              >
                see all contributors on GitHub
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <Badge variant="outline">Research & Funding</Badge>
            <h2 className="text-2xl sm:text-4xl font-regular tracking-tighter">
              Backed by European Research
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Propeller was developed as part of EU-funded research into
              resilient Cloud-Edge-IoT architectures. This work has been
              partially supported by the ELASTIC project under the European
              Union&apos;s Horizon Europe research and innovation programme.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {researchPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-lg border p-6 space-y-3 bg-background"
              >
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
                {partner.grant && (
                  <p className="text-xs text-muted-foreground/70">
                    {partner.grant}
                  </p>
                )}
                <Link
                  href={partner.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="size-3" />
                  Learn more
                  <ExternalLink className="size-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <FooterSection />
    </div>
  );
}
