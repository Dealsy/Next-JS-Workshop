import { codeToHtml } from 'shiki/bundle/web'
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerMetaHighlight,
} from '@shikijs/transformers'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

interface MDXProps {
  props: {
    children?: string
  }
}

// This function is used to check if the children is an MDXProps object
function isMDXProps(obj: unknown): obj is MDXProps {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'props' in obj &&
    typeof (obj as MDXProps).props === 'object' &&
    (obj as MDXProps).props !== null &&
    (typeof (obj as MDXProps).props.children === 'string' ||
      typeof (obj as MDXProps).props.children === 'undefined')
  )
}

// This function is used to highlight the code using the shiki library and night-owl theme
async function highlight(code: string, lang: string) {
  try {
    return await codeToHtml(code, {
      lang,
      theme: 'night-owl',
      transformers: [
        // These transformers allow us to highlight the code or show diffs
        transformerNotationHighlight(),
        transformerNotationDiff(),
        transformerMetaHighlight(),
      ],
    })
  } catch (error) {
    console.error('Highlighting error:', error)
    return code
  }
}

export default async function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className?.replace(/language-/, '') || 'javascript'

  // Handle different types of children to extract the actual code
  let code = ''
  if (children) {
    if (typeof children === 'string') {
      code = children
    } else if (Array.isArray(children)) {
      code = children.join('')
    } else if (isMDXProps(children)) {
      code = children.props.children || ''
    }
  }

  const highlightedCode = await highlight(code, language)

  return (
    <div className="relative rounded-lg overflow-hidden my-4">
      <div className="absolute top-2 right-2 text-xs text-gray-400">{language}</div>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        className="p-4 bg-[#011627] [&_.highlighted]:bg-blue-500/20 [&_.diff.add]:bg-green-500/20 [&_.diff.remove]:bg-red-500/20 **:data-highlighted:bg-blue-500/20"
      />
    </div>
  )
}
