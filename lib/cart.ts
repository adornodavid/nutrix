interface CartItem {
  productId: string
  priceId: string
  quantity: number
  name: string
  price: number
}

const CART_STORAGE_KEY = "nutrix_cart"

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return []
  const cart = localStorage.getItem(CART_STORAGE_KEY)
  return cart ? JSON.parse(cart) : []
}

export function saveCart(cart: CartItem[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }
}

export function addToCart(productId: string, priceId: string, quantity: number, name: string, price: number): void {
  const cart = getCart()
  const existingItemIndex = cart.findIndex((item) => item.productId === productId)

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity
  } else {
    cart.push({ productId, priceId, quantity, name, price })
  }

  saveCart(cart)
}

export function removeFromCart(productId: string): void {
  const cart = getCart().filter((item) => item.productId !== productId)
  saveCart(cart)
}

export function updateQuantity(productId: string, newQuantity: number): void {
  const cart = getCart()
  const itemIndex = cart.findIndex((item) => item.productId === productId)

  if (itemIndex > -1) {
    cart[itemIndex].quantity = Math.max(1, newQuantity)
    saveCart(cart)
  }
}

export function clearCart(): void {
  saveCart([])
}

export function getCartTotal(): number {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0)
}
