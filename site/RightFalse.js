function toggleState(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '1. Make breakfast and drink ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '1. Make breakfast and drink ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '1. Make breakfast and drink';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '1. Make breakfast and drink ✔';
    }
}

function toggleState1(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '2. Focus on the main task or ptoject ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '2. Focus on the main task or ptoject ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '2. Focus on the main task or ptoject';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '2. Focus on the main task or ptoject ✔';
    }
}

function toggleState2(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '3. Spend time on the hobby ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '3. Spend time on the hobby ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '3. Spend time on the hobby';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '3. Spend time on the hobby ✔';
    }
}

function toggleState3(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '4. Prepare a plan for the next day ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '4. Prepare a plan for the next day ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '4. Prepare a plan for the next day';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '4. Prepare a plan for the next day ✔';
    }
}
function toggleState4(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '5. Go walk or enjoy a favorite movie ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '5. Go walk or enjoy a favorite movie ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '5. Go walk or enjoy a favorite movie';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '5. Go walk or enjoy a favorite movie ✔';
    }
}