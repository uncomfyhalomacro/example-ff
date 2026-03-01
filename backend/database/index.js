import { Sequelize } from "sequelize";
import { PG_USER, PG_DB, PG_PASSWORD, PROD } from "../env.js";

const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD, {
	host: "localhost",
	dialect: "postgres",
});

sequelize
	.authenticate()
	.then(async () => {
		await sequelize.sync({ alter: PROD === "dev" }).then(() => {
			console.log("Database synchronized");
		});
		console.log("Connection has been established successfully");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

export { sequelize };
