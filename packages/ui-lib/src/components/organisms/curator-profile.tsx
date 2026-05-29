export type CuratorProfileProps = {
  name: string
  role: string
  avatarSrc: string
  avatarAlt?: string
}

export function CuratorProfile({
  name,
  role,
  avatarSrc,
  avatarAlt = "Curator profile",
}: CuratorProfileProps) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <img
        alt={avatarAlt}
        src={avatarSrc}
        className="size-10 rounded-full bg-surface-container-highest object-cover"
      />
      <div>
        <p className="font-ui-label-md text-primary">{name}</p>
        <p className="font-ui-label-sm text-outline">{role}</p>
      </div>
    </div>
  )
}
