const Events = require('../models/Events');
const {notifyEvent} =require('../functions/notify')
const cron = require('node-cron')

exports.createEvent =async (req, res) => {
    try {
      // console.log(req.body)
      res.send(await new Events(req.body).save());
    } catch (err) {
      console.log("Server Error");
      res.status(500).send("เออเรอ เซเวอ");
    }
} 
exports.listEvent =async (req, res) => {
  try {
    
    res.send(await Events.find({}));
  } catch (err) {
    console.log("Server Error");
    res.status(500).send("เออเรอ เซเวอ");
  }
} 
exports.currentMonth = async (req, res) => {
  try {
    const m = parseInt(req.body.mm);
    console.log(typeof m);
    const currentM = await Events.find({
      $expr: {
        $eq: [
          {
            $month: "$start",
          },
          m,
        ],
      },
    }).sort({ start: 1 });
    console.log(currentM);
    res.send(currentM);
  } catch (err) {
    console.log("Server Error");
    res.status(500).send("Server Error!!");
  }
};

const currentDate = async () => {
  try {
    const d = new Date();
    const currentD = await Events.find({}).sort({ start: 1 });

    const current = currentD.filter((item) => {
      return d >= item.start && d < item.end
    });
    for (t in current) {
      const msg = 'วันนี้มีกิจกรรม' + current[t].title
      notifyEvent(msg)
      
    }
    // console.log(current)
    // res.send(current)

  } catch (err) {
    console.log(err, "Server Error");
    // res.status(500).send('Server Error!!')
  }
};
cron.schedule('00 09 * * *', () => {
  currentDate()
})
