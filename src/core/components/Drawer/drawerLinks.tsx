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

export type DrawerLink = {
    text: string;
    path: string;
    logo?: React.ReactNode;
    children?: DrawerLink[];
};

export const drawerLinks: DrawerLink[] = [
    {
        text: 'Airline',
        path: '/airline',
        logo: <MdAirplanemodeActive />,
    },
    {
        text: 'Animal',
        path: '/animal',
        logo: <BiSolidDog />,
    },
    {
        text: 'Color',
        path: '/color',
        logo: <BsFillPaletteFill />,
    },
    {
        text: 'Commerce',
        path: '/commerce',
        logo: <MdShoppingCart />,
    },
    {
        text: 'Company',
        path: '/company',
        logo: <MdBusiness />,
    },
    {
        text: 'Database',
        path: '/database',
        logo: <FaDatabase />,
    },
    {
        text: 'Datatype',
        path: '/datatype',
        logo: <AiOutlineFieldBinary />,
    },
    {
        text: 'Date',
        path: '/date',
        logo: <MdCalendarMonth />,
    },
    {
        text: 'Finance',
        path: '/finance',
        logo: <MdAttachMoney />,
    },
    {
        text: 'Git',
        path: '/git',
        logo: <IoMdGitBranch />,
    },
    {
        text: 'Hacker',
        path: '/hacker',
        logo: <FaMask />,
    },
    {
        text: 'Image',
        path: '/image',
        logo: <MdImage />,
    },
    {
        text: 'Internet',
        path: '/internet',
        logo: <BsGlobe />,
    },
    {
        text: 'Location',
        path: '/location',
        logo: <MdLocationOn />,
    },
    {
        text: 'Lorem',
        path: '/lorem',
        logo: <MdOutlineTextSnippet />,
    },
    {
        text: 'Music',
        path: '/music',
        logo: <MdMusicNote />,
    },
    {
        text: 'Number',
        path: '/number',
        logo: <MdNumbers />,
    },
    {
        text: 'Person',
        path: '/person',
        logo: <MdPerson4 />,
    },
    {
        text: 'Phone',
        path: '/phone',
        logo: <MdPhone />,
    },
    {
        text: 'Science',
        path: '/science',
        logo: <MdScience />,
    },
    {
        text: 'String',
        path: '/string',
        logo: <MdShortText />,
    },
    {
        text: 'System',
        path: '/system',
        logo: <MdSettings />,
    },
    {
        text: 'Vehicle',
        path: '/vehicle',
        logo: <MdDirectionsCarFilled />,
    },
    {
        text: 'Word',
        path: '/word',
        logo: <MdTextFields />,
    },
];
