"use client";
import { usePathname, useRouter } from 'next/navigation'

import { Car, LetterCircleP } from "@phosphor-icons/react/dist/ssr"
import { SignOut } from '@phosphor-icons/react';

export default function SideBar() {
    const pathname = usePathname()
    const router = useRouter()

    function goTopage(page) {
        router.push(page)
    }

    return (
        <div className="absolute left-0 min-h-screen min-w-24 p-2 flex 
        justify-start items-center bg-blue-950 text-white flex-col space-y-2">
            <div onClick={() => goTopage("/dashboard")} className={pathname === "/dashboard" ? "bg-green-600 p-2 rounded-md cursor-auto" : "cursor-pointer"}>
                <Car color="white" size={26} />
            </div>
            <div onClick={() => goTopage("/park")} className={pathname === "/park" ? "bg-green-600 p-2 rounded-md cursor-auto" : "cursor-pointer"}>
                <LetterCircleP color="white" size={26} />
            </div>
            <div onClick={() => goTopage("/")}
                className={"cursor-pointer"}>
                <SignOut color="white" size={26} />
            </div>
        </div>
    )
}