const Produk = require('../models/Produk')

module.exports = {
    viewCategory: async (req, res) => {
        res.render("view_dashboard")
    },
    addCategory:  async (req,res) => {
        const { produk, keterangan, harga, jumlah} = req.body;
        // console.log(produk,keterangan,harga,jumlah)
        await Produk.create({produk, keterangan, harga, jumlah})

        res.redirect('/admin/category')
        
    }
}