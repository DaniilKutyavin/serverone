const {
  Order,
  Basket,
  BasketProduct,
  OrderProduct,
  Product,
  User,
} = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class OrderService {
  // Method to create an order
  async createOrder(userId, phone, paymentMethod) {
    const basket = await Basket.findOne({
      where: { userId },
      include: [{ model: BasketProduct, as: "basket_products" }],
    });

    if (
      !basket ||
      !basket.basket_products ||
      basket.basket_products.length === 0
    ) {
      throw ApiError.badRequest("Basket is empty");
    }

    const order = await Order.create({ userId, phone, paymentMethod });

    for (const basketProduct of basket.basket_products) {
      await OrderProduct.create({
        orderId: order.id,
        productId: basketProduct.productId,
        quantity: basketProduct.quantity,
        price: basketProduct.price,
      });
    }

    await BasketProduct.destroy({ where: { basketId: basket.id } });
    return order;
  }

  async getAllOrders() {
    return await Order.findAll({
      include: [
        {
          model: OrderProduct,
          include: [Product], // Include the Product model to fetch product details
        },
        User, // Include User details as well
      ],
    });
  }
  async updateOrder(orderId, updateData) {
    const order = await Order.findByPk(orderId, { include: [OrderProduct] });
    if (!order) {
      throw ApiError.notFound("Order not found");
    }

    // Update order details
    if (updateData.phone) {
      order.phone = updateData.phone;
    }
    if (updateData.paymentMethod) {
      order.paymentMethod = updateData.paymentMethod;
    }
    if (updateData.status) {
      order.status = updateData.status;
    }

    await order.save();

    // Update order items
    if (updateData.items && Array.isArray(updateData.items)) {
      for (const item of updateData.items) {
        const orderProduct = await OrderProduct.findOne({
          where: { orderId, productId: item.productId },
        });

        if (!orderProduct) {
          throw ApiError.notFound(
            `Product ${item.productId} not found in order`
          );
        }

        orderProduct.quantity = item.quantity;
        orderProduct.price = item.price;
        await orderProduct.save();
      }
    }

    return order;
  }

  // Get orders for a specific user
  async getOrdersByUser(userId) {
    return await Order.findAll({
      where: { userId },
      include: [
        {
          model: OrderProduct,
          include: [{ model: Product }],
        },
      ],
    });
  }

  // Get details of a specific order by order ID
  async getOrderById(orderId) {
    const order = await Order.findByPk(orderId, {
      include: [
        {
          model: OrderProduct,
          include: [{ model: Product }],
        },
      ],
    });

    if (!order) {
      throw ApiError.notFound("Order not found");
    }

    return order;
  }
}

module.exports = new OrderService();
