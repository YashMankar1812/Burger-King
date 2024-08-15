document.getElementById('order-button').addEventListener('click', () => {
    const selectedItems = Array.from(document.querySelectorAll('#food-selection input:checked')).map(cb => cb.value);
    if (selectedItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }
    
    const orderId = `#${Math.floor(Math.random() * 10000)}`;
    document.getElementById('order-id').textContent = orderId;

    const randomDelay = Math.floor(Math.random() * 5000) + 1000; 

    document.getElementById('order-result').innerHTML = `<pre>Your order is Taken 
        Preparing Your Order  .... 😋
         </pre>`;
    document.getElementById('order-result').style.display = 'block';

    simulateOrder(randomDelay).then(() => {
        const foodImage = selectedItems.length ? selectedItems[0] : 'food'; // Fallback image
        document.getElementById('order-result').innerHTML = `
            <img src="assets/${foodImage.toLowerCase()}.png" alt="${foodImage}" />
            <p>Order ID: ${orderId}</p>
        `;
    });
});

function simulateOrder(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
