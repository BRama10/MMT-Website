import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	// @ts-ignore
	event.locals.userid = cookies.userid || uuid();

	// @ts-ignore
	event.locals.tracking = event.request.headers;

	// @ts-ignore
	event.locals.ip = event.getClientAddress()

	const response = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			// @ts-ignore
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};
