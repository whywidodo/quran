let data = new URLSearchParams(window.location.search);
let datax = data.get("id")
// let url=  "https://api.quran.sutanlab.id/surah/"+datax;
// console.log(url);
if(datax==1){
    $.ajax({
    url: 'https://api.quran.sutanlab.id/surah/'+datax,
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
            var surat_ke = detail['data']['number'];
            var nama_surat = detail['data']['name']['transliteration']['id'];
            var arti_surat = detail['data']['name']['translation']['id'];
            var jumlah_surat = detail['data']['numberOfVerses'];
            var basmallah = detail['data']['preBismillah']['text']['arab'];
            var jumlah_ayat = detail['data']['verses']['length'];
            
            htA+='<div class="card mb-2">';
            htA+='<div class="col justify-content-center text-end"><div class="card-body arab" lang="ar" style="line-height:60px;font-size:30px;">'
                + 
                basmallah
                +'</div></div>';
            htA+='</div>';
            for(var i=0; i < jumlah_ayat; i++){
                var ayat = detail['data']['verses'][i]['text']['arab'];
                htA+='<div class="card mb-2">';
                htA+='<div class="col justify-content-center text-end"><div class="card-body arab" lang="ar" style="line-height:60px;font-size:30px;" >'+ ayat +'</div></div>';
                htA+='</div>';
            }
        $(".detail-surat").html(htA);
    }
    });
}else{
    $.ajax({
    url: 'https://api.quran.sutanlab.id/surah/'+datax,
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
            var surat_ke = detail['data']['number'];
            var nama_surat = detail['data']['name']['transliteration']['id'];
            var arti_surat = detail['data']['name']['translation']['id'];
            var jumlah_surat = detail['data']['numberOfVerses'];
            var basmallah = detail['data']['preBismillah']['text']['arab'];
            var jumlah_ayat = detail['data']['verses']['length'];
            
            htA+='<div class="card mb-2">';
            htA+='<div class="col justify-content-center text-end"><div class="card-body arab" lang="ar" style="line-height:60px;font-size:30px;">'
                + 
                basmallah
                +'</div></div>';
            htA+='</div>';
            for(var i=0; i < jumlah_ayat; i++){
                var ayat = detail['data']['verses'][i]['text']['arab'];
                htA+='<div class="card mb-2">';
                htA+='<div class="col justify-content-center text-end"><div class="card-body arab" lang="ar" style="line-height:60px;font-size:30px;" >'+ ayat +'</div></div>';
                htA+='</div>';
            }
        $(".detail-surat").html(htA);
    }
    });
}
