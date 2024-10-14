'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navigation() {
    const path = usePathname()
    return(
        <nav>
            <li>
                <Link href='/'>HOME</Link> {path==='/'?"감자":""}
            </li>
            <li>
                <Link href="/about_us">ABout</Link> {path==='/about_us'?"감자":""}
            </li>
        </nav>
    )
}