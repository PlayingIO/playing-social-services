const makeDebug = require('debug');
const { Service, createService } = require('mostly-feathers-mongoose');
const fp = require('mostly-func');

const FollowshipModel = require('../../models/followship.model');
const defaultHooks = require('./followship.hooks');

const debug = makeDebug('playing:social-services:followships');

const defaultOptions = {
  name: 'followships'
};

class FollowshipService extends Service {
  constructor (options) {
    options = fp.assignAll(defaultOptions, options);
    super(options);
  }

  setup (app) {
    super.setup(app);
    this.hooks(defaultHooks(this.options));
  }
}

module.exports = function init (app, options, hooks) {
  options = { ModelName: 'followship', ...options };
  return createService(app, FollowshipService, FollowshipModel, options);
};
module.exports.Service = FollowshipService;
