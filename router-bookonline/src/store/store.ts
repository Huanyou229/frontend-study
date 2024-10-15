import { ref } from 'vue';

export const useCartStore = () => {
    const cartItems = ref<Array<any>>([]);

    const addToCart = (book: any) => {
        if (!cartItems.value.some(item => item.id === book.id)) {
            cartItems.value.push(book);
            localStorage.setItem('cart', JSON.stringify(cartItems.value));  // 保存到本地存储
        }
    };

    const removeFromCart = (bookId: number) => {
        cartItems.value = cartItems.value.filter(item => item.id !== bookId);
        localStorage.setItem('cart', JSON.stringify(cartItems.value));  // 更新本地存储
    };

    const clearCart = () => {
        cartItems.value = [];
        localStorage.removeItem('cart');  // 清空本地存储
    };

    const loadCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cartItems.value = JSON.parse(storedCart);
        }
    };

    // 每次应用加载时从本地存储恢复数据
    loadCartFromLocalStorage();

    return {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
    };
};
