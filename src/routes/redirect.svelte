<script context="module">
    // @ts-ignore
    export async function load({ url }) {
        const link = url.searchParams.get('link');
        const get = url.searchParams.get('get').replace("%26", "&") + "&link=" + link.replace("&", "%26");

        if (url.searchParams.get('get')) {
            fetch(get, {
                method: 'GET'
            });
        }
        if (link) {
            return {
                status: 302,
                redirect: link
            };
        } else {
            return {
                status: 302,
                redirect: "https://mustangmath.com"
            };
        }
    }
</script>