const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "USER" },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activationLink: { type: DataTypes.STRING }
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    price: { type: DataTypes.INTEGER, allowNull: false }
});

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    description_low: { type: DataTypes.STRING, allowNull: false },
    weight: { type: DataTypes.STRING, allowNull: true },
    certificate: { type: DataTypes.STRING, allowNull: true },
    presentation: { type: DataTypes.STRING, allowNull: true },
    culture: { type: DataTypes.STRING, allowNull: true },
    category: { type: DataTypes.STRING, allowNull: true },
    fertilizers: { type: DataTypes.STRING, allowNull: true },
    way: { type: DataTypes.STRING, allowNull: true },
    ground: { type: DataTypes.STRING, allowNull: true },
    waiting: { type: DataTypes.STRING, allowNull: true },
    manufacturer:{ type: DataTypes.STRING, allowNull: true },
    expenditure: { type: DataTypes.STRING, allowNull: true },
    shelf: { type: DataTypes.STRING, allowNull: true },
    packaging: { type: DataTypes.STRING, allowNull: true },
    conditions: { type: DataTypes.STRING, allowNull: true },
    htmlTable: { type: DataTypes.TEXT, allowNull: true },
    descTwo: { type: DataTypes.STRING, allowNull: true },
    descThree: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
});

const Advantage = sequelize.define('advantage', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Desc = sequelize.define('desc', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Specifications = sequelize.define('specifications', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Keeping = sequelize.define('keeping', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Productivity = sequelize.define('productivity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Stability = sequelize.define('stability', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
});

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phone: { type: DataTypes.STRING, allowNull: false },
    paymentMethod: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'Pending' }, 
});

const OrderProduct = sequelize.define('order_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false }
});

const ManufacturerOne = sequelize.define('manufacturerOne', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    logo: { type: DataTypes.STRING, allowNull: false }
});

const ManufacturerTwo = sequelize.define('manufacturerTwo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    logo: { type: DataTypes.STRING, allowNull: false }
});

const ManufacturerThree = sequelize.define('manufacturerThree', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    logo: { type: DataTypes.STRING, allowNull: false }
});

const News = sequelize.define('news', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
});

const ProductBuy = sequelize.define('product_buy', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price_one: { type: DataTypes.INTEGER, allowNull: true },
    price_two: { type: DataTypes.INTEGER, allowNull: true },
    category: { type: DataTypes.INTEGER, allowNull: true }
});

const ProductBuyInfo = sequelize.define('product_buy_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Gift = sequelize.define('gift', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING,allowNull: false },
    nameOne: { type: DataTypes.STRING, allowNull: false },
    imgOne: { type: DataTypes.STRING, allowNull: false },
    priceOne: { type: DataTypes.STRING, allowNull: false },
    nameTwo: { type: DataTypes.STRING, allowNull: false },
    imgTwo: { type: DataTypes.STRING, allowNull: false },
    priceTwo: { type: DataTypes.STRING, allowNull: false },
    nameThree: { type: DataTypes.STRING, allowNull: false },
    imgThree: { type: DataTypes.STRING, allowNull: false },
    priceThree: { type: DataTypes.STRING, allowNull: false },
});


const TokenSchema = sequelize.define('token_schema', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    refreshToken: { type: DataTypes.STRING(400), require: true },
    userId: { type: DataTypes.INTEGER, allowNull: false }
});

const Delivery= sequelize.define('delivery', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    title_small: { type: DataTypes.STRING, allowNull: false },
    description_one: { type: DataTypes.STRING, allowNull: false },
    description_two: { type: DataTypes.STRING, allowNull: false }, 
    time_start: { type: DataTypes.STRING, allowNull: false },
    time_end: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false }
});

const Contacts= sequelize.define('contacts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    adress: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
});

const Footer = sequelize.define('аooter', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    telephoneOne: { type: DataTypes.STRING, allowNull: false },
    telephoneTwo: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.STRING, allowNull: false },
});

const Contacts_User= sequelize.define('contacts_user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    post: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
});

const Title_header= sequelize.define('title_header', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});



// Associations
User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Order.belongsTo(User);
User.hasMany(Order);

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);



User.hasOne(TokenSchema, { foreignKey: 'userId' });
TokenSchema.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Advantage, { as: 'adva' });
Advantage.belongsTo(Product);

Product.hasMany(Desc, { as: 'desc' });
Desc.belongsTo(Product);

Product.hasMany(Specifications, { as: 'specif' });
Specifications.belongsTo(Product);

Product.hasMany(Keeping, { as: 'keep' });
Keeping.belongsTo(Product);

Product.hasMany(Stability, { as: 'stabil' });
Stability.belongsTo(Product);


Product.hasMany(Productivity, { as: 'productiv' });
Productivity.belongsTo(Product);

ProductBuy.hasMany(ProductBuyInfo, { as: 'info' });
ProductBuyInfo.belongsTo(ProductBuy);


module.exports = {
    Stability,
    Keeping,
    Specifications,
    Advantage,
    Productivity,
    Desc,
    Gift,
    Footer,
    User,
    Basket,
    BasketProduct,
    Product,
    ManufacturerOne,
    ManufacturerTwo,
    ManufacturerThree,
    News,
    ProductBuy,
    ProductBuyInfo,
    TokenSchema,
    Order,
    OrderProduct,
    Delivery,
    Contacts,
    Contacts_User,
    Title_header
};
