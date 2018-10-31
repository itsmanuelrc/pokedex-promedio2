$(function() {
    $('#cuerpo').append('<h2>Nombre: ' + json.name + '</h2>');
    $('#cuerpo').append('<h2>Order: ' + json.order + '</h2>');
    $('#cuerpo').append('<h2>ID: ' + json.id + '</h2>');

    $('#cuerpo').append('<h2>Species: ' + json.species.name + '</h2>');

    $('#cuerpo').append('<h2>Sprites:</h2>');
    for (var key in json.sprites){
        $('#cuerpo').append(json.sprites[key] + '</br>');
    }
    

    $('#cuerpo').append('<h2>Abilities:</h2>');
    for (var key in json.abilities) {
        $('#cuerpo').append(json.abilities[key].ability.name + '</br>');
    }

    $('#cuerpo').append('<h2>Base Experience:</h2>');
    $('#cuerpo').append(json.base_experience);

    $('#cuerpo').append('<h2>Forms:</h2>');
    for (var key in json.forms) {
        $('#cuerpo').append(json.forms[key].name + '</br>');
    }

    $('#cuerpo').append('<h2>Games Indices:</h2>');
    for (var key in json.game_indices) {
        $('#cuerpo').append(json.game_indices[key].version.name + '</br>');
    }

    $('#cuerpo').append('<h2>Height:</h2>');
    $('#cuerpo').append(json.height);

    $('#cuerpo').append('<h2>Held Item:</h2>');
    for (var key in json.held_items) {
        $('#cuerpo').append('<h4>' + json.held_items[key].item.name + '</h4>');
        for (var y in json.held_items[key].version_details) {
            $('#cuerpo').append('- ' + json.held_items[key].version_details[y].version.name + '</br>');
        }
    }

    $('#cuerpo').append('<h2>Location Area Encounters:</h2>');
    $('#cuerpo').append(json.location_area_encounters);
    

    $('#cuerpo').append('<h2>Moves:</h2>');
    for (var key in json.moves) {
        $('#cuerpo').append('<h4>' + json.moves[key].move.name + '</h4>');
        for (var y in json.moves[key].version_group_details) {
            $('#cuerpo').append('- (' + json.moves[key].version_group_details[y].level_learned_at + ') ' + json.moves[key].version_group_details[y].move_learn_method.name + '</br>');
            
        }
    }

    
    $('#cuerpo').append('<h2>Stats:</h2>');
    for (var key in json.stats){
        $('#cuerpo').append(json.stats[key].stat.name + '</br>');
    }

    $('#cuerpo').append('<h2>Types:</h2>');
    for (var key in json.types)
    $('#cuerpo').append(json.types[key].type.name);

    $('#cuerpo').append('<h2>Weight:</h2>');
    $('#cuerpo').append(json.weight);

});




