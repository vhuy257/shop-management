'use client';
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import DataTable from '../DataTable/data-table'
import { columns } from '../Columns/Articles'
import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constant/constant';
import { kyCustom, queryClient } from '@/helper/auth';
import CreateArticle from "../CreateArticle/CreateArticle";

const ListArticles = ({ translate } : {
    translate: any
}) => {
    const { isPending, isError, error, data, isFetching }: any = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            return await kyCustom.get(API_URL.ARTICLE).json()
        },
        refetchOnWindowFocus: false,
    })      
    
    const mutation  = useMutation({
        mutationKey: ['articlesRemove'],
        mutationFn: async({ url }: { url: string }) => {
            const res = await kyCustom.delete(url);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(
                {
                  queryKey: ['articles'],
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
            <div className="flex justify-center gap-4 mb-5">
                <CreateArticle />                        
            </div>
            <DataTable columns={columns} data={data} searchKey='title' meta={{removeRow}} {...translate}/>
        </div>
    )
}

export default ListArticles