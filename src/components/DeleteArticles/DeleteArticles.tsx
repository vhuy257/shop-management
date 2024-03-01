import React from 'react'
import { Button } from '../ui/button'
import { Table } from "@tanstack/react-table";
import { Cross2Icon } from '@radix-ui/react-icons';

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
            meta.removeRow(k?.original?.id)
        })
    }

    return (
        <Button variant={'outline'} size={'xs'} onClick={() => removeList()} className='h-8 px-2 lg:px-3'>
            <Cross2Icon width={'15'} height={'15'}/> <span className='text-xs'>{table.getFilteredSelectedRowModel().rows.length}</span>
        </Button>
    )
}