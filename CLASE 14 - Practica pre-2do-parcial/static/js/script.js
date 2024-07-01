function cambiarDimensiones() {
    const dimension = parseInt(document.getElementById('dimensionSelect').value);
    const inputs2D = document.getElementById('inputs2D');
    const inputs3D = document.getElementById('inputs3D');

    if (dimension === 2) {
        inputs2D.style.display = 'flex';
        inputs3D.style.display = 'none';
    } else if (dimension === 3) {
        inputs2D.style.display = 'none';
        inputs3D.style.display = 'flex';
    }
}

function calcularDistancia() {
    debugger
    const dimension = parseInt(document.getElementById('dimensionSelect').value);
    let distancia;

    if (dimension === 2) {
        const xA = parseFloat(document.getElementById('xA').value);
        const yA = parseFloat(document.getElementById('yA').value);
        const xB = parseFloat(document.getElementById('xB').value);
        const yB = parseFloat(document.getElementById('yB').value);

        distancia = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
    } else if (dimension === 3) {
        const xA = parseFloat(document.getElementById('xA3D').value);
        const yA = parseFloat(document.getElementById('yA3D').value);
        const zA = parseFloat(document.getElementById('zA3D').value);
        const xB = parseFloat(document.getElementById('xB3D').value);
        const yB = parseFloat(document.getElementById('yB3D').value);
        const zB = parseFloat(document.getElementById('zB3D').value);

        distancia = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2) + Math.pow(zB - zA, 2));
    }

    document.getElementById('resultadoDiv').textContent = `La distancia entre A y B es: ${distancia.toFixed(2)}`;
}