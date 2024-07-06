document.getElementById('calculate').addEventListener('click', function() {
    const expression = document.getElementById('expression').value;
    const variable = document.getElementById('variable').value;

    try {
        let result;
        let formattedExpression = `\\(${expression}\\)`;
        let formattedResult;

        result = math.derivative(expression, variable).toString();
        formattedResult = `\\(${math.parse(result).toTex()}\\)`;

        document.getElementById('result').innerHTML = `<strong>Función:</strong> ${formattedExpression}<br><strong>Resultado:</strong> ${formattedResult}`;
        addToHistory(expression, variable, result);
        MathJax.typeset();
    } catch (error) {
        document.getElementById('result').innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
});

function addToHistory(expression, variable, result) {
    const historyUl = document.getElementById('history');
    const newHistoryItem = document.createElement('li');
	let formattedExpression = `\\(${expression}\\)`;
    let formattedResult;
	formattedResult = `\\(${math.parse(result).toTex()}\\)`;

    newHistoryItem.classList.add('mb-4', 'p-2', 'border', 'rounded');
    newHistoryItem.innerHTML = `<strong>Función:</strong> ${expression}<br><strong>Variable:</strong> ${variable}<br><strong>Resultado:</strong> ${formattedResult}`;
    historyUl.appendChild(newHistoryItem);

    const toggleButton = document.getElementById('toggleHistory');
    if (historyUl.children.length > 0) {
        toggleButton.classList.remove('hidden');
    }
}

document.getElementById('toggleHistory').addEventListener('click', function() {
    const historyPanel = document.getElementById('historyPanel');
    historyPanel.classList.toggle('hidden');
});