import { useMutation } from "@tanstack/react-query"
import useKyAuth from "./useKyAuth";
import { queryClient } from "@/helper/auth";

interface User {
    title: string;
    description: string;
    body: string;
    published: boolean
}

export default function useArticle() {
    const { kyAuth } = useKyAuth()
    
    //Create new user
    const createArticle = useMutation({
        mutationKey: ['createArticle'],
        mutationFn: async ({ url, user }: { url: string, user: User }) => {
            try {
                const res = await kyAuth.post(url, {
                    json: user
                }).json();
                return res;   
            } catch (error: any) {
                if (error.name === 'HTTPError') {
                    const errorJson = await error.response.json();
                    throw new Error(JSON.stringify(errorJson.message))
                }
            }            
        },
        onError: (err: any) => {
            console.log(err, 'error')
        },
        onSuccess: (result, variables, context: any) => {
            queryClient.invalidateQueries(
                {
                  queryKey: ['articles'],
                  refetchType: 'active',
                },
            )
        }
    })
    
    return {
        createArticle,
    }
}
