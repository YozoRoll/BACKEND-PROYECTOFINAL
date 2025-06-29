// OPERACIONES CRUD DE LOS PRODUCTOS //
const product = require('../models/product');

exports.post = async (req, res) => {
  const product = await product.find().lean();
  res.json(product);
};

exports.get = async (req, res) => {
  const product = await product.create(req.body);
  res.status(201).json(product);
};

exports.delete = async (req, res) => {
  const deleted = await product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Item product not found' });
  res.json({ message: 'Item product deleted', id: req.params.id });
};

exports.activate = async (req, res) => {
  const updated = await product.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
  if (!updated) return res.status(404).json({ error: 'Item product not found' });
  res.json(updated);
};

exports.deactivate = async (req, res) => {
  const updated = await product.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
  if (!updated) return res.status(404).json({ error: 'Item product not found' });
  res.json(updated);
};