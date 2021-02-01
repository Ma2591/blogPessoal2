"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Tema_1 = require("src/app/model/Tema");
var environment_prod_1 = require("src/environments/environment.prod");
var TemaEditComponent = /** @class */ (function () {
    function TemaEditComponent(temaService, router, route) {
        this.temaService = temaService;
        this.router = router;
        this.route = route;
        this.tema = new Tema_1.tema;
    }
    TemaEditComponent.prototype.ngOnInit = function () {
        if (environment_prod_1.environment.token == '') {
            this.router.navigate(['/entrar']);
        }
        var id = this.route.snapshot.params['id'];
        this.findByIdTema(id);
    };
    TemaEditComponent.prototype.findByIdTema = function (id) {
        var _this = this;
        this.temaService.getByIdTema(id).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    TemaEditComponent.prototype.atualizar = function () {
        var _this = this;
        this.temaService.putTema(this.tema).subscribe(function (resp) {
            _this.tema = resp;
            alert('Tema Atualizado com sucesso!');
            _this.router.navigate(['/tema']);
        });
    };
    TemaEditComponent = __decorate([
        core_1.Component({
            selector: 'app-tema-edit',
            templateUrl: './tema-edit.component.html',
            styleUrls: ['./tema-edit.component.css']
        })
    ], TemaEditComponent);
    return TemaEditComponent;
}());
exports.TemaEditComponent = TemaEditComponent;

//# sourceMappingURL=tema-edit.component.js.map
