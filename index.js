var PROTO_PATH = __dirname + '/protos/geo.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var geo_proto = grpc.loadPackageDefinition(packageDefinition).geo;

var client = null;

module.exports.get = (ip) => new Promise((resolve, reject) => {
    if (!client) {
        client = new geo_proto.Geo(process.env.GEOSERVICE_URL ? rocess.env.GEOSERVICE_URL : "localhost:50051", grpc.credentials.createInsecure());
    }
    client.getGeoInfo({ ip }, function(err, response) {
        if (err) {
            return reject(err);
        }

        return resolve(response);
      });
})
