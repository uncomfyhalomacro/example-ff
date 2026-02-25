import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class UserModel extends Model {}

UserModel.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		contact_number: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		hashed_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		salt: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "subscriber",
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "users", // We need to choose the model name
	},
);

export default UserModel;
