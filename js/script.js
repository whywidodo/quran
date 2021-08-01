$.ajax({
    url: "https://api.quran.sutanlab.id/surah",
    type: "get",
    dataType: "json",
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

            htA+='<a class="d-block" href="http://localhost/quran/surah.php?id='+surat_ke+'">';
            htA+='<div class="card mb-2">';
            htA+='<div class="row px-2" style="min-height: 120px;">';
            htA+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htA+='<div class="col-6 justify-content-center align-self-center"><div class="card-body" >'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div></div>';
            htA+='<div class="col-4 justify-content-center align-self-center">'+ arabic +'</div>';
            htA+='</div>';
            htA+='</div>';
            htA+='</a>';

            
            // ht+='<div class="media-body">';
            // ht+='<a class="d-block u-link-v5 g-color-main g-color-primary--hover g-font-weight-600 g-mb-3" href="https://quran.kemenag.go.id/sura/'+data.data[i].id+'">'+data.data[i].surat_name+' ('+data.data[i].count_ayat+')</a>';

            // ht+='<span class="g-font-size-13 g-color-gray-dark-v4 g-mr-15">';
            //     ht+=data.data[i].surat_terjemahan;
            //     ht+='</span>';
            // ht+='</div>';
        }
        for (var i = 38; i < 76; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htB+='<div class="card mb-2">';
            htB+='<div class="row px-2" style="min-height: 120px;">';
            htB+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htB+='<div class="col-6 justify-content-center align-self-center"><div class="card-body">'+ 
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
            htC+='<div class="row px-2" style="min-height: 120px;">';
            htC+='<div class="col-2 justify-content-center align-self-center">'+ surat_ke +'</div>';
            htC+='<div class="col-6 justify-content-center align-self-center"><div class="card-body">'+ 
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