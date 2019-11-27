const approot = require('app-root-path');
const request = require("supertest");
const app = require(approot+"/http/app")

describe("testing full crud", ()=>{
  let data = {
    email:"test@test.com",
    password:"12345"
  }

  let multi = [
    {
      email:"multi1@m.com",
      password:"pass1",
      hash:true
    },
    {
      email:"multi2@m.com",
      password:"pass2",
      hash:true
    },
    {
      email:"multi3@m.com",
      password:"pass3",
      hash:true
    },
    {
      email:"multi4@m.com",
      password:"pass4",
      hash:"custom hash"
    }
  ];

  const reqfunc = async(p)=>{
    var r = await request(app)
        .post("/post")
        .send(p)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

    console.log(JSON.parse(r.body.body));
    return JSON.parse(r.body.body);
  }

  beforeAll(async(done)=>{
    var post = {
      key:"users_create",
      data:{
        email:"profileuser@profile.com",
        password:"profile"
      }
    }
    var out = await reqfunc(post);
    //console.log(out);
    expect(out.status).toEqual(true);

    post = {
      key:"profile_create",
      data:{
        user_id:out.data[0].id,
        gender:"male"
      }
    }
    out = await reqfunc(post);
    //console.log(out);
    expect(out.status).toEqual(true);

    post = {
      key:"profile_image_create",
      data:{
        profile_id:out.data[0].id,
        img:"my.jpg"
      }
    }
    out = await reqfunc(post);
    //console.log(out);
    expect(out.status).toEqual(true);

    done();
  });

  it("creating user", async(done)=>{
    var post = {
      key:"users_create",
      data:data
    }
    var out = await reqfunc(post);
    //console.log(out);
    expect(out.status).toEqual(true);
    expect(out.data[0].email).toBe(post.data.email);
    expect(out.msg).toBe("insert successful");
    expect(out.data[0].password.length).toBeGreaterThan(10);
    done();
  });

  it("fail creating user", async(done)=>{
    var post = {
      key:"users_create",
      data:{
        ...data,
        random:"col"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(false);
    done();
  })

  it("creating multi user", async(done)=>{
    var post = {
      key:"users_create",
      data:multi
    }
    var out = await reqfunc(post);
    expect(out.data.length).toBe(post.data.length);
    done();
  });

  it("reading user", async(done)=>{
    var post = {
      key:"users_read",
      data:{
        email:"multi1@m.com"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.data[0].email).toBe(post.data.email);
    done();
  });

  it("reading fake user", async(done)=>{
    var post = {
      key:"users_read",
      data:{
        gmail:"multi1@m.com"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(false);
    done();
  });

  it("reading multi user", async(done)=>{
    var post = {
      key:"users_read",
      data:{
        email:["multi1@m.com", "multi4@m.com"]
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(2);
    done();
  });

  it("read all users", async(done)=>{
    var post = {
      key:"users_read",
      data:{}
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    done();
  });

  it.skip("authenticating users bcrypt pass", async(done)=>{
    var post = {
      key:"auth",
      data:{
        email:"multi1@m.com",
        password:"pass1"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.data[0].email).toBe(post.data.email);
    done();
  });

  it("updating user default", async(done)=>{
    var post = {
      key:"users_update",
      data:{
        id:2,
        email:"updated@m.com",
        password:"updated",
        hash:true
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.data[0].email).toBe(post.data.email);
    done();
  });

  it.skip("updating user with config", async(done)=>{
    var post = {
      key:"update_config",
      data:{
        email:"multi1@m.com",
        password:"newpass",
        hash:true
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.data[0].email).toBe(post.data.email);
    done();
  });

  it("update multiple user by id", async(done)=>{
    var post = {
      key:"users_update",
      data:[{
        id:2,
        email:"update2@m.com",
        password:"update2",
        hash:true
      },{
        id:3,
        email:"update3@m.com",
        password:"update3",
        hash:true
      },{
        id:4,
        email:"update4@m.com",
        password:"update4",
        hash:true
      }]
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(3);
    done();
  });

  it("deleting user", async(done)=>{
    var post = {
      key:"users_delete",
      data:{
        //id:3
        email:"multi1@m.com"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    done();
  });

  it("deleting multiple users", async(done)=>{
    var post = {
      key:"users_delete",
      data:{
        //id:[1,2,4]
        email:["update2@m.com", "update4@m.com"]
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    done();
  });
})