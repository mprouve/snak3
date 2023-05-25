import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { enUS, Localization } from '@mui/material/locale';
import { TFunction } from 'i18next';
import { config } from 'src/config/config';

interface ILang {
  label: string;
  value: string;
  systemValue: Localization;
}

type UseLocales = () => {
  onChangeLang: (newLang: string) => Promise<TFunction>;
  currentLang: ILang;
  allLang: ILang[];
};

/**
 * LANGUAGES is a collection of available languages.
 * this constants can be used as options if you
 * want add a language picker
 * */
const LANGUAGES: ILang[] = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
];

const useLocales: UseLocales = () => {
  const { i18n } = useTranslation();
  const langStorage = localStorage.getItem(`I18NEXT_LNG_${config.env}`);
  const currentLang = LANGUAGES.find(_lang => _lang.value === langStorage) || LANGUAGES[1];

  const handleChangeLanguage = useCallback((newLang: string) => i18n.changeLanguage(newLang), [i18n]);

  return {
    onChangeLang: handleChangeLanguage,
    currentLang,
    allLang: LANGUAGES,
  };
};

export default useLocales;
