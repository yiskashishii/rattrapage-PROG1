import { assert, expect } from "chai";
import { describe, it } from "mocha";
import { getMostPopularPlaces } from "../exo2.js";

describe("This function returns the first ahd the second most popular places", function(){
    it("should work three different places", function(){
        expect(getMostPopularPlaces("Analamahitsy, Analamahitsy, Itaosy, Behoririka, Itaosy , Itaosy").to.equal("Itaosy Analamahitsy"))
    })
    it("should work with only two places", function(){
        expect(getMostPopularPlaces("Andraharo, Ivandry, Ivandry, Andraharo, Ivandry").to.equal("Ivandry Andraharo"))
    })
})