const { News } = require('../models/models.js');
const uuid = require('uuid');
const path = require('path');

class NewsService {
    async createNews(data, img) {
        const {title, description} = data;
        let imgFileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static/news', imgFileName));

        const news = await News.create({title,description, img:imgFileName });
        return news;
    }

    async getAllNews() {
        const news = await News.findAll();
        return news;
    }

    async getOne(id) {
        const news = await News.findOne({ where: { id } });
        return news;
    }

}

module.exports = new NewsService();
