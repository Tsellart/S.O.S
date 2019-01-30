const router = require("express").Router();
const subsRoutes = require("./subs");

router.use("/subs", subsRoutes);

module.exports = router;
