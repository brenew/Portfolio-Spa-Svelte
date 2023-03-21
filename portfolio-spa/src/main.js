import "./app.postcss";
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Brian Renew",
    title: "Senior Interface Developer",
  },
});

export default app;
