const Form = require('../db/form');

const getForms = (req, res) => {
  res.json('you got it');
}
const getForm = async (req, res) => {
  const { id } = req.params;
  const form = await Form.findById(id);
  res.json(form);
}

const saveForm = async(req, res) => {
  const { structure, path, name, tags } = req.body;
  const form = {
    name,
    structure,
    path,
    tags
  }
  const formObj = new Form(form);
  const saved = await formObj.save();
  res.json(saved);
}

const editForm = (req, res) => {
  res.json('you got it');
}

const deleteForm = (req, res) => {
  res.json('you got it');
}

module.exports = {
  getForms,
  getForm,
  deleteForm,
  saveForm,
  editForm
};
