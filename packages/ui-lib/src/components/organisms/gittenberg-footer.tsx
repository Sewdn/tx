import { cn } from "@/lib/utils"

export type GittenbergFooterProps = {
  links: { label: string; href: string }[]
  copyright: string
  className?: string
}

export function GittenbergFooter({ links, copyright, className }: GittenbergFooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-outline-variant bg-background py-region dark:border-outline",
        className,
      )}
    >
      <div className="mx-auto flex max-w-reading-width flex-col items-center gap-component">
        <div className="mb-component flex gap-section">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-ui-label-sm text-ui-label-sm text-on-surface-variant opacity-70 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-ui-label-md text-ui-label-md tracking-widest text-on-surface-variant uppercase">
          GITTENBERG
        </p>
        <p className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">{copyright}</p>
      </div>
    </footer>
  )
}
