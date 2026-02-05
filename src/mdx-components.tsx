import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { APIPage } from "@/components/api-page";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: This is okay
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
