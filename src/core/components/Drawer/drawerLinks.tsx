import { MdAirplanemodeActive } from '@react-icons/all-files/md/MdAirplanemodeActive';
import { BiSolidDog } from '@react-icons/all-files/bi/BiSolidDog';
import { BsFillPaletteFill } from '@react-icons/all-files/bs/BsFillPaletteFill';
import { MdShoppingCart } from '@react-icons/all-files/md/MdShoppingCart';
import { MdBusiness } from '@react-icons/all-files/md/MdBusiness';
import { FaDatabase } from '@react-icons/all-files/fa6/FaDatabase';
import { AiOutlineFieldBinary } from '@react-icons/all-files/ai/AiOutlineFieldBinary';
import { MdCalendarMonth } from '@react-icons/all-files/md/MdCalendarMonth';
import { MdAttachMoney } from '@react-icons/all-files/md/MdAttachMoney';
import { IoMdGitBranch } from '@react-icons/all-files/io/IoMdGitBranch';
import { FaMask } from '@react-icons/all-files/fa6/FaMask';
import { MdImage } from '@react-icons/all-files/md/MdImage';
import { BsGlobe } from '@react-icons/all-files/bs/BsGlobe';
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';
import { MdOutlineTextSnippet } from '@react-icons/all-files/md/MdOutlineTextSnippet';
import { MdMusicNote } from '@react-icons/all-files/md/MdMusicNote';
import { MdNumbers } from '@react-icons/all-files/md/MdNumbers';
import { MdPerson4 } from '@react-icons/all-files/md/MdPerson4';
import { MdPhone } from '@react-icons/all-files/md/MdPhone';
import { MdScience } from '@react-icons/all-files/md/MdScience';
import { MdShortText } from '@react-icons/all-files/md/MdShortText';
import { MdSettings } from '@react-icons/all-files/md/MdSettings';
import { MdDirectionsCarFilled } from '@react-icons/all-files/md/MdDirectionsCarFilled';
import { MdTextFields } from '@react-icons/all-files/md/MdTextFields';

import type { Dict } from '@locale';

export type DrawerLink = {
    key: keyof Dict['drawer'];
    path: string;
    logo?: React.ReactNode;
    children?: DrawerLink[];
};

export const drawerLinks: DrawerLink[] = [
    {
        key: 'airline',
        path: '/airline',
        logo: <MdAirplanemodeActive />,
    },
    {
        key: 'animal',
        path: '/animal',
        logo: <BiSolidDog />,
    },
    {
        key: 'color',
        path: '/color',
        logo: <BsFillPaletteFill />,
    },
    {
        key: 'commerce',
        path: '/commerce',
        logo: <MdShoppingCart />,
    },
    {
        key: 'company',
        path: '/company',
        logo: <MdBusiness />,
    },
    {
        key: 'database',
        path: '/database',
        logo: <FaDatabase />,
    },
    {
        key: 'datatype',
        path: '/datatype',
        logo: <AiOutlineFieldBinary />,
    },
    {
        key: 'date',
        path: '/date',
        logo: <MdCalendarMonth />,
    },
    {
        key: 'finance',
        path: '/finance',
        logo: <MdAttachMoney />,
    },
    {
        key: 'git',
        path: '/git',
        logo: <IoMdGitBranch />,
    },
    {
        key: 'hacker',
        path: '/hacker',
        logo: <FaMask />,
    },
    {
        key: 'image',
        path: '/image',
        logo: <MdImage />,
    },
    {
        key: 'internet',
        path: '/internet',
        logo: <BsGlobe />,
    },
    {
        key: 'location',
        path: '/location',
        logo: <MdLocationOn />,
    },
    {
        key: 'lorem',
        path: '/lorem',
        logo: <MdOutlineTextSnippet />,
    },
    {
        key: 'music',
        path: '/music',
        logo: <MdMusicNote />,
    },
    {
        key: 'number',
        path: '/number',
        logo: <MdNumbers />,
    },
    {
        key: 'person',
        path: '/person',
        logo: <MdPerson4 />,
    },
    {
        key: 'phone',
        path: '/phone',
        logo: <MdPhone />,
    },
    {
        key: 'science',
        path: '/science',
        logo: <MdScience />,
    },
    {
        key: 'string',
        path: '/string',
        logo: <MdShortText />,
    },
    {
        key: 'system',
        path: '/system',
        logo: <MdSettings />,
    },
    {
        key: 'vehicle',
        path: '/vehicle',
        logo: <MdDirectionsCarFilled />,
    },
    {
        key: 'word',
        path: '/word',
        logo: <MdTextFields />,
    },
];
