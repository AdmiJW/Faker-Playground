'use client';

import { Drawer as MuiDrawer, IconButton } from '@mui/material';
import { useWindowDimension } from '@/core/hooks/useWindowDimension';
import { MdKeyboardDoubleArrowLeft } from '@react-icons/all-files/md/MdKeyboardDoubleArrowLeft';
import { DrawerList } from './DrawerList';
import { useDrawerStore } from './state';
import { drawerLinks } from './drawerLinks';

const DRAWER_WIDTH = 270;
const BREAKPOINT = 1024;

export function Drawer() {
    const isOpen = useDrawerStore((state) => state.isOpen);
    const close = useDrawerStore((state) => state.close);

    const { width } = useWindowDimension();
    const isLargeScreen = width >= BREAKPOINT;
    const occupyWidth = isOpen ? DRAWER_WIDTH : 0;

    return (
        <>
            <MuiDrawer
                variant={isLargeScreen ? 'persistent' : 'temporary'}
                open={isOpen}
                onClose={close}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: { width: `${DRAWER_WIDTH}px` },
                }}
            >
                {/* Header */}
                <div className='flex flex-col bg-primary p-4 shadow-md'>
                    <div className='text-right'>
                        <IconButton onClick={close}>
                            <MdKeyboardDoubleArrowLeft className='text-white' />
                        </IconButton>
                    </div>
                    <div className='pt-10'>
                        <span className='text-xl font-bold text-white'>
                            Faker Playground
                        </span>
                    </div>
                </div>

                {/* Drawer Content */}
                <div className='flex-1 overflow-y-auto'>
                    <DrawerList links={drawerLinks} />
                </div>
            </MuiDrawer>

            {/* To occupy space on persistent drawer */}
            <div
                style={{ width: occupyWidth }}
                className='hidden transition-all lg:block'
            />
        </>
    );
}
