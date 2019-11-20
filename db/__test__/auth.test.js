const approot = require('app-root-path');
const request = require("supertest");
const app = require(approot+"/http/app")

/*
describe.skip("testing authentication", ()=>{


  let data = {
    email:"auth@test.com",
    password:"auth123",
    hash:true
  }

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

  beforeAll(async(done) => {
    var post = {
      key:"users_create",
      data:data
    }

    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data[0].email).toBe(post.data.email);
    expect(out.data[0].password.length).toBeGreaterThan(10);
    done();
  });

  it("testing correct authentication", async(done)=>{
    var post = {
      key:"auth",
      data:{
        email:"auth@test.com",
        password:"auth123"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    done();
  });

  it("testing incorrect authentication", async(done)=>{
    var post = {
      key:"auth",
      data:{
        email:"auth@test.com",
        password:"abcde"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(false);
    expect(out.msg).toBe("incorrect authentication");
    done();
  });

  it("testing correct auth with jwt", async(done)=>{
    var post = {
      key:"auth_token",
      data:{
        email:"auth@test.com",
        password:"auth123"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.token).toBeDefined();
    done();
  });

  it("verify jwt token", async(done)=>{
    var post = {
      key:"auth_token",
      data:{
        email:"auth@test.com",
        password:"auth123"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.token).toBeDefined();

    post = {
      key:"verify_token",
      data:{
        token:out.token
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    done();
  });

  it("extend jwt token", async(done)=>{
    var post = {
      key:"auth_token",
      data:{
        email:"auth@test.com",
        password:"auth123"
      }
    }
    var out = await reqfunc(post);
    expect(out.status).toEqual(true);
    expect(out.data.length).toBe(1);
    expect(out.token).toBeDefined();

    post = {
      key:"extend_token",
      data:{
        token:out.token
      }
    }
    var token = await reqfunc(post);
    expect(token).toBeDefined();
    done();
  });
});
*/
it("test",(done)=>{
  done();
})