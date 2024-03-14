const Testimonies = require("../models/testimonies");

const testimoniesCtrl = {
  getTestimonies: async (req, res) => {
    try {
      const testimonies = await Testimonies.find();
      res.status(200);
      res.json(testimonies);
    } catch (error) {
      res.status(500);
      res.error({ msg: error.message });
    }
  },
  createTestimonies: async (req, res) => {
    try {
      const { thumbnail, fullname, city, description } = req.body;
      const user = Testimonies.findOne({ fullname: fullname });
      if (user) {
        res.status(400);
        res.send({ msg: "the user has already testified" });
        return;
      }
      const newTestimonies = new Testimonies({
        thumbnail,
        fullname,
        city,
        description,
      });
      await newTestimonies.save();
      res.status(201);
      res.json({ msg: "testimony added successfully" });
    } catch (error) {
      res.status(500);
      res.json({ msg: error.message });
    }
  },
};
