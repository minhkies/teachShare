const createFunc = require("./create");
const readFunc = require("./read");
const updateFunc = require("./update");
const deleteFunc = require("./delete");

module.exports = {
  create:createFunc,
  read:readFunc,
  update:updateFunc,
  delete:deleteFunc
}