import React, { useRef } from 'react'
import cx from 'classnames';
import useDropdown from '../../hooks/useDropdown/useDropdown';

const ThreeDotsMenu = ({ iconClassName = ''}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        open,
        handleToggleMenu,
    } = useDropdown(2, () => null, dropdownRef);

    return (
        <div className="threedots" ref={dropdownRef}>
            <div
                role='button'
                onClick={handleToggleMenu}
                className={cx(
                    "threedots__trigger",
                    "threedots__trigger--three-dots"
                )}
            >
                <span className={cx("h2",iconClassName)}>&#8942;</span>
            </div>
            {
                open &&
                <div
                    className="threedots__menu mt-2"
                    tabIndex={-1}
                    role='listbox'
                >
                    <div className={cx('threedots__menu__item')}>
                        <span>Shpërndaje postimin</span>
                    </div>
                </div>
            }
        </div>

    )
}
export default ThreeDotsMenu;