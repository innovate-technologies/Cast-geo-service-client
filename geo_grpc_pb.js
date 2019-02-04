// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var geo_pb = require('./geo_pb.js');

function serialize_geo_GeoInfoReply(arg) {
  if (!(arg instanceof geo_pb.GeoInfoReply)) {
    throw new Error('Expected argument of type geo.GeoInfoReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_geo_GeoInfoReply(buffer_arg) {
  return geo_pb.GeoInfoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_GeoInfoRequest(arg) {
  if (!(arg instanceof geo_pb.GeoInfoRequest)) {
    throw new Error('Expected argument of type geo.GeoInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_geo_GeoInfoRequest(buffer_arg) {
  return geo_pb.GeoInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GeoService = exports.GeoService = {
  getGeoInfo: {
    path: '/geo.Geo/GetGeoInfo',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GeoInfoRequest,
    responseType: geo_pb.GeoInfoReply,
    requestSerialize: serialize_geo_GeoInfoRequest,
    requestDeserialize: deserialize_geo_GeoInfoRequest,
    responseSerialize: serialize_geo_GeoInfoReply,
    responseDeserialize: deserialize_geo_GeoInfoReply,
  },
};

exports.GeoClient = grpc.makeGenericClientConstructor(GeoService);
