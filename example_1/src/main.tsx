import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import store from "./store";

const root = createRoot(document.getElementById("root")!);

// Функция рендера приложения
const render = () => {
  root.render(<App />);
};

// Подписка на изменения в store
store.subscribe(render);

// Первый рендер
render();
