const { Router } = require("express");
const router = Router();

const {
  renderIndex,
  renderAbout,
  renderBestHosting,
  renderRaiolaNetworks,
  renderBanaHosting,
  renderHostiger,
} = require("../controllers/index.controllers");

router.get("/", renderIndex);

router.get("/about", renderAbout);
router.get("/mejor-hosting", renderBestHosting);
router.get("/mejor-hosting/raiola-networks", renderRaiolaNetworks);
router.get("/mejor-hosting/banahosting", renderBanaHosting);
router.get("/mejor-hosting/hostiger", renderHostiger);

module.exports = router;
