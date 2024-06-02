
function make_album(artist:string , title:string , tracks?:number) {
   let album={artist,title}
   if(tracks){
    album["tracks"]=tracks
   }
   return album
}

console.log(make_album("artist 1","title 1"));
console.log(make_album("artist 2","title 2",4));