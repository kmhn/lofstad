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
        var text = grid[i][0];
        var link = grid[i][1];
        var page = grid[i][2];

        var cell = $('<div class="grid-cell">');
        var inner = $('<div>');
        var a = $('<a>');
        $(a).attr('href', link);
        $(a).html(text + '<br><span>' + page + '</span>');
        $(inner).append(a);
        $(cell).append(inner);
        $( "#content").append(cell);
    }
}