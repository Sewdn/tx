import { cn } from "@/lib/utils"

export type PatronCreditLineProps = {
  patronName: string
  className?: string
}

export function PatronCreditLine({ patronName, className }: PatronCreditLineProps) {
  return (
    <p className={cn("font-ui-label-md text-ui-label-md", className)}>
      <span className="opacity-70">Mécène:</span> {patronName}
    </p>
  )
}
