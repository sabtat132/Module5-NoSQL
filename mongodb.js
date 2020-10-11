const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = ' mongodb://127.0.0.1:27017'
const databasename = 'task-manager'

MongoClient.connect(connectionURL, {useNewURLParser: true}, (error, client) =>
if (error){
  return console.log('Unable to connect to the database')
}

 //console.log('Was able to connect successfully')

 //Second Phase
 const db = client.db(databasename)

//insertOne
db.collection('users').insertOne({
   name: 'Sabrina',
   age: 20
 }, (error, result) => {
   if(error){
     return console.log('Unable to insert user')
   }

  console.log(result.ops)
 })
})


//insertMany
db.collection('users').insertMany([
  {
    name: 'Dina',
    age: 51
  },
  {
    name: 'Bill',
    age: 52
  }
], (error, result) => {
  if(error) {
    return console.log('unable to insert documents at this time')
  }
}
  console.log(result.ops)
})


//insertMany
db.collection('tasks').insertMany([
  {
    description: 'Take out the trash',
    completed: false
  },
  {
    description: 'Do the dishes',
    completed: true
  },
  {
    description: 'Pass the sweeper',
    completed: false
  }
], (error, result) => {
  if(error) {
    return console.log('Unable to insert the tasks')
     }
      console.log(result.ops)
   })
})
