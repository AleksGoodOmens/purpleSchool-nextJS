export interface ReviewFormProps {
	productId: string;
	handleSended: () => void;
	setErrorSend: (str: string) => void;
}

export interface ReviewFormResponse {
	message: string;
}
