'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from "../styles/nav.module.css"

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default function Navigation() {
    const path = usePathname()
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>HOME</Link> {path === '/' ? "🐸" : ""}
                </li>
                <li>
                    <Link href="/about_us">ABout</Link> {path === '/about_us' ? "🐸" : ""}
                </li>
            </ul>
        </nav>
    )
}