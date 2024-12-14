import sequelize from './db';

const syncDb = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDb();