export class BusinessModel {
    private data: number;

    constructor(){
        this.data = 1;
    }

    public getData(): number {
        let temp = this.data * 2;
        let temp2 = temp / 2;
        return temp2;
    }

    public update() {
        this.data++;
    }
}