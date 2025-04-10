import { App } from "./components/App.js";
import { CartContext } from "./contexts/CartContext.js";

const root = document.getElementById('app')

const cartContext = new CartContext()
const app = new App({ cartContext })

app.mount(root)