import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CertificateSealProps = {
  icon?: string
  className?: string
}

export function CertificateSeal({ icon = "book_4", className }: CertificateSealProps) {
  return (
    <div className={cn("relative flex size-24 items-center justify-center", className)}>
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        <svg className="size-full text-secondary/20" viewBox="0 0 100 100">
          <path
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="transparent"
            id="seal-circle-path"
          />
          <text className="fill-current font-ui-label-sm text-[8px] tracking-widest uppercase">
            <textPath href="#seal-circle-path">
              • GITTENBERG ARCHIVAL STAMP • ETERNAL PROVENANCE •
            </textPath>
          </text>
        </svg>
      </div>
      <div className="flex size-16 items-center justify-center rounded-full border-[1.5px] border-secondary/40 bg-paper-background shadow-inner">
        <MaterialIcon name={icon} className="text-secondary" filled />
      </div>
    </div>
  )
}
