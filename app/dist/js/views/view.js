var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { loggedTime } from "../decorators/logged-time.js";
export class View {
    constructor(selector, element = document.querySelector(selector), scape = false) {
        this.element = element;
        this.scape = scape;
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this.element.innerHTML = template;
    }
}
__decorate([
    inspect,
    loggedTime(true)
], View.prototype, "update", null);
//# sourceMappingURL=view.js.map