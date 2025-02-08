function toggleState(button, taskNumber) {
    const taskText = [
        'Make breakfast and drink',
        'Focus on the main task or project',
        'Spend time on the hobby',
        'Prepare a plan for the next day',
        'Go walk or enjoy a favorite movie'
    ];

    if (!button.classList.contains('green') && !button.classList.contains('red') && !button.classList.contains('white')) {
        button.classList.add('green');
        button.textContent = `${taskNumber + 1}. ${taskText[taskNumber]} ✔`;
    } else if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = `${taskNumber + 1}. ${taskText[taskNumber]} ✖`;
    } else if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('white');
        button.textContent = `${taskNumber + 1}. ${taskText[taskNumber]}`;
    } else if (button.classList.contains('white')) {
        button.classList.remove('white');
        button.classList.add('green');
        button.textContent = `${taskNumber + 1}. ${taskText[taskNumber]} ✔`;
    }
}

// Usage example:
// toggleState(button, 0); // For the first task
// toggleState(button, 1); // For the second task
// ...and so on