import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ children }) {
  return (
    <div
      className="
        prose
        prose-lg
        max-w-none

        prose-headings:font-bold
        prose-headings:text-slate-900

        prose-h2:mt-14
        prose-h2:mb-6
        prose-h2:border-b
        prose-h2:border-primary-100
        prose-h2:pb-3
        prose-h2:text-3xl

        prose-h3:mt-10
        prose-h3:mb-4
        prose-h3:text-2xl

        prose-p:leading-8
        prose-p:text-slate-600

        prose-strong:text-slate-900

        prose-img:rounded-3xl
        prose-img:shadow-xl

        prose-table:w-full
        prose-table:border-collapse

        prose-th:border
        prose-th:border-slate-200
        prose-th:bg-slate-50
        prose-th:p-3

        prose-td:border
        prose-td:border-slate-200
        prose-td:p-3

        prose-a:text-primary-600
        hover:prose-a:text-primary-700
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ul: ({ children }) => (
            <ul className="mt-8 space-y-4">
              {children}
            </ul>
          ),

          li: ({ children }) => (
            <li className="flex list-none items-start gap-3">
              <span
                className="
                  mt-1
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary-100
                  text-sm
                  font-bold
                  text-primary-600
                "
              >
                ✓
              </span>

              <span>{children}</span>
            </li>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}