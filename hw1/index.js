
function showlondon(){
    $( "#tokyo" ).hide();
    $( "#paris" ).hide();
    $( "#london" ).show();
}
function showparis(){
    $( "#tokyo" ).hide();
    $( "#london" ).hide();
    $( "#paris" ).show();
}
function showtokyo(){
    $( "#paris" ).hide();
    $( "#london" ).hide();
    $( "#tokyo" ).show();
}

const articles = [...document.querySelectorAll("article")];
    console.log(articles);
articles.forEach((art)=>{
    art.style.display = "none";
    if(art.id == "london"){
        art.style.display = "block";
    }
})
/* 
#id{

}

tag.class{
    
}
*/