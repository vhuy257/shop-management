"use client";
import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const Test = () => {
    const {t } = useTranslation("common")

    return (
        <div>Test componenntntntnt {t("title")}</div>
    )
}
export default Test