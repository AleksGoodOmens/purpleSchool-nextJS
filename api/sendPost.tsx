import {
	ReviewFormProps,
	ReviewFormResponse
} from '@/app/(routes)/[type]/[alias]/components/ReviewForm/ReviewForm.props';
import { PATHS } from '.';

export async function sendPost(
	data: ReviewFormProps
): Promise<ReviewFormResponse> {
	const res = await fetch(PATHS.review.createDemo, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({ 'content-type': 'application/json' })
	});

	if (!res.ok) {
		return { message: 'something go wrong' };
	}
	return res.json();
}
