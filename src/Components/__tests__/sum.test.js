import {sum} from '../sum.js'

test("Sum function should calculate the sum of two functions", () => { 
    const result= sum(3,4);
    expect(result).toBe(7);
    //above line is known as assertion

})