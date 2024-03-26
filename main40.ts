//make function Album() Object
function make_album (Artist_name: string, Album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: Artist_name,
        title: Album_title,
    };
    if (tracks!== undefined){
        album.tracks = tracks;
    }
    return album;
}

//calling three function with different values

let album1 = make_album("Aliza", "Album title1");

let album2 = make_album("Ahmad", "Album title2");

let album3 = make_album("Ali", "Album title3",56);

//print Message

console.log(album1);

console.log(album2);

console.log(album3);





