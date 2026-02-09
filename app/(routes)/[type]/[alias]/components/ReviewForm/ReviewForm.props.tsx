export interface ReviewFormProps {
	productId: string;
	handleSended: () => void;
	isOpenReviews: boolean;
	setErrorSend: (str: string) => void;
}

export interface ReviewFormResponse {
	message: string;
}
