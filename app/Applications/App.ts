import { SampleViewModel } from "../ViewModels/SampleViewModel";
import { BusinessModel } from "../ViewModels/BusinessModel";

class AngularModule {
    private app: ng.IModule;

    constructor(name: string, modules: Array<string>) {
        this.app = angular.module(name, modules);
        this.bootstrapViewModels();
        this.app.service("BusinessModel", BusinessModel);
    }


    private bootstrapViewModels(): void {
        this.addController("SampleViewModel", SampleViewModel);
    }

    private addController(name: string, controller: Function): void {
        this.app.controller(name, controller);
    }

}

/* tslint:disable */
let app: AngularModule = new AngularModule("microsoftsample",
    ["angular-oauth2", "ngMaterial", "ngMessages", "ngMdIcons", "ngRoute", "pascalprecht.translate", "ngSanitize"]);
/* tslint:enable */
