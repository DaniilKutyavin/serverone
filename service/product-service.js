const {
  Product,
  Advantage,
  Desc,
  Specifications,
  Keeping,
  Stability,
  Productivity,
} = require("../models/models.js");
const uuid = require("uuid");
const path = require("path");
const { Op } = require("sequelize");
const ApiError = require("../error/ApiError.js");

class ProductService {
  async createProductSZR(data, img, certificate, presentation) {
    const {
      name,
      price,
      type,
      description,
      description_low,
      htmlTable,
      weight,
      culture,
      category,
      waiting,
      manufacturer,
      expenditure,
      shelf,
      conditions,
      packaging,
      adva,
      desc,
    } = data;

    let imgFileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", imgFileName));

    let certificateFileName = uuid.v4() + path.extname(certificate.name);
    certificate.mv(
      path.resolve(__dirname, "..", "static", certificateFileName)
    );

    let presentationFileName = uuid.v4() + path.extname(presentation.name);
    presentation.mv(
      path.resolve(__dirname, "..", "static", presentationFileName)
    );

    const product = await Product.create({
      img: imgFileName,
      certificate: certificateFileName,
      presentation: presentationFileName,
      name,
      price,
      type,
      htmlTable,
      description,
      description_low,
      weight,
      culture,
      category,
      waiting,
      manufacturer,
      expenditure,
      shelf,
      conditions,
      packaging,
    });

    if (adva) {
      let parsedAdva = JSON.parse(adva);
      await Promise.all(
        parsedAdva.map((i) => {
          return Advantage.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    if (desc) {
      let parsedDesc = JSON.parse(desc);
      await Promise.all(
        parsedDesc.map((i) => {
          return Desc.create({
            title: i.title,
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    return product;
  }

  async createProductUDO(data, img, certificate, presentation) {
    const {
      name,
      price,
      type,
      description,
      description_low,
      weight,
      culture,
      fertilizers,
      manufacturer,
      way,
      ground,
      descTwo,
      adva,
      specif,
      keep,
    } = data;
    let imgFileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", imgFileName));

    let certificateFileName = uuid.v4() + path.extname(certificate.name);
    certificate.mv(
      path.resolve(__dirname, "..", "static", certificateFileName)
    );

    let presentationFileName = uuid.v4() + path.extname(presentation.name);
    presentation.mv(
      path.resolve(__dirname, "..", "static", presentationFileName)
    );

    const product = await Product.create({
      img: imgFileName,
      certificate: certificateFileName,
      presentation: presentationFileName,
      name,
      price,
      type,
      description,
      manufacturer,
      description_low,
      weight,
      culture,
      fertilizers,
      way,
      ground,
      descTwo,
    });

    if (adva) {
      let parsedAdva = JSON.parse(adva);
      await Promise.all(
        parsedAdva.map((i) => {
          return Advantage.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    if (specif) {
      let parsedSpecif = JSON.parse(specif);
      await Promise.all(
        parsedSpecif.map((i) => {
          return Specifications.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    if (keep) {
      let parsedKeep = JSON.parse(keep);
      await Promise.all(
        parsedKeep.map((i) => {
          return Keeping.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }
    return product;
  }

  async createProductPOS(data, img, certificate, presentation) {
    const {
      name,
      price,
      type,
      description,
      description_low,
      weight,
      culture,
      fertilizers,
      way,
      ground,
      descThree,
      adva,
      stabil,
      productiv,
    } = data;
    let imgFileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", imgFileName));

    let certificateFileName = uuid.v4() + path.extname(certificate.name);
    certificate.mv(
      path.resolve(__dirname, "..", "static", certificateFileName)
    );

    let presentationFileName = uuid.v4() + path.extname(presentation.name);
    presentation.mv(
      path.resolve(__dirname, "..", "static", presentationFileName)
    );

    const product = await Product.create({
      img: imgFileName,
      certificate: certificateFileName,
      presentation: presentationFileName,
      name,
      price,
      type,
      description,
      description_low,
      weight,
      culture,
      fertilizers,
      way,
      ground,
      descThree,
    });

    if (adva) {
      let parsedAdva = JSON.parse(adva);
      await Promise.all(
        parsedAdva.map((i) => {
          return Advantage.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    if (stabil) {
      let parsedStabil = JSON.parse(stabil);
      await Promise.all(
        parsedStabil.map((i) => {
          return Stability.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    if (productiv) {
      let parsedProductiv = JSON.parse(productiv);
      await Promise.all(
        parsedProductiv.map((i) => {
          return Productivity.create({
            text: i.text,
            productId: product.id,
          });
        })
      );
    }

    return product;
  }

  async getProductById(id) {
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Advantage,
          as: "adva",
        },
        {
          model: Desc,
          as: "desc",
        },
        {
          model: Specifications,
          as: "specif",
        },
        {
          model: Keeping,
          as: "keep",
        },
        {
          model: Stability,
          as: "stabil",
        },

        {
          model: Productivity,
          as: "productiv",
        },
      ],
    });
    return product;
  }

  async deleteProduct(id) {
    const product = await Product.destroy({ where: { id } });
    return product;
  }

  async fetchProductsByTypeAndStatus(typeId) {
    const products = await Product.findAll({
      where: {
        type: typeId,
        status: true,
      },
    });
    return products;
  }

  async updateProduct(id, data, img, certificate, presentation) {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      throw ApiError.badRequest("Product not found");
    }

    const updatedData = { ...data };

    if (img) {
      const imgFileName = uuid.v4() + path.extname(img.name);
      img.mv(path.resolve(__dirname, "..", "static", imgFileName));
      updatedData.img = imgFileName;
    }

    if (certificate) {
      const certificateFileName = uuid.v4() + path.extname(certificate.name);
      certificate.mv(
        path.resolve(__dirname, "..", "static", certificateFileName)
      );
      updatedData.certificate = certificateFileName;
    }

    if (presentation) {
      const presentationFileName = uuid.v4() + path.extname(presentation.name);
      presentation.mv(
        path.resolve(__dirname, "..", "static", presentationFileName)
      );
      updatedData.presentation = presentationFileName;
    }

    await product.update(updatedData);

    return product;
  }
}

module.exports = new ProductService();
