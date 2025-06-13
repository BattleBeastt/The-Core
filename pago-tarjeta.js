document.addEventListener('DOMContentLoaded', function() {
    const medioPago = document.getElementById('medio-pago');
    const divPagoTarjeta = document.getElementById('pago-tarjeta');

    medioPago.addEventListener('change', function() {
        if (medioPago.value === 'tarjeta') {
            divPagoTarjeta.style.display = 'block';
            if (!divPagoTarjeta.innerHTML) {
                // Ejemplo: integración con PayPal Smart Buttons
                divPagoTarjeta.innerHTML = '<div id="paypal-button-container"></div>';
                if (!document.getElementById('paypal-sdk')) {
                    const script = document.createElement('script');
                    script.id = 'paypal-sdk';
                    script.src = 'https://www.paypal.com/sdk/js?client-id=sb&components=buttons,funding-eligibility&currency=USD&disable-funding=venmo';
                    script.onload = function() {
                        paypal.Buttons({
                            style: { layout: 'vertical' },
                            fundingSource: paypal.FUNDING.CARD,
                            createOrder: function(data, actions) {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: document.getElementById('valor').value || '1'
                                        }
                                    }]
                                });
                            },
                            onApprove: function(data, actions) {
                                return actions.order.capture().then(function(details) {
                                    alert('Pago realizado por ' + details.payer.name.given_name);
                                });
                            }
                        }).render('#paypal-button-container');
                    };
                    document.body.appendChild(script);
                }
            }
        } else {
            divPagoTarjeta.style.display = 'none';
        }
    });
});
