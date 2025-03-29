var favChannels = [
   { img_url: "/AMAZON---CLONE/img/lionsgate.jpg"},
   { img_url: "/AMAZON---CLONE/img/discovery.jpg"},
   { img_url: "/AMAZON---CLONE/img/bbcplayer.jpg"},
   { img_url: "/AMAZON---CLONE/img/manorama.jpg"},
   { img_url: "/AMAZON---CLONE/img/hoichoi.jpg"},
   { img_url: "/AMAZON---CLONE/img/chaupal.jpg"},
   { img_url: "/AMAZON---CLONE/img/times.jpg"},
   { img_url: "/AMAZON---CLONE/img/sony.jpg"},
   { img_url: "/AMAZON---CLONE/img/mgm.jpg"},
];

favChannels.map(function (elem){
    var div = document.createElement("div");
    div.setAttribute("class","channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src",elem.img_url);
    div.append(image);
    document.querySelector(".channel-btn").append(div);

});

localStorage.setItem("favChannels", JSON.stringify(favChannels));