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
        MathJax.typeset();
    } catch (error) {
        document.getElementById('result').innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
})