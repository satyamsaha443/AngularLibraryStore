
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Document(collection = "orders")
public class Order {
    @Id
    private String id;

    @Field("userType")
    private UserType userType;

    @Field("orderDate")
    private Date orderDate;

    @Field("deliveryDate")
    private Date deliveryDate;

    @Field("person")
    private Person person;

    @Field("items")
    private List<ProductOrder> items;

    @Field("status")
    private Status status;

    // Getters and setters
}

// Define UserType,



 Status, Person, and ProductOrder classes similarly


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    // Add other endpoints (GET, PUT, DELETE) as needed
}
