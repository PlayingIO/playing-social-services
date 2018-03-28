import Entity from 'mostly-entity';

const FollowshipEntity = new Entity('Followship');

FollowshipEntity.excepts('updatedAt', 'destroyedAt');

export default FollowshipEntity.asImmutable();
