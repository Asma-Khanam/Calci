document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn.btn-extraa');
    const equal = document.querySelector('.btn.btn-extra');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const value = e.target.dataset.num;
            if (value === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = 'Error';
                }
            } else if (value === 'C') {
                screen.value = '';
            } else if (value === '.' && screen.value.includes('.')) {
                return; 
            } else {
                screen.value += value;
            }
        });
    });

    
    screen.addEventListener('keydown', function(e) {
        if (!(/[0-9+\-*/.=]|Backspace|Delete|Enter/.test(e.key))) {
            e.preventDefault();
        }
    });

    //  Enter key press
    screen.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = 'Error';
            }
        }
    });

    // Clear button 
    clear.addEventListener('click', function() {
        screen.value = '';
    });

    // Equal button 
    equal.addEventListener('click', function() {
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
        }
    });
});
