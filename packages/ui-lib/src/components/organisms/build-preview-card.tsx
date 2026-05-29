import { MaterialIcon } from "@/components/atoms/material-icon"

export type BuildPreviewCardProps = {
  author: string
  title: string
  subtitle: string
  press: string
  edition: string
  illustrationSrc?: string
  illustrationAlt?: string
}

export function BuildPreviewCard({
  author,
  title,
  subtitle,
  press,
  edition,
  illustrationSrc,
  illustrationAlt = "",
}: BuildPreviewCardProps) {
  return (
    <div className="canvas-bg relative flex grow flex-col items-center justify-center overflow-hidden rounded-xl border border-outline-variant p-region">
      <div className="relative flex aspect-[1/1.4] w-[420px] flex-col items-center bg-white p-region text-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute inset-0 border-[24px] border-double border-surface-container opacity-20" />
        <p className="mb-region font-ui-label-sm tracking-[0.4em] text-outline uppercase">{author}</p>
        <h2 className="mb-component font-display-lg leading-none text-primary">{title}</h2>
        <div className="mb-component h-px w-12 bg-primary/20" />
        <p className="mb-auto font-body-md text-outline-variant italic">{subtitle}</p>
        {illustrationSrc ? (
          <div className="mb-section flex items-center justify-center border border-outline-variant/30 p-component opacity-40">
            <img alt={illustrationAlt} src={illustrationSrc} className="grayscale" />
          </div>
        ) : null}
        <div className="mt-auto">
          <p className="font-ui-label-sm tracking-widest text-outline">{press}</p>
          <p className="mt-micro font-code-sm text-[10px] text-outline-variant">{edition}</p>
        </div>
      </div>
      <div className="absolute bottom-region flex gap-micro rounded-full border border-outline-variant bg-white/80 p-micro opacity-0 shadow-lg backdrop-blur-md transition-opacity group-hover:opacity-100">
        {(["zoom_in", "zoom_out", "fullscreen"] as const).map((icon) => (
          <span
            key={icon}
            className="rounded-full p-micro transition-colors hover:bg-surface-variant"
          >
            <MaterialIcon name={icon} />
          </span>
        ))}
      </div>
    </div>
  )
}
