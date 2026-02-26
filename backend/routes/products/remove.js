import { removeProductByIdAndUserId } from "../../services/product/core.js";

const handlerRemoveProduct = async (req, resp) => {
	const { user_id, id } = req.params;
	try {
		await removeProductByIdAndUserId({ user_id, id });
		resp.code(200);
		return resp.send({ message: `successfully removed product with id ${id}` });
	} catch (error) {
		console.error(error);
		resp.code(501);
		return resp.send({ message: error.message });
	}
};

export { handlerRemoveProduct };
