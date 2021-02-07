import React from 'react'
import Link from 'next/link';

const Header = () => {
    return (
        <header className="header shadow-sm justify-content-center">
            <Link href="/">
                <a className="header__link">
                    Front-End Assignment
                </a>
            </Link>
        </header>
    )
}

export default Header;
