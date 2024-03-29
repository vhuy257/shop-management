import React from 'react'
import Image from 'next/image'
import UserDropdown from '../UserDropdown/UserDropdown'
import Navigation from '../Navigation/Navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/helper/auth'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

const Header = async () => {
  const session = await getServerSession(authOptions)
  const t = await getTranslations("Index")
  const nav = await getTranslations("navigation")

  const userTrans = {
    title: t("title")
  }

  const translateNav = {
    employees: nav("employees"),
    menu_list: nav("menu_list"),
    order: nav("order")
  }

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex mx-auto pt-10">        
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Link href="/">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={120}
                height={37}
                priority
            />
          </Link>
        </div>
        <Navigation translate={translateNav} />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {session && <UserDropdown  session={session} {...userTrans}/>}
        </div>
    </div>
  )
}

export default Header;