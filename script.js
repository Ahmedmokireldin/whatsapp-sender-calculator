function changeLanguage() {
    const lang = document.getElementById('language').value;
    document.querySelectorAll('.lang-en, .lang-ar').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('.lang-' + lang).forEach(el => {
        el.style.display = '';
    });
}

document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Copy the rest of the JavaScript from the <script> tag in the original HTML here
});
