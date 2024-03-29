'use client';
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import DataTable from '../DataTable/data-table'
import { columns } from '../Columns/Items'
import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constant/constant';
import { kyCustom, queryClient } from '@/helper/auth';

const ListItems = ({ translate } : {
    translate: any
}) => {
    const { isPending, isError, error, data, isFetching }: any = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            return await kyCustom.get(API_URL.ITEMS).json()
        },
        refetchOnWindowFocus: false,
    })      
    
    const mutation  = useMutation({
        mutationKey: ['itemsRemove'],
        mutationFn: async({ url }: { url: string }) => {
            const res = await kyCustom.delete(url);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(
                {
                  queryKey: ['items'],
                  refetchType: 'active',
                },
            )
        }
    })


    const removeRow = (id: string) => {
        const url = `${API_URL.ARTICLE}/${id}`
        mutation.mutate({ url })
    }

    if (isFetching || isPending || mutation.isPending) return (
        <Skeleton className="w-full min-h-[380px] my-10" />
    )    
    
    if (isError) return 'An error has occurred: ' + error.message

    return (
        <div className="my-10 w-full">      
            <DataTable columns={columns} data={data} searchKey='title' meta={{removeRow}} {...translate}/>
        </div>
    )
}

export default ListItems