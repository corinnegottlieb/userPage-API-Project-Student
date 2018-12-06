// Fill in the functions for your Renderer Class

class Renderer {
    renderUsers(users) {

        let userMain = users.results[0]
        var source = $('#user-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template(userMain)
        $('.user-container').append(newHTML);
    }
    renderFriends(users) {
      users.results.splice(0,1)
let userFriends = users.results
        var source = $('#user-friends-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template({userFriends})
        $('.friends-container').append(newHTML);

    }
    renderQuote(quoteInfo) {
        var source = $('#quote-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template(quoteInfo)
        $('.quote-container').append(newHTML);

    }
    renderPokemon(pokemonInfo) {
        let pokemon = {
            name: pokemonInfo.forms[0].name,
            sprite: pokemonInfo.sprites.front_default
        }
        var source = $('#pokemon-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template(pokemon)
        $('.pokemon-container').append(newHTML);

    }
    renderMeat(meatText) {
        var source = $('#meat-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template({meatText})
        $('.meat-container').append(newHTML);



    }
}

Handlebars.registerHelper(`upper`, function(string){
    return string.replace(/^\w/, c => c.toUpperCase())
})