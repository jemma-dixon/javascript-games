// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let input = prompt("Type ok, hit enter, then click the unicorn for your instructions.")
while (input == 'ok') {
    input = prompt("Click ok, and then click on the first balloon for your carnival quotes :)")
}




let unicorn0 = document.getElementById("unicorn0")
let unicorn1 = document.getElementById("unicorn1")
let unicorn2 = document.getElementById("unicorn2")

let inflationLevel0 = 0
let inflationLevel1 = 0
let inflationLevel2 = 0

//onclick = the name of the function: i.e. clickedUnicorn

unicorn0.onclick = clickedUnicorn
unicorn1.onclick = clickedUnicorn
unicorn2.onclick = clickedUnicorn


// figure out which unicorn I clicked on [x]
// increase its inflation level (there are 4 levels/pictures)
// change the source of the image to the new picture


function clickedUnicorn(event) {
    let unicorn = event.target
    console.log(unicorn);

    if (unicorn.id == "unicorn0") {
        inflationLevel0++

        // write an if statement so that if inflation level is at 4, we reset it to 0. 



        if (inflationLevel0 == 1)
            prompt("No amount of guilt will change the past,")

        // Fix broken image 
        if (inflationLevel0 == 2)
            prompt("No amount of anxiety will change the future.")

        if (inflationLevel0 == 3)
            prompt("Although love cannot be anything other than complicated, we can learn to be curious, savvy, and reflective in the face of love's complexities, tensions, and paradoxes.")


        unicorn.src = "./images/unicorn-" + inflationLevel0 + ".png"

        if (inflationLevel0 == 4)
            prompt("Unicorn number 0 says: Thank You! The antidote to worry is present-moment focus. Goodbye.")

    }
}

