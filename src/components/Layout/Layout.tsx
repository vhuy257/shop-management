import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import Test from '@/app/components/Test/Test';

const Layout = ({ children }: { children: React.ReactNode }) => {    
    return (
        <main className='flex min-h-screen flex-col items-center justify-start pt-10 gap-5 max-w-5xl mx-auto'>            
            <Test />
            {children}
            <Toaster />
        </main> 
    )
}

export default Layout