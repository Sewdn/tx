import { StepNumber } from "@/components/atoms/step-number"
import { cn } from "@/lib/utils"

export type PrintOrderStep = {
  id: string
  label: string
}

export type PrintOrderStepperProps = {
  steps?: PrintOrderStep[]
  activeStep?: number
  className?: string
}

const defaultSteps: PrintOrderStep[] = [
  { id: "customization", label: "Customization" },
  { id: "shipping", label: "Shipping" },
  { id: "payment", label: "Payment" },
]

export function PrintOrderStepper({
  steps = defaultSteps,
  activeStep = 1,
  className,
}: PrintOrderStepperProps) {
  return (
    <nav className={cn("flex items-center justify-center gap-section py-section", className)}>
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const completed = stepNumber < activeStep
        const active = stepNumber === activeStep

        return (
          <div key={step.id} className="flex items-center gap-component">
            <div className="flex items-center gap-micro">
              <StepNumber number={stepNumber} active={active} completed={completed} />
              <span
                className={cn(
                  "font-ui-label-md text-ui-label-md",
                  active || completed ? "font-bold text-primary" : "text-on-surface-variant",
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <div className="hidden h-px w-12 bg-outline-variant sm:block" />
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}
