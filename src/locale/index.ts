'use client';

import { useEffect } from 'react';
import { create } from 'zustand';

import { enDict } from './en';
import { zhDict } from './zh';

export type Locale = 'en' | 'zh';
export type Dict = typeof enDict | typeof zhDict;

type State = {
    locale: Locale;
    dict: typeof enDict;
};

type Actions = {
    changeLocale: (locale: 'en' | 'zh') => void;
};

const dictMap: Record<Locale, Dict> = {
    en: enDict,
    zh: zhDict,
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
        if (!isSavedLocale || !['zh', 'en'].includes(isSavedLocale)) return;
        setLocale(isSavedLocale as Locale);
    }, [setLocale]);
}

export const useLocale = () => useLocaleStore((state) => state.locale);
export const useDict = () => useLocaleStore((state) => state.dict);
