"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import useTranslation from 'next-translate/useTranslation'

const UserDropdown = () => {
    return (
        <div className='flex items-center gap-2 text-sm'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="relative">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>
                                <DiscordLogoIcon />
                            </AvatarFallback>
                        </Avatar>                                         
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none mb-2">Settings</p>
                        <p className="text-xs leading-none text-muted-foreground">
                        {/* { t("title") }, {session?.user?.email} */}
                        </p>
                    </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <LanguageSwitcher />

                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                        Logout
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>            
        </div>
    )
}

export default UserDropdown