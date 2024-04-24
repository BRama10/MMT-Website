<script context="module">
	export const prerender = true;
</script>

<script>
	// @ts-nocheck
	import FlexBox from "$lib/components/FlexBox.svelte";
	import Person from "$lib/components/Person.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Tabs from "$lib/components/Tabs.svelte";
	import { LightenDarkenColor } from "$lib/utils/Colors.svelte";

	import { splitStringIntoList } from "$lib/utils";

	// List of tab items with labels, values and assigned components
	let items = [
		{ label: "All Members", role: "org", value: 1, hex: "#cccccc" },
		{ label: "Community Engagement", role: "ce", value: 2, hex: "#efe9cb" },
		{ label: "Curriculum Development", role: "cd", value: 3, hex: "#d7efcb" },
		{ label: "Design", role: "d", value: 4, hex: "#cbefdf" },
		{ label: "Problem Writing", role: "pw", value: 5, hex: "#cbe1ef" },
		{ label: "Technology", role: "t", value: 6, hex: "#d5cbef" },
		{ label: "Tournament Development", role: "td", value: 7, hex: "#efcbeb" },
		{ label: "Video Production", role: "vp", value: 8, hex: "#efcbcc" },
	];

	let roles = {
		pw: "Problem Writing",
		t: "Tech",
		d: "Design",
		td: "Tournament Development",
		cd: "Curriculum Development",
		ce: "Community Engagement",
		vp: "Video Production",
	};

	/**
	 * @type {any}
	 */
	let windowWidth;

	let allRoles = Object.keys(roles);
	let currentPriority = 0;

	let setPriority = (/** @type {number} */ priority) =>
		(currentPriority = priority);

	export let data;
</script>

<svelte:head>
	<title>Our Team</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader
	title="Meet the Team"
	description="The Ones Making Mustang Math Possible"
	button_url="https://contestdojo.com/"
	button_text="Register on ContestDojo!"
	id="registerOnContestDojo"
/>
<section>
	<br />

	<Tabs
		{data.roles}
		let:item={tab}
		style="margin-left: 2vw; margin-right: 2vw; border-radius: 20px"
	>
		<div class="tab">
			<div style="background-color: {tab.color};">
				<br />
				<Heading
					text={tab.name}
					size={3}
					textColor={LightenDarkenColor(tab.color, -120)}
				/>
				<br />
				<FlexBox wrap={true}>
					{#each data.members.map((member) => member.role_name) as priority}
						{#if data.members.filter(function (member) {
							if (tab.code == 'org') {
                return splitStringIntoList(member.section)[0] == tab.code && splitStringIntoList(member.role)[0] == priority;
              } else {
                return splitStringIntoList(member.section)[1] == tab.code && splitStringIntoList(member.role)[1] == priority;
              }
						}).length > 0}
							<Heading
								text={priority}
								size={2.5}
								textColor={LightenDarkenColor(tab.color, -120)}
							/>
              <div class="break"></div>
						{/if}

						
						{#each data.members.filter(function (member) {
							if (tab.code == 'org') {
                return splitStringIntoList(member.section)[0] == tab.code && splitStringIntoList(member.role)[0] == priority;
              } else {
                return splitStringIntoList(member.section)[1] == tab.code && splitStringIntoList(member.role)[1] == priority;
              }
						}) as Member}
							<Person
								width="21em"
								{Member}
								{tab}
								themecolor={LightenDarkenColor(tab.color, -120)}
							/>
						{/each}
						<div class="break"></div>
					{/each}
				</FlexBox>
			</div>
		</div>
	</Tabs>
</section>

<style>
	.tab {
		border-radius: 200px;
	}
	.break {
		flex-basis: 100%;
		height: 20px;
	}
</style>
