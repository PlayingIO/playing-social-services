const options = {
  timestamps: true
};

/**
 * Following relationships
 */
const fields = {
  follower: { type: String, required: true },  // user typed id, the feed group 'timeline:jessica'
  followee: { type: String, required: true },  // target user typedid, feed group i.e. 'user:eric'
  priority: { type: Number, default: 10 },     // priority [0-100], both active feeds get higher priority
};

export default function model (app, name) {
  const mongoose = app.get('mongoose');
  const schema = new mongoose.Schema(fields, options);
  schema.index({ follower: 1 });
  schema.index({ followee: 1 });
  schema.index({ follower: 1, followee: 1 }, { unique: true });
  return mongoose.model(name, schema);
}

model.schema = fields;