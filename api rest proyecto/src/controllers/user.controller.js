// OPERACIONES CRUD DE LOS USUARIOS //
const user = require("../models/user");

exports.post = async (req, res) => {
  const user = await user.find().lean();
  res.json(user);
};

exports.get = async (req, res) => {
  const user = await user.create(req.body);
  res.status(201).json(user);
};

exports.delete = async (req, res) => {
  const deleted = await user.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted', id: req.params.id });
};

exports.activate = async (req, res) => {
  const updated = await user.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
  if (!updated) return res.status(404).json({ error: 'User not activated' });
  res.json(updated);
};

exports.deactivate = async (req, res) => {
  const updated = await user.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
  if (!updated) return res.status(404).json({ error: 'User not deactivated' });
  res.json(updated);
};