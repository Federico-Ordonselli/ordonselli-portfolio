'use client';
import { createContext, useContext } from 'react';
export const LanguageContext = createContext({ lang: 'it' });
export function useLanguage() { return useContext(LanguageContext); }
