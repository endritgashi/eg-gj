import React, { useRef } from 'react'
import cx from 'classnames';
import useDropdown from '../../hooks/useDropdown/useDropdown';

const ThreeDotsMenu = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        open,
        handleToggleMenu,
        handleSelectItem,
    } = useDropdown(2, () => null, dropdownRef);

    return (
        <div className="coredropdown" ref={dropdownRef}>
            <div
                role='button'
                onClick={handleToggleMenu}
                className={cx(
                    "coredropdown__trigger",
                    "coredropdown__trigger--three-dots"
                )}
            >
                <span className="h2">&#8942;</span>
            </div>
            {
                open &&
                <div
                    className="coredropdown__menu mt-2"
                    tabIndex={-1}
                    role='listbox'
                >
                    <div className={cx('coredropdown__menu__item')}>
                        <span>hhhah</span>
                    </div>  
                </div>
            }
        </div>

    )
}
export default ThreeDotsMenu;