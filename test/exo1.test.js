import { assert, expect } from "chai";
import { describe, it } from "mocha";
import { removeWords } from "../exo1.js";

describe("this function remove words in the array wordsToRemove[]", function(){
    it("should works with a normal string", function(){
        expect(removeWords("Hello, ceci est un test", ["ceci", "un"]).to.equal("Hello, est test"))
    })
    it("should work with an upperCase word", function(){
        expect(removeWords("Hello Java", ["java"]).to.equal("Hello Java"))
    })
    it("it should works with an empty array", function(){
        expect(removeWords("First commit", [""]).to.equal("First commit"))
    })
})