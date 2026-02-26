import { addProductByUserId } from "../../services/product/core.js";

const handlerAddProduct = async (req, resp) => {
	const { user_id } = req.params;
	const { name, price, type } = req.body;
	try {
		await addProductByUserId({ name, price, type, user_id });
		resp.code(200);
		return resp.send({ message: `successfully added new ${type} ${name}` });
	} catch (error) {
		console.error(error);
		resp.code(501);
		return resp.send({ message: error.message });
	}
};

export { handlerAddProduct };
