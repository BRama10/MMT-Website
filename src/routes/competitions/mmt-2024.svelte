<script>
// @ts-nocheck

    import Heading from '$lib/components/Heading.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Testimonial from "$lib/components/Testimonial.svelte";
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Image from '$lib/components/Image.svelte';
    import CardPanelBox from '$lib/components/CardPanelBox.svelte';
    import FlipCard from '$lib/components/InfoBox.svelte';
    import overviewData from "$lib/jsons/MMT-2024.json";
    import { onMount } from 'svelte';
    import SVGComponent from '$lib/components/SVGComponent.svelte';


    let windowWidth;

    let loc = ""

    onMount(() => {
        loc = window.location.hash.substring(1)
    });
    
    let data = loc != "" ? overviewData[loc] : null;
    $:loc;
    $:data = overviewData[loc];

    let infoElem;
    function scrollToElem(e) {
        e.scrollIntoView({
            behavior: "smooth",
        });
    }


    function handleClick(id) {
        loc = id;
        window.location.hash = id;
        scrollToElem(infoElem);
        console.log(id);
        Sidebar.updateCurrentSection();
        Sidebar.updateSectionsArray();


    }
    

    

    const topicsCovered = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>",
        "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsSmall1 = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>" }
    ];
    const topicsSmall2 = [
        { "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsAlgebra = [
        {"Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>"}
    ];
    const topicsCombo = [
        {"Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>"}
    ];
    const topicsGeo = [
        {"Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>"}
    ];
    const topicsNT = [
        {"Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>"}
    ];
</script>
<svelte:head>
    <title>MMT 2024 {data ? data["State"] : ""}</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="page"></div>

<section id="Scroll to Top">
<PageHeader id="Sidebar" title="Mustang Math Tournament [MMT] {data ? data["Statef"] : "2024"}" description="A teamwork-based, fun, and strategic math contest" button_url="http://tinyurl.com/MMT2024Registration" button_text="Register for Competition!" button_id="registerOnContestDojo" target="_blank" />
</section>
<br />
<br/>
<section id="What is MMT">
    <Heading text="What is MMT?" size={2.5} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <CardPanelBox initials="MM">
            <div style="padding: 20px;">
                <p style="font-size: 1.5em; text-align: center;">The Mustang Math Tournament is a middle school math competition run for students around the nation.
                    It is put together by Mustang Math, a 501(c)(3) nonprofit organization made up of high school and college students!<br /><br />
                    The tournament is <strong>centered around teamwork and collaboration</strong>, incentivizing students to work with their teams not only to navigate the <strong>challenging but interesting problems</strong> of the tournament, 
                    but also to develop strategies to master the unique and fun game-like rounds. With interesting and fun rounds including a logic-based puzzle round, a strategy-filled bingo round, a race-like gallop round, 
                    and our trademark 'Mystery Mare' round, our tournament is guaranteed to be <strong>enjoyable for any and all students who have an interest in mathematics</strong>.<br /><br />
                    Don't believe us? Check out some comments from past participants below!
                </p>

            </div>
        </CardPanelBox>
    </div>
</section>
<br>
<section id="Competitions">
    <Heading text="Competitions" size={2.5} textColor="#1B9AAA" />
    <div style="margin-top:1%;"></div>
    <div class="competition-wrapper">
            <p style="font-size: 2em; text-align: center;">Select your location to see more information!</p>
            <FlexBox align="start">
                
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("CA")}}><SVGComponent clicked={loc == "CA" ? true : false} svgURL="/competitions/states/CaliforniaOutlineCursive.svg" hoverFill="red"/></button>
                <!-- <button style="background:transparent; border-color:transparent;" on:click={handleClickCO}><SVGComponent svgURL="/competitions/states/ColoradoOutlineCursive.svg" hoverFill="orange"/></button> -->
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("GA")}}><SVGComponent clicked={loc == "GA" ? true : false} svgURL="/competitions/states/GeorgiaOutlineCursive.svg" hoverFill="orange"/></button>
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("IL")}}><SVGComponent clicked={loc == "IL" ? true : false} svgURL="/competitions/states/IllinoisOutlineCursive.svg" hoverFill="green"/></button>
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("MA")}}><SVGComponent clicked={loc == "MA" ? true : false} svgURL="/competitions/states/MassachusettsOutlineCursive.svg" hoverFill="blue"/></button>
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("WA")}}><SVGComponent clicked={loc == "WA" ? true : false} svgURL="/competitions/states/WashingtonOutlineCursive.svg" hoverFill="hotpink"/></button>
                <button style="background:transparent; border-color:transparent;" on:click={() => {handleClick("O")}}><SVGComponent clicked={loc == "O" ? true : false} svgURL="/competitions//states/UnitedStatesOutline.svg" hoverFill="purple"/></button>
            </FlexBox>
    </div> 
</section>

<br id="registrationInfo" bind:this={infoElem}/>
{#if data}


<Heading text="Awards" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <CardPanelBox initials="MM">
        <div style="padding: 20px;">
            <p style="font-size: 1.5em; text-align: center;">Medals will be given to (at minimum) the members of the top 5 teams of each division, along with certificates of participation to all students. We also have shirts, pins, stickers, and more for all participants!</p>
        </div>
    </CardPanelBox>
</div> <br />


    <section id={data["State"] +" Overview"}>
        <Heading text={"MMT " + data["State"] + " Overview"} size={2.5} textColor="#1B9AAA" />
        <div style="margin-left: 10vw; margin-right: 10vw;">
            <CardPanelBox initials="MM">
                <div style="padding: 10px; padding-left: 30px; padding-top: 25px;">
                <p>
                    <strong>DATE:</strong> {data["Date"]} <br />
                    <strong>TEAM SIZE:</strong> {data["TeamSize"]} <br />
                    <strong>LOCATION:</strong> {data["Location"]}<br />
                    <strong>EARLY HORSE COST:</strong> ${data["EarlyHorseCost"]} per participant (Register before <strong>{data["EarlyHorseCostDate"]}</strong>)<br />
                    <strong>NORMAL COST:</strong> ${data["NormalCost"]} per participant (Register before <strong>{data["NormalCostDate"]}</strong>)<br /> 
                    <strong>LATE COST:</strong> ${data["LateCost"]}  per participant (Register before <strong>{data["LateCostDate"]}</strong>)<br /> <br />
                    <a href="https://tinyurl.com/MMT2024Registration" target="_blank"><strong>CLICK HERE FOR REGISTRATION INSTRUCTIONS</strong></a>
                    <br /><br />
                    <i><strong>*:</strong> Incomplete teams of 1-2 may be merged with other teams to make a full team of 3-4</i><br />
                    <i><strong>Note for International Students:</strong> Students not in Canada or the United States should participate in the international version of our tournament being run by SIMCC. Email us at <a href="mailto:tournament@mustangmath.com">tournament@mustangmath.com</a> if you're interested.</i><br /><br />
                    <i><strong>Note for Students in the US:</strong> Students living within 50 miles of our in-person sites <strong>must</strong> participate in person. If you have an extenuating circumstance that would prevent this please send an email to <a href="mailto:tournament@mustangmath.com">tournament@mustangmath.com</a>, and we may grant you permission to participate online.</i>
                </p>
                </div>
            </CardPanelBox>
        </div> 
    </section>
    <br />

    <section id="Schedule">
        <Heading text="Schedule" size={2.5} textColor="#1B9AAA" />
        <div class="schedule-wrapper">
            <FlexBox>
                <PanelBox>
                    <Table data={data["scheduleData"]} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20} tableStyle="margin-left: auto; margin-right: auto"/>
                    <p style="margin-top: 2px; margin-bottom: 0px;">*Schedule subject to change. Note that there is built-in buffer time to explain instructions and assist with technical difficulties.*</p>
                </PanelBox>
            </FlexBox>
        </div> <br />
    </section>
    <section id="Awards">
        <Heading text="Awards" size={2.5} textColor="#1B9AAA" />
        <div style="margin-left: 10vw; margin-right: 10vw;">
            <CardPanelBox initials="MM">
                <div style="padding: 20px;">
                    <p style="font-size: 1.5em; text-align: center;">Medals will be given to (at minimum) the members of the top 3 teams of each division, along with certificates of participation to all students and certificates of achievement to high-scoring teams. A wide variety of other prizes are available for top scoring teams, winners of activities, and a raffle including prizes from Wolfram, AoPS, and more!</p>
                </div>
            </CardPanelBox>
        </div> 
    </section>
    <br />

    <section id="Rules">
        <Heading text="Rules" size={2.5} textColor="#1B9AAA" />
        <br />
        <div class="cards">
            <FlipCard mainText="General Rules" id="showDropdown">
                <ol>
                    <li>No cheating - This contest has a zero-tolerance cheating policy. Any evidence of cheating may lead to immediate disqualification, or any other punishment deemed appropriate by competition staff.</li>
                    <li>No calculators, rulers, compasses, protractors, or other aids are permitted.</li>
                    <li>You may not use the Internet as a resource at any point during a test.</li>
                        <ol type="a">
                            <li>In order to help enforce this, we may require individuals to provide a solution for a problem during the competition - so keep track of your work!</li>
                        </ol>
                    <li>The team divisions are determined by the highest grade level amongst the team members. Teams with 1 or more 8th graders will be in the <strong>Stallion</strong> division, teams with 7th graders and below will be in the <strong>Colt</strong> division, and teams with 6th graders and below will be in the <strong>Foal</strong> division. Teams may <em>choose</em> to compete in a higher division, if they&rsquo;d like.</li>
                </ol>
            </FlipCard>
            <br />
            <FlipCard mainText="Answer Formatting Rules" id="showDropdown">
                <ol>
                    <li>Carry out any reasonable calculations. For instance, you should evaluate any expressions which will take negligible time to evaluate (such as 1/2+1/3). You don't have to carry out unreasonable calculations, including large powers (e.g. 7<sup>8</sup>), large factorials, large products, and trigonometric functions which cannot be expressed in terms of radicals.</li>
                    <li>Write rational numbers in lowest terms. Decimals are also acceptable, provided they are exact.</li>
                    <li>Move all square factors outside radicals. For example, write 3√7 instead of √63.</li>
                    <li>Denominators need to be rationalized. For example, write 1/√2 as √2/2 instead.</li>
                    <li>Do not express an answer using a repeated sum or product.</li>
                    <li>Here are some examples of simplified answers, and examples of unsimplified answers with simplified equivalents://asdas
                        <div style="margin-top: 5px"><Image url="/competitions/mmt-2022/acceptable-answers.png" alt="Acceptable answer examples" /></div>
                        <div style="margin-top: 5px"><Image url="/competitions/mmt-2022/unacceptable-answers.png" alt="Unacceptable answer examples" /></div>
                    </li>
                </ol>
            </FlipCard>
            <br />
            <FlipCard mainText="Potential Topics Covered" id="showDropdown">
                <p id="disclaimer">Disclaimer: While most problems should fall within the scope of these topics, there may be a few that are not.</p>
                {#if windowWidth > 1000}
                <Table data={topicsCovered} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/1200}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/1500}em;" />
                {:else if windowWidth > 800}
                <Table data={topicsSmall1} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/800}em;" />
                <Table data={topicsSmall2} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/800}em;" />
                {:else}
                <Table data={topicsAlgebra} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsCombo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsGeo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsNT} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                {/if}
            </FlipCard>
            <br />
            <FlipCard mainText="ROUND 1: Mounting Mayhem (Puzzle)" id="showDropdown">
                <ol>
                    <li>The Mounting Mayhem Round will consist of a series of progressively harder logic puzzles. Students will have 15 minutes to learn the rules and basic strategy of the puzzles, then 60 minutes to solve as many of them as possible.</li>
                    <li>Puzzles often require out-of-the-box thinking although all topics can readily be understood and grasped by middle schoolers.</li>
                    <li>Harder puzzles will be worth more points, but these puzzles will be longer and/or require more creativity — you must decide what problems to focus your time on to optimize your team score.</li>
                </ol>
            </FlipCard>
            <br />
            <FlipCard mainText="ROUND 2: Herding Hexes" id="showDropdown">
                <ol>
                    <li>The “Herding Hexes” Round will consist of 26 questions to be solved in 45 minutes.</li>
                    <li>The questions will be laid out on a grid of connected hexagons, with more difficult problems being located furthest from the center.</li>
                    <li>Your score in the round will be determined by the problems you get correct, with bonus points available for having more correct answers connected within the grid!</li>
                    <li>You are not necessarily expected to solve all the questions in this round within the allotted time. Instead, we encourage you to strategize how you might use your time to maximize your points!</li>
                </ol>
            </FlipCard>
            <br />
            <FlipCard mainText="ROUND 3: Mystery Mare" id="showDropdown">
                <ol>
                    <li>The Mystery Mare round is exactly that — a mystery! The rules of the round will be revealed on competition day.</li>
                    <li>Hints about the nature of the round may be revealed as the competition date nears.</li>
                </ol>
            </FlipCard>
            <br />
            <FlipCard mainText="ROUND 4: Gallop" id="showDropdown">
                <ol>
                    <li>The Gallop Round will consist of 27 questions to be solved in 60 minutes.</li>
                    <li>The questions will be divided into 9 sets of 3 questions each, and you <strong>must submit the answers to one set</strong> before accessing the problems for the next. This means you must strategize when to submit each set (incomplete or not) to ensure you get access to as many questions as possible.</li>
                    <li>The problems will get progressively more difficult, and later problems will be worth more points.</li>
                    <li>Submissions will be scored immediately and a live score of all participating teams will be available during the competition. Prepare for the adrenaline rush!</li>
                </ol>
            </FlipCard>
        </div>
    </section>
    <!--
    <Dropdown mainText="FAQ" id="showDropdown">
        <p>
            <strong>Q:</strong> I'm a parent or a student, not a coach - how can I register? <br />
            <strong>A:</strong> MMT doesn't require you to be a coach! A parent can act as a coach (and register as a coach on ContestDojo) to create an organization and team(s) for their participating students. <strong>Students should not create coach accounts.</strong>
        </p>
        <p>
            <strong>Q:</strong> Where can I find practice material for the tests? How can we prepare? <br />
            <strong>A:</strong> You can take a look at our <a target="_blank" sveltekit:prefetch href="/resources">past tests</a>, and we also highly recommend looking at <a target="_blank" sveltekit:prefetch href="https://www.mathcounts.org/resources/past-competitions">past MathCounts</a>, <a target="_blank" sveltekit:prefetch href="https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions">AMC 8/10</a>, and <a target="_blank" sveltekit:prefetch href="https://www.ocf.berkeley.edu/~bmt/archive/">BmMT</a> tests as these are similar in level to the problems at MMT.
        </p>
    </Dropdown>
    -->
    <br />
{/if}
<section id="Testimonials">
<Heading text="Testimonials" size={2.5} textColor="#1B9AAA" />
<div class="grid-three" style="margin-left: 10vw; margin-right: 10vw;">
    <div>
        <Testimonial testimonial="MMT was really fun and more focused on working as a team and thinking outside of the box than other competitions." title="MMT 2023 California" />
        <Testimonial testimonial="MMT set the bar very high for the next math tournament I participate in." title="Frank L, MMT 2023 California" />
        <Testimonial testimonial="MMT has a unique take on standard math competitions." title="MMT 2022" />
        <Testimonial testimonial="MMT focused less on calculations than other math competitions." title="MMT 2022" />
        <Testimonial testimonial="I think this was a very nice way to spend my day." title="MMT 2021" />
    </div>

    <div>
        <Testimonial testimonial="I loved the puzzle aspect as well as the way MMT makes math problem sets more interesting by introducing more strategy in how they should be tackled." title="MMT 2023 Washington" />
        <Testimonial testimonial="I loved all of the rounds. They were all different and interesting -- much more interesting than just a string of math problems." title="MMT 2023 Online" />
        <Testimonial testimonial="MMT's style of problems are much better than other tournaments. Unlike other tournaments that has the same style over the years, MMT has new and exciting styles of problems that makes it more fun to try and solve it on the spot" title="MMT 2022" />
        <Testimonial testimonial="MMT had people captivated even before the tournament started with their Discord server and problems of the day" title="MMT 2022" />
    </div>
    
    <div>
        <Testimonial testimonial="The concepts were very original and rounds were much more fun to participate in than the standard math competition." title="MMT 2023 California" />
        <Testimonial testimonial="I loved the creative format, the team emphasis, and the depth and complexity of problems." title="MMT 2023 California" />
        <Testimonial testimonial="I really appreciate all that MMT has done and I look forward to the competition that is held next year! I must say that the MMT was an impressive execution of math competitions unlike anything I've seen before!" title="MMT 2022" />
        <Testimonial testimonial="My favorite memory from MMT was the teamwork - both chaotically and organizedly working with each other to solve the problems" title="MMT 2022" />
    </div>
</div> 
</section>
<br />

<br /><br />

<Sidebar />

<style>

    .cards {
        margin-left: 8vw;
        margin-right: 8vw;
    }

    .page { 
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: url("/competitions/mmt-2024/cardbackground.png");
    }

    .page::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(211, 223, 235, 0.96);
    }
    li {
        list-style-type: disc;
        margin-left: 20px;
    }
</style>
