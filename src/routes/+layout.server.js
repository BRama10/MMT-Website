// @ts-nocheck
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
    console.log('data server local')

    const info = {
        'host' : locals.tracking.get('referer'),
        'connection' : locals.tracking.get('referer'),
        'cache-control' : locals.tracking.get('cache-control'),
        'sec-ch-ua' : locals.tracking.get('sec-ch-ua'),
        'sec-ch-ua-mobile' : locals.tracking.get('sec-ch-ua-mobile'),
        'sec-ch-ua-platform' : locals.tracking.get('sec-ch-ua-platform'),
        'upgrade-insecure-requests' : locals.tracking.get('upgrade-insecure-requests'),
        'user-agent' : locals.tracking.get('user-agent'),
        'accept' : locals.tracking.get('accept'),
        'sec-fetch-site': locals.tracking.get('sec-fetch-site'),
        'sec-fetch-mode' : locals.tracking.get('sec-fetch-mode'),
        'sec-fetch-user' : locals.tracking.get('sec-fetch-user'),
        'sec-fetch-dest' : locals.tracking.get('sec-fetch-dest'),
        'accept-encoding' : locals.tracking.get('accept-encoding'),
        'accept-language' : locals.tracking.get('accept-language'),
        'cookie' : locals.tracking.get('cookie'),
        'if-none-match' : locals.tracking.get('if-none-match'),

    }

    const ip = locals.ip;
    
    // @ts-ignore
    console.log(ip);
    
    return {};
}