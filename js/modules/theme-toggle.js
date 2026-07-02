export function themeToggle() {  
    const toggle = document.querySelector("#theme-toggle");

    toggle.addEventListener("change", () => {
        document.documentElement.classList.toggle("dark");
    });
}