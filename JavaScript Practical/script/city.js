let btnclick = document.querySelector('button');
let city = document.querySelector("#city");
let display = document.querySelector("#print");

if (btnclick && city && display) {
    btnclick.addEventListener("click", () => {
        const cityname = city.options[city.selectedIndex].value;

        console.log(cityname);

        let population = 0, boys = 0, girls = 0;

        switch (cityname) {
            case "selvanagar":
                population = 2160;
                boys = 1068;
                girls = 1098;
                break;

            case "thopput":
                population = 1085;
                boys = 625;
                girls = 455;
                break;

            case "muthur":
                population = 960;
                boys = 330;
                girls = 630;
                break;

            case "58":
                population = 725;
                boys = 375;
                girls = 400;
                break;

            case "allanagar":
                population = 1860;
                boys = 1060;
                girls = 800;
                break;

            default:
                let errmsg = document.querySelector("#error");
                errmsg.innerHTML = "please select one option";
                break;
        }

        display.innerHTML = `the country name is srilanka your city ${cityname} , there living amount of people's in ${population} including boys ${boys} and girls ${girls}`;
    });
} else {
    console.error("One or more elements not found in the DOM.");
}