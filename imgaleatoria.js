document.getElementById("imgaleatoria").addEventListener('click', function(e) {
    e.preventDefault();
    enlaceAleatorio()
});
function enlaceAleatorio() {
    var direcciones = new Array("https://cloud.disroot.org/s/agaHrNY4Ljkn2Cn?dir=undefined&path=%2F&openfile=277853551", "https://cloud.disroot.org/s/agaHrNY4Ljkn2Cn?dir=undefined&path=%2F&openfile=277853616", "https://cloud.disroot.org/apps/files_sharing/publicpreview/agaHrNY4Ljkn2Cn?file=/infografia_3.png&fileId=277853857&x=1930&y=1081&a=true", "https://cdn.memegenerator.es/imagenes/memes/full/30/97/30973439.jpg",);
    var aleat = Math.random() * direcciones.length;
    aleat = Math.floor(aleat);
    window.location = direcciones[aleat]
}