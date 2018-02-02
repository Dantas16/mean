
var products = [
    {name: 'Shirt', price: 8.99},
    {name: 'Pants', price: 20.00}
  ];

module.exports = function(app){

    var Controller = {
        listAll: function(req, res){
            res.json(products);
        },
        create: function(req, res){
            var newProd = req.body;
            products.push(newProd);
            res.json(products);
        },
        remove: function(req, res){
            var name = req.params['name'];
            var item = products.find(item => item.name == name);
            if (item) {
              var index = products.indexOf(item);
              products.splice(index, 1);
            }
            res.json(products);
        }
    }

    return Controller;
}