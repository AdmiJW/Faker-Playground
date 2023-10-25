'use client';

import { useEffect } from 'react';
import { create } from 'zustand';

import { enDict } from './en';
import { zhCnDict } from './zh_CN';

export type Locale = 'en' | 'zh_CN';
export type Dict = typeof enDict | typeof zhCnDict;

const locales: Locale[] = ['en', 'zh_CN'];

type State = {
    locale: Locale;
    dict: typeof enDict;
};

type Actions = {
    changeLocale: (locale: Locale) => void;
};

const dictMap: Record<Locale, Dict> = {
    en: enDict,
    zh_CN: zhCnDict,
};

export const useLocaleStore = create<State & Actions>()((set) => ({
    locale: 'en',
    dict: enDict,
    changeLocale: (locale) => {
        localStorage.setItem('locale', locale);
        set({ locale, dict: dictMap[locale] });
    },
}));

export function useInitializeLocale() {
    const setLocale = useLocaleStore((state) => state.changeLocale);

    useEffect(() => {
        const isSavedLocale = localStorage.getItem('locale');
        if (!isSavedLocale || !locales.includes(isSavedLocale as Locale))
            return;
        setLocale(isSavedLocale as Locale);
    }, [setLocale]);
}

export const useLocale = () => useLocaleStore((state) => state.locale);
export const useDict = () => useLocaleStore((state) => state.dict);
