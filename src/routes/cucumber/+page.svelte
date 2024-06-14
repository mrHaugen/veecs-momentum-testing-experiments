<script>
	import '../styles.css';
    import cucumber_img from '$lib/images/1080px-Cucumber_BNC.jpg';
    import cucumber_favicon from '$lib/images/favicon.ico';
</script>

<head>
<title>Cucumber</title>
<link rel= "icon" type="image/x-icon" href={cucumber_favicon}/>
</head>
<body>


<h1>Brage's favorite vegetable is CUCUMBER! 🥒</h1>
<br />

<!-- svelte-ignore a11y-missing-attribute -->
<img class="cucumberImage" id="img_cucumber" src={cucumber_img}/>

<p class="p1" id = "p1">Why does Brage like cucumbers? <br /><br />

Cucumber is a nutritious low-calorie vegetable with refreshing taste. It has multiple usues all over the Earth. <br />
It is known for for its' multiple culinary uses like:
</p>
<ul>
            <li>slicing</li>
            <li>pickling</li>
            <li>gherkin</li>
            <li>burpless</li>
</ul>


<br />
<table id = "nutrition_table_cucumber">
    <tr>
        <th>Nutrition</th>
        <th>Value per 100g</th>
    </tr>
    <tr>
        <td>Energy</td>
        <td>65 kJ (16 kcal)</td>
    </tr>
    <tr>
        <td>Carbohydrates</td>
        <td>3.63 g</td>
    </tr>
        <td>Fat</td>
        <td>0.11 g</td>
    <tr>   
        <td>Protein</td>
        <td>0.65 g</td> 
    </tr>

</table>
    <br />


<a id = "wikipedia_link_cucumber" href= "https://en.wikipedia.org/wiki/Cucumber">Read more here</a>
<br />

<p class = "p2" id = "p2"> 
    Brage's favorite cuccumber usage type is gherkin also called a cornichon. <br /> 
    But what Brage really likes about cucumber and gherkin is the software tool that supports behavior-driven development. <br />
</p>

<a id = "wikipedia_link_cucumber_bdd" href= "https://en.wikipedia.org/wiki/Cucumber_(software)">Read more here</a>
<br />

<p class="p3" id="p3">
And what do you like best about cucumbers? 
</p>

<form id="cucumber_research_form">
    <input id = "vegetable_radio" type="radio"><label for="vegetable">Eat them!</label><br />
    <input id= "software_radio" type="radio"><label for="software">Code and test!</label><br /><br />
<button id = "cucumber_submit_button">Click me! 🥒</button>
</form>
<br /><br />

<a id="cucumber_email" href="mailto:test@test.com">Email Cucumber Maniacs</a>
<a id = "cucumber_telephone" href="tel:+4700000000 ">... or call us!</a><br />

</body>