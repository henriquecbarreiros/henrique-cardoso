const Sequelize = require ('sequelize')
const sequelize = new Sequelize('projetoLinx','root','12345',{
	host: "localhost",
	dialect: 'mysql'
	})

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso ao Mysql!")
	}).catch(function(erro){
	console.log("Falha ao se conectar: "+erro)
	})
