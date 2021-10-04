const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    preload: 'metadata',
    volume: 0.7,
    mutex: true,
    listMaxHeight: 90,
    listFolder: false,
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
            cover: './song_img/anhdechcanginhieu ngoai em.jpg'
        },
        {
            name: 'Làm dâu xứ lạ',
            artist: 'Unknow',
            url: './songs/trutinh/6.mp3',
            cover: './song_img/anhdechcanginhieu ngoai em.jpg'
        },
        {
            name: 'Tàu anh qua núi',
            artist: 'Unknow',
            url: './songs/trutinh/7.mp3',
            cover: './song_img/anhdechcanginhieu ngoai em.jpg'
        },
        {
            name: 'Quảng bình quê ta ơi',
            artist: 'Unknow',
            url: './songs/trutinh/8.mp3',
            cover: './song_img/anhdechcanginhieu ngoai em.jpg'
        }
    ]
});