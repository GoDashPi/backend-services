'use strict';

// tests for generate-preview
// Generated by serverless-mocha-plugin

const mod = require('../generate-preview/index.js');
const mochaPlugin = require('serverless-mocha-plugin');

const lambdaWrapper = mochaPlugin.lambdaWrapper;
const expect = mochaPlugin.chai.expect;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' });

process.env.FFMPEG = 'ffmpeg';

describe('generate-preview', () => {
  before((done) => {
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('implement tests here', () => {
    return wrapped.run({ session: '5404f673-fc3a-4a56-869c-6c3cf21980c4' }).then((response) => {
      console.log(response);
      expect(response).to.not.be.empty;
    });
  });
});