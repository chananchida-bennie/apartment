const request = require('request');
const fs = require('fs')

exports.notifyEvent = (msg) => {
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: '6eLoDJpEsg0dQb0DiNpTvJuxAAhkYiBDGSeCwwA4smf'
        },
        form: {
            message: msg,
        },

    })
}


