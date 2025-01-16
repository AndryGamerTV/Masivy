function toggleState(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '1. Do the homework ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '1. Do the homework ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '1. Do the homework';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '1. Do the homework ✔';
    }
}

function toggleState1(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '2. Do the dinner ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '2. Do the dinner ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '2. Do the dinner';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '2. Do the dinner ✔';
    }
}

function toggleState2(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '3. Go work ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '3. Go work ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '3. Go work';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '3. Go work ✔';
    }
}

function toggleState3(button) {
    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = '4. Go to sleep ✔';
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = '4. Go to sleep ✖';
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = '4. Go to sleep';
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = '4. Go to sleep ✔';
    }
}