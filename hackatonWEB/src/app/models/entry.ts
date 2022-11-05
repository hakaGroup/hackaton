import { Entry_attribute_values } from "./entry_attr_values";
import { Product } from "./product";

export class Entry {
    public id: number;
    public product: Product;
    public attribute_values: Entry_attribute_values[];
}