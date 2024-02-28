import React from 'react'

import {    
    DropdownMenuGroup,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const LanguageSwitcher = () => {
    return (
        <DropdownMenuGroup>
            <DropdownMenuItem asChild>
                <Link href="/?lang=vi" as="/vi" prefetch> 
                    Vietnamese 
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/?lang=en" as="/en" prefetch>
                    English 
                </Link>
            </DropdownMenuItem>                        
        </DropdownMenuGroup>
    )
}

export default LanguageSwitcher