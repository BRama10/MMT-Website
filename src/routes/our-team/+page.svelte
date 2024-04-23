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
		{items}
		let:item={tab}
		style="margin-left: 2vw; margin-right: 2vw; border-radius: 20px"
	>
		<div class="tab">
			<div style="background-color: {tab.hex};">
				<br />
				<Heading
					text={tab.label}
					size={3}
					textColor={LightenDarkenColor(tab.hex, -120)}
				/>
				<br />
				<FlexBox wrap={true}>
					{#each [...new Set(data.members.flatMap( (member) => splitStringIntoList(member.role), ))].sort( (a, b) => {
							let valA = 0;
							let valB = 0;

							if (["Director", "Leads", "National Leads"].includes(a)) {
								valA = 3;
							} else if (["Leadership", "Test Coordinators", "Project Leads", "State Leads"].includes(a)) {
								valA = 2;
							} else {
								valA = 1;
							}

							if (["Director", "Leads", "National Leads"].includes(b)) {
								valB = 3;
							} else if (["Leadership", "Test Coordinators", "Project Leads", "State Leads"].includes(b)) {
								valB = 2;
							} else {
								valB = 1;
							}

							return valB - valA;
						}, ) as priority}
						{#if data.members.filter(function (member) {
							if (tab.role == 'org') {
                return splitStringIntoList(member.section)[0] == tab.role && splitStringIntoList(member.role)[0] == priority;
              } else {
                return splitStringIntoList(member.section)[1] == tab.role && splitStringIntoList(member.role)[1] == priority;
              }
						}).length > 0}
							<Heading
								text={priority}
								size={2.5}
								textColor={LightenDarkenColor(tab.hex, -120)}
							/>
              <div class="break"></div>
						{/if}

						
						{#each data.members.filter(function (member) {
							if (tab.role == 'org') {
                return splitStringIntoList(member.section)[0] == tab.role && splitStringIntoList(member.role)[0] == priority;
              } else {
                return splitStringIntoList(member.section)[1] == tab.role && splitStringIntoList(member.role)[1] == priority;
              }
						}) as Member}
							<Person
								width="21em"
								{Member}
								{tab}
								themecolor={LightenDarkenColor(tab.hex, -120)}
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
	.enter {
		flex-basis: 100%;
		height: 0px;
	}
</style>
