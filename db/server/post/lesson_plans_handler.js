const approot = require('app-root-path');
const config = require(approot+"/config");
const types = config.types;
const crud = require(approot+"/server/crud");
const myjwt = require(types.JWT_PATH);

//using objects so that I can combine objects from different files together
module.exports = {
	lesson_plans_create:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.create({model:'lesson_plans', data:posts, returns:['*'], config:null});
	},
	lesson_plans_read_w_stats:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.custom({model:'lesson_plans', data:posts, returns:['*'], config:null});
	},
	lesson_plans_read:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.read({model:'lesson_plans', data:posts, returns:['*'], config:{
				order_type: " DESC"
			}});
	},
	lesson_plans_update:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.update({model:'lesson_plans', data:posts, returns:['*'], config:null});
	},
	lesson_plans_delete:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.delete({model:'lesson_plans', data:posts, returns:['*'], config:null});
	}
};
