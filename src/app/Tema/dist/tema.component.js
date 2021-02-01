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
var Tema_1 = require("../model/Tema");
var TemaComponent = /** @class */ (function () {
    function TemaComponent(router, temaService) {
        this.router = router;
        this.temaService = temaService;
        this.tema = new Tema_1.tema();
    }
    TemaComponent.prototype.ngOnInit = function () {
        if (environment_prod_1.environment.token == '') {
            this.router.navigate(['/entrar']);
        }
        this.findAllTemas();
    };
    TemaComponent.prototype.findAllTemas = function () {
        var _this = this;
        this.temaService.getAllTema().subscribe(function (resp) {
            _this.listaTemas = resp;
        });
    };
    TemaComponent.prototype.cadastrar = function () {
        var _this = this;
        this.temaService.postTema(this.tema).subscribe(function (resp) {
            _this.tema = resp;
            alert("Tema cadastrado com sucesso");
            _this.findAllTemas();
            _this.tema = new Tema_1.tema();
        });
    };
    TemaComponent = __decorate([
        core_1.Component({
            selector: 'app-tema',
            templateUrl: './tema.component.html',
            styleUrls: ['./tema.component.css']
        })
    ], TemaComponent);
    return TemaComponent;
}());
exports.TemaComponent = TemaComponent;

//# sourceMappingURL=tema.component.js.map
