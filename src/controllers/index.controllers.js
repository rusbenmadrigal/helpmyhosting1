const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

// BEAFFILIATE HOSTING PAGES - FOLDER "AFF"

indexCtrl.renderBestHosting = (req, res) => {
    res.render('../views/best-hosting-pages/best-hosting')
};

indexCtrl.renderRaiolaNetworks = (req, res) => {
    res.render('../views/aff/raiola')
};

indexCtrl.renderBanaHosting = (req, res) => {
    res.render('../views/aff/banahosting.hbs')
};

indexCtrl.renderHostiger = (req, res) => {
    res.render('../views/aff/hostiger')
};

// BEST HOSTING FOLER GENERAL - FOLDER "BEST-HOSTING-PAGES"
indexCtrl.renderBHCheap = (req, res) => {
    res.render('../views/best-hosting-pages/cheap')
};

indexCtrl.renderBHWordPress = (req, res) => {
    res.render('../views/best-hosting-pages/wordpress')
};

// BEST HOSTING BY COUNTRY - FOLDER "BEST-HOSTING-COUNTRY"
indexCtrl.renderBHChile = (req, res) => {
    res.render('../views/best-hosting-country/chile.hbs')
};
indexCtrl.renderBHEspana = (req, res) => {
    res.render('../views/best-hosting-country/espana')
};
indexCtrl.renderBHMexico = (req, res) => {
    res.render('../views/best-hosting-country/mexico')
};

module.exports = indexCtrl;