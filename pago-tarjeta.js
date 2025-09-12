document.addEventListener('DOMContentLoaded', function() {
    const medioPago = document.getElementById('medio-pago');
    const divPagoTarjeta = document.getElementById('pago-tarjeta');
    const cardNumber = document.getElementById('card-number');
    const cardMonth = document.getElementById('card-month');
    const cardYear = document.getElementById('card-year');
    const cardCVV = document.getElementById('card-cvv');

    medioPago.addEventListener('change', function() {
        if (medioPago.value === 'tarjeta') {
            divPagoTarjeta.style.display = 'block';
        } else {
            divPagoTarjeta.style.display = 'none';
        }
    });

    // Formatear número de tarjeta
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            // Eliminar cualquier caracter que no sea número
            let value = e.target.value.replace(/\D/g, '');
            
            // Limitar a 16 dígitos
            if (value.length > 16) value = value.slice(0, 16);
            
            // Formatear en grupos de 4 dígitos
            let formattedValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            
            e.target.value = formattedValue;
        });
    }

    // Validar mes
    if (cardMonth) {
        cardMonth.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = Math.min(Math.max(parseInt(value), 1), 12).toString().padStart(2, '0');
            }
            e.target.value = value;
        });
    }

    // Validar año
    if (cardYear) {
        cardYear.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 2) value = value.slice(0, 2);
            e.target.value = value;
        });
    }

    // Validar CVV
    if (cardCVV) {
        cardCVV.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            e.target.value = value;
        });
    }
});