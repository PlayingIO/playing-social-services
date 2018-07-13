const Entity = require('mostly-entity');

const FollowshipEntity = new Entity('Followship');

FollowshipEntity.discard('_id');

module.exports = FollowshipEntity.freeze();
