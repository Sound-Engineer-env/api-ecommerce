import { ProductDto } from "./ProductDto";

class ProductListDto {

    public results : ProductDto[];
    public total : Number;


	constructor($results : ProductDto[], $total: Number ) {
        this.results = $results;
        this.total = $total;
	}
     
}