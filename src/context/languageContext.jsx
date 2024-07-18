import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [isLanguage, setIsLanguage] = useState(20);

    return (
        <LanguageContext.Provider value={{ isLanguage, setIsLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
