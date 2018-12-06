// Create instances of your classes here

const renderer = new Renderer()
const api = new APIManager(renderer)




// Render your page and create an on-click to generate a new user here

api.generateNewPage()

$(`#gen-page`).click(function(){
    $(`.user-container`).empty()
    $(`#friendUsers`).remove()
    $(`.quote-container`).empty()
    $(`.pokemon-container`).empty()
    $(`.meat-container`).empty()
    api.generateNewPage()
})