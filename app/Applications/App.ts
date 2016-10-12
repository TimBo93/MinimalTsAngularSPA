import { SampleViewModel } from "../ViewModels/SampleViewModel";

class AngularModule {
    private app: ng.IModule;

    constructor(name: string, modules: Array<string>) {
        this.app = angular.module(name, modules);
        this.bootstrapViewModels();
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
