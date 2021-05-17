import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";

export class Purchase {
    customer!:Customer;
    order!:Order;
    address!:Address;
    constructor(customer:Customer,address:Address,
        order:Order
        ){
            this.order=order;
            this.customer=customer;
            this.address=address;

    }

}
