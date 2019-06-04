var root = '';
var selected = '';

$(document).ready(function() {
    $('#header').load(root + 'html/header.html');
    $('#nav').load(root + 'html/nav.html', function() {
        $(selected).addClass('selected');
        // Update path to nav items
        $('#menu-1').attr('href', root + 'index.html');
        $('#menu-2').attr('href', root + 'project.html');
        $('#menu-3').attr('href', root + 'read.html');
        $('#menu-4').attr('href', root + 'extra.html');
    });
});

function setSelected(id){
    selected = id;
}

function setRoot(path){
    root = path;
}

function loadGrid(grid){
    for(var i in grid){
        var item = grid[i];
        var cell = $('<div class="grid-cell">');
        var link = $('<a>');
        $(link).attr('href', item[2]);
        var div = $('<div>');
        var img = $('<img>');
        img.attr('src', item[0]);
        img.attr('alt', 'Bild: ' + item[0]);
        var title = $('<h1>');
        title.html(item[1]);
        $(div).append(img);
        $(div).append(title);
        $(link).append(div);
        $(cell).append(link);
        $( "#content").append(cell);
    }
}