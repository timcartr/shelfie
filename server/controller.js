module.exports={

    read: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then( products => res.status(200).send( products) )
        .catch( err => {
            rest.status(500).send({errorMessage:"My bad"})
            console.log(err)
        })
    },

    create: (req, res) => {
        const db = req.app.get('db')
        const { name, price, imgurl } = req.body

        db.create_product([name,price,imgurl])
        .then( () => res.sendStatus(200))
        .catch( err => {
            rest.status(500).send({errorMessage:"My bad"})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const { params } = req

        console.log(req.params)
        
        db.delete_product(params.id)
        .then( () => res.sendStatus(200))
        .catch( err => {
            rest.status(500).send({errorMessage:"My bad"})
            console.log(err)
        })
    }

}