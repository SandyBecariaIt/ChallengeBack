const CONNECTION = require('../app/connection');

let peerHour = 2;

let data = {
    currentTime: "",
    finalTime: "",
    cost: 0
};

let response = {
    err: false,
    status: 200,
    menssaje: '',
    money: [{
        one: 0,
        two: 0,
        ten: 0,
        fifty: 0,
        oneHundred: 0
    }]
};

function postData(req, res, next) {
    console.log(req.body);
    if (req.body.currentTime && req.body.finalTime) {
        console.log(req.body);
        data.currentTime = req.body.currentTime;
        data.finalTime = req.body.finalTime;
        data.cost = req.body.cost;

        var newCost = getChange(data.cost);

        res.json(newCost);

    } else {
        response = {
            err: true,
            status: 400,
            menssaje: 'Error'
        }
        res.json(response);
    }
}

function TimeCalculate(hourI, hourF) {
    let date = new Date();
    let arrayI = hourI.split(":");
    let arrayF = hourF.split(":");
    var newM = 60 - arrayI[1];
    var newH = arrayF[0] - arrayI[0];
    newH = newH - (arrayI[1] * .010);
    if ((parseInt(newM) + parseInt(arrayF[1])) > 60) {
        newM = (newM + (arrayF[1] * .010)) - .60;
        newH += 1;
    }
    if (newM < 1)
        newM = newM * 10;

    return Math.ceil(newH) * 2;
}

function getChange(money) {
    var cost = TimeCalculate(data.currentTime, data.finalTime);
    var reduce = 0;
    console.log(cost);
    var countMoney = {
        one: 0,
        two: 0,
        ten: 0,
        fifty: 0,
        oneHundred: 0
    };

    arrayNumber = [100, 50, 10, 2, 1];

    if (cost === money)
        return 0;
    else {
        money = money - cost;
        for (var count = 0; count < arrayNumber.length; count++) {
            if (arrayNumber[count] <= money) {
                if (money > 9) {
                    reduce = (parseInt(parseInt(money / 10) * 10) / arrayNumber[count]);
                    money = parseInt(money % 10);
                } else {
                    reduce = parseInt(money / arrayNumber[count]);
                    money = parseInt(money / 10);
                }
                if (arrayNumber[count] == 10) {
                    countMoney.ten = reduce;
                }
                if (arrayNumber[count] == 1) {
                    countMoney.one = reduce;
                }
                if (arrayNumber[count] == 2) {
                    countMoney.two = reduce;
                }
                if (arrayNumber[count] == 50) {
                    countMoney.fifty = reduce;
                }
                if (arrayNumber[count] == 100) {
                    countMoney.oneHundred = reduce;
                }
            }

        }
    }
    return countMoney;
}

module.exports = {
    postData: postData
};