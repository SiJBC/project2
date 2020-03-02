

// cloud_name=value&timestamp=unixtime&username=clduser@domain.comapisecret

exports.api_sign_request = function(params_to_sign, api_secret) {
    var k, shasum, to_sign, v;
    to_sign = _.sortBy((function() {
      var results;
      results = [];
      for (k in params_to_sign) {
        v = params_to_sign[k];
        if (v != null) {
          results.push(k + "=" + (utils.build_array(v).join(",")));
        }
      }
      return results;
    })(), _.identity).join("&");
    shasum = crypto.createHash('sha1');
    shasum.update(utf8_encode(to_sign + api_secret), 'binary');
    return shasum.digest('hex');
  };