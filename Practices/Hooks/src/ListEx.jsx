import React from "react";

export default function List(){

   const img = [
    {Title: "Image01",
     Images : "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"},

     {Title: "Image02",
     Images : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"},

     {Title: "Image03",
     Images : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="},

     {Title: "Image04",
     Images : "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"},

     {Title: "Image05",
     Images : "https://i.pinimg.com/736x/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg"},

     {Title: "Image06",
     Images : "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais"},
   ]



    return(
        <div>
            <div style={{display: "flex",justifyContent: "space-around", flexWrap: "wrap", flexGrow: "1", gap: "15px"}}>
                {img.map((v)=>(
             <div style={{position: "relative"  }}  >
                <img   src={v.Images} height={"240px"}></img>
                <h4 style={{position: "absolute" , top: "0", backgroundColor: "black", color: "white"}}>{v.Title}</h4>
            </div>
             ))}
            </div>
        </div>
    )
}