import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdExpandMore } from '@react-icons/all-files/md/MdExpandMore';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { useDict } from '@locale';

import type { DrawerLink } from './drawerLinks';

export function DrawerList({
    links,
    depth = 1,
}: {
    links: DrawerLink[];
    depth?: number;
}) {
    const listItems = links.map((link) => (
        <DrawerListItem key={link.key} link={link} depth={depth} />
    ));

    return (
        <List component='nav' disablePadding>
            {listItems}
        </List>
    );
}

function DrawerListItem({ link, depth }: { link: DrawerLink; depth: number }) {
    return link.children ? (
        <NestedDrawerListItem link={link} depth={depth} />
    ) : (
        <SingleDrawerListItem link={link} depth={depth} />
    );
}

function SingleDrawerListItem({
    link,
    depth,
}: {
    link: DrawerLink;
    depth: number;
}) {
    const pathname = usePathname();
    const isSelected = pathname === link.path;

    const t = useDict().drawer;

    return (
        <Link href={link.path}>
            <ListItemButton sx={{ pl: depth * 2 }} selected={isSelected}>
                {link.logo && <ListItemIcon>{link.logo}</ListItemIcon>}
                <ListItemText primary={t[link.key]} />
            </ListItemButton>
        </Link>
    );
}

function NestedDrawerListItem({
    link,
    depth,
}: {
    link: DrawerLink;
    depth: number;
}) {
    const pathname = usePathname();
    const isSelected = pathname === link.path;

    const [isOpen, setIsOpen] = useState(isSelected);
    const toggle = () => setIsOpen((prev) => !prev);

    const t = useDict().drawer;

    return (
        <>
            <ListItemButton
                onClick={toggle}
                sx={{ pl: depth * 2 }}
                selected={isSelected}
            >
                {link.logo && <ListItemIcon>{link.logo}</ListItemIcon>}
                <ListItemText primary={t[link.key]} />
                <MdExpandMore
                    className={`transition-transform ${isOpen && 'rotate-180'}`}
                />
            </ListItemButton>

            <Collapse in={isOpen} timeout='auto' unmountOnExit>
                <DrawerList links={link.children!} depth={depth + 1} />
            </Collapse>
        </>
    );
}
