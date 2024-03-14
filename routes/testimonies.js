const router = require("express").Router();
const testimoniesCtrl = require("../controllers/testimonies");

router
  .route("/testimonies")
  .get(testimoniesCtrl.getTestimonies)
  .post(testimoniesCtrl.createTestimonies);

module.exports = router;
