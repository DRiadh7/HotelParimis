var tableau = ['https://images.unsplash.com/photo-1619735497594-d286fd8d2d39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1620117654333-c125fef82817?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'];
var img = $('.zone1');
        
let interval = setInterval(function(){
    switch(img.attr('src')){
        case ('src', 'https://images.unsplash.com/photo-1619782087505-e1544bc70e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80') : 
        img.attr('src', tableau[0])
        break;

        case ('src', tableau[0]) : 
        img.attr('src', tableau[1])
        break;

        case ('src', tableau[1]) :
        img.attr('src', 'https://images.unsplash.com/photo-1619782087505-e1544bc70e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80')
        break;
    }
},2200)