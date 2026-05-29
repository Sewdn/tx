import { MaterialIcon } from "@/components/atoms/material-icon"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@tx/ui"
import type { ArchivalVersionRow } from "@/lib/types"

export type ArchivalEvolutionTableProps = {
  title?: string
  rows: ArchivalVersionRow[]
}

export function ArchivalEvolutionTable({
  title = "Archival Evolution",
  rows,
}: ArchivalEvolutionTableProps) {
  return (
    <section>
      <h3 className="mb-8 font-headline-lg text-[24px] text-primary">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-outline-variant">
        <Table>
          <TableHeader className="border-b border-outline-variant bg-surface-container-low">
            <TableRow>
              {["Version", "Revision Note", "Binding/Grid", "Date", ""].map((head) => (
                <TableHead
                  key={head}
                  className="px-6 py-4 font-ui-label-sm tracking-widest text-on-surface-variant uppercase"
                >
                  {head}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="tonal-layer-1">
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className="group border-b border-outline-variant/30 transition-colors hover:bg-surface-container-high"
              >
                <TableCell className="px-6 py-4 font-code-sm text-primary">{row.version}</TableCell>
                <TableCell className="px-6 py-4 font-ui-label-md">{row.note}</TableCell>
                <TableCell className="px-6 py-4 font-ui-label-sm text-on-surface-variant italic">
                  {row.binding}
                </TableCell>
                <TableCell className="px-6 py-4 font-ui-label-sm text-on-surface-variant">
                  {row.date}
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <MaterialIcon
                    name="visibility"
                    className="cursor-pointer text-on-surface-variant group-hover:text-primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
