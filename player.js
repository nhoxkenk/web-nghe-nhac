const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    volume: 0.7,
    mutex: true,
    listFolded: true,
    audio: [
     {
        name: 'Phải chăng em đã yêu',
        artist: 'Unknow',
        url: './songs/vietnam/1.mp3',
        cover: './song_img/phaichangtadayeu.jpg'
        },
        {
            name: 'Sài Gòn đau lòng quá',
            artist: 'Unknow',
            url: './songs/vietnam/2.mp3',
            cover: './song_img/saigondaulongqua.jpg'
        },
        {
            name: 'Anh đếch cần gì nhiều ngoài em',
            artist: 'Unknow',
            url: './songs/vietnam/3.mp3',
            cover: './song_img/anhdechcanginhieu ngoai em.jpg'
        },
        {
            name: 'Chỉ là không cùng nhau',
            artist: 'Unknow',
            url: './songs/vietnam/4.mp3',
            cover: './song_img/chilakhongcungnhau.jpg'
        }
        ,
        {
            name: 'Con đường xưa em đi',
            artist: 'Unknow',
            url: './songs/trutinh/5.mp3',
            cover: './song_img/TThoanovedem.jpg'
        },
        {
            name: 'Làm dâu xứ lạ',
            artist: 'Unknow',
            url: './songs/trutinh/6.mp3',
            cover: './song_img/TTlamdauxula.jpg'
        },
        {
            name: 'Tàu anh qua núi',
            artist: 'Unknow',
            url: './songs/trutinh/7.mp3',
            cover: './song_img/TTtauanhquanui.jpg'
        },
        
        {
            name: 'Quảng bình quê ta ơi',
            artist: 'Unknow',
            url: './songs/trutinh/8.mp3',
            cover: './song_img/TTquangbinhqueta.jpg'
        }
        ,
        {
            name: 'No time to die',
            artist: 'Unknow',
            url: './songs/usuk/9.mp3',
            cover: './song_img/USUKnotimetodie.jpg'
        }
        ,
        {
            name: 'Physical',
            artist: 'Unknow',
            url: './songs/usuk/10.mp3',
            cover: './song_img/USUKphysical.jpg'
        }
        ,
        {
            name: 'Souvenir',
            artist: 'Unknow',
            url: './songs/usuk/11.mp3',
            cover: './song_img/USUKsouvernir.jpg'
        }
        ,
        {
            name: 'The 1',
            artist: 'Unknow',
            url: './songs/usuk/12.mp3',
            cover: './song_img/USUKthe1.jpg'
        }
        ,
        {
            name: 'Ddu-Du Ddu-Du',
            artist: 'Unknow',
            url: './songs/hanquoc/13.mp3',
            cover: './song_img/nhachan2.jpg'
        }
        ,
        {
            name: 'Lalisa',
            artist: 'Unknow',
            url: './songs/hanquoc/14.mp3',
            cover: './song_img/nhachan.jpg'
        }
        ,
        {
            name: 'Loco',
            artist: 'Unknow',
            url: './songs/hanquoc/15.mp3',
            cover: './song_img/nhachan4.jpg'
        }
        ,
        {
            name: 'Not Today',
            artist: 'Unknow',
            url: './songs/hanquoc/16.mp3',
            cover: './song_img/nhachan3.jpg'
        }
        ,
        {
            name: 'Cậu Cả',
            artist: 'Unknow',
            url: './songs/rap/17.mp3',
            cover: './song_img/RAPcauca.jpg'
        }
        ,
        {
            name: 'Thu Cuối',
            artist: 'Unknow',
            url: './songs/rap/18.mp3',
            cover: './song_img/Rap thu cuoi.jpg'
        }
        ,
        {
            name: 'Trốn tìm',
            artist: 'Unknow',
            url: './songs/rap/19.mp3',
            cover: './song_img/trontim.jpg'
        }
        ,
        {
            name: 'What love is',
            artist: 'Unknow',
            url: './songs/rap/19.mp3',
            cover: './song_img/Rap what love is.jpg'
        }
    ]
});