"use client"

import { useTranslation } from "react-i18next"

const Language = (): React.ReactNode => {
    const { i18n } = useTranslation()
    const changeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng)
    }


  return (
    <div className="m-1">
        <select
            name="language-selector"
            id="language-selector"
            aria-label="language selector"
            onChange={(e) => changeLanguage(e.target.value)}
            className="cursor-pointer"
        >
            <option aria-label="Deutsch" value="de">Deutsch</option>
            <option aria-label="English" value="en">English</option>
            {/**
            <option aria-label="Français" value="fr">Français</option>
            */}
        </select>
    </div>
  )
}

export default Language