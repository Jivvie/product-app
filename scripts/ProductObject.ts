//constants
const constant1 = 2;
const constant2 = 3;
const constant3 = 4;

class ProductObject {
	
	doubleSided:boolean;
	productMaterial:string;
	baseCost: number = 0;
	length: number;
	width:number;

	/* Constructor to initialize variables we need for our Product */
	constructor(productType:string, productMaterial:string, doubleSided: number,
		width:number, length:number) {
		this.width = width;
		this.length = length;
		this.productMaterial = productMaterial;
		// code...
		if(doubleSided > 0)
		{
			this.doubleSided = true;
		}
	}

	checkMaterialType()
	{
		/** Wake sure we can get the correct value. It may be uppoer case.
		We do not want this to happen. Simply because 'Same' and 'same' may
		not be the same value. TODO: Look into this soon 12/2/2017 */
		this.productMaterial = this.productMaterial.toLowerCase();
		if(this.productMaterial == "metallic") {
			//
		}
	}

	calculateArea()
	{
		return (this.length * this.width);
	}

	/** Check for numbers and white spaces and invalid characters. */
	//TODO:  Make sure this is defined upon production.
	checkForInvalidCharacters()
	{

	}
}