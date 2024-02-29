import React from 'react'
import { Button } from '../ui/button'
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}
  
export default function DeleteArticles<TData> ({
    table,
}: DataTablePaginationProps<TData>) {

    const removeList = () => {
        const listSelect: any = table.getFilteredSelectedRowModel().rows
        const meta: any = table?.options?.meta;
        listSelect.map((k: any) => {
            meta.removeRow(k?.id)
        })
    }

    return (
        <Button variant={'destructive'} size={'xs'} onClick={() => removeList()}>
            Remove ({table.getFilteredSelectedRowModel().rows.length})
        </Button>
    )
}