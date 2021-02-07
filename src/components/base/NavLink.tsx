import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({ children, ...props }) => {
    const { asPath } = useRouter();

    return (
        <div className="d-flex flex-column">
            <li className="h3 pr-3 pl-3">
                <Link {...props} href={props.href}>
                    <a className="text-muted">{children}</a>
                </Link>
            </li>
            <div style={{ height: '4px', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', backgroundColor: '#d97706' }} />
        </div>
    );
};

export default NavLink;
