import {
	decrementProductByIdAndUserId,
	incrementProductByIdAndUserId,
} from "../../services/product/core.js";

const handlerIncrementDecrement = async (req, resp, user_id) => {
	const { id, inc_dec_opt, rawValue } = req.params;
	const count = Number(rawValue);
	if (Number.isNaN(count)) {
		req.code(402);
		return req.send({ message: "value is not a number" });
	}
	try {
		switch (inc_dec_opt) {
			case "inc":
				await incrementProductByIdAndUserId({
					id,
					user_id,
					count,
				});
				return resp.send({ message: `successfully incremented by ${count}` });
			case "dec":
				await decrementProductByIdAndUserId({
					id,
					user_id,
					count,
				});
				return resp.send({ message: `successfully decremented by ${count}` });
			default:
				req.code(400);
				return req.send({ message: `unknown operation ${inc_dec_opt}` });
		}
	} catch (error) {
		console.error(error);
		req.code(501);
		return req.send({ message: error.message });
	}
};

export {  handlerIncrementDecrement };
