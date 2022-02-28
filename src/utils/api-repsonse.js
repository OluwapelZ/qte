export const SuccessResponse = (res, msg) => {
	const data = {
		status: true,
		message: msg
	};
	return res.status(200).json(data);
};

export const SuccessResponseWithData = (res, msg, data) => {
	const resData = {
		status: true,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

export const ErrorResponse = (res, msg) => {
	const data = {
		status: false,
		message: msg,
		data: null
	};
	return res.status(500).json(data);
};

export const NotFoundResponse = (res, msg) => {
	const data = {
		status: false,
		message: msg,
		data: null
	};
	return res.status(404).json(data);
};

export const ValidationErrorWithData = (res, msg) => {
	const data = {
		status: false,
		message: msg,
		data: null
	};
	return res.status(400).json(data);
};

export const UnauthorizedResponse = (res, msg) => {
	const data = {
		status: false,
		message: msg,
		data: null
	};
	return res.status(401).json(data);
};

export const ConflictDataResponse = (res, msg) => {
    const data = {
        status: false,
        message: msg,
        data: null
    };
    return res.status(409).json(data);
};
