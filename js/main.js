document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    let cart = JSON.parse(localStorage.getItem('bheema_cart')) || [];
    const WHATSAPP_NUMBER = '919342468878'; // Upgraded WhatsApp number

    // --- DOM Elements ---
    const header = document.querySelector('.header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navList = document.querySelector('.nav-list');

    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutBtn = document.getElementById('checkout-btn');

    // --- UI Interactions ---

    // Scroll Effect on Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            let icon = mobileToggle.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.replace('bx-menu', 'bx-x');
            } else {
                icon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            if (mobileToggle) mobileToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
        });
    });

    // Cart Toggle
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        // Prevent body scroll when cart is open
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
    }

    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

    // --- Cart Logic ---

    function saveCart() {
        localStorage.setItem('bheema_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function addToCart(productIdOrBundle, weightId, quantity = 1) {
        // Handle bundle objects: cartAPI.add({ id, name, price, image })
        if (typeof productIdOrBundle === 'object' && productIdOrBundle !== null) {
            const bundle = productIdOrBundle;
            const existingIndex = cart.findIndex(item => item.productId === bundle.id);

            if (existingIndex > -1) {
                cart[existingIndex].quantity += 1;
            } else {
                cart.push({
                    productId: bundle.id,
                    name: bundle.name,
                    image: bundle.image,
                    weightId: 'bundle',
                    weightLabel: 'Combo',
                    price: bundle.price,
                    quantity: 1
                });
            }

            saveCart();
            if (!cartSidebar.classList.contains('active')) {
                toggleCart();
            }
            return;
        }

        // Normal product add
        const productId = productIdOrBundle;
        const product = getProductById(productId);
        if (!product) return;

        const weightOption = product.weights.find(w => w.id === weightId) || product.weights[0];

        // Check if already in cart
        const existingItemIndex = cart.findIndex(item => item.productId === productId && item.weightId === weightId);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                productId: product.id,
                name: product.name,
                image: product.image,
                weightId: weightOption.id,
                weightLabel: weightOption.label,
                price: weightOption.price,
                quantity: quantity
            });
        }

        saveCart();

        // Show cart drawer
        if (!cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
    }

    function updateQuantity(index, newQuantity) {
        if (newQuantity < 1) {
            removeFromCart(index);
        } else {
            cart[index].quantity = newQuantity;
            saveCart();
        }
    }

    function updateCartUI() {
        // Update count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;

        // Update items list
        if (!cartItemsContainer) return;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
            if (cartTotalAmount) cartTotalAmount.textContent = '₹0';
            if (checkoutBtn) checkoutBtn.disabled = true;
            return;
        }

        if (checkoutBtn) checkoutBtn.disabled = false;

        let itemsHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            itemsHTML += `
                <div class="cart-item" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #E8E2D6;">
                    <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                    <div class="cart-item-details" style="flex: 1;">
                        <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">${item.name}</h4>
                        <p style="font-size: 0.85rem; color: #646b66; margin-bottom: 0.5rem;">${item.weightLabel} - ₹${item.price}</p>
                        <div class="cart-quantity-controls" style="display: flex; align-items: center; justify-content: space-between;">
                            <div class="qty-btn-group" style="display: inline-flex; align-items: center; border: 1px solid #E8E2D6; border-radius: 4px; overflow: hidden;">
                                <button class="qty-btn minus" data-index="${index}" style="padding: 0.25rem 0.5rem; background: #fdfbf7;">-</button>
                                <span style="padding: 0 0.5rem; font-size: 0.9rem;">${item.quantity}</span>
                                <button class="qty-btn plus" data-index="${index}" style="padding: 0.25rem 0.5rem; background: #fdfbf7;">+</button>
                            </div>
                            <span style="font-weight: 600;">₹${itemTotal}</span>
                        </div>
                    </div>
                    <button class="remove-item-btn" data-index="${index}" style="align-self: flex-start; color: #B8734A; padding: 0.25rem;">
                        <i class='bx bx-trash'></i>
                    </button>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = itemsHTML;
        if (cartTotalAmount) cartTotalAmount.textContent = `₹${total}`;

        // Add event listeners to new buttons
        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                updateQuantity(index, cart[index].quantity - 1);
            });
        });

        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                updateQuantity(index, cart[index].quantity + 1);
            });
        });

        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                removeFromCart(index);
            });
        });
    }

    // --- WhatsApp Checkout ---
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;

            let message = "Hi Bheema's Food Care! I would like to place an order:%0A%0A";
            let total = 0;

            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                message += `${index + 1}. ${item.name} (${item.weightLabel})%0A`;
                message += `   ${item.quantity} x ₹${item.price} = ₹${itemTotal}%0A%0A`;
            });

            message += `*Total Amount: ₹${total}*%0A%0A`;

            openWhatsAppCheckout(message);
        });
    }

    // Export addToCart globally so it can be called from inlineonclicks if needed,
    // though better to use event delegation or bind events to elements.
    window.cartAPI = {
        add: addToCart,
        remove: removeFromCart,
        update: updateQuantity,
        get: () => cart
    };

    // --- Homepage Logic ---
    function renderFeaturedProducts() {
        const container = document.getElementById('featured-products');
        if (!container) return;

        const featuredProducts = getFeaturedProducts();
        let html = '';

        featuredProducts.forEach(product => {
            html += `
                <div class="product-card">
                    <a href="product.html#${product.id}" class="product-img-wrapper">
                        <span class="product-tag">${product.tag}</span>
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                    </a>
                    <div class="product-content">
                        <a href="product.html#${product.id}"><h3 class="product-title">${product.name}</h3></a>
                        <p class="product-desc">${product.shortDesc}</p>
                        <div class="product-footer">
                            <span class="product-price">₹${product.price}</span>
                            <button class="add-to-cart-icon" onclick="cartAPI.add('${product.id}', '${product.weights[0].id}')" aria-label="Add to cart">
                                <i class='bx bx-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    // --- Shop Page Logic ---
    function initShopPage() {
        const grid = document.getElementById('shop-products-grid');
        const filters = document.getElementById('shop-filters');
        if (!grid || !filters) return;

        // Check for URL category
        const urlParams = new URLSearchParams(window.location.search);
        let activeCategory = urlParams.get('category') || 'all';

        // Set initial active filter button
        const btns = filters.querySelectorAll('.filter-btn');
        btns.forEach(btn => {
            if (btn.dataset.filter === activeCategory) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        function renderShopProducts(category) {
            const products = getProductsByCategory(category);
            let html = '';

            if (products.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found in this category.</p>';
                return;
            }

            products.forEach(product => {
                html += `
                    <div class="product-card">
                        <a href="product.html#${product.id}" class="product-img-wrapper">
                            <span class="product-tag">${product.tag}</span>
                            <img src="${product.image}" alt="${product.name}" class="product-img">
                        </a>
                        <div class="product-content">
                            <a href="product.html#${product.id}"><h3 class="product-title">${product.name}</h3></a>
                            <p class="product-desc">${product.shortDesc}</p>
                            <div class="product-footer">
                                <span class="product-price">₹${product.price}</span>
                                <button class="add-to-cart-icon" onclick="cartAPI.add('${product.id}', '${product.weights[0].id}')" aria-label="Add to cart">
                                    <i class='bx bx-plus'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });

            grid.innerHTML = html;
        }

        // Event listener for filters
        filters.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                btns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const category = e.target.dataset.filter;
                renderShopProducts(category);

                // Update URL without reload
                const newUrl = category === 'all' ? window.location.pathname : `${window.location.pathname}?category=${category}`;
                window.history.pushState({ path: newUrl }, '', newUrl);
            }
        });

        // Initial render
        renderShopProducts(activeCategory);
    }

    // --- Product Detail Page Logic ---
    function initProductPage() {
        const container = document.getElementById('product-container');
        if (!container) return;

        // Read product ID from hash first (product.html#p1), then fall back to query params (?id=p1)
        const hashId = window.location.hash ? window.location.hash.substring(1) : null;
        const urlParams = new URLSearchParams(window.location.search);
        const productId = hashId || urlParams.get('id');

        const product = getProductById(productId);

        if (!product) {
            container.innerHTML = `
                <div style="text-align: center; padding: 5rem 0;">
                    <h2>Product Not Found</h2>
                    <p style="margin-top: 1rem;"><a href="shop.html" class="btn btn-primary">Back to Shop</a></p>
                </div>
            `;
            return;
        }

        // Set page title dynamically
        document.title = `${product.name} | Bheema's Food Care`;

        let selectedWeight = product.weights[0];
        let currentQuantity = 1;

        // Generate weight buttons
        let weightHTML = '';
        product.weights.forEach((w, index) => {
            weightHTML += `<button class="weight-btn ${index === 0 ? 'active' : ''}" data-id="${w.id}" data-price="${w.price}">${w.label}</button>`;
        });

        // Generate list items
        const ingredientsHTML = product.ingredients.map(i => `<li>${i}</li>`).join('');
        const benefitsHTML = product.benefits.map(b => `<li>${b}</li>`).join('');

        const html = `
            <div class="product-layout">
                <!-- Image -->
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <!-- Info -->
                <div class="product-info">
                    <span class="badge" style="margin-bottom: 1rem;">${product.tag}</span>
                    <h1>${product.name}</h1>
                    <div class="price" id="pd-price">₹${selectedWeight.price}</div>
                    <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 2rem;">${product.description}</p>

                    <div class="weight-selector">
                        <h4>Select Size</h4>
                        <div class="weight-options" id="pd-weights">
                            ${weightHTML}
                        </div>
                    </div>

                    <div class="add-actions">
                        <div class="qty-input">
                            <button id="pd-qty-minus">-</button>
                            <input type="number" id="pd-qty" value="1" min="1" readonly>
                            <button id="pd-qty-plus">+</button>
                        </div>
                        <button class="btn btn-primary" id="pd-add-to-cart" style="flex: 1;">Add to Cart</button>
                    </div>
                    
                    <button class="btn btn-whatsapp btn-block" id="pd-buy-now" style="margin-bottom: 2rem;">
                        <i class='bx bxl-whatsapp'></i> Buy Now on WhatsApp
                    </button>

                    <!-- Accordions for Details -->
                    <div class="product-details-accordion">
                        <div class="pd-accordion-item active">
                            <div class="pd-accordion-header">
                                Health Benefits <i class='bx bx-chevron-down'></i>
                            </div>
                            <div class="pd-accordion-content">
                                <ul class="bullet-list">
                                    ${benefitsHTML}
                                </ul>
                            </div>
                        </div>
                        <div class="pd-accordion-item">
                            <div class="pd-accordion-header">
                                How to Prepare <i class='bx bx-chevron-down'></i>
                            </div>
                            <div class="pd-accordion-content">
                                <p>${product.preparation}</p>
                            </div>
                        </div>
                        <div class="pd-accordion-item">
                            <div class="pd-accordion-header">
                                Who is it for <i class='bx bx-chevron-down'></i>
                            </div>
                            <div class="pd-accordion-content">
                                <p>${product.whoFor}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // --- Interaction Logic for Product Page ---

        // Weight selection
        const weightContainer = document.getElementById('pd-weights');
        const priceDisplay = document.getElementById('pd-price');

        if (weightContainer) {
            weightContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('weight-btn')) {
                    // Update active state
                    weightContainer.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');

                    // Update variables
                    const id = e.target.dataset.id;
                    selectedWeight = product.weights.find(w => w.id === id);

                    // Update price UI
                    priceDisplay.textContent = `₹${selectedWeight.price}`;
                }
            });
        }

        // Quantity controls
        const qtyInput = document.getElementById('pd-qty');
        document.getElementById('pd-qty-minus')?.addEventListener('click', () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                qtyInput.value = currentQuantity;
            }
        });
        document.getElementById('pd-qty-plus')?.addEventListener('click', () => {
            currentQuantity++;
            qtyInput.value = currentQuantity;
        });

        // Add to Cart
        document.getElementById('pd-add-to-cart')?.addEventListener('click', () => {
            addToCart(product.id, selectedWeight.id, currentQuantity);
        });

        // Buy Now via WhatsApp directly
        document.getElementById('pd-buy-now')?.addEventListener('click', () => {
            const itemTotal = selectedWeight.price * currentQuantity;
            let message = "Hi Bheema's Food Care! I would like to place a direct order:%0A%0A";
            message += `Product: ${product.name}%0A`;
            message += `Size: ${selectedWeight.label}%0A`;
            message += `Quantity: ${currentQuantity}%0A`;
            message += `Total: ₹${itemTotal}%0A%0A`;

            openWhatsAppCheckout(message);
        });

        // Accordion functionality
        document.querySelectorAll('.pd-accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
            });
        });
    }

    // --- Checkout Modal & Form Logic ---
    let pendingWaMessage = "";

    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'checkout-overlay';
    checkoutModal.innerHTML = `
        <div class="checkout-modal">
            <div class="cart-header" style="border-bottom: 1px solid var(--color-border); padding: var(--space-md);">
                <h3 style="margin: 0; font-size: 1.25rem;">Delivery Details</h3>
                <button class="close-cart" id="close-checkout" style="background:none; border:none; cursor:pointer; font-size:1.5rem; color:var(--color-text-main);"><i class='bx bx-x'></i></button>
            </div>
            <div style="padding: var(--space-md);">
                <form id="checkout-form-details">
                    <div class="form-group" style="margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="wa-name" style="font-weight: 500; font-size: 0.9rem;">Full Name *</label>
                        <input type="text" id="wa-name" required placeholder="Enter your full name" style="padding: 0.8rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: inherit;">
                    </div>
                    <div class="form-group" style="margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="wa-phone" style="font-weight: 500; font-size: 0.9rem;">Phone Number *</label>
                        <input type="tel" id="wa-phone" required placeholder="Enter your phone number" style="padding: 0.8rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: inherit;">
                    </div>
                    <div class="form-group" style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="wa-address" style="font-weight: 500; font-size: 0.9rem;">Delivery Address *</label>
                        <textarea id="wa-address" rows="3" required placeholder="Enter full address with pincode" style="padding: 0.8rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: inherit; resize: vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-whatsapp" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
                        <i class='bx bxl-whatsapp' style="font-size: 1.25rem;"></i> Send Order Details
                    </button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    const closeCheckoutBtn = document.getElementById('close-checkout');
    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });

    document.getElementById('checkout-form-details').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('wa-name').value;
        const phone = document.getElementById('wa-phone').value;
        const address = document.getElementById('wa-address').value;

        const finalMessage = pendingWaMessage +
            `*Delivery Details:*%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A%0AHow would you like to proceed with payment?`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`;
        window.open(whatsappUrl, '_blank');
        checkoutModal.classList.remove('active');
        document.getElementById('checkout-form-details').reset();
    });

    function openWhatsAppCheckout(baseMessage) {
        pendingWaMessage = baseMessage;
        if (cartSidebar && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
        checkoutModal.classList.add('active');
    }

    // --- Floating WhatsApp Button ---
    const waFloat = document.createElement('a');
    waFloat.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    waFloat.target = '_blank';
    waFloat.className = 'whatsapp-floating';
    waFloat.innerHTML = `<i class='bx bxl-whatsapp'></i>`;
    document.body.appendChild(waFloat);

    // Initialize UI on load
    updateCartUI();
    renderFeaturedProducts();
    initShopPage();
    initProductPage();
});
