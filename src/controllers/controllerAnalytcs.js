var modelAnalytcs = require('../models/modelAnalytcs')

function qtdNotas(req, res) {
    var id = req.params.idUsuario
    modelAnalytcs.qtdNotas(id).then(resultado => res.json(resultado))
}

module.exports = {
    qtdNotas
}