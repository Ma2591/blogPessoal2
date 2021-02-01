"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_prod_1 = require("src/environments/environment.prod");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.nome = environment_prod_1.environment.nome;
        this.foto = environment_prod_1.environment.foto;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.sair = function () {
        this.router.navigate(['/entrar']);
        environment_prod_1.environment.token = '';
        environment_prod_1.environment.nome = '';
        environment_prod_1.environment.foto = '';
        environment_prod_1.environment.id = 0;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=menu.component.js.map
