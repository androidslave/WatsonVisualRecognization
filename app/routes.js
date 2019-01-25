//require express
var express = require('express');
var path = require('path');
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var multer = require('multer');




// create our router object
var router = express.Router();

//export our router
module.exports = router;

//configure multer




//index page
router.get('/', function (req, res) {
    res.render('index');
});

//result page

router.post('/result', function (req, res) {
    const imgname = new Date().getTime().toString();
    var base64Data = req.body.data_img.replace(/^data:image\/png;base64,/, "");
    var filename = "signature/" + imgname + ".png";
    require("fs").writeFile(filename, base64Data, 'base64',
        function (err, data) {
            if (err) {
                console.log('err', err);
            } else {
                var fs = require('fs');
                var model_id = 'DefaultCustomModel_1398942376';

                var VisualRecognition = new VisualRecognitionV3({
                    version: '2018-03-19',
                    iam_apikey: '0Ws2BNRhCG3Pi0gr2UdMBLe2QG2MjPwk6rphgPWsFhzc'
                });

                var images_file = fs.createReadStream(filename);

                var classifier_ids = [model_id];

                var params = {
                    images_file: images_file,
                    classifier_ids: classifier_ids
                };
                var bool = false;
                VisualRecognition.classify(params, function (err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.debug(JSON.stringify(response, null, 2))
                        var result = JSON.stringify(response.images[0].classifiers[0].classes[0]);
                        console.log(result);
                    }
                    res.render('result', { img: filename, result: result });
                });
            }
        });


});






