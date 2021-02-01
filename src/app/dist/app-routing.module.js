"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cadastrar_component_1 = require("./cadastrar/cadastrar.component");
var tema_delete_component_1 = require("./delete/tema-delete/tema-delete.component");
var tema_edit_component_1 = require("./edit/tema-edit/tema-edit.component");
var entrar_component_1 = require("./entrar/entrar.component");
var inicio_component_1 = require("./inicio/inicio.component");
var tema_component_1 = require("./Tema/tema.component");
var routes = [
    { path: '', redirectTo: 'entrar', pathMatch: 'full' },
    { path: 'entrar', component: entrar_component_1.EntrarComponent },
    { path: 'cadastrar', component: cadastrar_component_1.CadastrarComponent },
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'tema', component: tema_component_1.TemaComponent },
    { path: 'tema-edit/:id', component: tema_edit_component_1.TemaEditComponent },
    { path: 'tema-delete/:id', component: tema_delete_component_1.TemaDeleteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
