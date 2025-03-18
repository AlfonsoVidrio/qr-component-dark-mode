const applyTheme = theme => {
    document.body.classList.toggle('light-theme', theme === 'light-theme');
    document.body.classList.toggle('dark-theme', theme === 'dark-theme');
    document.querySelector('.light-icon').style.display = theme === 'dark-theme' ? 'block' : 'none';
    document.querySelector('.dark-icon').style.display = theme === 'light-theme' ? 'block' : 'none';
};

applyTheme(localStorage.getItem('theme') || 'dark-theme');

document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});