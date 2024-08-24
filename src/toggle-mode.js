export function toggleMode() {
    const rootElement = document.documentElement;
    const isLightMode = rootElement.classList.toggle('light');

    const mode = isLightMode ? 'light' : 'dark';
    document.getElementById('toggle-mode').querySelector('span').textContent = `${mode} mode ativado!`;
}