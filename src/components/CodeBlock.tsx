import { codeToHtml } from "shiki/bundle/web";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

interface MDXProps {
  props: {
    children?: string;
  };
}

function isMDXProps(obj: unknown): obj is MDXProps {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "props" in obj &&
    typeof (obj as MDXProps).props === "object" &&
    (obj as MDXProps).props !== null &&
    (typeof (obj as MDXProps).props.children === "string" ||
      typeof (obj as MDXProps).props.children === "undefined")
  );
}

async function highlight(code: string, lang: string) {
  try {
    return await codeToHtml(code, {
      lang,
      theme: "night-owl",
      transformers: [],
    });
  } catch (error) {
    console.error("Highlighting error:", error);
    return code;
  }
}

export default async function CodeBlock({
  children,
  className,
}: CodeBlockProps) {
  const language = className?.replace(/language-/, "") || "javascript";

  // Handle different types of children to extract the actual code
  let code = "";
  if (children) {
    if (typeof children === "string") {
      code = children;
    } else if (Array.isArray(children)) {
      code = children.join("");
    } else if (isMDXProps(children)) {
      code = children.props.children || "";
    }
  }

  const highlightedCode = await highlight(code, language);

  return (
    <div className="relative rounded-lg overflow-hidden my-4">
      <div className="absolute top-2 right-2 text-xs text-gray-400">
        {language}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        className="p-4 bg-[#011627]"
      />
    </div>
  );
}
