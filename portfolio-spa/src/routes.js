import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import Resume from "./components/Resume.svelte";
import Contact from"./components/Contact.svelte";
import NotFound from "./components/NotFound.svelte";

export const routes = {
  "/": Home,
  "/article/:title": Article,
  "/resume": Resume,
  "/contact": Contact,
  "*": NotFound
};