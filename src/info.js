'use strict'

var async = require('async')

var info = function (cb) {
  var self = this

  async.series({
    'bp': function (cb) {
      self.options.val(function (err, data) {
        cb(null, data || {})
      })
    },
    'local': function (cb) {
      self.options.local.val(function (err, data) {
        cb(null, data || {})
      })
    },
  },
  function(err, results) {
    cb(err, results)
  })
}

module.exports = info
