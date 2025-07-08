import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import React from 'react';

export default function LocaleSwitcher() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const locales = ["de", "en"];
    console.log("locale: ",locale)

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
            {locales.map((curr: string) => (
                <option key={curr} value={curr}>
                    {t('locale', {locale: curr })}
                </option>
            ))}
        </LocaleSwitcherSelect>
    )
}