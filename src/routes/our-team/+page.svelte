<script>
	// @ts-nocheck
	import FlexBox from "$lib/components/FlexBox.svelte";
	import Person from "$lib/components/Person.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Tabs from "$lib/components/Tabs.svelte";
	import { LightenDarkenColor } from "$lib/utils/Colors.svelte";

  export let data;

  //i blame svelte for this line since my linter is being very unhelpful and i have NO CLUE WHY TF I CANT USE EXPORTED VARIABLES
  let items = data.roles;
</script>

<svelte:head>
	<title>Our Team</title>
</svelte:head>

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
		<div class="rounded-[200px]">
			<div style="background-color: {tab.color};">
				<br />
				<Heading
					text={tab.name}
					size={3}
					textColor={LightenDarkenColor(tab.color, -120)}
				/>
				<br />
				<FlexBox wrap={true}>
					{#each data.hierarchy.map((h) => h.role_name) as priority}
						{#if data.members.filter(function (member) {
              const roleIndex = member.roles.indexOf(priority);
              const sectionIndex = member.sections.indexOf(tab.code);

              return (roleIndex != -1 && sectionIndex != -1) && (roleIndex == sectionIndex)
						}).length > 0}
							<Heading
								text={priority}
								size={2.5}
								textColor={LightenDarkenColor(tab.color, -120)}
							/>
              <div class="basis-full h-[20px]"></div>
						{/if}

						
						{#each data.members.filter(function (member) {
							const roleIndex = member.roles.indexOf(priority);
              const sectionIndex = member.sections.indexOf(tab.code);

              return (roleIndex != -1 && sectionIndex != -1) && (roleIndex == sectionIndex)
						}) as Member}
							<Person
								width="21em"
								{Member}
								{tab}
								themecolor={LightenDarkenColor(tab.color, -120)}
							/>
						{/each}
						<div class="basis-full h-[20px]"></div>
					{/each}
				</FlexBox>
			</div>
		</div>
	</Tabs>
</section>
