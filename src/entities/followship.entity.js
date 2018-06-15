import Entity from 'mostly-entity';

const FollowshipEntity = new Entity('Followship');

FollowshipEntity.excepts('_id');

export default FollowshipEntity.asImmutable();
