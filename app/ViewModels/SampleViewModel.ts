export class SampleViewModel {
    public count: number = 0;

    constructor() {
        this.count = 1337;
    }

    public click(): void {
        ++this.count;
        console.log("sample 123");
        debugger;
    }
}
