const showButton = document.querySelector('#show_money_button');
const hideButton = document.querySelector('#hide_money_button');
const moneyTexts = document.querySelectorAll('.money_hidable');

if (showButton && hideButton && moneyTexts) {
    hideButton.addEventListener('click', () => {
        moneyTexts.forEach((moneyText) => {
            moneyText.classList.toggle('money--hidden');
        });
        hideButton.style.display = 'none';
        showButton.style.display = 'block';
    });

    showButton.addEventListener('click', () => {
        moneyTexts.forEach((moneyText) => {
            moneyText.classList.toggle('money--hidden');
        });
        hideButton.style.display = 'block';
        showButton.style.display = 'none';
    });
}

