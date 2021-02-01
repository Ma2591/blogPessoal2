"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http"); // importe feito na mão
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var rodape_component_1 = require("./rodape/rodape.component");
var entrar_component_1 = require("./entrar/entrar.component");
var cadastrar_component_1 = require("./cadastrar/cadastrar.component");
var inicio_component_1 = require("./inicio/inicio.component");
var tema_component_1 = require("./Tema/tema.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                rodape_component_1.RodapeComponent,
                entrar_component_1.EntrarComponent,
                cadastrar_component_1.CadastrarComponent,
                menu_component_1.MenuComponent,
                inicio_component_1.InicioComponent,
                tema_component_1.TemaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [{
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
