import Link from "next/link";

export default function Header(){
    return(
        <>
            <ul>
                <li><Link href="/">Acceuil</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </>
    );
}