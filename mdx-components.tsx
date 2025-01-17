import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/CodeBlock";
import Demo from "@/components/Demo";
import Alert from "@/components/alert";
import { InteractiveExercises } from "@/components/interactive-exercises";
import ServerClientGuide from "@/components/server-client-guide";
import ThemeImage from "@/components/ThemeImage";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    Demo: Demo,
    Alert: Alert,
    InteractiveExercises: InteractiveExercises,
    ServerClientGuide: ServerClientGuide,
    ThemeImage: ThemeImage,
    ...components,
  };
}
