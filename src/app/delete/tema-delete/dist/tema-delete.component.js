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
var TemaDeleteComponent = /** @class */ (function () {
    function TemaDeleteComponent(temaService, router, route) {
        this.temaService = temaService;
        this.router = router;
        this.route = route;
        this.tema = new Tema_1.tema();
    }
    TemaDeleteComponent.prototype.ngOnInit = function () {
        if (environment_prod_1.environment.token == '') {
            this.router.navigate(['/entrar']);
        }
        this.idTema = this.route.snapshot.params['id'];
        this.findByIdTema(this.idTema);
    };
    TemaDeleteComponent.prototype.findByIdTema = function (id) {
        var _this = this;
        this.temaService.getByIdTema(id).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    TemaDeleteComponent.prototype.apagar = function () {
        var _this = this;
        this.temaService.deleteTema(this.idTema).subscribe(function () {
            alert('Tema apagado com sucesso!');
            _this.router.navigate(['/tema']);
        });
    };
    TemaDeleteComponent = __decorate([
        core_1.Component({
            selector: 'app-tema-delete',
            templateUrl: './tema-delete.component.html',
            styleUrls: ['./tema-delete.component.css']
        })
    ], TemaDeleteComponent);
    return TemaDeleteComponent;
}());
exports.TemaDeleteComponent = TemaDeleteComponent;

//# sourceMappingURL=tema-delete.component.js.map
