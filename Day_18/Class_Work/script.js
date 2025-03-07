let API_KEY="AIzaSyAjFkJLxkaOMqVE1X5RCrI53JsFQx8-0cU"
search_term=document.getElementById("query").value|| "univercity";

async function getdata() {
    try{
        let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
        let responce=await data.json()
        console.log(data);
        console.log(responce.item);
        showvideocard(responce.item)

    }catch(error){
        console.log("Error")

    }
}

// getdata();
async function showvideocard(){
    array.forEach(({snippet,id:{videoid}}) => {
        let videobox=document.createElement("div")
        videobox.className="videos"
        videobox.style.width="20%"
        videobox.style.border="5px solid grey"

        let img=document.createElement("img")
        img.src=""

        let title=document.createElement("p")
        title.innerText=""

        let chanel_title=document.createElement("p")
        chanel_title.innerText=""

        videobox.append(img,title,chanel_title)
        videocontainer.append(videobox);

        videobox.onclick(()=>{
            let data={
                snippet,id;

            }
            localStorage.setItem("videoData", JSON.stringify(data));
            window.location.href= "video.html"
        })


        
    });
}
