let escuelaTotal = parseFloat(localStorage.getItem('escuelaTotal')) || 0;
let multicanchaTotal = parseFloat(localStorage.getItem('multicanchaTotal')) || 0;
let desayunoTotal = parseFloat(localStorage.getItem('desayunoTotal')) || 0;

document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const campaign = document.getElementById('campaign').value;

    if (campaign === 'escuela') {
        escuelaTotal += amount;
        localStorage.setItem('escuelaTotal', escuelaTotal);
    } else if (campaign === 'multicancha') {
        multicanchaTotal += amount;
        localStorage.setItem('multicanchaTotal', multicanchaTotal);
    } else if (campaign === 'desayuno') {
        desayunoTotal += amount;
        localStorage.setItem('desayunoTotal', desayunoTotal);
    }

    document.getElementById('donation-form').reset();
    updateDisplay();
    alert('¡Gracias por su donación!');
});

function updateDisplay() {
    document.getElementById('escuela-total').textContent = `$${escuelaTotal.toFixed(2)}`;
    document.getElementById('multicancha-total').textContent = `$${multicanchaTotal.toFixed(2)}`;
    document.getElementById('desayuno-total').textContent = `$${desayunoTotal.toFixed(2)}`;
}

updateDisplay();