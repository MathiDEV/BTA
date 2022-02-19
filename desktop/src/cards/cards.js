function build_card(card) {
    return `
    <div style="background-color:`+card.name+`;" class="auto-card max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
            <i class="fas fa-edit"></i>
        </div>
        <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">`+ card.name + `</a>
        </div>
    </div>`
}