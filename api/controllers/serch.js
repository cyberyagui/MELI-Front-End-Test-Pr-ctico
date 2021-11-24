const serchUrl = `https://api.mercadolibre.com/sites/MLA/search?q=`;
const itemUrl = "https://api.mercadolibre.com/items/";
const categoryUrl = "https://api.mercadolibre.com/categories/"
const axios = require("axios");
const author = {
  name: "Santiago",
  lastname: "Goncalves Da Costa Lima",
};

const itemsSearch = async (req, res, next) => {
  try {
    const query = await req.url;
    const product = query.slice(2);
    const result = await axios.get(serchUrl + product);
    let categories = result.data.available_filters[0].values.map((e) => {
      return e.name;
    });
    let items = result.data.results
      .map((e) => {
        let price = {
          currency: e.currency_id,
          amount: e.price,
          decimals: parseInt(e.price.toString().split(".")),
        };
        return {
          id: e.id,
          title: e.title,
          price,
          address: e.address.state_name,
          picture: e.thumbnail,
          condition: e.condition,
          free_shipping: e.shipping.free_shipping,
        };
      })
      .slice(0, 4);
    let final = {
      author,
      categories,
      items,
    };
    res.status(200).json(final);
  } catch (err) {
    next(err);
  }
};

 const searchByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await axios.get(itemUrl + id);
    const description = (await axios.get(itemUrl + id + "/description")).data.plain_text;
    const resultData = result.data;
    const { title, currency_id, price, condition, category_id } = result.data;
    const categoryData = (await axios.get(categoryUrl+category_id)).data.name
    const item = {
      id: resultData.id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: parseInt(price.toString().split(".")),
      },
      picture: resultData.pictures[0].url,
      condition,
      free_shipping: resultData.shipping.free_shipping,
      sold_quantity: resultData.sold_quantity,
      description,
    };

    const dataFinal = {
      author,
      categoryName,
      item,
    };
    
    res.status(200).send(dataFinal);
  } catch (err) {
    const id = req.params.id;
    const result = await axios.get(itemUrl + id);
    const description = "Sin descripcion"
    const resultData = result.data;
    const { title, currency_id, price, condition, category_id } = result.data;
    const categoryName = (await axios.get(categoryUrl+category_id)).data.name

    const item = {
      id: resultData.id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: parseInt(price.toString().split(".")),
      },
      picture: resultData.pictures[0].url,
      condition,
      free_shipping: resultData.shipping.free_shipping,
      sold_quantity: resultData.sold_quantity,
      description,
    };

    const dataFinal = {
      author,
      categoryName,
      item,
    };
    
    res.status(200).send(dataFinal);
    next(err);
  }
}; 



module.exports = { itemsSearch, searchByID };
