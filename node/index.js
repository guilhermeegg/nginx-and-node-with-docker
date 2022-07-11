const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
  };


app.get('/', (req, res)=>{
    const connection = mysql.createConnection(config);
    insertPeople(res, connection);
    showPeoples(res, connection);
})

 function insertPeople(res, conn) {
    const sql = `INSERT INTO people(name) values('TESTE')`;
    conn.query(sql);
    console.log(`registro inserido no banco!`);    
  }

function showPeoples(res, conn) {    
    const sql = `SELECT id, name FROM people`;  
    
    conn.query(sql, (error, results, fields) => {
      if (error) {
        throw error
      };
      
      let table = '<table>';
      table += '<tr><th>#</th><th>Name</th></tr>';
      for(let people of results) {      
        table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
      }
  
      table += '</table>';    
      res.send('<h1>Full Cycle Rocks!</h1>' + table);    
    });   
    conn.end();
  } 

app.listen(port, ()=>{
    console.log('Rodando na porta '+ port)
})