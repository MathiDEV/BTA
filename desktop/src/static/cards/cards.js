Coloris({
    el: '.picker',
    theme: 'large',
    themeMode: 'dark',
    wrap: true,
    formatToggle: false,
});

var currentId;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("color-picker").addEventListener("input", function () {
        document.getElementById("color-preview").style.backgroundColor = this.value;
    })
    document.getElementById("color-picker-button").addEventListener("click", function () {
        document.getElementById("color-picker").click();
    })
    let my_body = {code: localStorage.getItem('code')};
    fetch('https://api-bta.tk/actions/automations_m', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(my_body),
    }).then((response) => {
        response.text().then((text) => {
            console.log(JSON.parse(text));
            for (automation of JSON.parse(text)) {
                document.getElementById('my-automations').appendChild(build_card(automation));
            }
        });
    });
})

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function show_modal(card) {
    console.log(card);
    document.getElementById('automation-name').value = card.name.value;
    document.getElementById('color-picker').value = card.color.value;
    document.getElementById('color-preview').style.backgroundColor = card.color.value;
    currentId = card.id.value;
    toggleModal('edit-auto-modal');
}

function build_card(card) {
    let res_card = createElementFromHTML(`<div style="background-color:` + card.color + `;" class="flex auto-card shadow-lg p-3 justify-between rounded-lg">
        <div auto-id="`+ card.id + `" auto-name="` + card.name + `" auto-color="` + card.color + `" class="edit-btn flex justify-center justify-self-start rounded-full bg-white bg-opacity-50 p-3 h-fit cursor-pointer">
            <i class="fas fa-pen text-white"></i>
        </div>
        <p class="text-xl font-medium text-white self-end">`+ card.name + `</p>
    </div>`)
    console.log(res_card.getElementsByClassName("edit-btn")[0])
    res_card.getElementsByClassName("edit-btn")[0].addEventListener("click", function () {
        show_modal({ id: this.attributes["auto-id"], name: this.attributes["auto-name"], color: this.attributes["auto-color"] })
    })
    return (res_card)
}