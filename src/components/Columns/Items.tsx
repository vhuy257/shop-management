"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../DataTable/data-table-row-header"
import { DataTableRowActions } from "../DataTable/data-table-row-actions"
import Image from "next/image"

export type Items = {
  id: number
  image: string
  name: string
  price: number
}

export const columns: ColumnDef<Items>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Id" />
        ), 
        cell: ({ row }) => ( <span>{ row.index + 1 }</span> )
    },
    {
        accessorKey: "image",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Image" />
        ),
        cell: ( { row } ) => (
            <Image src={row.original.image} width="80" height="80" alt={row.original.name}/>
        )
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        )       
    },  
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ( { row }) => (
            <span className="text-red-500 text-semibold">{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                row.original.price,
              )}</span>
        )
    },  
    {
        header: "Action",
        cell:  ({ row, table }) => <DataTableRowActions row={row} table={table}/>
    }
]
