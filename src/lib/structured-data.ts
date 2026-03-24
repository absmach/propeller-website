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
  WIKIDATA_URL,
  YOUTUBE_URL,
} from "@/lib/geo-constants";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

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
    name: ORG_NAME,
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
      "MQTT, CoAP, WebSocket protocol support",
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
          text: "Propeller by Abstract Machines is a cutting-edge orchestrator for WebAssembly (Wasm) workloads across the Cloud-Edge continuum. It enables seamless deployment of Wasm applications from powerful cloud servers to constrained microcontrollers, combining flexibility, security, and performance.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key features of Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller offers cloud-edge orchestration, fast boot times with near-instant startup, FaaS deployment capabilities, OCI registry support, WAMR on Zephyr RTOS for constrained devices, integration with SuperMQ service mesh, and security-first design for IoT environments.",
        },
      },
      {
        "@type": "Question",
        name: "Which devices does Propeller support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller supports a wide range of devices from robust cloud servers to lightweight microcontrollers running Zephyr RTOS. It can deploy Wasm workloads across the entire cloud-edge continuum, making it ideal for diverse IoT and edge computing scenarios.",
        },
      },
      {
        "@type": "Question",
        name: "How does Propeller integrate with existing infrastructure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propeller integrates with OCI-compliant registries for workload storage and retrieval, and connects with SuperMQ for secure IoT device communication. It supports standard protocols like MQTT, CoAP, and WebSocket for communication with edge devices.",
        },
      },
      {
        "@type": "Question",
        name: "What are common use cases for Propeller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common use cases include Industrial IoT (deploying analytics to factory edge devices), secure workload execution with isolated Wasm runtimes, smart cities with scalable IoT networks, and serverless applications leveraging FaaS capabilities across the cloud-edge continuum.",
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
          text: "In Propeller by Abstract Machines, the Manager is the Go-based orchestration engine responsible for scheduling and monitoring Wasm workloads across nodes. A Proplet is a Rust-based worker agent deployed on an edge device or microcontroller that receives tasks from the Manager and executes them inside a sandboxed Wasm runtime.",
        },
      },
    ],
  };
}

export function techArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description?: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description:
      description ??
      `${title} — technical documentation for Propeller by Abstract Machines.`,
    url,
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
