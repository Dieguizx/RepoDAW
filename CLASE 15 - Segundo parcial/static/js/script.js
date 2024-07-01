function calcular() {
    debugger
    const energiaCinetica = parseFloat(document.getElementById('energiaCinetica').value);
    const masa = parseFloat(document.getElementById('masa').value);
    const velocidad = parseFloat(document.getElementById('velocidad').value);

    const resultado = document.getElementById('resultado');
    const error = document.getElementById('error');
    resultado.textContent = '';
    error.textContent = '';

    // Validaciones
    if (
        (isNaN(energiaCinetica) || energiaCinetica <= 0) &&
        (isNaN(masa) || masa <= 0) &&
        (isNaN(velocidad) || velocidad <= 0)
    ) {
        error.textContent = 'Por favor, ingrese al menos dos valores positivos.';
        return;
    }

    if (
        (isNaN(energiaCinetica) && isNaN(masa)) ||
        (isNaN(energiaCinetica) && isNaN(velocidad)) ||
        (isNaN(masa) && isNaN(velocidad))
    ) {
        error.textContent = 'Por favor, ingrese al menos dos valores numéricos.';
        return;
    }

    // Calculo de la energia cinetica
    if (isNaN(energiaCinetica)) {
        if (!isNaN(masa) && !isNaN(velocidad)) {
            const energiaCineticaCalculada = 0.5 * masa * velocidad * velocidad;
            resultado.textContent = `Energía Cinética: ${energiaCineticaCalculada} Joules`;
        }
    } else if (isNaN(masa)) {
        if (!isNaN(energiaCinetica) && !isNaN(velocidad)) {
            const masaCalculada = (2 * energiaCinetica) / (velocidad * velocidad);
            resultado.textContent = `Masa: ${masaCalculada} kg`;
        }
    } else if (isNaN(velocidad)) {
        if (!isNaN(energiaCinetica) && !isNaN(masa)) {
            const velocidadCalculada = Math.sqrt((2 * energiaCinetica) / masa);
            resultado.textContent = `Velocidad: ${velocidadCalculada} m/s`;
        }
    } else {
        error.textContent = 'Por favor, ingrese sólo dos valores para calcular el tercero.';
    }
}

function limpiar() {
    document.getElementById('energiaCinetica').value = '';
    document.getElementById('masa').value = '';
    document.getElementById('velocidad').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('error').textContent = '';
}
