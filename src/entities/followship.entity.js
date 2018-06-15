import Entity from 'mostly-entity';

const FollowshipEntity = new Entity('Followship');

FollowshipEntity.discard('_id');

export default FollowshipEntity.asImmutable();
