<script>
// @ts-nocheck

    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';

    export let data;
</script>


<svelte:head>
	<title>Partners and Sponsors</title>
</svelte:head>

<PageHeader title="Partners & Sponsors" description="The Organizations Making MM Possible" button_url="
https://tinyurl.com/MMSponsors2024" button_text="Sponsor Mustang Math!" button_id="sponsorMM"/>



<Section>
    <br /> <br />
    <Heading text="Sponsors and Partners" size={4} textColor="#1B9AAA" />
    <FlexBox>
        <PanelBox width="60%" style="min-width: 360px;">
            <p style="font-size: 1.2em; margin: 5px">Thank you to our sponsors and partners for supporting the Mustang Math Tournament and our vision of providing a fun, collaborative team competition to motivated and bright middle school students!<br><br>
            Interested in sponsoring or partnering? Check out our <b><a href = https://tinyurl.com/MMSponsors2024>sponsorship packet</a></b> and reach out to us at <Link target="_blank" url="mailto:contact@mustangmath.com" text="contact@mustangmath.com" />.
            All sponsorships are used to help fund our competitions, classes, and other activities and improving the quality of such events.</p>
        </PanelBox>
    </FlexBox>
</Section>

<!-- {#each sponsorTiers as lvl} -->
{#each data.tiers as lvl}
    <Section>
        <br /> <br />
        <Heading text="{lvl.tier_name}" size={3} textColor={lvl.tier_color} />
            <FlexBox wrap={true} align="stretch">
                {#if data.sponsors.filter(sponsor => sponsor.tier_name == lvl.tier_name).length > 0}
                    {#each data.sponsors.filter(sponsor => sponsor.tier_name == lvl.tier_name) as sponsor}
                        <PanelBox borderRadius="20px" width="40%" style="max-width: 300px; min-height: 250px; min-width: 250px;">
                            <a target="_blank" href={sponsor.link} style="height: 100%; display: flex; align-items: center;text-decoration:none;">
                                <div>
                                    <img src={sponsor.img_url} alt={sponsor.alt_text} style="max-width: 100%;">
                                    <!-- {#if sponsor.blurb}
                                        <p style="font-size: 11px; text-align: center;">{sponsor.blurb}</p>
                                    {/if} -->
                                </div>
                            </a>
                        </PanelBox>
                    {/each}
                {:else}
                    <p>Become our first {lvl.tier_name.slice(-1)}!</p>
                {/if}
            </FlexBox>
    </Section>
{/each}
<style>
    
</style>