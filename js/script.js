$.ajax({
    url: 'https://api.quran.sutanlab.id/surah',
    type: 'get',
    dataType: 'json',
    success: function (detail) {
        var htA = "";
        var htB = "";
        var htC = "";
        for (var i = 0; i < 38; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htA+='<div class="card mb-2">';
            htA+='<div class="row px-2">';
            htA+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htA+='<div class="col-6"><div class="card-body">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div></div>';
            htA+='<div class="col-4 justify-content-center align-self-center">'+ arabic +'</div>';
            htA+='</div>';
            htA+='</div>';
        }
        for (var i = 38; i < 76; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htB+='<div class="card mb-2">';
            htB+='<div class="row px-2">';
            htB+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htB+='<div class="col-6"><div class="card-body">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div></div>';
            htB+='<div class="col-4 justify-content-center align-self-center">'+ arabic +'</div>';
            htB+='</div>';
            htB+='</div>';
        }
        for (var i = 76; i < 114; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];


            htC+='<div class="card mb-2">';
            htC+='<div class="row px-2">';
            htC+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htC+='<div class="col-6"><div class="card-body">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div></div>';
            htC+='<div class="col-4 justify-content-center align-self-center">'+ arabic +'</div>';
            htC+='</div>';
            htC+='</div>';
        }
        $(".divA").html(htA);
        $(".divB").html(htB);
        $(".divC").html(htC);
    }
});