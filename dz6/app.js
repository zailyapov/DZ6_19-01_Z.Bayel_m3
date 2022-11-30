const convert = (elem, elem2, elem3) => {
    elem.addEventListener("input", () => {
        const response = fetch("data.json")
            .then((response) => response.json())
            .then(response => {
                switch (elem) {
                    case som:

                        elem2.value = (elem.value / response.usd).toFixed(2)
                        elem3.value = (elem.value / response.euro).toFixed(2)
                        break;
                    case usd:
                        elem2.value = (elem.value * response.usd).toFixed(2)
                        elem3.value = ((elem.value * response.usd) / response.euro).toFixed(2)
                        break;
                    case euro:
                        elem2.value = (elem.value * response.euro).toFixed(2)
                        elem3.value = ((elem.value * response.euro) / response.usd).toFixed(2)
                        break;
                }
                if (elem.value === "") {
                    elem2.value = ""
                    elem3.value = ""
                }
            })
    })
}
convert(som, usd, euro)


convert(usd, som, euro)


convert(euro, som, usd)