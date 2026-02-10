MVC
    model  (db operations)
    view 
    controller  business logic

client  -> routes -> controller (req, res handle) --> service( business logic) --> model ( db )



react -> nextjs
express -> nestjs


Cart:
 productId
 userId,
 quantity:

<!-- seller cannot add to cart his own product -->

<!-- POST -->
<!-- 
    req: {
        productId
    }
 -->
<!-- GET by userId -->


Order
    id:
    reference: RX-234
    userId:
    payment_status:
        pending
        process
        completed
        cancelled

    payment_mode:
        cash
        esewa

<!-- Orders POST -->

<!-- 

    reqbody : orders:[
    {
        productId,
        quantity
    },
    {
        productId,
        quanity
    }
    ]

 -->


OrderItem
    orderId:
    productId,
    quantity:
    price:   // snapshots
    status:
        pending
        accepted
        completed
        cancelleted
        rejected
    


