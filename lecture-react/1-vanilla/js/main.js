import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

document.addEventListener("DOMContentLoaded", main);

const tag = '[main]';

function main() {
  console.log(tag,'main')
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
  };

  new Controller(store, views);
}
