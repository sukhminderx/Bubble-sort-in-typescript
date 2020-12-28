export class BubbleSort {

    constructor(val: Array<number>) {
        console.log(val);
        this.sort(val);
        console.log(val);
    }

    sort(val: Array<number>) {
        let swapped = true;
        // with each pass, largest el gets at end-(val.length-pass)th position
        for(let pass=val.length-1; pass>=0 && swapped; pass--) {
            swapped = false; // if no swap, that means list has been sorted in previous passes

            for(let i = 0; i<=pass; i++) {
                if(val[i]>val[i+1]) {
                    [val[i], val[i+1]]=[val[i+1], val[i]];
                    swapped=true;
                }
            }
        }
    }

}