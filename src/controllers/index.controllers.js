const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderBestHosting = (req, res) => {
    res.render('best-hosting')
};

indexCtrl.renderRaiolaNetworks = (req, res) => {
    res.render('raiola')
};

indexCtrl.renderBanaHosting = (req, res) => {
    res.render('banahosting')
};

indexCtrl.renderHostiger = (req, res) => {
    res.render('hostiger')
};


module.exports = indexCtrl;