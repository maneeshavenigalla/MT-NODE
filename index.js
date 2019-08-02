const express = require('express');

const app = express();

app.get('/hvac', (req, res) => {

    const details = {
        "totalDevices": 7,
        "date": "Thu, 1 Aug 2019 11:30:00 AM IST",
        "dataRange": [
          {
            "rangeName": "Working Condition",
            "deviceCount": 1,
            "deviceCountPercentage": 14.29
          },
          {
            "rangeName": "Needs Attention",
            "deviceCount": 6,
            "deviceCountPercentage": 85.71
          }
        ]
    }
       return res.send({
           details
       });
});

app.listen(PORT);
