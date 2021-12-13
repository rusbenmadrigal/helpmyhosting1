const { Router } = require("express");
const router = Router();

const {
  renderIndex,
  renderAbout,
  renderBestHosting,
  renderRaiolaNetworks,
  renderBanaHosting,
  renderHostiger,
  renderBHWordPress,
  renderBHCheap,
  renderBHChile,
  renderBHEspana,
  renderBHMexico,

} = require("../controllers/index.controllers");


// GENERAL PAGES FOLDER - /VIEWS/
router.get("/", renderIndex);
router.get("/about/", renderAbout);

// BEST HOSTING URLS BY AFFILIATE FOLDER - /AFF/
router.get("/mejor-hosting/", renderBestHosting);
router.get("/mejor-hosting/raiola-networks/", renderRaiolaNetworks);
router.get("/mejor-hosting/banahosting/", renderBanaHosting);
router.get("/mejor-hosting/hostiger/", renderHostiger);

// BEST HOSTING URLS GENERAL FOLDER - /BEST-HOSTING-PAGES/
router.get("/mejor-hosting/wordpress/", renderBHWordPress);
router.get("/mejor-hosting/barato/", renderBHCheap);

// BEST HOSTING BY COUNTY FOLDER - /BEST-HOSTING-COUNTRY/
router.get("/mejor-hosting/chile/", renderBHChile);
router.get("/mejor-hosting/espana/", renderBHEspana);
router.get("/mejor-hosting/mexico/", renderBHMexico);

module.exports = router;
