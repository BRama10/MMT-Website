<script>
    import Heading from "$lib/components/Heading.svelte";
    import Newsletter from "$lib/components/Newsletter.svelte";
    import { fly, slide, blur, fade } from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    import { onMount } from "svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import AnimatedElement from "$lib/components/AnimatedElement.svelte";
    import PanelBoxAnimated from "$lib/components/PanelBoxAnimated.svelte";
    import Header from "$lib/header/Header.svelte";
    import Horse from "$lib/components/Horse.svelte";

    // need to do this to make the animation play on page load
    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";
    let show = false;

    onMount(() => {
        visible = true;
    });

    function toggleBackground() {
        if (background == "right-arrow.png") {
            background = "right-arrow-shaded.png";
        } else {
            background = "right-arrow.png";
        }
    }

    let y;
    let x;
    $: y = 5 * y;
    $: x = x;
    let windowHeight;
    let scrollOpacity = 1;
    $: scrollOpacity = Math.max((windowHeight - 2 * y) / windowHeight, 0);
    $: learnMoreIsVisible = scrollOpacity > 0;
    let scrollElem;
    function scrollToElem(e) {
        e.scrollIntoView({
            behavior: "smooth",
        });
    }
</script>

<svelte:window bind:scrollY={y} bind:scrollX={x} bind:innerWidth={windowWidth}
bind:innerHeight={windowHeight} />

<svelte:head>
    <title>Mustang Math</title>
</svelte:head>

<Newsletter {show} />
<div class="outside" style="height: 100vh;">
    <div class="header flex">
        {#if windowWidth > 0} <!--windowWidth < 860}-->
            <div in:fly={{ y: -20, duration: 700 }} class="minidiv">

                    <Heading className="glow" text={windowWidth > 860 ? "Mustang Math" : "MM"} textColor="white" />
  
                <div class="flex"><div class="headerline" /></div>
                    <br>
                    <a sveltekit:prefetch href="/competitions/mmt-2024" class="headerButton">
                        <div
                            class="headerButton"
                            on:mouseenter={toggleBackground}
                            on:mouseleave={toggleBackground}
                        >
                            <p class="headerButton" id="signupformmt">
                                Register for MMT 2024
                            </p>
                            <img
                                height="25px"
                                class="headerButton"
                                src={background}
                                alt="Right-facing arrow icon"
                            />
                            <div
                            class="scroll-notification topbuttons"
                            style="opacity: {scrollOpacity}; display: {learnMoreIsVisible
                                ? ''
                                : 'none'} "
                            on:click={() => scrollToElem(scrollElem)}
                        >
                            Learn more &nbsp;
                            <i class="fa fa-caret-down" style="margin-left: 2px;" />
                        </div>
                        </div>
                    </a>
                <br />
                <!--
                <button class="sign-up" on:click={() => {show = !show;}}><i class="fa-regular fa-newspaper"></i> Sign Up for our Newsletter</button>
                -->
            </div>

            <svg
                style="transform: translate({y / 6 - 30}px, 0px)"
                id="Layer_1"
                width="400"
                height="400"
                fill-opacity="50%"
                data-name="Layer 1"
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                ><defs
                    ><style>
                        .cls-1 {
                            fill: #213d44;
                        }
                        .cls-2 {
                            fill: #5b8064;
                        }
                        .cls-3 {
                            fill: #8b6e2b;
                        }
                        .cls-4 {
                            fill: #8a6d2a;
                        }
                        .cls-5 {
                            fill: #65c083;
                        }
                    </style></defs
                ><path
                    class="cls-1"
                    d="M140.26,260.55c2.31-5.44.34-10.83-.19-16.24-38.07-7.72-34.14,12.4-57.77,30-6.73,4.1,3.44,8.09.45,14.33-3.87,8.06-9.76,14.91-13.84,24.53,11.12-3.79,11.8-1.07,8.47,8.35-1.49,4.22.38,9.14-5.45,11.75-2.59,1.16-2,3.55.58,5.17,9.24,5.79,9.77,8.3,2.26,15.07-3.78,3.42-6.47,5.73-.17,9,4.71,3.55-5.64,11.57-5,17.39A25.06,25.06,0,0,1,63.24,394c18-.77,17.83-18.85,29.31-24.41-3.26,10.41-2.85,21.17,7.27,28.83-15-24.85,29.06-39.54,27.65-78,.11-3.5-1.92-8.61,4.61-10,3-.66.6-3.17-.32-4.49C123,289.38,121.76,270.87,140.26,260.55Z"
                /><path
                    class="cls-1"
                    d="M202.57,211.38c11,1.55,20.75-3.7,31-6.07a13.83,13.83,0,0,0,9.2-8.83c3.71-12.92,9.54-25.76,2.13-39.46-2.84-5.27-5-10.63.37-16.7,4-4.54-.28-10.58-.74-15.95-.25-2.81-2.72-6.15-.21-8.29,7.9-6.72,7.4-15.91,8.66-24.86,1.6-11.27,18-23.19,32-23,8.18.15,9.16-2.22,4.9-8.47-11.63-10.31-26.36.49-39.86-4.52.86,18.1-16.43,11.6-24,18.51.74,3.79,5.25,1.32,7.51,4.88-13.68,7.25-12,27-28.05,32.63,6.05,7.46,9.5-2.46,15.12-1.5-3.94,15.25-14.44,28.08-14.4,44.69,0,2.12-1.85,4.15-2.32,6.34-.79,3.6-7.26,6.34-3.94,9.56s7-3,12-3.65c-.95,8.88-2.56,17.19-6.46,24.94-.92,1.82-4.51,2.95-2.57,5.38,2.33,2.94,4.43-.8,6.66-1.38a12.67,12.67,0,0,0,5.26-3.7c1.1,1.25.7,2.17-.63,2.89C213.89,203.45,194.82,203.12,202.57,211.38Z"
                /><path
                    class="cls-2"
                    d="M417.71,201.35c-2.14,8-10.66,8.46-15.5,13.27,7.54,4,5.22,17.77,15.94,17C446.78,233.4,439,209.53,417.71,201.35Z"
                /><path
                    class="cls-2"
                    d="M231.92,388.48c2.15,14.1,1.84,17.35-14.08,14.16,2.18,18,7,24.37,19,25.56,6.36.63,9.9-1.72,10.07-8.31.19-7.39.65-14.48-6.72-19.78C236.53,397.48,234.62,392.43,231.92,388.48Z"
                /><path
                    class="cls-2"
                    d="M188.33,415.19c-3.89,4.66-9.4,5.75-14.93,6.83,2.91,7.41-6.67,15.49,2.61,20.18C202.83,452.87,213.36,428.78,188.33,415.19Z"
                /><path
                    class="cls-2"
                    d="M395.8,275.89c-6.63-3.32-7.18-12.12-13.87-15.39A22.73,22.73,0,0,0,379.42,296c2.22,2.09,5.36,4.51,7.3,1.22C390.62,290.54,398.23,285.26,395.8,275.89Z"
                /><path class="cls-3" d="M406.41,193l2,1.58Z" /><path
                    class="cls-3"
                    d="M408.43,194.59l2.05,1.94Z"
                /><path class="cls-3" d="M369.6,203.89l-2,.41Z" /><path
                    class="cls-4"
                    d="M153.37,381.69,152,379.32Z"
                /><path
                    class="cls-4"
                    d="M169.76,380.55c.47.91,1,1.81,1.43,2.72C170.71,382.36,170.23,381.46,169.76,380.55Z"
                /><path class="cls-4" d="M207.81,391.44l-1.26-2.39Z" /><path
                    class="cls-4"
                    d="M175.59,394.18l1.31,2.71C176.47,396,176,395.08,175.59,394.18Z"
                /><path
                    class="cls-5"
                    d="M140.07,244.31c22.55-10,22.34-34.34,62.51-32.93,11.37,1.6,21.38-4,32-6.29,4.1-.86,7.14-5,8.31-9,15.81-38.43-9.07-40.73,2.37-55.75,5.61-5.62-5-19.12-1-24.23,7.9-6.72,7.4-15.91,8.66-24.86,1.6-11.27,18-23.19,32-23,8.18.15,9.16-2.22,4.9-8.47,12.25,8.84,25.81,14.35,40.53,18,29.3,5.3,13.37,46.07-4.07,36.63-3.83-2.25-7.22-2.49-10.94-.81-19.68,8.89-20.42,11.1-10.22,29.71,10.3,21.13,23.43,40.27,33,63,8.72-9.2,17.23-34.42,31.55-27.78,12,8.33,27,8.37,38.76,16.07h0c2.68,2.78,6.16,4.54,9.28,6.76-2.14,8-10.66,8.46-15.5,13.27-2,1.23-3.76.59-5.51-.5-2.33-.45-2.47-2.5-3.09-4.2-7.23-7.31-16.67-7.47-26-5.62-3,1.91-4.18,4.09.53,4.56,14.78.72,21.75,33.8,31.18,45.28,0,6.89-2.66,14.7-3.54,21.75-6.63-3.32-7.18-12.12-13.87-15.39-1.7-8.44-3.55-16.67-6.86-24.67-3.22-2.06-5.39-5.66-9.49-6.41C352.3,240.63,341.64,258.6,323,260.47c-4.56.21-7.7,1.94-11.26,4.47-23.5,16.71-45.46,36.71-76.7,37.71-5.31.16-5.86,3.89-6.21,8-.45,20.2-19.14,30.79-26,48.57-3.44,8,7.33,7.76,6.61,14.67,5.14,1.8,9.8,5.14,15.46,5.83,4.16.41,5.67,3.75,6.53,7.39,3,13.71,3,19.34-13.6,15.5-6.93-.53-6.72-7.44-10-11.2-12.3-20.34-46.63-12.5-23-44.17-5.81.31-5.78.35-7.29,1.51-17.76,14.25-6.93,38.82,3.38,53.92l0,0c3.16,3.65,6.49,7.59,7.44,12.53-3.89,4.66-9.4,5.75-14.93,6.83-11.36-8.82-8.35-17.62-14.25-28.64-4.16-3.26-3.87-9.86-7.12-14.06-10.35-16.22-13.48-22.15.39-37.9,15.82-24-1.45-38.31-10.89-58.87-2.66-7.22-.08-14.71-1.27-22C142.57,255.11,140.6,249.72,140.07,244.31Z"
                /><path class="cls-4" d="M179,400.65l2,2.05Z" /><path
                    class="cls-4"
                    d="M180.89,402.66c.63.68,1.27,1.35,1.9,2C182.16,404,181.52,403.34,180.89,402.66Z"
                /></svg
            >
        {/if}
    </div>
</div>

<!-- <div> 
<Heading text="Mission Statement" size={6} textColor="#1B9AAA" />
</div>

<div style="height:10vh"></div>


<div style="margin-left: 15vw; margin-right: 15vw;">
    <PanelBoxAnimated style="">
        <div class="MissionStatement">
            Lorem ipsum dolor sit amet Consectetuer adipiscing elit, Sed diam
            nonummy Nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
        </div>
    </PanelBoxAnimated>
</div>

<div style="height:10vh"></div>


    <div>
        <Heading text="Statistics" size={5} textColor="#1B9AAA" />
    </div>

    <div style="height:10vh"></div>


<div style="display:flex" >
    <div>
        <PanelBox margin="3%">
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;" >
                <Heading text="1200+ Competitors" size={3} textColor="#516370;" />
                <img
                    src="home-page/People.png"
                    alt="people clip art"
                    style="width:100%; margin-top:30px;"
                />
            </div>
        </PanelBox>
    </div>


    <div>
        <PanelBox margin="3%">
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center; padding:20px;" >
                <Heading text="12 Countries" size={3} textColor="#516370;" />
                <img
                    src="home-page/Earth.png"
                    alt="Earth clip art"
                    style="width:60%; margin-top:30px;"
                />
            </div>
        </PanelBox>
    </div>
</div> -->
<div bind:this={scrollElem} style="background: #FFFCFC; width:100%; display:flex; align-items:center; flex-direction:column; justify-content:center;">
    <!-- <Horse></Horse> -->
    <div class="vertLine"></div>
    <div class="dot"> </div>

    <div style="width:100%; align-items:center;display:flex; flex-direction:column; justify-content:center;" >
        <Heading text="About Mustang Math" size={4} textColor="#3C6F8B;" />
        <div class="homeText">
            Mustang Math is a <b>nonprofit organization</b> of high school and college volunteers that are dedicated towards providing middle schoolers access to challenging, interesting, fun, and collaborative math competitions and resources! We are the organizers of the annual <b>Mustang Math Tournament</b>, run low-cost and high-quality <b>mathematics tutoring</b> and are also working on many new and exciting projects including a Youtube Channel, a competition management platform, private tutoring, and more! We reached over 500 U.S. competitors in our MMT 2023 contests, and we're expecting 750 more in our international tournament this upcoming August. We are excited to expand our team to continue our mission of spreading a love for mathematics amongst students.
        </div>
    </div>  

    <div class="vertLine"></div>
    <div class="dot"> </div>



    <Heading text="Who are We?" size={4} textColor="#3C6F8B;" />
    <div class="homeBox">
        <div class="homeCard">
            <img 
            src="/home-page/Volunteers.png" 
            style="width: 216px;
            height: 216px;
            flex-shrink: 0;"
            alt="Volunteers"
            />
            <Heading text="80+" size={4} textColor="#38C27C;" />
            <Heading text="Volunteers" size={2} textColor="#000;" />
        </div>
        <div class="homeCard">
            <img 
            src="/home-page/States.png" 
            style="width: 216px;
            height: 216px;
            flex-shrink: 0;"
            alt="States with Volunteers"
            />
            <Heading text="34" size={4} textColor="#38C27C;" />
            <Heading text="States with Volunteers" size={2} textColor="#000;" />
        </div>
        <div class="homeCard">
            <img 
            src="/home-page/Teams.png" 
            style="width: 216px;
            height: 216px;
            flex-shrink: 0;"
            alt="Teams"
            />
            <Heading text="7" size={4} textColor="#38C27C;" />
            <Heading text="Teams" size={2} textColor="#000;" />
        </div>
    </div>

    <div class="homeText">
        Mustang Math began with a small team of dedicated volunteers in 2020, who wanted to spread their love for mathematics to the surrounding community. Since then, MM has hosted several successful tournaments and provided mathematical resources available worldwide. 
    </div>

    <div class="homeText"> 
        Now, MM has a full team of volunteers worldwide, consisting of multiple dedicated teams overseeing several projects, all working towards the shared goal of promoting mathematics. Alongside our projects, MM has contributed to other mathematical initiatives, such as the ASDAN Math Tournament (AMT), by providing problems and proctors to coordinate testing.
    </div>

    <div class="vertLine"></div>
    <div class="dot"> </div>


    <Heading text="Tournaments" size={4} textColor="#3C6F8B;" />
    <div class="homeBox">
        <div class="homeCard">
            <img 
            src="/home-page/DomesticComp.png" 
            style="width: 266px;
            height: 216px;
            flex-shrink: 0;"
            alt="Domestic Competitiors"
            />
            <Heading text="550+" size={4} textColor="#38C27C;" />
            <Heading text="Domestic Competitors" size={2} textColor="#000;" />
        </div>
        <div class="homeCard">
            <img 
            src="/home-page/InternationalComp.png" 
            style="width: 266px;
            height: 216px;
            flex-shrink: 0;"
            alt="International Competitors"
            />
            <Heading text="350+" size={4} textColor="#38C27C;" />
            <Heading text="International Competitors" size={2} textColor="#000;" />
        </div>
        <div class="homeCard">
            <img 
            src="/home-page/Worldcomp.png" 
            style="width: 266px;
            height: 216px;
            flex-shrink: 0;"
            alt="Countries with Competitors"
            />
            <Heading text="16" size={4} textColor="#38C27C;" />
            <Heading text="Countries with Competitors" size={2} textColor="#000;" />
        </div>
    </div>



    <div class="homeText">
        As MM gears up for the upcoming year, we plan to host an
individual tournament this fall along with the team-based Mustang
Math Tournament [MMT]. MMT is our focal point, and we plan to
have four in-person locations in addition to an online tournament in
the upcoming year. This is an international math tournament for the middle school level that features a variety of interesting rounds
designed to not only test mathematical ability, but also promote
collaboration and be enjoyable for the participants.
    </div>

<!-- Add button here -->

    <div class="vertLine"></div>
    <div class="dot"> </div>

    <Heading text="Classes" size={4} textColor="#3C6F8B;" />

    <div class="homeText">
        Mustang Math classes bring together students from around the world with one thing in common: an outstanding passion for math. Our highly qualified instructors prepare students for competitions in a fun and engaging way. Beyond instruction, we want to build a community of students and teachers sharing their love of math.
    </div>

    <div class="homeText">
        These classes will be run year-round and will be split into 4 quarters: Algebra, Geometry, Combinatorics/Number Theory, and Problem Solving/AMC Prep, each run for 8 weeks. Instructive sessions will run for 90 minutes every week over Zoom. Additionally, teachers will hold office hours each week, during which students can seek assistance with the content or ask any lingering questions. Each class will have 10-15 students and, depending on the interest we receive, there may be multiple classes run for each level. The total cost for 8 weeks of classes will be $160 with financial aid available.
    </div>

    <PanelBox>

    </PanelBox>

</div>




<style>
    .outside {
        background-image: url("/splash.svg"); /*url("/home-page/mustang_math_splash_screeen_5.gif");*/
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        overflow: hidden;
        
    }

    .sign-up {
        background-color: #65c083;
        color: white;
    }

    @media (max-width: 860px) {
        .outside {
            background-image: url("/splash-mobile.svg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    .header {
        text-align: center;
        position: relative;
        height: calc(100% - 70px);
    }

    .svg {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .minidiv {
        z-index: 9;
        margin: 20px;
        max-width: 80%;
    }

    .headerline {
        border-bottom: 1px solid white;
        height: 20px;
        width: 60%;
        min-width: 300px;
    }

    div.headerButton {
        display: flex;
        background-color: #65c083;
        border-radius: 50px;
        padding: 10px;
        color: white;
        margin: auto;
        justify-content: center;
        align-items: center;
        width: 300px;
    }

    p.headerButton {
        color: white;
        align-self: center;
        font-size: 1em;
        margin: 5px;
        margin-right: 20px;
    }

    a.headerButton:hover {
        text-decoration: none;
    }

    .MissionStatement {
        padding: 30px;
        font-family: Ubuntu;
        font-size: 2.5em;
        font-weight: 70;
        line-height: 50px;
        letter-spacing: 0.1em;
        text-align: center;
    }

    .vertLine{
        width: 1px;
        height: 153px;  
        background: #000;
        padding: 0px;
    }


    .homeText{
        width: 80%;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: Ubuntu;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 3%;
        margin-top:3%;
        }

    .homeBox{
        display:flex;
        margin-left: 10%;
        margin-right:10%; 
        margin-top:3%; 
        align-items:center; 
        justify-content:center;
    }

    @media (max-width: 950px){
        .homeBox{
        display:flex;
        flex-direction: column;
        margin-left: 10%;
        margin-right:10%; 
        margin-top:3%; 
        align-items:center; 
        justify-content:center;
    }

    }

    .homeCard{
        display:flex; 
        align-items:center; 
        flex-direction:column; 
        justify-content:center; 
        margin-left:5%; 
        margin-right:5%
    }

    .dot{
        border-radius: 10000px;
        border-color: #000;
        border-width: 10px;
        border-style: solid;
    }
    .scroll-notification {
    display: flex;
    position: absolute;
    bottom: 3%;
    border-radius: 100px;
    padding-left: 30px;
    padding-right: 30px;
    color: white;
    justify-content: center;
    align-items: bottom;
    flex-grow: 0;
    cursor:pointer
}

</style>
