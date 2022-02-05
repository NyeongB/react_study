import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {

    constructor() {
        
        super(qs("#search-form-view"));
        console.log(this.element);
        this.resetElement = qs("[type=reset]",this.element);
        this.showResetButton(false);
        console.log('이 기능들 다 썻다');
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }
}