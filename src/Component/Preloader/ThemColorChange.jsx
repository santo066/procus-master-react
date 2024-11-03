import React, { useState, useEffect } from 'react';

export default function ThemColorChange() {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const handleCheckboxChange = () => {
        setIsLightTheme(prevState => !prevState);
    };

    useEffect(() => {
        if (isLightTheme) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isLightTheme]);

    return (
        <>
            <div className="theme-color-switch">
                <input
                    checked={isLightTheme}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                />
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>
        </>
    )
}