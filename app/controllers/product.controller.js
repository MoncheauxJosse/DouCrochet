
const ProductService = require("../services/product.service");


const findAll = async (req,res) => {
   ProductService.findAll().then(response => res.send(response)).catch(err => res.send(err));
};

const create = (req, res) => {
    ProductService.create(req.body).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Product.',
        });
    })
}

const findOne = (req, res) => {
    ProductService.findOneProduct(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving Product with id ${req.params.id}`,
                });
            }
        } else res.send(data);
    });
}
module.exports = {findAll, findOne, create};

