document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCartBtn = document.getElementById('close-cart');
    const clearCartBtn = document.getElementById('clear-cart');
    const buyNowBtn = document.getElementById('buy-now');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let cart = [];
    let totalPrice = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantityRadios = document.querySelectorAll(`input[name="quantity${index + 1}"]`);
            let quantity = 1;
            quantityRadios.forEach((radio) => {
                if (radio.checked) {
                    quantity = parseInt(radio.value);
                }
            });

            const productName = button.previousElementSibling.previousElementSibling.innerText.split('<br>')[0];
            const productPrice = parseInt(button.previousElementSibling.previousElementSibling.innerText.split('Rs ')[1].split('<br>')[0]);
            const product = { name: productName, price: productPrice, quantity };

            cart.push(product);
            totalPrice += productPrice * quantity;

            updateCart();
            alert(`${productName} has been added to the cart!`);
        });
    });

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        displayCartItems();
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    clearCartBtn.addEventListener('click', () => {
        cart = [];
        totalPrice = 0;
        updateCart();
        displayCartItems();
    });

    buyNowBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'flex';
    });

    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you can handle the form data and process the payment
        alert('Order successfully placed! You will receive it soon.');
        // Reload the page to clear the cart and reset the state
        window.location.reload();
    });

    function updateCart() {
        cartCount.innerText = cart.length;
        cartTotal.innerText = totalPrice;
    }

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - Rs ${item.price} x ${item.quantity} = Rs ${item.price * item.quantity}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        document.querySelectorAll('.remove-item').forEach((button) => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                const removedItem = cart.splice(index, 1)[0];
                totalPrice -= removedItem.price * removedItem.quantity;
                updateCart();
                displayCartItems();
            });
        });
    }
});
