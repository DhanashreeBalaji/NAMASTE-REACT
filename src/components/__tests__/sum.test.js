// Unit test needs to be done, so import the component which needs to be tested in isolation
import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4);

    //Assertion
     expect(result).toBe(7);
});