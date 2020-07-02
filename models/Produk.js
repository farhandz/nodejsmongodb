const mongoose = require('mongoose')

const ProdukSchema = new mongoose.Schema({
    nama_produk: {
        type: String
    },
    keterangan: {
        type: String
    },
    harga: {
        type: Number
    },
    jumlah: {
        type: Number
    }
})

module.exports = mongoose.model('Produk', ProdukSchema)