const createFunc = require("./create");
const readFunc = require("./read");
const updateFunc = require("./update");
const deleteFunc = require("./delete");
const customFunc = require("./custom");

module.exports = {
  create:createFunc,
  read:readFunc,
  update:updateFunc,
  delete:deleteFunc,
  custom:customFunc
}
