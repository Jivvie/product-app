//constants
var constant1 = 2;
var constant2 = 3;
var constant3 = 4;
var ProductObject = (function () {
    /* Constructor to initialize variables we need for our Product */
    function ProductObject(productType, productMaterial, doubleSided, width, length) {
        this.baseCost = 0;
        this.materialConstant = 1;
        this.length = 0;
        this.width = 0;
        this.width = width;
        this.length = length;
        this.productMaterial = productMaterial;
        // code...
        if (doubleSided > 0) {
            this.doubleSided = true;
        }
    }
    ProductObject.prototype.checkMaterialType = function () {
        /** Wake sure we can get the correct value. It may be uppoer case.
        We do not want this to happen. Simply because 'Same' and 'same' may
        not be the same value. TODO: Look into this soon 12/2/2017 */
        this.productMaterial = this.productMaterial.toLowerCase();
        if (this.productMaterial == "metallic") {
            this.materialConstant = 2;
        }
    };
    ProductObject.prototype.calculateArea = function () {
        return (this.length * this.width);
    };
    ProductObject.prototype.computeTotalCost = function () {
        var areaCost = (this.materialConstant * this.calculateArea());
        /** TODO: Double sided is left abstract right now. If the customer wants
        a double-sided product we should give some type of discount. I will apply a
        25% discount for now.*/
        var discount = .25;
        areaCost = areaCost + (areaCost * discount);
        return areaCost;
    };
    /** Check for numbers and white spaces and invalid characters. */
    //TODO:  Make sure this is defined upon production.
    ProductObject.prototype.checkForInvalidCharacters = function () {
    };
    return ProductObject;
}());
