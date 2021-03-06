const expect = require("expect");

const request = require("supertest");
const {ObjectId}=require('mongodb');

const {app}=require('./../server.js');
const {Todo}=require('./../models/todo.js');


const todos=[{
	_id:new ObjectId(),
	text:"first todo text"
},{
	_id:new ObjectId(),
	text:"second todo text"
}]

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
  	return Todo.insertMany(todos);
  }).then(()=>done());
});


describe('POST /todos',()=>{
	it('should create a new todo',(done)=>{
		var text="test todo text";


		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res)=>{
			expect(res.body.text).toBe(text);
		})
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			Todo.find({text}).then((todos)=>{
				expect(todos.length).toBe(1);
			    expect(todos[0].text).toBe(text);
			    done();
			}).catch((e)=>done(e));
		});
		
	});

	it('should not create a new todo with error',(done)=>{
		var text="test todo text";


		request(app)
		.post('/todos')
		.send({})
		.expect(400)		
		.end((err,res)=>{
			if(err){
				return done(err);
			}

			
			Todo.find().then((todos)=>{
				expect(todos.length).toBe(2);
			    done();
			}).catch((e)=>done(e));
		});
		
	});
});



describe('GET /todos',()=>{
	it('should get todo',(done)=>{
		


		request(app)
		.get('/todos')
		.expect(200)
		.expect((res)=>{
			expect(todos.length).toBe(2);
		})
		.end(done);
		
	});


});


describe('GET /todos/:id',()=>{
	it('should return todo doc',(done)=>{
		


		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(todos[0].text);
		})
		.end(done);
		
	});

	it('should return 404 if todo is not found',(done)=>{
		
        var hexId=new ObjectId().toHexString();

		request(app)
		.get(`/todos/${hexId}`)
		.expect(404)		
		.end(done);
		
	});


	it('should return 404 if todo id is undefined',(done)=>{
		
        var hexId=new ObjectId().toHexString();

		request(app)
		.get(`/todos/123`)
		.expect(404)		
		.end(done);
		
	});


});







