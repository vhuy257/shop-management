import React from 'react'
import {    
    DropdownMenuGroup,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const LanguageSwitcher = () => {
    const locale = useLocale()
    const router = useRouter()

    return (
        <DropdownMenuGroup>
            <DropdownMenuCheckboxItem checked={locale === 'vi'} onCheckedChange={() => router.push('/vi')}>
                <Link href="/?lang=vi" as="/vi" className='block'> 
                    Vietnamese 
                </Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={locale === 'en'} onCheckedChange={() => router.push('/en')}>
                <Link href="/?lang=en" as="/en" className='block'>
                    English 
                </Link>
            </DropdownMenuCheckboxItem>                        
        </DropdownMenuGroup>
    )
}

export default LanguageSwitcher