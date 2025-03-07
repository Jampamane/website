document.addEventListener("DOMContentLoaded", function () {
    const giscusIframe = document.querySelector("iframe.giscus-frame");

    function setGiscusTheme(theme) {
        if (giscusIframe) {
            giscusIframe.contentWindow.postMessage(
                { giscus: { setConfig: { theme: theme } } },
                "https://giscus.app"
            );
        }
    }

    function detectTheme() {
        const lightMode = document.querySelector("#__palette_1");
        const darkMode = document.querySelector("#__palette_0");

        if (darkMode.checked) {
            setGiscusTheme("dark");
        } else {
            setGiscusTheme("light");
        }
    }

    // Detect theme changes when radio buttons are clicked
    document.querySelectorAll("input[name='__palette']").forEach((radio) => {
        radio.addEventListener("change", detectTheme);
    });

    // Initial theme detection
    detectTheme();
});
