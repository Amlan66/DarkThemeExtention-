(function() {
    const darkStyleId = 'dark-theme-style';

    if (document.getElementById(darkStyleId)) {
        // If dark theme is already applied, remove it
        const existingStyle = document.getElementById(darkStyleId);
        existingStyle.parentNode.removeChild(existingStyle);
    } else {
        // Create a new style element for dark theme
        const style = document.createElement('style');
        style.id = darkStyleId;
        style.innerText = `
            html {
                filter: invert(1) hue-rotate(180deg);
                background: #121212 !important;
            }
            img, video, iframe {
                filter: invert(1) hue-rotate(180deg) !important;
            }
        `;
        document.head.appendChild(style);
    }
})();
