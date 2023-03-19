import { Sequelize, DataTypes } from "sequelize";
import env from "dotenv";
env.config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  HOST: process.env.HOST,
  dialect: 'mariadb',
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock'
  }
});

// Teste la connection de la base de donnée
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export const User = sequelize.define('utilisateurs', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  date_inscription: {
    type: DataTypes.TIME
  },
  pseudo: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  mot_de_passe: {
    type: DataTypes.STRING
  },
  date_inscription: {
    type: DataTypes.TIME
  }
}, {
  timestamps: false
});

/*
(async () => {
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User));
  console.log("All users:", JSON.stringify(users, null, 2));
})();
*/