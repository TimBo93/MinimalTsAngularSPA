import { BusinessModel } from "./BusinessModel";


export class SampleViewModel {
    public static $inject = ["BusinessModel"];
    public count: number = 0;

    private readonly bm: BusinessModel;

    constructor(bm: BusinessModel) {
        this.bm = bm;
        this.count = bm.getData();
    }

    public click(): void {
       this.bm.update();
       this.count = this.bm.getData();
    }
}
