const Router = require("express");
const router = new Router();
const OrdersController = require("../controllers/orderController.js");
const authMiddleware = require("../middleware/auth-middlewares.js");

router.post("/", authMiddleware, OrdersController.createOrder);

router.get("/", OrdersController.getAllOrders);

router.put("/", OrdersController.updateOrder);

router.get("/orders/user", authMiddleware, OrdersController.getOrdersByUser); // Get orders for authenticated user
router.get("/order/:orderId", OrdersController.getOrderById);

module.exports = router;
