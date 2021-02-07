import { useState, useCallback, useEffect } from 'react';
import { DropdownItemType } from './useDropdown.types';

const useDropdown = (
    itemsLenght: number,
    onClick: (item: DropdownItemType) => void,
    ref
) => {
    /**
     * Local state
     */
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    /**
     * Effects
     */
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (event.target instanceof HTMLElement) {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref]);

    /**
     * Callbacks
     */
    const handleToggleMenu = useCallback(() => {
        if (itemsLenght) setIsMenuOpen(prev => !prev);
    }, [itemsLenght]);

    const handleSelectItem = useCallback((item) => {
        if (!item.disableBlurEvent) {
            setIsMenuOpen(false);
        }
        onClick(item);
    }, [onClick]);

    const handleCloseMenu = useCallback(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMenuOpen]);

    const handleOpenMenu = useCallback(() => {
        if (!isMenuOpen && itemsLenght) {
            setIsMenuOpen(true);
        }
    }, [isMenuOpen, itemsLenght]);

    return {
        open: isMenuOpen,
        handleOpenMenu,
        handleCloseMenu,
        handleToggleMenu,
        handleSelectItem,
    };
}
export default useDropdown;