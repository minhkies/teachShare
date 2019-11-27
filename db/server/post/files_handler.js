const approot = require('app-root-path');
const config = require(approot+"/config");
const types = config.types;
const crud = require(approot+"/server/crud");
const myjwt = require(types.JWT_PATH);

//using objects so that I can combine objects from different files together
module.exports = {
	files_create:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.create({model:'files', data:posts, returns:['*'], config:null});
	},
	files_read:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.read({model:'files', data:posts, returns:['*'], config:null});
	},
	files_update:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.update({model:'files', data:posts, returns:['*'], config:null});
	},
	files_delete:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.delete({model:'files', data:posts, returns:['*'], config:null});
	}
};