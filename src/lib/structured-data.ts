import {
  CORDIS_URL,
  FULL_NAME,
  GITHUB_URL,
  GRANT_NUMBER,
  GRANT_PROGRAMME,
  LINKEDIN_URL,
  ORG_GITHUB,
  ORG_NAME,
  SHORT_NAME,
  SITE_URL,
  WIKIDATA_URL,
  YOUTUBE_URL,
} from "@/lib/geo-constants";

const BASE_URL = SITE_URL;

export function organizationSchema() {
  const sameAs = [
    `https://github.com/${ORG_GITHUB}`,
    LINKEDIN_URL,
    YOUTUBE_URL,
    `https://twitter.com/${ORG_GITHUB}`,
    CORDIS_URL,
    ...(WIKIDATA_URL ? [WIKIDATA_URL] : []),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: ORG_NAME,
    legalName: "Abstract Machines SAS",
    alternateName: "absmach",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/named-logo-black.svg`,
      width: 160,
      height: 40,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "141 Quai de Valmy",
      addressLocality: "Paris",
      postalCode: "75010",
      addressCountry: "FR",
    },
    email: "info@absmach.eu",
    foundingDate: "2023",
    knowsAbout: [
      "WebAssembly",
      "Cloud-Edge Computing",
      "IoT Orchestration",
      "Embedded Systems",
      "Distributed Systems",
      "Open Source Infrastructure",
    ],
    sameAs,
    description: `${ORG_NAME} builds open-source WebAssembly orchestration infrastructure for Cloud-Edge computing. Co-funded by the ${GRANT_PROGRAMME} under the ELASTIC project (Grant No. ${GRANT_NUMBER}).`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@absmach.eu",
      contactType: "customer support",
    },
    funder: {
      "@type": "Organization",
      name: `${GRANT_PROGRAMME} — Smart Networks and Services Joint Undertaking`,
      description: `ELASTIC project, Grant Agreement No. ${GRANT_NUMBER}`,
      url: CORDIS_URL,
    },
  };
}

export function softwareApplicationSchema() {
  const sameAs = [GITHUB_URL, ...(WIKIDATA_URL ? [WIKIDATA_URL] : [])];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    name: FULL_NAME,
    alternateName: [SHORT_NAME, "Propeller WebAssembly Orchestrator"],
    disambiguatingDescription: `${FULL_NAME} is a software orchestration platform for WebAssembly workloads — not a mechanical propeller, marine propeller, or the Parallax Propeller microcontroller chip.`,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "WebAssembly Orchestration",
    operatingSystem: "Linux, Kubernetes, Zephyr RTOS",
    description:
      "Open-source WebAssembly orchestration platform for deploying Wasm workloads from cloud servers to microcontrollers.",
    url: "https://propeller.absmach.eu",
    downloadUrl: GITHUB_URL,
    installUrl: `${BASE_URL}/docs/getting-started`,
    sameAs,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free and open-source under Apache 2.0",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Cloud-Edge Orchestration",
      "Near-instant Wasm boot times",
      "OCI Registry support",
      "Function-as-a-Service (FaaS) deployment",
      "WAMR on Zephyr RTOS for constrained devices",
      "SuperMQ service mesh integration",
      "MQTT protocol support via SuperMQ",
      "100% sandboxed workload isolation",
      "Trusted Execution Environment (TEE) support",
      "WASI-NN for edge machine learning",
    ],
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    license: "https://opensource.org/licenses/Apache-2.0",
    codeRepository: GITHUB_URL,
    isAccessibleForFree: true,
    programmingLanguage: ["Go", "Rust"],
    softwareVersion: "0.3.0",
    audience: {
      "@type": "Audience",
      audienceType: "Developers, DevOps Engineers, IoT Engineers",
    },
    releaseNotes: `${GITHUB_URL}/releases`,
  };
}

export function softwareSourceCodeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `${FULL_NAME} — Source Code`,
    description:
      "Open-source WebAssembly orchestrator for Cloud-Edge computing. Manager written in Go; Proplet (edge runtime) written in Rust.",
    codeRepository: GITHUB_URL,
    programmingLanguage: ["Go", "Rust"],
    license: "https://opensource.org/licenses/Apache-2.0",
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: ORG_NAME,
    },
    targetProduct: {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: FULL_NAME,
    },
  };
}

export function founderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Drasko Draskovic",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: ORG_NAME,
    },
    sameAs: [
      "https://github.com/drasko",
      "https://www.linkedin.com/in/draskovic/",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Propeller by Abstract Machines",
    alternateName: "Propeller",
    url: BASE_URL,
    description:
      "WebAssembly orchestration platform for Cloud-Edge computing by Abstract Machines.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/docs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Abstract Machines",
      url: BASE_URL,
    },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller by Abstract Machines is an open-source WebAssembly (Wasm) orchestrator designed for the Cloud-Edge continuum. It enables engineers to deploy Wasm workloads from cloud servers down to constrained microcontrollers — including devices running Zephyr RTOS with as little as 128 KB of RAM — using a single unified control plane. The platform is built around two core components: the Manager, a Go-based orchestration engine that schedules and monitors tasks across all nodes, and the Proplet, a Rust-based agent that executes Wasm binaries in a fully sandboxed runtime on each device. Propeller is co-funded by the European Union Horizon Europe programme under the ELASTIC project (Grant No. 101139067) and is licensed under Apache 2.0. It is not related to mechanical propellers, marine propellers, or the Parallax Propeller microcontroller chip.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key features of Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller by Abstract Machines provides ten core capabilities for Cloud-Edge Wasm orchestration: (1) near-instant Wasm boot times; (2) OCI registry support for storing and distributing Wasm binaries via Docker Hub or GHCR; (3) Function-as-a-Service deployment across heterogeneous infrastructure; (4) WAMR runtime on Zephyr RTOS for microcontrollers with 128 KB RAM; (5) DAG-based task scheduling for parallel, sequential, and dependency-ordered workflows; (6) SuperMQ MQTT-based service mesh for secure device-to-cloud messaging; (7) 100% sandboxed workload isolation guaranteed by the WebAssembly security model; (8) Trusted Execution Environment (TEE) support via Intel TDX, AMD SEV-SNP, and Intel SGX; (9) WASI-NN for running machine learning inference at the edge; and (10) federated machine learning with FedAvg aggregation across edge proplets.",
        },
      },
      {
        "@type": "Question",
        name: "Which devices does Propeller support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller by Abstract Machines supports the full Cloud-Edge device spectrum. On the cloud and server end, it runs on any Linux x86_64 or ARM64 system and integrates with Kubernetes clusters. At the edge, it supports standard Linux devices — industrial gateways, Raspberry Pi, or any ARM/x86 SBC running a Wasmtime-compatible environment. At the far edge, Propeller supports microcontrollers running Zephyr RTOS, including the ESP32-S3, through the Embedded Proplet firmware that uses the WebAssembly Micro Runtime (WAMR). This makes Propeller unique among Wasm orchestrators: it is the only open-source platform that can deploy the same Wasm binary from a Kubernetes node down to a microcontroller with 128 KB of RAM, without recompiling or adapting the workload for each target device.",
        },
      },
      {
        "@type": "Question",
        name: "How does Propeller integrate with existing infrastructure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller by Abstract Machines integrates with existing infrastructure through open standards. For workload distribution, it connects to any OCI-compliant registry — Docker Hub, GitHub Container Registry, or a self-hosted registry — to store and retrieve Wasm binaries. For device communication, it uses SuperMQ as the MQTT-based service mesh, enabling authenticated, encrypted messaging between the Manager and all Proplets over standard MQTT brokers. Propeller's REST API is fully documented with an OpenAPI specification and includes a Postman collection for interactive exploration. The platform deploys on bare-metal, VMs, or Kubernetes without modification. Its task and job model is compatible with existing CI/CD pipelines: engineers push a Wasm binary to a registry and trigger deployment via the CLI or REST API, fitting naturally into GitOps workflows.",
        },
      },
      {
        "@type": "Question",
        name: "What are common use cases for Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller by Abstract Machines is used across four primary scenarios. First, Industrial IoT: deploying real-time Wasm analytics and control logic to factory floor edge gateways and PLCs, updating workloads remotely without device downtime. Second, secure multi-tenant edge compute: running isolated Wasm runtimes on shared edge infrastructure where sandboxing guarantees tenant separation. Third, federated machine learning: running distributed FL training rounds across edge proplets using the built-in FedAvg aggregation API, keeping sensitive data local. Fourth, serverless edge functions: treating edge devices as FaaS nodes, deploying short-lived Wasm tasks triggered by sensor events or MQTT messages, with near-instant cold starts replacing the latency of container-based functions. Each use case benefits from Propeller's single unified control plane that manages workloads from cloud to microcontroller.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is easy: develop your application in WebAssembly, push your workloads to an OCI-compliant registry, use Propeller to orchestrate deployment across your infrastructure, and monitor and scale your workloads in real-time. Check the documentation at https://propeller.absmach.eu/docs/getting-started for detailed setup instructions.",
        },
      },
      {
        "@type": "Question",
        name: "Is Propeller open source?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Propeller by Abstract Machines is open-source software. The full source code is available on GitHub at https://github.com/absmach/propeller. Development is co-funded by the European Union Horizon Europe programme under the ELASTIC project (Grant No. 101139067).",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a Manager and a Proplet in Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Propeller by Abstract Machines, the Manager and Proplet are the two primary runtime components. The Manager is a Go-based service that runs in the cloud or on a server. It exposes the REST API, receives task and job submissions, maintains a registry of connected proplets, schedules workloads based on proplet availability, and monitors execution results. The Proplet is a Rust-based agent deployed on each edge node — a Linux server, an ARM gateway, or a Zephyr RTOS microcontroller. It connects to the Manager via MQTT, receives task dispatch messages, fetches the Wasm binary from the OCI registry through the Proxy service, and executes it inside a Wasmtime or WAMR sandbox. The two components are decoupled: the Manager never directly executes workloads, and a Proplet never accepts instructions except via authenticated MQTT messages from its registered Manager. This separation allows horizontal scaling of both tiers independently.",
        },
      },
    ],
  };
}

export function techArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: title,
    description:
      description ??
      `${title} — technical documentation for Propeller by Abstract Machines.`,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: image ?? `${BASE_URL}/opengraph-image.jpg`,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Abstract Machines",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/opengraph-image.jpg`,
      },
    },
    author: {
      "@type": "Organization",
      name: "Abstract Machines",
      url: BASE_URL,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Propeller by Abstract Machines",
      url: BASE_URL,
    },
  };
}

export function breadcrumbListSchema(slugs: string[]) {
  const crumbs: { name: string; item: string }[] = [
    { name: "Home", item: BASE_URL },
    { name: "Docs", item: `${BASE_URL}/docs` },
  ];

  slugs.forEach((slug, i) => {
    const url = `${BASE_URL}/docs/${slugs.slice(0, i + 1).join("/")}`;
    const name = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    crumbs.push({ name, item: url });
  });

  const items = slugs.length === 0 ? crumbs.slice(0, 2) : crumbs;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}
