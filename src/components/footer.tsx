import Link from "fumadocs-core/link";
import { Github, Linkedin, SendIcon, Twitter, Youtube } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/base-path";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img
        src={assetPath("/named-logo-black.svg")}
        className="h-12 w-auto dark:hidden"
        alt="propeller logo"
      />
      <img
        src={assetPath("/named-logo-white.svg")}
        className="h-12 w-auto hidden dark:block"
        alt="propeller logo"
      />
    </Link>
  );
};

export default function FooterSection() {
  return (
    <footer className="py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto space-y-6 px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Orchestrating WebAssembly workloads across the Cloud-Edge
              continuum. Powered by Abstract Machines.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/absmach/propeller"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-5" />
              </Link>
              <Link
                href="https://twitter.com/absmach"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/abstract-machines"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="size-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@absmach"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="size-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Resources</h3>
            <ul className="[&_li_a]:text-muted-foreground [&_li_a]:hover:text-foreground space-y-2 [&_li_a]:block [&_li_a]:text-sm [&_li_a]:transition-colors [&_li_a]:hover:underline">
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <Link
                  href="https://github.com/absmach/propeller"
                  target="_blank"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="/docs/getting-started">Getting Started</Link>
              </li>
              <li>
                <Link href="/docs/api">API Reference</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Company</h3>
            <ul className="[&_li_a]:text-muted-foreground [&_li_a]:hover:text-foreground space-y-2 [&_li_a]:block [&_li_a]:text-sm [&_li_a]:transition-colors [&_li_a]:hover:underline">
              <li>
                <Link href="https://absmach.eu" target="_blank">
                  Abstract Machines
                </Link>
              </li>
              <li>
                <Link
                  href="https://matrix.to/#/#absmach:matrix.org"
                  target="_blank"
                >
                  Community Chat
                </Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="mailto:info@absmach.eu">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Stay updated with the latest news and updates from Propeller.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:space-x-2">
              <InputGroup className="w-full">
                <InputGroupInput
                  type="email"
                  placeholder="Your email"
                  className="w-full"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton variant="secondary">
                    <span className="hidden lg:inline">Subscribe</span>
                    <SendIcon className="inline lg:hidden" />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <p className="text-muted-foreground text-xs">
              141 Quai de Valmy, 75010 Paris, France
            </p>
          </div>
        </div>
        <Separator className="mt-6 sm:mt-8 lg:mt-10" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground">
          <div className="text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Abstract Machines. All rights
            reserved.
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              Licensed under{" "}
              <Link
                href="https://github.com/absmach/propeller/blob/main/LICENSE"
                target="_blank"
                className="hover:underline"
              >
                Apache-2.0
              </Link>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link
              href="https://www.absmach.eu/terms/"
              target="_blank"
              className="hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.absmach.eu/privacy/"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.absmach.eu/imprint/"
              target="_blank"
              className="hover:underline"
            >
              Imprint
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground pt-2 sm:pt-4">
          <p className="max-w-4xl mx-auto">
            This work has been partially supported by the{" "}
            <Link
              href="https://elasticproject.eu/"
              target="_blank"
              className="hover:underline"
            >
              ELASTIC project
            </Link>
            , which received funding from the{" "}
            <Link
              href="https://smart-networks.europa.eu/"
              target="_blank"
              className="hover:underline"
            >
              Smart Networks and Services Joint Undertaking
            </Link>{" "}
            (SNS JU) under the European Union&apos;s{" "}
            <Link
              href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en"
              target="_blank"
              className="hover:underline"
            >
              Horizon Europe
            </Link>{" "}
            research and innovation programme under{" "}
            <Link
              href="https://cordis.europa.eu/project/id/101139067"
              target="_blank"
              className="hover:underline"
            >
              Grant Agreement No. 101139067
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
