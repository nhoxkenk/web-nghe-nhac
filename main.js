var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// HMD 
const $ = document.querySelector.bind(document);

const PLAYER_STORAGE_KEY = 'MUSIC_PLAYER'
const playlist = $('.playlist')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const heading = $('.player-header h2')
const singer = $('.player-header h4')
const cdThumb = $('.cd-thumb')
const audio = $('#audio') 
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const volumeProgress = $('.volume-progress')
const volumeIcon = $('.volume-icon')
const volumeBtn = $('.btn-toggle-volume')
// const volumeControl = $('.btn-volume')
const lyricsTitle = $('.title-lyric')
const lyricsImg = $('.lyric-song-desc img')
const songName = $('.lyrics-content')
const songAuth = $('.lyrics-auth')
const lyricSong = $('.lyric-song')
const lyricsBtn = $('.btn-lyrics')
const nhacviet = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Phải Chăng Em Đã Yêu',
            singer: 'JUKY SAN',
            path: './songs/vietnam/1.mp3',
            img: './song_img/phaichangtadayeu.jpg',
            lyric: 
            'Lời bài hát Phải Chăng Em Đã Yêu?<br>'+
            '1. Cuộc đời em vốn, chỉ là đường thẳng mà thôi<br>'+
            'Mà sao tình cờ gặp anh, em rẽ ngang qua đời<br>'+
            'Vài người vội vã, vội đến rồi đi<br>'+
            'Mà sao em yêu anh đâu cần nghĩ suy.<br>'+
            '<br>'+
            'Từng đêm nhớ mong về người<br>'+
            'Biết anh còn chờ đợi<br>'+
            'Chơi vơi bao đêm em thấy đủ rồi<br>'+
            'Ngàn tia nắng anh gần lại<br>'+
            'Ánh dương màu mắt xanh ngời<br>'+
            'Lóe lên ngàn giấc mơ còn trong đời.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Phải chăng em đã yêu<br>'+
            'Ngay từ cái nhìn đầu tiên<br>'+
            'Phải chăng em đã say<br>'+
            'Ngay từ lúc thấy nụ cười ấy.<br>'+
            '<br>'+
            'Tình yêu ta ngất ngây<br>'+
            'Xây được chín tầng trời mây<br>'+
            'Khuất xa mờ<br>'+
            'Ánh lên từng giấc mơ ngày có anh.<br>'+
            '<br>'+
            '2. Trái đất vốn lạ thường<br>'+
            'Mà sao em cứ đi nhầm đường<br>'+
            'Lạc vào tim anh lẻ loi<br>'+
            'Đằng sau chữ yêu đây là thương.<br>'+
            '<br>'+
            'When you call me a baby<br>'+
            'Make me so crazy<br>'+
            'My heart is breaking slowly<br>'+
            'Chầm chậm bờ môi khẽ trôi<br>'+
            'Ôi mình yêu thật rồi.<br>'+
            '<br>'+
            'Tình cờ biết nhớ những lúc ngây thơ<br>'+
            'Tình cờ lắm lúc chỉ biết vu vơ<br>'+
            'Tình cờ bơ vơ lạc trong những giấc mơ<br>'+
            'Lắm lúc chỉ muốn nói anh mãi thương em<br>'+
            'Nhưng trong tim bâng khuâng chẳng biết có ai xem này<br>'+
            'Vì chữ thương nặng lắm đâu thể phơi bày.<br>'+
            '<br>'+
            '[Bridge:]<br>'+
            'Yêu hay không yêu<br>'+
            'Thương em anh hãy nói<br>'+
            'Trao nhau đôi môi<br>'+
            'Rồi sẽ trở thành đôi.<br>'+
            '<br>'+
            'Em đang chơi vơi<br>'+
            'Liệu anh có bước tới<br>'+
            'Chầm chậm nói đôi lời<br>'+
            'Khiến em chợt vui cười.<br>'
        },
        {
            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hứa Kim Tuyền, Hoàng Duyên',
            path: './songs/vietnam/2.mp3',
            img: './song_img/saigondaulongqua.jpg',
            lyric: 'Lời bài hát Sài Gòn Đau Lòng Quá<br>'+
                   'Mình đã từng hứa<br>'+
                    'Bên nhau hết tháng năm dài<br>'+
                    'Yêu đến khi ngừng hơi thở<br>'+
                    'Đến khi ngừng mơ...<br>'+
                    'Nắm chặt tay đi hết nhân thế này<br>'+
                    'Chân trời hằn chân ta<br>'+
                    'Vô tận là chúng ta...<br>'+

                    '...'+

                   '<br>Mình đã từng hứa<br>'+
                    'Đi qua hết bao thăng trầm<br>'+
                    'Cho dẫu mai này xa rời<br>'+
                    'Vẫn không hề đổi dời...<br>'+
                    'Có ngờ đâu, đã sớm vỡ tan tành<br>'+
                    'Nhặt từng mảnh vỡ xếp vào vali...<br>'+

                    '...'+

                    '<br>Cứ càng yêu, cứ càng đau<br>'+
                    'Cứ càng quên<br>'+
                    'Rồi lại muốn đi thật nhiều<br>'+
                    'Tokyo hay Seoul<br>'+
                    'Paris hay New York<br>'+
                    'Đi càng xa, càng không thể quên...<br>'+

                    '<br>[ĐK:]<br>'+
                    'Cầm tấm vé trên tay<br>'+
                    'Tôi bay đến nơi xa<br>'+
                    'Sài Gòn đau lòng quá<br>'+
                    'Toàn kỷ niệm chúng ta<br>'+
                    'Phải đi xa đến đâu?<br>'+
                    'Thời gian quên mất bao lâu?<br>'+
                    'Để trái tim tôi bình yên như ngày đầu tiên...<br>'+

                    '<br>Ngày tôi chưa từng biết<br>'+
                    'Tôi sẽ yêu em nhiều như thế này<br>'+
                    'Để rồi khi ta cách xa tim này nát ra<br>'+
                    'Ngày người chưa đến mang theo giấc mơ<br>'+
                    'Rồi lại bỏ rơi lúc tôi đang chờ...<br>'+
                    'Chờ người đến dịu xoa tổn thương tôi đã từng...<br>'

        },
        {
            name: 'Anh Đếch Cần Gì Nhiều Ngoài Em',
            singer: 'Đen',
            path: './songs/vietnam/3.mp3',
            img: './song_img/anhdechcanginhieu ngoai em.jpg',
            lyric: 'Lời bài hát Anh Đếch Cần Gì Nhiều Ngoài Em<br>'+
            '[Intro:]<br>'+
            '[Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em.]<br>'+
            
            '[Verse 1:]<br>'+
            'Anh như con cáo, em như một cành nho xanh<br>'+
            'Khi em còn trẻ và đẹp, em lại không dành cho anh<br>'+
            'Trong lòng anh là kho xăng, nụ cười em là mồi lửa<br>'+
            'Em phá vỡ đi quy tắc, rồi bỏ mặc anh ngồi sửa<br>'+
            'Anh như biến thành người nhện vì trong lòng nhiều tơ vương<br>'+
            'Nhớ em tốn nhiều ca-lo, thế nên anh gầy trơ xương<br>'+
            'Ở trong xóm anh rất ngoan, chẳng ai thấy anh say mèm<br>'+
            'Mẹ anh dặn anh đủ thứ, nhưng quên dặn đừng say em<br>'+
            'Như con cuốn chiếu, anh có rất nhiều chân thật<br>'+
            'Bài hát này ngọt, vì đám tụi anh rất thân mật<br>'+
            'Anh như con cáo và em vẫn cành nho xanh<br>'+
            'Nhưng mà em trẻ và đẹp, em lại không dành cho anh.<br>'+
            
            '[Mel:]<br>'+
            'Ta đi tìm về thương nhớ<br>'+
            'Ta đã đi tìm đi tìm đi tìm<br>'+
            'Ta đã đi tìm về quá khứ<br>'+
            'Ta cứ đi tìm đi tìm đi tìm.<br>'+
            
            '[Hook:]<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Ôi một giấc mơ chơi vơi nhiều đêm<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Thương một giấc mơ ôm ta nhiều đêm.<br>'+
            
            '[Verse 2:]<br>'+
            'Một ngày cùng em uống đến thoáng say là đủ<br>'+
            'Kệ đời ngả nghiêng<br>'+
            'Mình nằm dưới tán cây mà ngủ<br>'+
            'Sẽ thật là tuyệt nếu rơi vào một chiều thu<br>'+
            'Anh cưa em đổ em gọi anh là tiều phu<br>'+
            'Anh có thể có danh tiếng nếu như mặt anh dày thêm<br>'+
            'Anh có thể có nhiều tiền nếu anh cày ngày cày đêm<br>'+
            'Nhưng như một giấc mơ bị em chối bỏ trong chiều<br>'+
            'Anh không có được em dù cho cố bỏ công nhiều<br>'+
            'Nồng độ cồn em bao nhiêu sao cứ làm anh lảo đảo?<br>'+
            'Em chỉ mang lại chua cay như là gói mì Hảo Hảo<br>'+
            'Một lần chơi lớn để xem em có trầm trồ<br>'+
            'Vì yêu em, anh như mang hết con tim đi cầm đồ.<br>'+
            
            '[Outro:]<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'+
            'Và anh đếch cần gì nhiều ngoài em<br>'
        },
        {
            name: 'Chỉ Là Không Cùng Nhau',
            singer: 'Tăng Phúc, Trương Thảo Nhi',
            path: './songs/vietnam/4.mp3',
            img: './song_img/chilakhongcungnhau.jpg',
            lyric: 'Lời bài hát Chỉ Là Không Cùng Nhau (Live Version)<br>'+
            'Chiều hôm ấy có mưa rơi nhẹ vương mi ai<br>'+
            'Con đường ngỡ bước chung đôi bây giờ chia hai<br>'+
            'Ai nói ra lời gian dối làm tan nát con tim ai<br>'+
            'Một người nỡ, một người vỡ bao mộng mơ.<br>'+
            
            'Rời xa nhau dẫu tim vẫn còn mang tên nhau<br>'+
            'Chỉ là giấu, giấu che đi ta còn yêu nhau<br>'+
            'Phía cuối cuộc đời ta hứa sẽ chờ dẫu qua bao lâu<br>'+
            'Tình vẫn đậm sâu!<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Từng yêu nhau, từng là của nhau thật lâu<br>'+
            'Đến sau cùng chẳng thể có nhau bạc đầu<br>'+
            'Chẳng cần tương lai, chẳng biết có thương đau ngày mai<br>'+
            'Chỉ cần nhau.<br>'+
            
            'Giờ buông tay để được thấy nhau về sau<br>'+
            'Trả người về những ngày tháng chưa bắt đầu<br>'+
            'Ai rồi cũng sẽ tìm được ấm êm sau khổ đau<br>'+
            'Chỉ là không cùng nhau.<br>'+
            
            'Hẹn nhau nhé, kiếp sau ta lại nhận ra nhau<br>'+
            'Không lùi bước nắm tay nhau qua đời thương đau<br>'+
            'Nước mắt để dành ta khóc những ngày có nhau bên nhau<br>'+
            'Hẹn nhau nhé, hẹn nhau kiếp sau tìm nhau.<br>'
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }

    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
  


const playlistBtn = $('.btn-listmusic')
playlistBtn.onclick = function () {
    setTimeout(() => {
        playlist.classList.toggle('hiden')
    },100)
    playlistBtn.classList.toggle('active')
}

lyricsBtn.onclick = function() {
    $('.container-lyrics').classList.toggle('hiden')
    $('.container-lyrics').classList.toggle('flex')
}

const closeBtn = $('.close-btn')
closeBtn.onclick = function () {
    $('.container-lyrics').classList.toggle('hiden')
    $('.container-lyrics').classList.toggle('flex')
}

const songlist1 = document.querySelectorAll('.song-list1 .play-btn')
// nhacviet.start()
// songlist1.forEach(function(currentValue,index){
//     currentValue.onclick = function () {   
//         nhacviet.currentIndex = index;
//         nhacviet.start();
//         audio.play()
//         document.querySelector('.dashboard').classList.remove('hiden')
//         // nhacviet.render()
//         // nhacviet.loadCurrentSong()
//     }
// })

songlist1.forEach(function(song,index){
    song.onclick = function() {
        
        nhacviet.currentIndex = index
        nhacviet.currentSong = nhacviet.songs[nhacviet.currentIndex]
        nhacviet.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})


const nhacTruTinh = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Con Đường Xưa Em Đi',
            singer: 'Phương Anh',
            path: './songs/trutinh/5.mp3',
            img: './song_img/TThoanovedem.jpg',
            lyric:
            'Chuyện từ một đêm cuối nẻo một người tiễn một người đi<br>'+
            'Đẹp tựa bài thơ nở giữa đêm sương nở tận tâm hồn<br>'+
            'Chuyện một mình tôi chép dòng tâm tình tặng người chưa biết một lần<br>'+
            'Vì giây phút ấy tôi tình cờ hiểu rằng<br>'+
            'Tình yêu đẹp nghìn đời là tình yêu khi đơn côi.<br>'+
            '<br>'+
            'Vào chuyện từ một đêm khoác bờ vai một mảnh áo dạ đường khuya<br>'+
            'Bồi hồi người trai hướng nẻo đêm sâu, dấu tình yêu đầu<br>'+
            'Vì còn tìm nhau lối về ngõ hẹp còn chờ in dấu chân anh<br>'+
            'Niềm thương mến đó bây giờ và nghìn đời<br>'+
            'Dù gió đùa dạt dào còn đẹp như khi quen nhau.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Ai lớn lên không từng hẹn hò không từng yêu thương<br>'+
            'Nhưng có mấy người tìm được một tình yêu ngát hương<br>'+
            'Mến những người chưa quen<br>'+
            'Một người ở lại đèn trăng gối mộng<br>'+
            'Yêu ai anh băng sông dài cho đẹp lòng trai.<br>'+
            '<br>'+
            'Một người tìm vui mãi tận trời nào giá lạnh hồn đông<br>'+
            'Một người chợt nghe gió giữa mênh mông rót vào trong lòng<br>'+
            'Và một mình tôi chép dòng tâm tình tặng người chưa biết một lần<br>'+
            'Vì trong phút ấy tôi tìm mình thì thầm giờ đã gặp được một nụ hoa nở về đêm.<br>'
        },
        {
            name: 'Làm Dâu Xứ Lạ',
            singer: 'Phi Nhung, Mạnh Quỳnh',
            path: './songs/trutinh/6.mp3',
            img: './song_img/TTlamdauxula.jpg',
            lyric: 
            'Lời bài hát Làm Dâu Xứ Lạ<br>'+
            'Thôi em theo chồng làm cô dâu xứ lạ<br>'+
            'Bao nhiêu ân tình giờ tim vỡ theo tim<br>'+
            'Đường hoa em đi, mưa chiều rưng rưng đổ<br>'+
            'Ngỡ mưa trong lòng, em có vui đâu.<br>'+
            '<br>'+
            'Thôi em theo chồng, vui chôn đi kỷ niệm<br>'+
            'Tim yêu hôm nào giờ giữ ảnh thương đau<br>'+
            'Đường em em đi, anh đường anh cô lẻ<br>'+
            'Bởi không duyên trời, đôi ngã chia ly.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Anh ơi, tình chỉ đẹp khi tình dang dở<br>'+
            'Em ơi, đời mất vui tình nên câu thề<br>'+
            'Đừng tiếc thương chi, tình yêu đã mất.<br>'+
            '<br>'+
            'Thôi em theo chồng, cánh hoa xin trả lại<br>'+
            'Hoa xưa phai màu là hoa vỡ yêu đương<br>'+
            'Dù cho hôm nay duyên mình mang dang dở<br>'+
            'Vẫn thương trong đời, thương mãi nhau thôi.<br>'
        },
        {
            name: 'Tàu Anh Qua Núi',
            singer: 'Anh Thơ',
            path: './songs/trutinh/7.mp3',
            img: './song_img/TTtauanhquanui.jpg',
            lyric: 'Đi dọc Việt Nam theo bánh con tàu quay<br>'+
            'Qua đèo Hải Vân mây bay đỉnh núi<br>'+
            'Nhớ khi xưa qua đèo qua suối<br>'+
            'Mà lòng anh mơ, tàu qua núi cao<br>'+
            'Ngày hôm nay thênh thang con đường lớn<br>'+
            'Tàu anh đi trong yêu thương chào đón<br>'+
            'Tha thiết bao niềm vui, theo bánh con tàu đi<br>'+
            'Là thương nhau, em bắt cầu cho tàu anh tới<br>'+
            'Là yêu nhau, mấy suối em cũng lội<br>'+
            'Là yêu nhau, mấy núi em cũng trèo<br>'+
            'Con tàu Việt Nam đi suốt bốn mùa vui<br>'+
            'Qua đèo Hải Vân mây bay đỉnh núi<br>'+
            'Nhớ thương nhau em chờ anh tới<br>'+
            'Là tàu anh đi vượt qua núi cao<br>'+
            'Trời quê hương trong xanh như lời hát<br>'+
            'Biển quê hương ru êm êm bờ cát<br>'+
            'Đưa chúng ta cùng đi, ra Bắc hay vào Nam<br>'+
            'Là thương nhau, em bắt cầu cho tàu anh tới<br>'+
            'Là yêu nhau, mấy suối ta cũng lội<br>'+
            'Là yêu nhau, mấy núi ta cũng trèo<br>'+
            'Là yêu nhau, mấy núi ta cũng trèo<br>'+
            'Con tàu Việt Nam đi suốt bốn mùa vui<br>'+
            'Qua đèo Hải Vân mây bay đỉnh núi<br>'+
            'Nhớ thương nhau em chờ anh tới<br>'+
            'Là tàu anh đi vượt qua núi cao<br>'+
            'Trời quê hương trong xanh như lời hát<br>'+
            'Biển quê hương ru êm êm bờ cát<br>'+
            'Đưa chúng ta cùng đi, ra Bắc hay vào Nam<br>'+
            'Là thương nhau, em bắt cầu cho tàu anh tới<br>'+
            'Là yêu nhau, mấy suối em cũng lội<br>'+
            'Là yêu nhau, mấy núi em cũng trèo<br>'+
            'Là yêu nhau, mấy núi em cũng trèo<br>'
        },
        {
            name: 'Quảng Bình Quê Ta Ơi',
            singer: 'Thu Hiền, Thanh Hoa',
            path: './songs/trutinh/8.mp3',
            img: './song_img/TTquangbinhqueta.jpg',
            lyric: 'Lời bài hát Quảng Bình Quê Ta Ơi<br>'+
            '1. Nếu ai hỏi vì sao quê hương chúng ta nhiều ngói mới<br>'+
            'Rằng: Có đắng cay nên chừ mới có ngọt bùi<br>'+
            'Nếu ai hỏi vì sao quê hương chúng ta đồng lúa tốt<br>'+
            'Có nhớ những ngày cơ cực tối tăm ngày xưa.<br>'+
            '<br>'+
            'Quảng Bình (Khoan khoan hò khoan)<br>'+
            'Bao mến thương (Khoan khoan hò khoan)<br>'+
            'Đã mười năm rồi quê ta bao đổi thay rồi (Khoan khoan hò khoan)<br>'+
            '<br>'+
            'Từ biển xanh (Khoan khoan hò khoan)<br>'+
            'Đến rừng núi xanh (Khoan khoan hò khoan)<br>'+
            'Xanh tươi bốn mùa rộn vang tiếng hò khoan<br>'+
            'Lệ Thuỷ trên dòng sông Kiên Giang dạt dào tình quê.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Ơi chị dân quân canh gác ven biển<br>'+
            'Ơi anh chiến sĩ cang gác bầu trời<br>'+
            'Mỗi ngày quê ta trưởng thành<br>'+
            'Hạt giống cách mạng đã nảy mầm xanh tươi.<br>'+
            '<br>'+
            'Quảng Bình quê ta ơi!<br>'+
            'Giữ lấy đất trời của quê hương ta<br>'+
            'Giữ lấy những gì mà ta yêu quý.<br>'+
            '<br>'+
            'Quảng Bình quê ta ơi!<br>'+
            'Muôn người như một<br>'+
            'Gửi về Trị Thiên tấm lòng sắt son<br>'+
            'Hẹn ngày chiến thắng ta sẽ về trong một nhà.<br>'+
            '<br>'+
            '2. Có ai về Đại Phong xin vô ghé thăm vùng bến Tiến<br>'+
            'Tay cuốc khai hoang đã đẩy lùi quá khứ nghèo nàn<br>'+
            'Có ai về Quảng Phú vui nghe tiếng hò kéo lưới<br>'+
            'Hợp tác chung trời chung biển cá tươi đầy khoang.<br>'+
            '<br>'+
            'Vẻ vang thay (Khoan khoan hò khoan)<br>'+
            'Bao tấm gương (Khoan khoan hò khoan)<br>'+
            'Bám biển đêm ngày (Khoan khoan hò khoan)<br>'+
            '<br>'+
            'Đồng luá xanh (Khoan khoan hò khoan)<br>'+
            'Với hàng cây xanh (khoan khoan hò khoan)<br>'+
            'Vui trên bến thuyền ngược xuôi giữa dòng<br>'+
            'Nhật Lệ như những con thoi suốt ngày từng đoàn xe đi.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Ơi chị thanh niên phơi muối ven biển<br>'+
            'Ơi anh công nhân đắn gỗ trên rừng<br>'+
            'Lứa tuổi thanh xuân hai mươi tuổi đời<br>'+
            'Cùng với quê hương lớn lên rồi cả cuộc đời mới.<br>'+
            '<br>'+
            'Quảng Bình quê ta ơi!<br>'+
            'Giữ lấy đất trời của quê hương ta<br>'+
            'Giữ lấy những gì mà ta yêu quý<br>'+
            '<br>'+
            'Quảng Bình quê ta ơi!<br>'+
            'Muôn người như một<br>'+
            'Gửi về Trị Thiên tấm lòng sắt son<br>'+
            'Hẹn ngày chiến thắng ta sẽ về trong một nhà.<br>'+
            '<br>'+
            '3. Có ai về Rào Nam xin vô ghé thăm vùng Cự Nẫm<br>'+
            'Làng chiến đấu xưa nay đã đổi mới muôn màu<br>'+
            'Có ai về Cảnh Dương quê tôi đứng nơi đầu sóng gió<br>'+
            'Truyền thống đánh giặc giữ làng mãi mãi còn đây.<br>'+
            '<br>'+
            'Dòng sông Giang (Khoan khoan hò khoan)<br>'+
            'Với hàng dương (Khoan khoan hò khoan)<br>'+
            'Đời đời hát ca tên anh, những người anh hùng (Khoan khoan hò khoan)<br>'+
            '<br>'+
            'Có còn nhớ chăng (Khoan khoan hò khoan)<br>'+
            'Những ngày kháng chiến (Khoan khoan hò khoan)<br>'+
            'Đêm đêm ngóng chờ từng tin thắng trận bến Xuân Bồ<br>'+
            'Ôi! Nhớ sao các mẹ các chị dành gạo nuôi quân.<br>'
            
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
           
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}

const songlist2 = document.querySelectorAll('.song-list2 .play-btn')
songlist2.forEach(function(song,index){
    song.onclick = function() {
       
        nhacTruTinh.currentIndex = index
        nhacTruTinh.currentSong = nhacviet.songs[nhacviet.currentIndex]
        nhacTruTinh.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})


// Nhạc US-UK
const nhacUSUK = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'No Time To Die',
            singer: 'Billie Eilish',
            path: './songs/usuk/9.mp3',
            img: './song_img/USUKnotimetodie.jpg',
            lyric: 'I should have known<br>'+
            'Tôi đáng lẽ nên nhận ra rằng<br>'+
            'I\'d leave alone<br>'+
            'Tôi phải ra đi trong cô độc<br>'+
            'Just goes to show<br>'+
            'Để chứng minh cho anh thấy rằng<br>'+
            'That the blood you bleed<br>'+
            'Những giọt máu nóng đang âm ỉ rỉ<br>'+
            'Is just the blood you owe<br>'+
            'Chính là những giọt máu bạn nợ<br>'+
            'We were a pair<br>'+
            'Ta từng là một đôi ăn ý<br>'+
            'But I saw you there<br>'+
            'Nhưng rồi tôi nhìn thấy anh ở đây..<br>'+
            'Too much to bear<br>'+
            'Có quá nhiều thứ để có thể chịu đựng<br>'+
            'You were my life, but life is far away from fair<br>'+
            'Anh từng là cuộc đời của tôi, nhưng cuộc đời thì chẳng bao giờ sòng phẳng<br>'+
            'Was I stupid to love you?<br>'+
            'Có phải tôi ngu ngốc để yêu anh?<br>'+
            'Was I reckless to help?<br>'+
            'Có phải tôi đã liều lĩnh để đưa tay cứu giúp?<br>'+
            'Was it obvious to everybody else?<br>'+
            'Và có phải mọi người ai cũng biết điều đó?<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'That I\'d fallen for a lie<br>'+
            'Tôi đã đem lòng yêu một lời nói dối<br>'+
            'You were never on my side<br>'+
            'Anh chưa bao giờ đứng về phía tôi<br>'+
            'Fool me once, fool me twice<br>'+
            'Anh lừa tôi lần một.. rồi anh lỡ lòng lừa tôi lần hai<br>'+
            'Are you death or paradise?<br>'+
            'Vậy.. anh là cái chết.. hay là thiên đàng?<br>'+
            'Now you\'ll never see me cry<br>'+
            'Giờ đây, anh sẽ không bao giờ nhìn thấy tôi khóc nữa đâu<br>'+
            'There\'s just no time to die<br>'+
            'Tôi không có thời gian để ôm mãi nỗi buồn<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'I let it burn<br>'+
            'Tôi cứ để mặc cho nó rực cháy<br>'+
            'You\'re no longer my concern<br>'+
            'Anh chẳng còn là mối bận tâm của tôi nữa rồi<br>'+
            'Faces from my past return<br>'+
            'Những khuôn mặt từ quá khứ kia, đang quay trở về<br>'+
            'Another lesson yet to learn<br>'+
            'Nó cũng chỉ như là một bài học khác..<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'That I\'d fallen for a lie<br>'+
            'Tôi đã đem lòng yêu một lời nói dối<br>'+
            'You were never on my side<br>'+
            'Anh chưa bao giờ đứng về phía tôi<br>'+
            'Fool me once, fool me twice<br>'+
            'Anh lừa tôi lần một.. rồi anh lỡ lòng lừa tôi lần hai<br>'+
            'Are you death or paradise?<br>'+
            'Vậy.. anh là cái chết.. hay là thiên đàng?<br>'+
            'Now you\'ll never see me cry<br>'+
            'Giờ đây, anh sẽ không bao giờ nhìn thấy tôi khóc nữa đâu<br>'+
            'There\'s just no time to die<br>'+
            'Tôi không có thời gian để ôm mãi nỗi buồn<br>'+
            '<br>'+
            '[Refrain]<br>'+
            'No time to die<br>'+
            'Không phải lúc để đau buồn<br>'+
            'No time to die<br>'+
            'Chẳng có thời gian để đau buồn<br>'+
            '<br>'+
            '[Outro]<br>'+
            'Fool me once, fool me twice<br>'+
            'Anh lừa tôi lần một.. rồi anh lỡ lòng lừa tôi lần hai<br>'+
            'Are you death or paradise?<br>'+
            'Vậy.. anh là cái chết.. hay là thiên đàng?<br>'+
            'Now you\'ll never see me cry<br>'+
            'Giờ đây, anh sẽ không bao giờ nhìn thấy tôi khóc nữa đâu<br>'+
            'There\'s just no time to die<br>'+
            'Tôi không có thời gian để ôm mãi nỗi buồn<br>'
        },
        {
            name: 'Physical',
            singer: 'Dua Lipa',
            path: './songs/usuk/10.mp3',
            img: './song_img/USUKphysical.jpg',
            lyric:   'Hiển Thị Sub<br>'+
                'Lời bài hát Physical<br>'+
                '[Verse 1]<br>'+
                'Common love isn\'t for us<br>'+
                'Tình cảm thông thường không phải là thứ dành cho hai ta<br>'+
                'We created something phenomenal<br>'+
                'Ta đã tạo ra một thứ gì đó còn cao cả hơn<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý với điều đó?<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý với điều đó không?<br>'+
                'You got me feeling diamond rich<br>'+
                'Anh đã cho em cảm giác như mình là một viên kim cương quý giá<br>'+
                'Nothing on this planet compares to it<br>'+
                'Không điều gì trên hành tinh này có thể sánh bằng<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý với điều đó?<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý với điều đó không?<br>'+
                '<br>'+
                '[Pre-Chorus]<br>'+
                'Who needs to go to sleep when I got you next to me?<br>'+
                'Ai mà cần phải đi ngủ chứ khi em đã có anh ở bên cạnh?<br>'+
                '<br>'+
                '[Chorus]<br>'+
                'All night, I\'ll riot with you<br>'+
                'Cả đêm dài, em sẽ quậy phá tưng bừng cùng anh<br>'+
                'I know you got my back and you know I got you<br>'+
                'Em biết rằng anh luôn bảo vệ em và anh cũng biết là em sẽ sát cánh cùng anh mà<br>'+
                'So come on (Come on), come on (Come on), come on (Come on)<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\'s get physical<br>'+
                'Hãy cùng hoạt động thể xác một chút nào<br>'+
                'Lights out, follow the noise<br>'+
                'Anh đèn lịm đi, ta sẽ lần theo những âm thanh<br>'+
                'Baby, keep on dancing like you ain\'t got a choice<br>'+
                'Tình yêu ơi, hãy cứ nhảy nhót như thể anh không còn lựa chọn nào khác<br>'+
                'So come on (Come on), come on (Come on), come on<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\s get physical<br>'+
                'Hãy cùng hoạt động thân xác một chút nào<br>'+
                '<br>'+
                '[Verse 2]<br>'+
                'Adrenaline keeps on rushing in<br>'+
                'Những cảm xúc rạo rực vẫn cứ dâng tràn<br>'+
                'Love the simulation we\'re dreaming in<br>'+
                'Em yêu cái sự mô phỏng hai ta đang đắm chìm này<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý?<br>'+
                'Don\'t you agree?<br>'+
                'Anh có đồng ý là như vậy không?<br>'+
                'I don\'t wanna live another life<br>'+
                'Em không muốn sống một cuộc đời khác đâu<br>'+
                '\'Cause this one\'s pretty nice<br>'+
                'Vì cuộc đời này của em thật là tươi đẹp<br>'+
                'Living it up<br>'+
                'Hãy cứ sống hết mình đi nào<br>'+
                '<br>'+
                '[Pre-Chorus]<br>'+
                'Who needs to go to sleep when I got you next to me?<br>'+
                'Ai mà cần phải đi ngủ chứ khi em đã có anh ở bên cạnh?<br>'+
                '<br>'+
                '[Chorus]<br>'+
                'All night, I\'ll riot with you<br>'+
                'Cả đêm dài, em sẽ quậy phá tưng bừng cùng anh<br>'+
                'I know you got my back and you know I got you<br>'+
                'Em biết rằng anh luôn bảo vệ em và anh cũng biết là em sẽ sát cánh cùng anh mà<br>'+
                'So come on (Come on), come on (Come on), come on (Come on)<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\'s get physical<br>'+
                'Hãy cùng hoạt động thể xác một chút nào<br>'+
                'Lights out, follow the noise<br>'+
                'Anh đèn lịm đi, ta sẽ lần theo những âm thanh<br>'+
                'Baby, keep on dancing like you ain\'t got a choice<br>'+
                'Tình yêu ơi, hãy cứ nhảy nhót như thể anh không còn lựa chọn nào khác<br>'+
                'So come on (Come on), come on (Come on), come on<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\'s get physical<br>'+
                'Hãy cùng hoạt động thân xác một chút nào<br>'+
                '<br>'+
                '[Bridge]<br>'+
                'Hold on just a little tighter<br>'+
                'Hãy vững vàng thêm một chút nữa<br>'+
                'Come on, hold on, tell me if you\'re ready<br>'+
                'Lại đây, vững vàng lên, và nói em nghe nếu anh đã sẵn sàng rồi nhé<br>'+
                'Come on (Come on, come on)<br>'+
                'Lại đây với em<br>'+
                'Baby, keep on dancing<br>'+
                'Chàng trai ơi, hãy nhảy nhót tiếp đi nào<br>'+
                'Let\'s get physical<br>'+
                'Hãy hoạt động hết công suất<br>'+
                'Hold on just a little tighter<br>'+
                'Hãy vững vàng thêm một chút nữa<br>'+
                'Come on, hold on, tell me if you\'re ready<br>'+
                'Lại đây, vững vàng lên, và nói em nghe nếu anh đã sẵn sàng rồi nhé<br>'+
                'Come on (Come on, come on)<br>'+
                'Lại đây với em<br>'+
                'Baby, keep on dancing<br>'+
                'Chàng trai ơi, hãy nhảy nhót tiếp đi nào<br>'+
                'Let\'s get physical<br>'+
                'Hãy hoạt động hết công suất<br>'+
                '<br>'+
                '[Chorus]<br>'+
                'All night, I\'ll riot with you<br>'+
                'Cả đêm dài, em sẽ quậy phá tưng bừng cùng anh<br>'+
                'I know you got my back and you know I got you<br>'+
                'Em biết rằng anh luôn bảo vệ em và anh cũng biết là em sẽ sát cánh cùng anh mà<br>'+
                'So come on (Come on), come on (Come on), come on (Come on)<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\'s get physical<br>'+
                'Hãy cùng hoạt động thể xác một chút nào<br>'+
                'Lights out, follow the noise<br>'+
                'Anh đèn lịm đi, ta sẽ lần theo những âm thanh<br>'+
                'Baby, keep on dancing like you ain\'t got a choice<br>'+
                'Tình yêu ơi, hãy cứ nhảy nhót như thể anh không còn lựa chọn nào khác<br>'+
                'So come on (Come on), come on (Come on), come on<br>'+
                'Vậy nên hãy đến đây, đến đây bên em, đến bên em này<br>'+
                'Let\'s get physical<br>'+
                'Hãy cùng hoạt động thân xác một chút nào<br>'+
                '<br>'+
                '[Outro]<br>'+
                'Let\'s get physical (Physical, physical)<br>'+
                'Hãy hoạt động cơ thể đi nào<br>'+
                'Physical (Physical, physical)<br>'+
                'Hoạt động thể xác<br>'+
                'Let\'s get physical (Physical, physical)<br>'+
                'Hãy hoạt động thân xác ấy đi nào<br>'+
                'Come on, phy-phy-phy-physical<br>'+
                'Lại đây, và ta cùng vui vẻ<br>'

        },
        {
            name: 'Souvenir',
            singer: 'Selena Gomez',
            path: './songs/usuk/11.mp3',
            img: './song_img/USUKsouvernir.jpg',
            lyric: 'Hiển Thị Sub<br>'+
            'Lời bài hát Souvenir<br>'+
            '[Intro]<br>'+
            'Chills<br>'+
            '<br>'+
            '[Verse 1]<br>'+
            'New York back in August, tenth floor balcony<br>'+
            'Hồi nhớ lại New York những ngày thu tháng 8, em đứng bên ban công của tầng thứ mười<br>'+
            'Smoke is floating over Jane and Greenwich street<br>'+
            'Những lớp xương mù phủ kín cả đường Jane lẫn Greenwich<br>'+
            'Goosebumps from your wild eyes when they\'re watching me<br>'+
            'Da thịt em bỗng nhạy cảm hơn.. khi đôi mắt hoang dại của anh dõi theo em<br>'+
            'Shivers dance down my spine, head down to my feet<br>'+
            'Những cơn lạnh chạy dài khắp sống lưng.. từ đỉnh đâu cho đến tận gót<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'Swimming in your eyes, in your eyes, in your eyes<br>'+
            'Em bơi lội trong đôi mắt anh.. trong đôi mắt anh sâu thẳm<br>'+
            'Egyptian blue<br>'+
            'Một màu lam Ai Cập<br>'+
            'Something I\'ve never had without you<br>'+
            'Một điều gì đó mà em chưa từng có được khi không có anh<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees<br>'+
            'Anh trao cho em những rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể nói<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh giữ bên mình<br>'+
            '<br>'+
            '[Post-Chorus]<br>'+
            'Giving me chills<br>'+
            'Anh trao cho em những rùng mình<br>'+
            'Chills<br>'+
            'Thật sung sướng..<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'Sunset Tower lobby, waiting there for me<br>'+
            'Bên hành lang của tòa Sunset, anh đang đứng chờ em<br>'+
            'In the elevator, fumble for your key<br>'+
            'Trong tháng máy đang đi lên.. anh lục tìm chìa khóa<br>'+
            'Kissed in every corner, Presidential Suite<br>'+
            'Ta trao nhau nụ hôn dường như khắp các góc tường.. một căn phòng Tổng thống<br>'+
            'Opened that Bordeaux from 1993<br>'+
            'Và anh bật chai vang Boóc-đô có tuổi đời hơn 20 năm<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'Swimming in your eyes, in your eyes, in your eyes<br>'+
            'Em bơi lội trong đôi mắt anh.. trong đôi mắt anh sâu thẳm<br>'+
            'Egyptian blue<br>'+
            'Một màu lam Ai Cập<br>'+
            'Something I\'ve never had without you<br>'+
            'Một điều gì đó mà em chưa từng có được khi không có anh<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees<br>'+
            'Anh trao cho em sung sướng rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể thấu hiểu<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh gìn giữ<br>'+
            '<br>'+
            '[Post-Chorus]<br>'+
            'Giving me chills<br>'+
            'Trao cho em..<br>'+
            '<br>'+
            '[Bridge]<br>'+
            'Take my, take-take my breath away just like<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            'Take my, take-take my breath away just like<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees (A hundred)<br>'+
            'Anh trao cho em sung sướng rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep (Puts me, yeah)<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể nói<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh giữ bên mình<br>'+
            '<br>'+
            '[Outro]<br>'+
            'Giving me chills<br>'+
            'Trao cho em những cơn say đắm<br>'+
            'Take my, take-take my breath away just like (You\'re giving me chills)<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            'Giving me chills<br>'+
            'Trao cho em những cơn say đắm<br>'+
            'Take my, take-take my breath away just like (You\'re giving me chills)<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'
            
        },
        {
            name: 'The 1',
            singer: 'Taylor Swift',
            path: './songs/usuk/12.mp3',
            img: './song_img/USUKthe1.jpg',
            lyric: 'Hiển Thị Sub<br>'+
            'Lời bài hát The 1<br>'+
            '[Verse 1]<br>'+
            'I\'m doing good, I\'m on some new shit<br>'+
            'Em vẫn đang rất ổn, em đang thực hiện một vài dự án mới<br>'+
            'Been saying "yes" instead of "no"<br>'+
            'Em cũng đã tập nói "cũng được thôi" thay vì lời từ chối<br>'+
            'I thought I saw you at the bus stop, I didn\'t though<br>'+
            'Em những tưởng mình đã trông thấy anh ở trạm xe buýt, nhưng thì ra là em nhầm<br>'+
            'I hit the ground running each night<br>'+
            'Em tập trung hết sức để làm việc hết mình mỗi đêm<br>'+
            'I hit the Sunday matinée<br>'+
            'Em chỉ nghỉ ngơi khi mặt trời sáng Chủ nhật ló dạng<br>'+
            'You know the greatest films of all time were never made<br>'+
            'Anh cũng biết rồi đó, những bộ phim tuyệt vời nhất chưa bao giờ được làm ra cả<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán là anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And if you wanted me, you really should\'ve showed<br>'+
            'Và nếu như anh đã từng có lúc khao khát em.. anh đáng lẽ phải thật sự thể hiện ra chứ..<br>'+
            'And if you never bleed, you\'re never gonna grow<br>'+
            'Và nếu ta không đôi lần đau đớn.. thì sẽ không bao giờ trưởng thành được đâu<br>'+
            'And it\'s alright now<br>'+
            'Và giờ đây, mọi chuyện cũng ổn cả rồi<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'I had this dream you\'re doing cool shit<br>'+
            'Em đã có một giấc mơ rằng, anh đang thực hiện hoài bão đẹp đẽ của mình<br>'+
            'Having adventures on your own<br>'+
            'Và anh tự mình trải nghiệm những chuyến phiêu lưu ấy<br>'+
            'You meet some woman on the internet and take her home<br>'+
            'Anh gặp gỡ một vài người phụ nữ trên mạng, và đưa họ về nhà<br>'+
            'We never painted by the numbers, baby<br>'+
            'Chúng ta chưa bao giờ được đại diện bởi những con số, tình yêu à<br>'+
            'But we were making it count<br>'+
            'Nhưng ta vẫn cứ khiến chúng có giá trị<br>'+
            'You know the greatest loves of all time are over now<br>'+
            'Anh biết rồi đó.. những yêu thương lớn lao nhất từ trước đến giờ.. đã kết thúc hết rồi<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And it\'s another day waking up alone<br>'+
            'Và nó vẫn chỉ là một ngày khác em thức giấc một mình<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '<br>'+
            '[Bridge]<br>'+
            'I, I, I persist and resist the temptation to ask you<br>'+
            'Em.. em.. em.. kiên trì và chối từ mọi cám rỗ để hỏi anh rằng..<br>'+
            'If one thing had been different<br>'+
            'Nếu như có một việc diễn ra theo cách khác<br>'+
            'Would everything be different today?<br>'+
            'Thì mọi thứ hôm nay sẽ khác chứ?<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'We were something, don\'t you think so?<br>'+
            'Chúng ta đã từng có gì đó với nhau, anh có nghĩ như vậy không?<br>'+
            'Rosé flowing with your chosen family<br>'+
            'Những ly vang hồng vơi rồi lại đầy với gia đình mà anh đã chọn lựa<br>'+
            'And it would\'ve been sweet<br>'+
            'Và nó sẽ thật ngọt ngào lắm anh à..<br>'+
            'If it could\'ve been me<br>'+
            'Nếu như người phụ nữ bên anh là em<br>'+
            'In my defense, I have none<br>'+
            'Trong sự bào chữ cho chính mình, em chẳng còn gì để nói<br>'+
            'For digging up the grave another time<br>'+
            'Vì đào bới lại kí ức xưa vào một khoảng thời gian nào đó<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'
            
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
 
const songlist3 = document.querySelectorAll('.song-list3 .play-btn')
songlist3.forEach(function(song,index){
    song.onclick = function() {
       
        nhacUSUK.currentIndex = index
        
        nhacUSUK.currentSong = nhacviet.songs[nhacviet.currentIndex]
        nhacUSUK.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})


// Hàn Quốc
const nhacHQ = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Ddu-Du Ddu-Du',
            singer: 'Black Pink',
            path: './songs/hanquoc/13.mp3',
            img: './song_img/nhachan2.jpg',
            lyric: '착한 얼굴에 그렇지 못한 태도<br>'+
            'Chakan eolgure geureochi mothan taedo<br>'+
            'Mặt trông thế nhưng chẳng hiền<br>'+
            '<br>'+
            '가녀린 몸매 속 가려진 Volume은 두 배로<br>'+
            'Ganyeorin mommae sok garyeojin Volumeeun du baero<br>'+
            'Body mảnh mai nhưng chuỵ dấu volume gấp hai<br>'+
            '<br>'+
            '거침없이 직진 굳이 보진 않지 눈치<br>'+
            'Geochimeopsi jikjin guji bojin anchi nunchi<br>'+
            'Không ngần ngại, chẳng liếc nhìn, không ngừng tiến lên<br>'+
            '<br>'+
            'Black 하면 Pink 우린 예쁘장한 Savage<br>'+
            'Black hamyeon Pink urin yeppeujanghan Savage<br>'+
            'Black mà có Pink, tụi chuỵ là team gái đẹp gái ác.<br>'+
            '<br>'+
            '원할 땐 대놓고 뺏지<br>'+
            'Wonhal ttaen daenoko ppaetji<br>'+
            'Muốn gì là cướp thẳng<br>'+
            '<br>'+
            '넌 뭘 해도 칼로 물 베기<br>'+
            'Neon mwol haedo kallo mul begi<br>'+
            'Lấy đao chém nước, chống cự vô ích<br>'+
            '<br>'+
            '두 손엔 가득한 Fat check<br>'+
            'Du sonen gadeukan Fat check<br>'+
            'Hai tay đầy giấy tiền tung bay<br>'+
            '<br>'+
            '궁금하면 해봐 Fact check<br>'+
            'Gunggeumhamyeon haebwa Fact check<br>'+
            'Tò mò thì bay qua đây mà kiểm<br>'+
            '<br>'+
            '눈 높인 꼭대기 물 만난 물고기<br>'+
            'Nun nopin kkokdaegi mul mannan mulgogi<br>'+
            'Gu chuỵ cao hơn đỉnh núi tuyết, như cá gặp nước<br>'+
            '<br>'+
            '좀 독해 난 Toxic<br>'+
            'Jom dokae nan Toxic<br>'+
            'Cay độc đều có đủ<br>'+
            '<br>'+
            'You 혹해 I\'m foxy<br>'+
            'You hokae I\'m foxy<br>'+
            'Cưng mê dại, chuỵ là hồ ly<br>'+
            '<br>'+
            '두 번 생각해<br>'+
            'Du beon saenggakae<br>'+
            'Nghĩ hai lần cho kĩ<br>'+
            '<br>'+
            '흔한 남들처럼 착한 척은 못 하니까<br>'+
            'Heunhan namdeulcheoreom chakan cheogeun mot hanikka<br>'+
            'Đây sống không giả tạo như những người kia được<br>'+
            '<br>'+
            '착각하지 마<br>'+
            'Chakgakaji ma<br>'+
            'Xin chớ đừng ảo tưởng<br>'+
            '<br>'+
            '쉽게 웃어주는 건 날 위한 거야<br>'+
            'Swipge useojuneun geon nal wihan geoya<br>'+
            'Nụ cười nhạt đó tôi dành cho tôi<br>'+
            '<br>'+
            '아직은 잘 모르겠지<br>'+
            'Ajigeun jal moreugetji<br>'+
            'Cớ sao vẫn chưa hiểu<br>'+
            '<br>'+
            '굳이 원하면 Test me<br>'+
            'Guji wonhamyeon Test me<br>'+
            'Cứ khăng khăng thì sang mà test<br>'+
            '<br>'+
            '넌 불 보듯이 뻔해<br>'+
            'Neon bul bodeusi ppeonhae<br>'+
            'Đang nghĩ gì đấy liếc qua đã rõ<br>'+
            '<br>'+
            '만만한 걸 원했다면<br>'+
            'Manmanhan geol wonhaetdamyeon<br>'+
            'Nếu đã muốn nuốt đồ dễ trôi<br>'+
            '<br>'+
            'Oh wait til\' I do what I do<br>'+
            'Đợi tôi làm cái này nhé<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du x2<br>'+
            'Bắn cưng đu đu đù<br>'+
            '<br>'+
            '지금 내가 걸어가는 거린<br>'+
            'Jigeum naega georeoganeun georin<br>'+
            'Con đường chuỵ đang phi<br>'+
            '<br>'+
            'BLACKPINK 4 way 사거리<br>'+
            'BLACKPINK 4 way sageori<br>'+
            'Ngã tư bốn hướng đều ghi BLACKPINK<br>'+
            '<br>'+
            '동서남북 사방으로 Run it<br>'+
            'Dongseonambuk sabangeuro Run it<br>'+
            'Chạy khắp tứ phương Đông Tây Nam bắc<br>'+
            '<br>'+
            '너네 버킷리스트 싹 다 I bought it<br>'+
            'Neone beokitriseuteu ssak da I bought it<br>'+
            'Trong đời cưng mong ước có được gì chuỵ mua hết<br>'+
            '<br>'+
            '널 당기는 것도 멀리 밀치는 것도<br>'+
            'Neol danggineun geotdo meolli milchineun geotdo<br>'+
            'Kéo bé ra xa tí xong thả bé cái "phịch"<br>'+
            '<br>'+
            '제멋대로 하는 Bad girl<br>'+
            'Jemeotdaero haneun Bad girl<br>'+
            'Là gái hư chuỵ thích gì là quất ngay<br>'+
            '<br>'+
            '좋건 싫어하건 누가 뭐라 하던<br>'+
            'Jokeon sileohageon nuga mwora hadeon<br>'+
            'Thích hay gét, mặc người nói đều chẳng màng<br>'+
            '<br>'+
            'When the bass drop it\'s another banger<br>'+
            '<br>'+
            '두 번 생각해<br>'+
            'Du beon saenggakae<br>'+
            'Nghĩ hai lần cho kĩ<br>'+
            '<br>'+
            '흔한 남들처럼 착한 척은 못 하니까<br>'+
            'Heunhan namdeulcheoreom chakan cheogeun mot hanikka<br>'+
            'Đây không diễn đỉnh như chúng bạn được<br>'+
            '<br>'+
            '착각하지 마<br>'+
            'Chakgakaji ma<br>'+
            'Đừng có tự ảo tưởng<br>'+
            '<br>'+
            '쉽게 웃어주는 건 날 위한 거야<br>'+
            'Swipge useojuneun geon nal wihan geoya<br>'+
            'Nụ cười nhẹ nhõm đó là cười cho chính tôi<br>'+
            '<br>'+
            '아직은 잘 모르겠지<br>'+
            'Ajigeun jal moreugetji<br>'+
            'Giờ vẫn chưa hiểu nữa sao?<br>'+
            '<br>'+
            '굳이 원하면 Test me<br>'+
            'Guji wonhamyeon Test me<br>'+
            'Đã cố chấp thì tôi đây cứ test<br>'+
            '<br>'+
            '넌 불 보듯이 뻔해<br>'+
            'Neon bul bodeusi ppeonhae<br>'+
            'Cưng đang nghĩ gì vừa liếc qua đã rõ<br>'+
            '<br>'+
            '만만한 걸 원했다면<br>'+
            'Manmanhan geol wonhaetdamyeon<br>'+
            'Nếu đã muốn đồ dễ xơi<br>'+
            '<br>'+
            'Oh wait til\' I do what I do<br>'+
            'Thì hãy đợi xem tôi làm gì<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du x2<br>'+
            'Tôi bắn, đu đu đù!<br>'+
            '<br>'+
            'What you gonna do when I come come through with that that uh uh huh? x2<br>'+
            'Thấy vác "hàng" tới định làm sao đây cưng?<br>'+
            '<br>'+
            '뜨거워 뜨거워 뜨거워 Like fire (x4)<br>'+
            'Tteugeowo tteugeowo tteugeowo Like fire (x4)<br>'+
            'Hót hòn họt, nóng như lửa cháy<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du!<br>'+
            'Bắn cưng đu đu đù!<br>'
        },
        {
            name: 'Lalisa',
            singer: 'Lisa',
            path: './songs/hanquoc/14.mp3',
            img: './song_img/nhachan.jpg',
            lyric:  'You know just from looking at my back<br>'+
            '<br>'+
            'Chỉ cần nhìn bóng lưng em là anh biết rồi<br>'+
            '<br>'+
            'When it gets dark, the light shines pink<br>'+
            '<br>'+
            'Khi bóng đêm buông xuống, ánh hồng rực sáng lên<br>'+
            '<br>'+
            'When the bright light wakes me up<br>'+
            '<br>'+
            'Khi ánh sáng chói chang đánh thức em<br>'+
            '<br>'+
            'I shake up the world<br>'+
            '<br>'+
            'Cũng là lúc em làm rung chuyển cả thế giới này<br>'+
            '<br>'+
            'I empty my head completely<br>'+
            '<br>'+
            'Em gột rửa tâm trí<br>'+
            '<br>'+
            'and burn the loud emotions<br>'+
            '<br>'+
            'rồi bùng cháy lên nguồn cảm xúc mãnh liệt<br>'+
            '<br>'+
            'Burn burn burn<br>'+
            '<br>'+
            'Cháy, cháy, cháy lên<br>'+
            '<br>'+
            'I’m the champagne that’ll quench your thirst in that moment<br>'+
            '<br>'+
            'Em là sâm panh làm dịu cơn khát của anh trong khoảnh khắc đó<br>'+
            '<br>'+
            'Sip sip drink me up<br>'+
            '<br>'+
            'Nào, nhấp em đi<br>'+
            '<br>'+
            'Yes lift up my body higher<br>'+
            '<br>'+
            'Đúng rồi, nâng em lên cao nữa đi<br>'+
            '<br>'+
            'Want you to ring the alarm<br>'+
            '<br>'+
            'Em muốn anh đánh thức tất cả<br>'+
            '<br>'+
            'Tell it to the world, kiss my name<br>'+
            '<br>'+
            'Muốn anh hôn lên tên em, và nói với cả thế giới<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Baby get the megaphone<br>'+
            '<br>'+
            'Cưng à, dùng loa đi anh<br>'+
            '<br>'+
            'Put it on speaker<br>'+
            '<br>'+
            'Cắm thẳng vào loa thùng ấy<br>'+
            '<br>'+
            'I said I can’t hear you<br>'+
            '<br>'+
            'Em đã bảo là em không nghe thấy anh nói rồi mà<br>'+
            '<br>'+
            'So you need to speak up<br>'+
            '<br>'+
            'Nên anh phải nói to lên<br>'+
            '<br>'+
            'Put that shiz on stereo<br>'+
            '<br>'+
            'Đưa tiếng rên đó lên dàn âm thanh nổi<br>'+
            '<br>'+
            'Everyone else on very low<br>'+
            '<br>'+
            'Mấy người khác nhỏ nhẹ quá đi<br>'+
            '<br>'+
            'Protect it like a barrier<br>'+
            '<br>'+
            'Em sẽ dựng rào chốt bảo vệ anh<br>'+
            '<br>'+
            'Promise there’s nothing scarier<br>'+
            '<br>'+
            'Đảm bảo sẽ không có gì đáng sợ hơn em đâu<br>'+
            '<br>'+
            'Than me if anybody coming gunnin for my man<br>'+
            '<br>'+
            'Nếu có kẻ manh nha đến cướp anh<br>'+
            '<br>'+
            'Gonna catch a case<br>'+
            '<br>'+
            'Em sẽ chộp ngay vali súng<br>'+
            '<br>'+
            'Gun up in my hand<br>'+
            '<br>'+
            'Tay em nã đạn<br>'+
            '<br>'+
            'Bam bam bam<br>'+
            '<br>'+
            'Bằng, bằng, bằng<br>'+
            '<br>'+
            'Hit after hit though<br>'+
            '<br>'+
            'Đòn này nối đòn khác<br>'+
            '<br>'+
            'Rocks in my wrist so I call em the flintstones<br>'+
            '<br>'+
            'Em gọi những hòn đá trên cổ tay em là đá lửa<br>'+
            '<br>'+
            'Ring the alarm<br>'+
            '<br>'+
            'Rung chuông đi anh<br>'+
            '<br>'+
            'Tell it to the world, kiss my name<br>'+
            '<br>'+
            'Muốn anh hôn lên tên em, và nói với cả thế giới<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Just say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Hãy Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'I’m incomparable, you gon’ still love me nonetheless<br>'+
            '<br>'+
            'Em là duy nhất, anh sẽ vẫn phải yêu em vô điều kiện mà thôi<br>'+
            '<br>'+
            'You need some L.A.L.I.S.A<br>'+
            '<br>'+
            'Anh cần chút L.A.L.I.S.A<br>'+
            '<br>'+
            'Remember my name that’s standing right in front of you<br>'+
            '<br>'+
            'Hãy nhớ rằng tên em đang hiện hữu trước mắt anh<br>'+
            '<br>'+
            'Love you some L.A.L.I.S.A<br>'+
            '<br>'+
            'L.A.L.I.S.A yêu anh<br>'+
            '<br>'+
            'You cannot see me even though I show you all my ways<br>'+
            '<br>'+
            'Dù em có hiện diện, anh cũng không thể nhìn thấy em bằng mắt thường đâu<br>'+
            '<br>'+
            'From Thailand to Korea, and now here, went for the throat<br>'+
            '<br>'+
            'Từ Thái đến Hàn, và bây giờ là ở đây, đánh đúng điểm yếu<br>'+
            '<br>'+
            'Being the greatest of all time ain’t fantasy?<br>'+
            '<br>'+
            'Vĩ đại nhất mọi thời đại chẳng lẽ lại không tuyệt?<br>'+
            '<br>'+
            'Jet black and pink crown belongs to we<br>'+
            '<br>'+
            'Vương miện hắc hường thuộc về chúng tôi<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa I’m confident standing above the sky<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, tôi tự tin đứng trên cả bầu trời<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa they want me<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, người ta thèm muốn có được tôi<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa catch me if you can<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, bắt lấy tôi đi nếu bạn có thể<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa Lalisa Lalisa<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa Lalisa Lalisa<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Just say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Hãy Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'
        },
        {
            name: 'Loco',
            singer: 'ITZY',
            path: './songs/hanquoc/15.mp3',
            img: './song_img/nhachan4.jpg',
            lyric: 
            'Lời bài hát Loco<br>'+
            'Michindaneun mari ihae gandalkka<br>'+
            'Anh có biết thế nào là điên dại?<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'+
            'Em đang cảm thấy loco, loco<br>'+
            '<br>'+
            'Oh gosh igeon dalkomhan dok gata<br>'+
            'Ôi chúa, nó như một liều thuốc độc ngọt ngào<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'+
            'Em đang cảm thấy loco, loco<br>'+
            '<br>'+
            '<br>'+
            'Chulgu eomneun bang ane sabangi neoran geouriya<br>'+
            'Trong căn phòng không lối thoát, bốn bức tường đều là những tấm gương phản chiếu hình bóng anh<br>'+
            '<br>'+
            'Guji shwipge malhajamyeon<br>'+
            'Nói cho dễ hiểu nhé, em cảm thấy như được sinh ra để yêu anh.<br>'+
            '<br>'+
            'I feel like I was born to love ya<br>'+
            'Em là chú mèo kitty đang cầu cứu, quanh quẩn xung quanh anh<br>'+
            '<br>'+
            '<br>'+
            'Oashiseu channeun Kitty nan ne juwireul maemdolji<br>'+
            'Em là chú mèo kitty đang cầu cứu, quanh quẩn xung quanh anh<br>'+
            '<br>'+
            'Kongkkakji kkyeo beorin nae du nuneun Yellow<br>'+
            'Đôi mắt em bị mắc kẹt bởi chiếc vỏ đậu nên chỉ thấy toàn là yellow<br>'+
            '<br>'+
            'Kyeojweo ne soneuro bul kkeojin nae shimjang<br>'+
            'Hãy dùng đôi tay anh để thổi bùng ngọn lửa đã tắt trong tim em<br>'+
            '<br>'+
            '<br>'+
            'It\'s too late, want you so bad neoreul gatgo shipeojeosseo<br>'+
            'Muộn rồi, em rất muốn anh<br>'+
            '<br>'+
            'Molla ijen imi nan Blind kkeutkkaji gabollae<br>'+
            'Em muốn có anh<br>'+
            '<br>'+
            '<br>'+
            'Neon nal banjjeum michige mandeureo<br>'+
            'Không biết đâu, em sẽ đi đến đường cùng của sự mù quáng<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Em cũng sẽ làm cho anh điên dại, dù chỉ bằng một nửa em thôi<br>'+
            '<br>'+
            'Daeche nega mweonde<br>'+
            'Anh đã làm em điên, điên trong tình yêu<br>'+
            '<br>'+
            'Micheo nalttwieo gibuni Up & down<br>'+
            'Em điên cuồng, tâm trạng em hết lên rồi lại xuống<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Anh đã làm em điên, điên trong tình yêu<br>'+
            '<br>'+
            'Nado naega Outta control<br>'+
            'Em đã mất hết kiểm soát rồi.<br>'+
            '<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'+
            '<br>'+
            '<br>'+
            'Naege daeche neon mweol weonhae<br>'+
            'Anh muốn em phải làm sao<br>'+
            '<br>'+
            'Michin i maeumeun da gatta peo jweodo I\'m ok<br>'+
            'Anh cứ đùa giỡn với trái tim em, em ổn<br>'+
            '<br>'+
            'Haruneun cheongugeul gatta watta gado<br>'+
            'Mỗi ngày anh đưa em lên thiên đường,<br>'+
            '<br>'+
            'Narak kkeutkkaji nal mireobeoryeo<br>'+
            'Rồi lại đẩy em xuống địa ngục<br>'+
            '<br>'+
            'So dangerous, so so so dangerous, uh-oh<br>'+
            'Nguy hiểm quá, thật nguy hiểm quá<br>'+
            '<br>'+
            'Nal deo manggatteuryeodo<br>'+
            'Dù anh có huỷ hoại em, thì hãy để em mù quáng tin vào anh<br>'+
            '<br>'+
            'Neol mideul su bakke eopge haejweo<br>'+
            'Em là chú mèo kitty đang cầu cứu, quanh quẩn xung quanh anh<br>'+
            '<br>'+
            '<br>'+
            'Oashiseu chajeun Kitty nan ne yeop jaril neomboji<br>'+
            'Dù anh có huỷ hoại em, thì hãy để em mù quáng tin vào anh<br>'+
            '<br>'+
            'Break ttawin ijeosseo kkeutkkaji ga bollae<br>'+
            'Dù anh có huỷ hoại em, thì hãy để em mù quáng tin vào anh<br>'+
            '<br>'+
            '<br>'+
            'Neon nal banjjeum michige mandeureo<br>'+
            'Em là chú mèo kitty đang cầu cứu, quanh quẩn xung quanh anh<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Em cũng sẽ làm cho anh điên dại, dù chỉ bằng một nửa em thôi<br>'+
            '<br>'+
            'Daeche nega mweonde<br>'+
            'Em làm sao thế này?<br>'+
            '<br>'+
            'Micheo nalttwieo gibuni Up & down<br>'+
            'Em điên cuồng, tâm trạng em hết lên rồi lại xuống<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Anh đã làm em điên, điên trong tình yêu<br>'+
            '<br>'+
            'Nado naega Outta control<br>'+
            'Em đã mất hết kiểm soát rồi.<br>'+
            '<br>'+
            '<br>'+
            'I\'m gettin\' LOCO-LOCO-CO<br>'+
            '<br>'+
            'I\'m gettin\' LOCO-LOCO-CO-oh-oh-oh<br>'+
            '<br>'+
            'I\'m gettin\' LOCO-LOCO-CO<br>'+
            '<br>'+
            'I\'m gettin\' LOCO-LOCO-CO-oh-oh-oh<br>'+
            '<br>'+
            '<br>'+
            'Neon nal wanjeon michige mandeureo<br>'+
            'Anh đã làm cho em hoàn toàn điên dại<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Anh đã làm em điên, điên trong tình yêu<br>'+
            '<br>'+
            'Daeche nega mweonde<br>'+
            'Em làm sao thế này?<br>'+
            '<br>'+
            'Michyeo nalttwieo gibuni Up & down<br>'+
            'Em điên cuồng, tâm trạng em hết lên rồi lại xuống<br>'+
            '<br>'+
            'You got me like CRAY-CRAY-CRAZY in love<br>'+
            'Anh đã làm em điên, điên trong tình yêu<br>'+
            '<br>'+
            'Nado naega Outta control<br>'+
            'Em đã mất hết kiểm soát rồi.<br>'+
            '<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'+
            '<br>'+
            'I\'m gettin\' LOCO LOCO<br>'
          
        },  
        {
            name: 'Not Today',
            singer: 'BTS',
            path: './songs/hanquoc/16.mp3',
            img: './song_img/nhachan3.jpg',
            lyric: 'All the underdogs in the world<br>'+
            'Tất cả những kẻ thua kém trên thế giới<br>'+
            '<br>'+
            'A day may come when we lose<br>'+
            'Một ngày có thể đến khi chúng ta mất<br>'+
            '<br>'+
            'But it is not today<br>'+
            'Nhưng hôm nay không phải là<br>'+
            '<br>'+
            'Today we fight<br>'+
            'Hôm nay chúng ta chiến đấu<br>'+
            '<br>'+
            'No not today<br>'+
            '언젠가 꽃은 지겠지<br>'+
            'Không không hôm nay<br>'+
            'But no not today<br>'+
            '그 때가 오늘은 아니지<br>'+
            'Không không hôm nay<br>'+
            'No no not today<br>'+
            '아직은 죽기엔<br>'+
            'Không không hôm nay<br>'+
            'Too good day<br>'+
            'Một ngày nào đó hoa sẽ mọc.<br>'+
            'No no not today<br>'+
            'Không không hôm nay<br>'+
            'No no no, not today<br>'+
            '그래 우리는 extra<br>'+
            'Không không hôm nay<br>'+
            'But still part of this world<br>'+
            'Thời điểm đó không phải là hôm nay.<br>'+
            'Extra plus ordinaryKhông không không hôm nay<br>'+
            '그것도 별 거 아녀<br>'+
            '오늘은 절대 죽지 말아<br>'+
            '빛은 어둠을 뚫고 나가<br>'+
            '새 세상 너도 원해<br>'+
            'Chết chưa Một ngày quá tốt<br>'+
            '<br>'+
            'Oh baby yes I want it<br>'+
            '날아갈 수 없음 뛰어<br>'+
            'Oh em có, tôi muốn nó<br>'+
            'Today we will survive<br>'+
            '뛰어갈 수 없음 걸어<br>'+
            'Tôi không thể bay, tôi nhảy<br>'+
            '<br>'+
            'Today we will survive<br>'+
            'Hôm nay chúng ta sẽ sống sót<br>'+
            '걸어갈 수 없음 기어<br>'+
            'Tôi không thể chạy. Đi bộ.<br>'+
            '기어서라도 gear up<br>'+
            'Hôm nay chúng ta sẽ sống sót<br>'+
            '겨눠 총! 조준! 발사<br>'+
            'Bánh răng không thể đi được<br>'+
            'Not not today<br>'+
            'Không không không hôm nay<br>'+
            'Not not today<br>'+
            'Không không không hôm nay<br>'+
            '(Hey!) 뱁새들아 다 hands up<br>'+
            '(Này!) Niggas giơ tay<br>'+
            '(Hey!) 친구들아 다 hands up<br>'+
            '(Này!) Các bạn ơi <br>'+
            '(Hey!) 나를 믿는다면 hands up<br>'+
            '(Này!) Nếu bạn tin tôi, hãy giơ tay<br>'+
            '총! 조준! 발사<br>'+
            'súng! nhắm! Khởi chạy<br>'+
            '죽지 않아 묻지 마라<br>'+
            'Nhân đôi thành công quá nóng <br>'+
            '소리 질러 not not today<br>'+
            'Phá giá biểu đồ quá nóng<br>'+
            '꿇지 마라 울지 않아<br>'+
            'Quá cao chúng tôi trên Trampoline<br>'+
            '손을 들어 not not today<br>'+
            'Quá cao, ai sẽ dừng lại?<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '총! 조준! 발사<br>'+
            'súng! nhắm! Khởi chạy<br>'+
            'Nhân đôi thành công quá nóng<br>'+ 
            '소리 질러 not not today<br>'+
            'Phá giá biểu đồ quá nóng<br>'+
            '꿇지 마라 울지 않아<br>'+
            'Quá cao chúng tôi trên Trampoline<br>'
            
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
const songlist4 = document.querySelectorAll('.song-list4 .play-btn')
songlist4.forEach(function(song,index){
    song.onclick = function() {
        
        nhacHQ.currentIndex = index
       
        nhacHQ.currentSong = nhacviet.songs[nhacviet.currentIndex]
        nhacHQ.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})

// Nhac Rap
const nhacRap = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Cậu Cả',
            singer: 'XAVI Phạm',
            path: './songs/rap/17.mp3',
            img: './song_img/RAPcauca.jpg',
            lyric: 
            'Lời bài hát Cậu Cả<br>'+
            'Câu cả ở trong gia phả<br>'+
            'Cậu cả là đại thiếu gia<br>'+
            'Cậu cả gia đình khá giả<br>'+
            'Cậu cả có nhiều ngân phiếu ha<br>'+
            'Cậu cả là con cầu con khẩn<br>'+
            'Cậu cả khi xưa đi cầu khấn<br>'+
            'Cậu cả lớn lên không cần đấu<br>'+
            'Cậu cả sinh ra đã bắt đầu thắng.<br>'+
            '<br>'+
            'Lớn lên trong sự giàu sang ......giàu ngang ở trên vạch mức<br>'+
            'Tiền cả kho cứ ăn mặt sức .......cần gì thức lo chuyện mực sách<br>'+
            'Khoác tay sánh vai chủ cả .......không sợ ngả cậu cả có đô La<br>'+
            'Pha én xanh vào với coca ......ngồi So pha hô la cần tiền alo<br>'+
            'Ông bà già gửi cho vài sắp .......chuyển khoản gấp để cậu chung chi<br>'+
            'Vùng tiền ra để cậu tỉ thí .......trả phí ..cùng mấy em đi chung<br>'+
            'Cậu cả không thích triết lý ......cao quý ..nhiều lời nói ..thị phi<br>'+
            'Cậu quen với cách chung chi ......tính phí bao sân nói thị uy<br>'+
            '<br>'+
            'Ma Ni .....city .....Party ......Ba ri<br>'+
            'Fendi ......LV .......bơri ........gucci<br>'+
            'Nuôi gái ở trong vila bỏ doLa ở vali<br>'+
            'Cẩu thích hàng xa xỉ tiền tỉ lái bugatti<br>'+
            'Trên du thuyền có nhiều anh tài chần dày mở nhạc phiêu<br>'+
            'Chiến hữu toàn con chủ cả ngã phần lớn cậu ấm và cô chiêu<br>'+
            'Ăn chơi cần tiền cứ gọi cuộc hội thoại xin vài triệu đô<br>'+
            'Ông bà già chủ casino ở chicago khỏi bàn về độ<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            '<br>'+
            'Câu cả ở trong gia phả<br>'+
            'Cậu cả là đại thiếu gia<br>'+
            'Cậu cả Gia đình khá giả<br>'+
            'Cậu cả Nhiều ngân phiếu ha<br>'+
            'Cậu cả Con cầu con khẩn<br>'+
            'Cậu cả Khi xưa cầu khấn<br>'+
            'Cậu cả Lớn lên k cần đấu<br>'+
            'Cậu cả Sinh ra đa bắt đau thắng<br>'+
            '<br>'+
            'Gọi ông già mua căng villa đón diva tận đến cali<br>'+
            'Home có thằng xavi đến villa uống cho cạn li nà<br>'+
            'Gọi thêm mấy em chân dài vài đường công cũng cau say 2<br>'+
            'Lên chuyến bay không có người lái rẻ trái lai rai cậu làm hai lai<br>'+
            'Gọi gió thêm mây nhạc hay khói bay mắt không còn nhìn thấy<br>'+
            'Một chấm đấm say khoác vai có ai cậu chi trăm nghìn đấy<br>'+
            'Tìm thấy thạo dược thiên nhiên aladin cùng cây đền thần<br>'+
            'Nhạc lên ánh mắt Đỏ hoen Vượt hố đen cậu đang cần đến<br>'+
            '<br>'+
            'Đi va fia hô la vi la<br>'+
            'Đô La Cara vina xavi<br>'+
            'Go Play city paris có chân dài trên boghini<br>'+
            'Dowtow cali city có thằng homie làm mafi<br>'+
            '<br>'+
            'Lớn lên cậu không cần đấu hỏi dấu vạch đích nó nầm đâu<br>'+
            'Được ăn trên và ngồi trước cậu thường bước đến đầu mâm<br>'+
            'Quyền hạng tập đoàn cậu nấm bấm vài số máy nhả vài triệu đô<br>'+
            'Hết tiền cứ gọi cho bố chuyển 9 số đe câu tim chổ tiêu<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'
        },
        {
            name: 'Thu Cuối',
            singer: 'Mr T x Yanbi x Hằng Bingboong',
            path: './songs/rap/18.mp3',
            img: './song_img/Rap thu cuoi.jpg',
            lyric: 'Lời bài hát Thu Cuối<br>'+
            '1. Cho bao nhiêu yêu thương nay bay xa<br>'+
            'Hoen đôi mi khi thu đưa em qua<br>'+
            'Đã từng ngọt ngào giờ nhận đắng cay vì anh.<br>'+
            '<br>'+
            'Thu vờn tóc em mơn man bên làn gió<br>'+
            'Vương trên mi ai lá rụng con phố nhỏ<br>'+
            'Nhẹ nhàng đâu đây mùi hoa sữa đó.<br>'+
            '<br>'+
            'Nghe xung quanh âm thanh vang lên sao thân quen<br>'+
            'Trong bao nhiêu ngu ngơ, vu vơ mùa lá vắng<br>'+
            'Thật nhẹ nhàng dù mùa thu không còn yêu anh nữa.<br>'+
            '<br>'+
            'Đã từ rất lâu rồi<br>'+
            'Trong anh định nghĩa 2 tiếng yêu thương<br>'+
            'Anh không thể trao cho ai kể từ khi anh có em<br>'+
            'Mùa thu đó anh có em.<br>'+
            '<br>'+
            'Vậy cớ sao giờ<br>'+
            'Hơn 1 năm trôi qua, người đã khác xa thật nhiều<br>'+
            'Anh nghe tiếng lá rơi không còn em nữa<br>'+
            'Mùa thu đến anh không còn em nữa.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Có lẽ nào em vội quên đi<br>'+
            'Có lẽ nào em đưa mùa thu đi<br>'+
            'Có lẽ naò mùa thu chẳng còn lại gì trong tâm trí em.<br>'+
            '<br>'+
            'Có lẽ nào em buông anh đi xa mất<br>'+
            'Có lẽ nào anh không phải người mà em yêu nhất<br>'+
            'Có lẽ nào anh phải tự nhủ rằng chỉ là 1 giấc mơ<br>'+
            'Anh mất em rồi!<br>'+
            '<br>'+
            '[Rap:]<br>'+
            'Thu đến và đi như những gì đã sắp đặt<br>'+
            'Trang giấy trắng đâu thể mờ đi từng màu buồn của nắng<br>'+
            'À ơi vu vơ câu hát, có lẽ chưa bao giờ anh viết tặng<br>'+
            'Em nhẹ bước chân qua, bao ngọt ngào, bao nhiêu cố gắng<br>'+
            'Có hay không những bước thềm trong con tim em cần một khoảng rộng<br>'+
            'Biết lúc nào anh có thể lại được gặp em một lần nữa<br>'+
            'Là khi đó anh cảm nhận mùi hương tàn cánh hoa sữa<br>'+
            'Anh yêu em thật nồng nàn như một định lí đã muôn thuở<br>'+
            'Yêu một người có lẽ phải học thêm nhiều điều<br>'+
            'Em là mảnh ghép cuối cùng anh còn thiếu<br>'+
            'Nhiều đêm dằn vặt tự gắng mình không hiểu<br>'+
            'Lắm những yêu thương trôi qua trong em nào thật nhiều<br>'+
            'Không! Lí do nào đã khiến em cùng người đó gặp mặt rồi vội yêu<br>'+
            'Cánh cửa hy vọng như đang đổ sập ngay trước mắt<br>'+
            'Không còn hơi ấm nụ hôn bờ vai êm thật chặt<br>'+
            'Cảm xúc bỗng nhiên chết lặng<br>'+
            'Đông tới ghé nhắn anh rằng<br>'+
            'Thu cuối rồi cũng qua nhanh cuốn theo cơn gió lặng lẽ hoà tan vào trong một buổi chiều mưa vắng.<br>'+
            '<br>'+
            '2. Lê đôi chân bơ vơ anh đã hụt hẫng thật nhiều (thật nhiều)<br>'+
            'Sao anh không thể ngăn nước mắt nhạt nhoà (vì ai)<br>'+
            'Đành ôm bờ vai lạnh cuối thu<br>'+
            'Cho anh thêm ngậm ngùi (vì anh)<br>'+
            'Cho bao nhiêu yêu thương vút bay<br>'+
            'Cho bao nhiêu yêu thương mãi xa (mãi xa)<br>'+
            'Xa cuối tận chân trời<br>'+
            'Nơi đó anh đã mất em.<br>'+
            '<br>'+
            '[Rap:]<br>'+
            'Hà Nội có lẽ đẹp nhất về đêm<br>'+
            'Cũng chính là lúc ôm em thật chặt băng qua mọi nẻo phố cổ ta thường đến<br>'+
            'Nhắm mắt chạm nhẹ nỗi đau miền ký ức không tên<br>'+
            'Giật mình chợt nhớ anh không thể với đến<br>'+
            'Chỉ là giấc mơ quá êm đềm<br>'+
            'Trọn vẹn một vòng tay dịu êm<br>'+
            'Rồi cứ man mác vu vơ, ngẩn ngơ chờ đông tới<br>'+
            'Liệu rằng một mai sẽ còn thấy nhau trên đường đời<br>'+
            'Ta cũng đâu ngờ sau bao ngày chờ đợi<br>'+
            'Bài hát cất lên về “Thu Hà Nội” sẽ theo cùng em<br>'+
            'Nhưng cùng hình bóng mới<br>'+
            'Có lẽ nào...<br>'
            
        },
        {
            name: 'Trốn Tìm',
            singer: 'Đen',
            path: './songs/rap/19.mp3',
            img: './song_img/trontim.jpg',
            lyric: 'Lời bài hát Trốn Tìm<br>'+
            '[Chorus: MTV]<br>'+
            'Có một cái cây trong một cái vườn<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Verse 1: Đen]<br>'+
            'Anh đi tìm thì em trốn, anh đi trốn em không tìm<br>'+
            'Lòng em không gợn sóng, cuối cùng anh mất công chìm<br>'+
            'Nếu mà có cây búa anh sẽ nện cho bõ công<br>'+
            'Vì nhớ nhung đặc quánh giờ nó khô thành bê tông<br>'+
            'Chúng ta rồi sẽ có, có những chuyến đi dài<br>'+
            'Phải tự học lấy mọi thứ vì trong “tình trường” làm biếng ghi bài<br>'+
            'Câu chuyện của chúng ta bỗng có thêm một miếng bi hài<br>'+
            'Vì cách mà em gọi anh, không có "u" và thiếu "y dài" (Ê)<br>'+
            'Phía xa thành phố người ta đã bật đèn đường<br>'+
            'Hương xưa quen làm anh thấy thật thèm thuồng<br>'+
            'Nỗi buồn vàng rực cứ như là chứa đồng thau<br>'+
            'Hệt như là Beckham vậy, em chỉ giỏi cứa lòng nhau<br>'+
            'Hé cửa sổ ra mà xem<br>'+
            'Có một chàng thi sĩ đứng ở ngay nhà em<br>'+
            'Viết nhạc tình mát ngọt tựa như cây cà rem<br>'+
            'Anh ta sẽ đứng ở nơi đây cả đêm.<br>'+
            '<br>'+
            '[Chorus: MTV, Biên]<br>'+
            'Có hai cái cây trong một cái vườn<br>'+
            '(Có hai cái cây trong vườn)<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            '(Những đoá hoa trên cành)<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            '(Có hai đứa nhóc đang chơi)<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Verse 2: Đen]<br>'+
            'Hồi đó anh Rụt rè như đám cây mắc cỡ<br>'+
            'Gần em làm anh hồi hộp tới mức gây tắc thở<br>'+
            'Ta đều không biết có điều gì sau đám mây sắp nở<br>'+
            'Trò chơi trốn tìm ngày đó, sau này đầy trắc trở<br>'+
            'Ta săn bắn những khát vọng và hái lượm những giấc mơ<br>'+
            'Ta gieo trồng cây ước mộng, thứ mà lấy đi nhiều thì giờ<br>'+
            'Ta đào những cái hố mà không biết có ngày bị lọt<br>'+
            'Để rất lâu sau này chúng ta cau mày nhận ra không phải tất cả bông hoa thì đều sẽ có những nhuỵ ngọt<br>'+
            'Gọi tên em làm anh mất giọng hoài<br>'+
            'Hệt như là một giấc mộng dài<br>'+
            'Ta đi tìm cả thế giới nhưng mà lại trốn nhau<br>'+
            'Biết vậy thà nghỉ chơi từ lúc mới chớm đau<br>'+
            'Người đi tìm cái người đi trốn, người đi trốn cái người đi tìm<br>'+
            'Tình yêu từ những ngày xưa đã ngủ quên dưới tán cây im lìm.<br>'+
            '<br>'+
            '[Chorus: MTV]<br>'+
            'Có 3 cái cây trong một cái vườn<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Bridge: MTV]<br>'+
            'Ai đó đã chặt hết cây và cũng chẳng thấy vườn (chẳng thấy cây trong vườn)<br>'+
            'Ai đó đã xây một ngôi nhà rất to (chặt hết cây đi rồi)<br>'+
            'Chắc em hạnh phúc yên vui với người<br>'+
            '(Chắc em hạnh phúc yên vui)<br>'+
            'Nhà em có chó anh không dám vào.<br>'+
            '<br>'+
            '[Verse 3: MTV]<br>'+
            'Niềm cô đơn của những người trưởng thành<br>'+
            'Là khi muốn trốn nhưng không ai tìm<br>'+
            'Nhiều khi ta muốn ta được bé lại<br>'+
            'Để khi đi trốn có người đi tìm<br>'+
            'Nhiều khi ta muốn ta được bé lại<br>'+
            'Để khi đi trốn có người đi tìm.<br>'
        },
        {
            name: 'What love is',
            singer: 'Binz, RPT Gonzo, Thành Draw',
            path: './songs/rap/20.mp3',
            img: './song_img/Rap what love is.jpg',
            lyric: 
            'Lời bài hát What Love Is…<br>'+
            'Tình yêu là gì em nói anh xem?<br>'+
            
            'Không nhiều tật xấu ngoài thói nhanh quên<br>'+
            
            'Tôi đã mất rất nhiều đêm thao thức<br>'+
            
            'Lắng nghe về những lừa dối quanh em<br>'+
            
            'Những người tôi từng nói rằng yêu họ<br>'+
            
            'Deep inside lost how I feel ya<br>'+
            
            'Những người đã nói rằng họ yêu tôi<br>'+
            
            'Rồi biến nó thành "đã từng yêu thôi"<br>'+
            
            'Ta phải đau thật nhiều vì yêu trước khi kịp hiểu<br>'+
            
            'Ra một điều muốn gần bên nhau dù cho tính tình mỗi người một kiểu thì<br>'+
            
            'Ta cần học được cách thứ tha những lần gần mà lòng cứ xa<br>'+
            
            'Là đôi khi ta cần thêm khoảng trống chứ không không phải là do người thứ ba<br>'+
            
            'Tell me what love is then tell me why<br>'+
            
            'No matter what it\'s the otherwise<br>'+
            
            'Lovers bite hard but it\'s all alright<br>'+
            
            'Love is having you there by my side<br>'+
            
            '(4x)<br>'+
            
            'Tell me what love is<br>'+
            
            'Tell me what love is and love me is what you tell<br>'+
            
            'Là những ngày nắng trời thênh thang<br>'+
            
            'Và cuốn lyrics dày thêm trang<br>'+
            
            'Tình yêu là gì mà khiến anh phải ngồi viết về mưa chắc liên quan<br>'+
            
            'Là những ngày gió về lao xao<br>'+
            
            'Đánh thức anh giữa ngàn chiêm bao<br>'+
            
            'Dù là bao lâu, dù làm nhau đau<br>'+
            
            'Vì em anh sẵn sàng đánh đổi tất cả right now<br>'+
            
            'Dâng tình yêu, anh không tiếc<br>'+
            
            'Nhưng tin con tim, anh không biết<br>'+
            
            'Như khói nhẹ bay, nỗi buồn dễ tàn ngay<br>'+
            
            'May là anh, đã không siết<br>'+
            
            'Guitar mỗi 2 hợp âm<br>'+
            
            'Ba chàng ngông ngồi<br>'+
            
            'Hát vu vơ về love<br>'+
            
            'Girl what you\'ve done<br>'+
            
            'Em thấy không?<br>'+
            
            'You got me fallin\' hard<br>'+
            
            '(2x)<br>'+
            
            'Tell me what love is<br>'+
            'Tell me what love is and love me is what you tell<br>'+
            
            '(2x) Thành Draw: Tell me what your love is, love is, love<br>'+
            
            'Và em ơi, nói tôi nghe tình yêu là gì?<br>'+
            
            'Mà tại sao trong phút chốc em vội ra đi<br>'+
            
            'Và em ơi, nói tôi nghe tình yêu là gì?<br>'+
            
            'Mà tại sao đã có lúc lệ ướt hoen mi<br>'+
            
            'Thế nhân kia hỏi tại sao đãi kẻ khù khờ<br>'+
            
            'Người bỗng từ đâu lại đến<br>'+
            
            'Tỏa làn khói cho tim mù mờ<br>'+
            
            'Mọi thứ đều có lý do<br>'+
            
            'Cho tôi được biết lý do mình chờ<br>'+
            
            'Đợi ai hồi lâu mỗi sáng trước ngõ<br>'+
            
            'Sao tôi lại khác không như mình ngờ<br>'+
            
            'Và tại sao tôi lại thành thật vậy?<br>'+
            
            'Thành thật trong từng lời nói<br>'+
            
            'Mà tại sao lại nói tất cả?<br>'+
            
            'Cho em dù người mới quen<br>'+
            
            'Tôi chỉ biết cảm xúc cứ chảy<br>'+
            
            'Trên môi là những làn khói<br>'+
            
            'Đằng sau đó là chút niềm tin<br>'+
            
            'Tôi đành đặt cược vào cảm nhận này!<br>'+
            
            'Tôi muốn mình hiểu rõ được mình!<br>'+
            
            'Quan sát mọi thứ từng ngày qua ngày<br>'+
            
            'Cảm xúc sẽ không lừa dối<br>'+
            
            'Khi tôi được có em tay trong tay<br>'+
            
            'Biết đâu sẽ tới một ngày tôi lại thay đổi như tôi lúc này<br>'+
            
            'Tới lúc đó tôi sẽ tự hỏi<br>'+
            
            'Vậy tình yêu trong tôi là gì?<br>'+
            
            'All (2x)<br>'+
            
            '2 hợp âm<br>'+
            
            '3 chàng ngôn ngồi hát vu vơ<br>'+
            
            'Baby girl, what you\'ve done<br>'+
            
            'I fall in love<br>'+
            
            'Tell me what your love is<br>'+
            
            'Tell me your love and tell me your love..<br>'+
            
            'Show me what your love is<br>'+
            
            'Show me your love and show me your love..<br>'+
            
            'Tell me what your love is, love is, love<br>'+
            
            'What is love?<br>'
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
 
const songlist5 = document.querySelectorAll('.song-list5 .play-btn')
songlist5.forEach(function(song,index){
    song.onclick = function() {
      
        nhacRap.currentIndex = index
        
        nhacRap.currentSong = nhacviet.songs[nhacviet.currentIndex]
        nhacRap.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})

// BXH
const topSong = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    lastVolume: 1,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hứa Kim Tuyền, Hoàng Duyên',
            path: './songs/vietnam/2.mp3',
            img: './song_img/saigondaulongqua.jpg',
            lyric: 'Lời bài hát Sài Gòn Đau Lòng Quá<br>'+
            'Mình đã từng hứa<br>'+
             'Bên nhau hết tháng năm dài<br>'+
             'Yêu đến khi ngừng hơi thở<br>'+
             'Đến khi ngừng mơ...<br>'+
             'Nắm chặt tay đi hết nhân thế này<br>'+
             'Chân trời hằn chân ta<br>'+
             'Vô tận là chúng ta...<br>'+

             '...'+

            '<br>Mình đã từng hứa<br>'+
             'Đi qua hết bao thăng trầm<br>'+
             'Cho dẫu mai này xa rời<br>'+
             'Vẫn không hề đổi dời...<br>'+
             'Có ngờ đâu, đã sớm vỡ tan tành<br>'+
             'Nhặt từng mảnh vỡ xếp vào vali...<br>'+

             '...'+

             '<br>Cứ càng yêu, cứ càng đau<br>'+
             'Cứ càng quên<br>'+
             'Rồi lại muốn đi thật nhiều<br>'+
             'Tokyo hay Seoul<br>'+
             'Paris hay New York<br>'+
             'Đi càng xa, càng không thể quên...<br>'+

             '<br>[ĐK:]<br>'+
             'Cầm tấm vé trên tay<br>'+
             'Tôi bay đến nơi xa<br>'+
             'Sài Gòn đau lòng quá<br>'+
             'Toàn kỷ niệm chúng ta<br>'+
             'Phải đi xa đến đâu?<br>'+
             'Thời gian quên mất bao lâu?<br>'+
             'Để trái tim tôi bình yên như ngày đầu tiên...<br>'+

             '<br>Ngày tôi chưa từng biết<br>'+
             'Tôi sẽ yêu em nhiều như thế này<br>'+
             'Để rồi khi ta cách xa tim này nát ra<br>'+
             'Ngày người chưa đến mang theo giấc mơ<br>'+
             'Rồi lại bỏ rơi lúc tôi đang chờ...<br>'+
             'Chờ người đến dịu xoa tổn thương tôi đã từng...<br>'
        },
        {
            name: 'Trốn Tìm',
            singer: 'Đen Vây',
            path: './songs/rap/19.mp3',
            img: './song_img/trontim.jpg',
            lyric: 'Lời bài hát Trốn Tìm<br>'+
            '[Chorus: MTV]<br>'+
            'Có một cái cây trong một cái vườn<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Verse 1: Đen]<br>'+
            'Anh đi tìm thì em trốn, anh đi trốn em không tìm<br>'+
            'Lòng em không gợn sóng, cuối cùng anh mất công chìm<br>'+
            'Nếu mà có cây búa anh sẽ nện cho bõ công<br>'+
            'Vì nhớ nhung đặc quánh giờ nó khô thành bê tông<br>'+
            'Chúng ta rồi sẽ có, có những chuyến đi dài<br>'+
            'Phải tự học lấy mọi thứ vì trong “tình trường” làm biếng ghi bài<br>'+
            'Câu chuyện của chúng ta bỗng có thêm một miếng bi hài<br>'+
            'Vì cách mà em gọi anh, không có "u" và thiếu "y dài" (Ê)<br>'+
            'Phía xa thành phố người ta đã bật đèn đường<br>'+
            'Hương xưa quen làm anh thấy thật thèm thuồng<br>'+
            'Nỗi buồn vàng rực cứ như là chứa đồng thau<br>'+
            'Hệt như là Beckham vậy, em chỉ giỏi cứa lòng nhau<br>'+
            'Hé cửa sổ ra mà xem<br>'+
            'Có một chàng thi sĩ đứng ở ngay nhà em<br>'+
            'Viết nhạc tình mát ngọt tựa như cây cà rem<br>'+
            'Anh ta sẽ đứng ở nơi đây cả đêm.<br>'+
            '<br>'+
            '[Chorus: MTV, Biên]<br>'+
            'Có hai cái cây trong một cái vườn<br>'+
            '(Có hai cái cây trong vườn)<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            '(Những đoá hoa trên cành)<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            '(Có hai đứa nhóc đang chơi)<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Verse 2: Đen]<br>'+
            'Hồi đó anh Rụt rè như đám cây mắc cỡ<br>'+
            'Gần em làm anh hồi hộp tới mức gây tắc thở<br>'+
            'Ta đều không biết có điều gì sau đám mây sắp nở<br>'+
            'Trò chơi trốn tìm ngày đó, sau này đầy trắc trở<br>'+
            'Ta săn bắn những khát vọng và hái lượm những giấc mơ<br>'+
            'Ta gieo trồng cây ước mộng, thứ mà lấy đi nhiều thì giờ<br>'+
            'Ta đào những cái hố mà không biết có ngày bị lọt<br>'+
            'Để rất lâu sau này chúng ta cau mày nhận ra không phải tất cả bông hoa thì đều sẽ có những nhuỵ ngọt<br>'+
            'Gọi tên em làm anh mất giọng hoài<br>'+
            'Hệt như là một giấc mộng dài<br>'+
            'Ta đi tìm cả thế giới nhưng mà lại trốn nhau<br>'+
            'Biết vậy thà nghỉ chơi từ lúc mới chớm đau<br>'+
            'Người đi tìm cái người đi trốn, người đi trốn cái người đi tìm<br>'+
            'Tình yêu từ những ngày xưa đã ngủ quên dưới tán cây im lìm.<br>'+
            '<br>'+
            '[Chorus: MTV]<br>'+
            'Có 3 cái cây trong một cái vườn<br>'+
            'Trên những tán cây nở rộ những đóa hoa<br>'+
            'Có hai đứa nhóc đang chơi trốn tìm<br>'+
            'Tìm hoài tìm mãi nên quên lối về.<br>'+
            '<br>'+
            '[Bridge: MTV]<br>'+
            'Ai đó đã chặt hết cây và cũng chẳng thấy vườn (chẳng thấy cây trong vườn)<br>'+
            'Ai đó đã xây một ngôi nhà rất to (chặt hết cây đi rồi)<br>'+
            'Chắc em hạnh phúc yên vui với người<br>'+
            '(Chắc em hạnh phúc yên vui)<br>'+
            'Nhà em có chó anh không dám vào.<br>'+
            '<br>'+
            '[Verse 3: MTV]<br>'+
            'Niềm cô đơn của những người trưởng thành<br>'+
            'Là khi muốn trốn nhưng không ai tìm<br>'+
            'Nhiều khi ta muốn ta được bé lại<br>'+
            'Để khi đi trốn có người đi tìm<br>'+
            'Nhiều khi ta muốn ta được bé lại<br>'+
            'Để khi đi trốn có người đi tìm.<br>'
        },
        {
            name: 'Lalisa',
            singer: 'Lisa',
            path: './songs/hanquoc/14.mp3',
            img: './song_img/nhachan.jpg',
            lyric: 'You know just from looking at my back<br>'+
            '<br>'+
            'Chỉ cần nhìn bóng lưng em là anh biết rồi<br>'+
            '<br>'+
            'When it gets dark, the light shines pink<br>'+
            '<br>'+
            'Khi bóng đêm buông xuống, ánh hồng rực sáng lên<br>'+
            '<br>'+
            'When the bright light wakes me up<br>'+
            '<br>'+
            'Khi ánh sáng chói chang đánh thức em<br>'+
            '<br>'+
            'I shake up the world<br>'+
            '<br>'+
            'Cũng là lúc em làm rung chuyển cả thế giới này<br>'+
            '<br>'+
            'I empty my head completely<br>'+
            '<br>'+
            'Em gột rửa tâm trí<br>'+
            '<br>'+
            'and burn the loud emotions<br>'+
            '<br>'+
            'rồi bùng cháy lên nguồn cảm xúc mãnh liệt<br>'+
            '<br>'+
            'Burn burn burn<br>'+
            '<br>'+
            'Cháy, cháy, cháy lên<br>'+
            '<br>'+
            'I’m the champagne that’ll quench your thirst in that moment<br>'+
            '<br>'+
            'Em là sâm panh làm dịu cơn khát của anh trong khoảnh khắc đó<br>'+
            '<br>'+
            'Sip sip drink me up<br>'+
            '<br>'+
            'Nào, nhấp em đi<br>'+
            '<br>'+
            'Yes lift up my body higher<br>'+
            '<br>'+
            'Đúng rồi, nâng em lên cao nữa đi<br>'+
            '<br>'+
            'Want you to ring the alarm<br>'+
            '<br>'+
            'Em muốn anh đánh thức tất cả<br>'+
            '<br>'+
            'Tell it to the world, kiss my name<br>'+
            '<br>'+
            'Muốn anh hôn lên tên em, và nói với cả thế giới<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Baby get the megaphone<br>'+
            '<br>'+
            'Cưng à, dùng loa đi anh<br>'+
            '<br>'+
            'Put it on speaker<br>'+
            '<br>'+
            'Cắm thẳng vào loa thùng ấy<br>'+
            '<br>'+
            'I said I can’t hear you<br>'+
            '<br>'+
            'Em đã bảo là em không nghe thấy anh nói rồi mà<br>'+
            '<br>'+
            'So you need to speak up<br>'+
            '<br>'+
            'Nên anh phải nói to lên<br>'+
            '<br>'+
            'Put that shiz on stereo<br>'+
            '<br>'+
            'Đưa tiếng rên đó lên dàn âm thanh nổi<br>'+
            '<br>'+
            'Everyone else on very low<br>'+
            '<br>'+
            'Mấy người khác nhỏ nhẹ quá đi<br>'+
            '<br>'+
            'Protect it like a barrier<br>'+
            '<br>'+
            'Em sẽ dựng rào chốt bảo vệ anh<br>'+
            '<br>'+
            'Promise there’s nothing scarier<br>'+
            '<br>'+
            'Đảm bảo sẽ không có gì đáng sợ hơn em đâu<br>'+
            '<br>'+
            'Than me if anybody coming gunnin for my man<br>'+
            '<br>'+
            'Nếu có kẻ manh nha đến cướp anh<br>'+
            '<br>'+
            'Gonna catch a case<br>'+
            '<br>'+
            'Em sẽ chộp ngay vali súng<br>'+
            '<br>'+
            'Gun up in my hand<br>'+
            '<br>'+
            'Tay em nã đạn<br>'+
            '<br>'+
            'Bam bam bam<br>'+
            '<br>'+
            'Bằng, bằng, bằng<br>'+
            '<br>'+
            'Hit after hit though<br>'+
            '<br>'+
            'Đòn này nối đòn khác<br>'+
            '<br>'+
            'Rocks in my wrist so I call em the flintstones<br>'+
            '<br>'+
            'Em gọi những hòn đá trên cổ tay em là đá lửa<br>'+
            '<br>'+
            'Ring the alarm<br>'+
            '<br>'+
            'Rung chuông đi anh<br>'+
            '<br>'+
            'Tell it to the world, kiss my name<br>'+
            '<br>'+
            'Muốn anh hôn lên tên em, và nói với cả thế giới<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Just say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Hãy Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'I’m incomparable, you gon’ still love me nonetheless<br>'+
            '<br>'+
            'Em là duy nhất, anh sẽ vẫn phải yêu em vô điều kiện mà thôi<br>'+
            '<br>'+
            'You need some L.A.L.I.S.A<br>'+
            '<br>'+
            'Anh cần chút L.A.L.I.S.A<br>'+
            '<br>'+
            'Remember my name that’s standing right in front of you<br>'+
            '<br>'+
            'Hãy nhớ rằng tên em đang hiện hữu trước mắt anh<br>'+
            '<br>'+
            'Love you some L.A.L.I.S.A<br>'+
            '<br>'+
            'L.A.L.I.S.A yêu anh<br>'+
            '<br>'+
            'You cannot see me even though I show you all my ways<br>'+
            '<br>'+
            'Dù em có hiện diện, anh cũng không thể nhìn thấy em bằng mắt thường đâu<br>'+
            '<br>'+
            'From Thailand to Korea, and now here, went for the throat<br>'+
            '<br>'+
            'Từ Thái đến Hàn, và bây giờ là ở đây, đánh đúng điểm yếu<br>'+
            '<br>'+
            'Being the greatest of all time ain’t fantasy?<br>'+
            '<br>'+
            'Vĩ đại nhất mọi thời đại chẳng lẽ lại không tuyệt?<br>'+
            '<br>'+
            'Jet black and pink crown belongs to we<br>'+
            '<br>'+
            'Vương miện hắc hường thuộc về chúng tôi<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa I’m confident standing above the sky<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, tôi tự tin đứng trên cả bầu trời<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa they want me<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, người ta thèm muốn có được tôi<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa catch me if you can<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa, bắt lấy tôi đi nếu bạn có thể<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa Lalisa Lalisa<br>'+
            '<br>'+
            'Lalisa Lalisa Lalisa Lalisa Lalisa<br>'+
            '<br>'+
            'Say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'+
            '<br>'+
            'Just say Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Hãy Gọi Lalisa đi anh, yêu Lalisa đi anh<br>'+
            '<br>'+
            'Call me Lalisa love me Lalisa love me<br>'+
            '<br>'+
            'Gọi tên Lalisa đi nào, yêu Lalisa đi nào<br>'+
            '<br>'+
            'You know the attitude<br>'+
            '<br>'+
            'Anh thừa hiểu thái độ của nhau mà<br>'+
            '<br>'+
            'What more do you want?<br>'+
            '<br>'+
            'Anh còn muốn gì hơn thế nữa?<br>'+
            '<br>'+
            'The loudest in the room<br>'+
            '<br>'+
            'Căn phòng ầm vang hết nấc rồi<br>'
        },
        {
            name: 'The 1',
            singer: 'Taylor Swift',
            path: './songs/usuk/12.mp3',
            img: './song_img/USUKthe1.jpg',
            lyric: 'Hiển Thị Sub<br>'+
            'Lời bài hát The 1<br>'+
            '[Verse 1]<br>'+
            'I\'m doing good, I\'m on some new shit<br>'+
            'Em vẫn đang rất ổn, em đang thực hiện một vài dự án mới<br>'+
            'Been saying "yes" instead of "no"<br>'+
            'Em cũng đã tập nói "cũng được thôi" thay vì lời từ chối<br>'+
            'I thought I saw you at the bus stop, I didn\'t though<br>'+
            'Em những tưởng mình đã trông thấy anh ở trạm xe buýt, nhưng thì ra là em nhầm<br>'+
            'I hit the ground running each night<br>'+
            'Em tập trung hết sức để làm việc hết mình mỗi đêm<br>'+
            'I hit the Sunday matinée<br>'+
            'Em chỉ nghỉ ngơi khi mặt trời sáng Chủ nhật ló dạng<br>'+
            'You know the greatest films of all time were never made<br>'+
            'Anh cũng biết rồi đó, những bộ phim tuyệt vời nhất chưa bao giờ được làm ra cả<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán là anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And if you wanted me, you really should\'ve showed<br>'+
            'Và nếu như anh đã từng có lúc khao khát em.. anh đáng lẽ phải thật sự thể hiện ra chứ..<br>'+
            'And if you never bleed, you\'re never gonna grow<br>'+
            'Và nếu ta không đôi lần đau đớn.. thì sẽ không bao giờ trưởng thành được đâu<br>'+
            'And it\'s alright now<br>'+
            'Và giờ đây, mọi chuyện cũng ổn cả rồi<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'I had this dream you\'re doing cool shit<br>'+
            'Em đã có một giấc mơ rằng, anh đang thực hiện hoài bão đẹp đẽ của mình<br>'+
            'Having adventures on your own<br>'+
            'Và anh tự mình trải nghiệm những chuyến phiêu lưu ấy<br>'+
            'You meet some woman on the internet and take her home<br>'+
            'Anh gặp gỡ một vài người phụ nữ trên mạng, và đưa họ về nhà<br>'+
            'We never painted by the numbers, baby<br>'+
            'Chúng ta chưa bao giờ được đại diện bởi những con số, tình yêu à<br>'+
            'But we were making it count<br>'+
            'Nhưng ta vẫn cứ khiến chúng có giá trị<br>'+
            'You know the greatest loves of all time are over now<br>'+
            'Anh biết rồi đó.. những yêu thương lớn lao nhất từ trước đến giờ.. đã kết thúc hết rồi<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And it\'s another day waking up alone<br>'+
            'Và nó vẫn chỉ là một ngày khác em thức giấc một mình<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '<br>'+
            '[Bridge]<br>'+
            'I, I, I persist and resist the temptation to ask you<br>'+
            'Em.. em.. em.. kiên trì và chối từ mọi cám rỗ để hỏi anh rằng..<br>'+
            'If one thing had been different<br>'+
            'Nếu như có một việc diễn ra theo cách khác<br>'+
            'Would everything be different today?<br>'+
            'Thì mọi thứ hôm nay sẽ khác chứ?<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'We were something, don\'t you think so?<br>'+
            'Chúng ta đã từng có gì đó với nhau, anh có nghĩ như vậy không?<br>'+
            'Rosé flowing with your chosen family<br>'+
            'Những ly vang hồng vơi rồi lại đầy với gia đình mà anh đã chọn lựa<br>'+
            'And it would\'ve been sweet<br>'+
            'Và nó sẽ thật ngọt ngào lắm anh à..<br>'+
            'If it could\'ve been me<br>'+
            'Nếu như người phụ nữ bên anh là em<br>'+
            'In my defense, I have none<br>'+
            'Trong sự bào chữ cho chính mình, em chẳng còn gì để nói<br>'+
            'For digging up the grave another time<br>'+
            'Vì đào bới lại kí ức xưa vào một khoảng thời gian nào đó<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'
            
        },
        {
            name: 'Thu Cuối',
            singer: 'Mr T x Yanbi x Hằng Bingboong',
            path: './songs/rap/18.mp3',
            img: './song_img/Rap thu cuoi.jpg',
            lyric: 'Lời bài hát Thu Cuối<br>'+
            '1. Cho bao nhiêu yêu thương nay bay xa<br>'+
            'Hoen đôi mi khi thu đưa em qua<br>'+
            'Đã từng ngọt ngào giờ nhận đắng cay vì anh.<br>'+
            '<br>'+
            'Thu vờn tóc em mơn man bên làn gió<br>'+
            'Vương trên mi ai lá rụng con phố nhỏ<br>'+
            'Nhẹ nhàng đâu đây mùi hoa sữa đó.<br>'+
            '<br>'+
            'Nghe xung quanh âm thanh vang lên sao thân quen<br>'+
            'Trong bao nhiêu ngu ngơ, vu vơ mùa lá vắng<br>'+
            'Thật nhẹ nhàng dù mùa thu không còn yêu anh nữa.<br>'+
            '<br>'+
            'Đã từ rất lâu rồi<br>'+
            'Trong anh định nghĩa 2 tiếng yêu thương<br>'+
            'Anh không thể trao cho ai kể từ khi anh có em<br>'+
            'Mùa thu đó anh có em.<br>'+
            '<br>'+
            'Vậy cớ sao giờ<br>'+
            'Hơn 1 năm trôi qua, người đã khác xa thật nhiều<br>'+
            'Anh nghe tiếng lá rơi không còn em nữa<br>'+
            'Mùa thu đến anh không còn em nữa.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Có lẽ nào em vội quên đi<br>'+
            'Có lẽ nào em đưa mùa thu đi<br>'+
            'Có lẽ naò mùa thu chẳng còn lại gì trong tâm trí em.<br>'+
            '<br>'+
            'Có lẽ nào em buông anh đi xa mất<br>'+
            'Có lẽ nào anh không phải người mà em yêu nhất<br>'+
            'Có lẽ nào anh phải tự nhủ rằng chỉ là 1 giấc mơ<br>'+
            'Anh mất em rồi!<br>'+
            '<br>'+
            '[Rap:]<br>'+
            'Thu đến và đi như những gì đã sắp đặt<br>'+
            'Trang giấy trắng đâu thể mờ đi từng màu buồn của nắng<br>'+
            'À ơi vu vơ câu hát, có lẽ chưa bao giờ anh viết tặng<br>'+
            'Em nhẹ bước chân qua, bao ngọt ngào, bao nhiêu cố gắng<br>'+
            'Có hay không những bước thềm trong con tim em cần một khoảng rộng<br>'+
            'Biết lúc nào anh có thể lại được gặp em một lần nữa<br>'+
            'Là khi đó anh cảm nhận mùi hương tàn cánh hoa sữa<br>'+
            'Anh yêu em thật nồng nàn như một định lí đã muôn thuở<br>'+
            'Yêu một người có lẽ phải học thêm nhiều điều<br>'+
            'Em là mảnh ghép cuối cùng anh còn thiếu<br>'+
            'Nhiều đêm dằn vặt tự gắng mình không hiểu<br>'+
            'Lắm những yêu thương trôi qua trong em nào thật nhiều<br>'+
            'Không! Lí do nào đã khiến em cùng người đó gặp mặt rồi vội yêu<br>'+
            'Cánh cửa hy vọng như đang đổ sập ngay trước mắt<br>'+
            'Không còn hơi ấm nụ hôn bờ vai êm thật chặt<br>'+
            'Cảm xúc bỗng nhiên chết lặng<br>'+
            'Đông tới ghé nhắn anh rằng<br>'+
            'Thu cuối rồi cũng qua nhanh cuốn theo cơn gió lặng lẽ hoà tan vào trong một buổi chiều mưa vắng.<br>'+
            '<br>'+
            '2. Lê đôi chân bơ vơ anh đã hụt hẫng thật nhiều (thật nhiều)<br>'+
            'Sao anh không thể ngăn nước mắt nhạt nhoà (vì ai)<br>'+
            'Đành ôm bờ vai lạnh cuối thu<br>'+
            'Cho anh thêm ngậm ngùi (vì anh)<br>'+
            'Cho bao nhiêu yêu thương vút bay<br>'+
            'Cho bao nhiêu yêu thương mãi xa (mãi xa)<br>'+
            'Xa cuối tận chân trời<br>'+
            'Nơi đó anh đã mất em.<br>'+
            '<br>'+
            '[Rap:]<br>'+
            'Hà Nội có lẽ đẹp nhất về đêm<br>'+
            'Cũng chính là lúc ôm em thật chặt băng qua mọi nẻo phố cổ ta thường đến<br>'+
            'Nhắm mắt chạm nhẹ nỗi đau miền ký ức không tên<br>'+
            'Giật mình chợt nhớ anh không thể với đến<br>'+
            'Chỉ là giấc mơ quá êm đềm<br>'+
            'Trọn vẹn một vòng tay dịu êm<br>'+
            'Rồi cứ man mác vu vơ, ngẩn ngơ chờ đông tới<br>'+
            'Liệu rằng một mai sẽ còn thấy nhau trên đường đời<br>'+
            'Ta cũng đâu ngờ sau bao ngày chờ đợi<br>'+
            'Bài hát cất lên về “Thu Hà Nội” sẽ theo cùng em<br>'+
            'Nhưng cùng hình bóng mới<br>'+
            'Có lẽ nào...<br>'
            
        },
        {
            name: 'Cậu Cả',
            singer: 'XAVI Phạm',
            path: './songs/rap/17.mp3',
            img: './song_img/RAPcauca.jpg',
            lyric: 'Lời bài hát Cậu Cả<br>'+
            'Câu cả ở trong gia phả<br>'+
            'Cậu cả là đại thiếu gia<br>'+
            'Cậu cả gia đình khá giả<br>'+
            'Cậu cả có nhiều ngân phiếu ha<br>'+
            'Cậu cả là con cầu con khẩn<br>'+
            'Cậu cả khi xưa đi cầu khấn<br>'+
            'Cậu cả lớn lên không cần đấu<br>'+
            'Cậu cả sinh ra đã bắt đầu thắng.<br>'+
            '<br>'+
            'Lớn lên trong sự giàu sang ......giàu ngang ở trên vạch mức<br>'+
            'Tiền cả kho cứ ăn mặt sức .......cần gì thức lo chuyện mực sách<br>'+
            'Khoác tay sánh vai chủ cả .......không sợ ngả cậu cả có đô La<br>'+
            'Pha én xanh vào với coca ......ngồi So pha hô la cần tiền alo<br>'+
            'Ông bà già gửi cho vài sắp .......chuyển khoản gấp để cậu chung chi<br>'+
            'Vùng tiền ra để cậu tỉ thí .......trả phí ..cùng mấy em đi chung<br>'+
            'Cậu cả không thích triết lý ......cao quý ..nhiều lời nói ..thị phi<br>'+
            'Cậu quen với cách chung chi ......tính phí bao sân nói thị uy<br>'+
            '<br>'+
            'Ma Ni .....city .....Party ......Ba ri<br>'+
            'Fendi ......LV .......bơri ........gucci<br>'+
            'Nuôi gái ở trong vila bỏ doLa ở vali<br>'+
            'Cẩu thích hàng xa xỉ tiền tỉ lái bugatti<br>'+
            'Trên du thuyền có nhiều anh tài chần dày mở nhạc phiêu<br>'+
            'Chiến hữu toàn con chủ cả ngã phần lớn cậu ấm và cô chiêu<br>'+
            'Ăn chơi cần tiền cứ gọi cuộc hội thoại xin vài triệu đô<br>'+
            'Ông bà già chủ casino ở chicago khỏi bàn về độ<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            '<br>'+
            'Câu cả ở trong gia phả<br>'+
            'Cậu cả là đại thiếu gia<br>'+
            'Cậu cả Gia đình khá giả<br>'+
            'Cậu cả Nhiều ngân phiếu ha<br>'+
            'Cậu cả Con cầu con khẩn<br>'+
            'Cậu cả Khi xưa cầu khấn<br>'+
            'Cậu cả Lớn lên k cần đấu<br>'+
            'Cậu cả Sinh ra đa bắt đau thắng<br>'+
            '<br>'+
            'Gọi ông già mua căng villa đón diva tận đến cali<br>'+
            'Home có thằng xavi đến villa uống cho cạn li nà<br>'+
            'Gọi thêm mấy em chân dài vài đường công cũng cau say 2<br>'+
            'Lên chuyến bay không có người lái rẻ trái lai rai cậu làm hai lai<br>'+
            'Gọi gió thêm mây nhạc hay khói bay mắt không còn nhìn thấy<br>'+
            'Một chấm đấm say khoác vai có ai cậu chi trăm nghìn đấy<br>'+
            'Tìm thấy thạo dược thiên nhiên aladin cùng cây đền thần<br>'+
            'Nhạc lên ánh mắt Đỏ hoen Vượt hố đen cậu đang cần đến<br>'+
            '<br>'+
            'Đi va fia hô la vi la<br>'+
            'Đô La Cara vina xavi<br>'+
            'Go Play city paris có chân dài trên boghini<br>'+
            'Dowtow cali city có thằng homie làm mafi<br>'+
            '<br>'+
            'Lớn lên cậu không cần đấu hỏi dấu vạch đích nó nầm đâu<br>'+
            'Được ăn trên và ngồi trước cậu thường bước đến đầu mâm<br>'+
            'Quyền hạng tập đoàn cậu nấm bấm vài số máy nhả vài triệu đô<br>'+
            'Hết tiền cứ gọi cho bố chuyển 9 số đe câu tim chổ tiêu<br>'+
            '<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'+
            'Cần money cứ gọi call cho daddy<br>'+
            'Sai hết money cứ gọi call cho mommy<br>'
        },
        {
            name: 'Con Đường Xưa Em Đi',
            singer: 'Phương Anh',
            path: './songs/trutinh/5.mp3',
            img: './song_img/TThoanovedem.jpg',
            lyric: 
            'Chuyện từ một đêm cuối nẻo một người tiễn một người đi<br>'+
            'Đẹp tựa bài thơ nở giữa đêm sương nở tận tâm hồn<br>'+
            'Chuyện một mình tôi chép dòng tâm tình tặng người chưa biết một lần<br>'+
            'Vì giây phút ấy tôi tình cờ hiểu rằng<br>'+
            'Tình yêu đẹp nghìn đời là tình yêu khi đơn côi.<br>'+
            '<br>'+
            'Vào chuyện từ một đêm khoác bờ vai một mảnh áo dạ đường khuya<br>'+
            'Bồi hồi người trai hướng nẻo đêm sâu, dấu tình yêu đầu<br>'+
            'Vì còn tìm nhau lối về ngõ hẹp còn chờ in dấu chân anh<br>'+
            'Niềm thương mến đó bây giờ và nghìn đời<br>'+
            'Dù gió đùa dạt dào còn đẹp như khi quen nhau.<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Ai lớn lên không từng hẹn hò không từng yêu thương<br>'+
            'Nhưng có mấy người tìm được một tình yêu ngát hương<br>'+
            'Mến những người chưa quen<br>'+
            'Một người ở lại đèn trăng gối mộng<br>'+
            'Yêu ai anh băng sông dài cho đẹp lòng trai.<br>'+
            '<br>'+
            'Một người tìm vui mãi tận trời nào giá lạnh hồn đông<br>'+
            'Một người chợt nghe gió giữa mênh mông rót vào trong lòng<br>'+
            'Và một mình tôi chép dòng tâm tình tặng người chưa biết một lần<br>'+
            'Vì trong phút ấy tôi tìm mình thì thầm giờ đã gặp được một nụ hoa nở về đêm.<br>'
        },
        {
            name: 'Ddu-Du Ddu-Du',
            singer: 'Black Pink',
            path: './songs/hanquoc/13.mp3',
            img: './song_img/nhachan2.jpg',
            lyric: '착한 얼굴에 그렇지 못한 태도<br>'+
            'Chakan eolgure geureochi mothan taedo<br>'+
            'Mặt trông thế nhưng chẳng hiền<br>'+
            '<br>'+
            '가녀린 몸매 속 가려진 Volume은 두 배로<br>'+
            'Ganyeorin mommae sok garyeojin Volumeeun du baero<br>'+
            'Body mảnh mai nhưng chuỵ dấu volume gấp hai<br>'+
            '<br>'+
            '거침없이 직진 굳이 보진 않지 눈치<br>'+
            'Geochimeopsi jikjin guji bojin anchi nunchi<br>'+
            'Không ngần ngại, chẳng liếc nhìn, không ngừng tiến lên<br>'+
            '<br>'+
            'Black 하면 Pink 우린 예쁘장한 Savage<br>'+
            'Black hamyeon Pink urin yeppeujanghan Savage<br>'+
            'Black mà có Pink, tụi chuỵ là team gái đẹp gái ác.<br>'+
            '<br>'+
            '원할 땐 대놓고 뺏지<br>'+
            'Wonhal ttaen daenoko ppaetji<br>'+
            'Muốn gì là cướp thẳng<br>'+
            '<br>'+
            '넌 뭘 해도 칼로 물 베기<br>'+
            'Neon mwol haedo kallo mul begi<br>'+
            'Lấy đao chém nước, chống cự vô ích<br>'+
            '<br>'+
            '두 손엔 가득한 Fat check<br>'+
            'Du sonen gadeukan Fat check<br>'+
            'Hai tay đầy giấy tiền tung bay<br>'+
            '<br>'+
            '궁금하면 해봐 Fact check<br>'+
            'Gunggeumhamyeon haebwa Fact check<br>'+
            'Tò mò thì bay qua đây mà kiểm<br>'+
            '<br>'+
            '눈 높인 꼭대기 물 만난 물고기<br>'+
            'Nun nopin kkokdaegi mul mannan mulgogi<br>'+
            'Gu chuỵ cao hơn đỉnh núi tuyết, như cá gặp nước<br>'+
            '<br>'+
            '좀 독해 난 Toxic<br>'+
            'Jom dokae nan Toxic<br>'+
            'Cay độc đều có đủ<br>'+
            '<br>'+
            'You 혹해 I\'m foxy<br>'+
            'You hokae I\'m foxy<br>'+
            'Cưng mê dại, chuỵ là hồ ly<br>'+
            '<br>'+
            '두 번 생각해<br>'+
            'Du beon saenggakae<br>'+
            'Nghĩ hai lần cho kĩ<br>'+
            '<br>'+
            '흔한 남들처럼 착한 척은 못 하니까<br>'+
            'Heunhan namdeulcheoreom chakan cheogeun mot hanikka<br>'+
            'Đây sống không giả tạo như những người kia được<br>'+
            '<br>'+
            '착각하지 마<br>'+
            'Chakgakaji ma<br>'+
            'Xin chớ đừng ảo tưởng<br>'+
            '<br>'+
            '쉽게 웃어주는 건 날 위한 거야<br>'+
            'Swipge useojuneun geon nal wihan geoya<br>'+
            'Nụ cười nhạt đó tôi dành cho tôi<br>'+
            '<br>'+
            '아직은 잘 모르겠지<br>'+
            'Ajigeun jal moreugetji<br>'+
            'Cớ sao vẫn chưa hiểu<br>'+
            '<br>'+
            '굳이 원하면 Test me<br>'+
            'Guji wonhamyeon Test me<br>'+
            'Cứ khăng khăng thì sang mà test<br>'+
            '<br>'+
            '넌 불 보듯이 뻔해<br>'+
            'Neon bul bodeusi ppeonhae<br>'+
            'Đang nghĩ gì đấy liếc qua đã rõ<br>'+
            '<br>'+
            '만만한 걸 원했다면<br>'+
            'Manmanhan geol wonhaetdamyeon<br>'+
            'Nếu đã muốn nuốt đồ dễ trôi<br>'+
            '<br>'+
            'Oh wait til\' I do what I do<br>'+
            'Đợi tôi làm cái này nhé<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du x2<br>'+
            'Bắn cưng đu đu đù<br>'+
            '<br>'+
            '지금 내가 걸어가는 거린<br>'+
            'Jigeum naega georeoganeun georin<br>'+
            'Con đường chuỵ đang phi<br>'+
            '<br>'+
            'BLACKPINK 4 way 사거리<br>'+
            'BLACKPINK 4 way sageori<br>'+
            'Ngã tư bốn hướng đều ghi BLACKPINK<br>'+
            '<br>'+
            '동서남북 사방으로 Run it<br>'+
            'Dongseonambuk sabangeuro Run it<br>'+
            'Chạy khắp tứ phương Đông Tây Nam bắc<br>'+
            '<br>'+
            '너네 버킷리스트 싹 다 I bought it<br>'+
            'Neone beokitriseuteu ssak da I bought it<br>'+
            'Trong đời cưng mong ước có được gì chuỵ mua hết<br>'+
            '<br>'+
            '널 당기는 것도 멀리 밀치는 것도<br>'+
            'Neol danggineun geotdo meolli milchineun geotdo<br>'+
            'Kéo bé ra xa tí xong thả bé cái "phịch"<br>'+
            '<br>'+
            '제멋대로 하는 Bad girl<br>'+
            'Jemeotdaero haneun Bad girl<br>'+
            'Là gái hư chuỵ thích gì là quất ngay<br>'+
            '<br>'+
            '좋건 싫어하건 누가 뭐라 하던<br>'+
            'Jokeon sileohageon nuga mwora hadeon<br>'+
            'Thích hay gét, mặc người nói đều chẳng màng<br>'+
            '<br>'+
            'When the bass drop it\'s another banger<br>'+
            '<br>'+
            '두 번 생각해<br>'+
            'Du beon saenggakae<br>'+
            'Nghĩ hai lần cho kĩ<br>'+
            '<br>'+
            '흔한 남들처럼 착한 척은 못 하니까<br>'+
            'Heunhan namdeulcheoreom chakan cheogeun mot hanikka<br>'+
            'Đây không diễn đỉnh như chúng bạn được<br>'+
            '<br>'+
            '착각하지 마<br>'+
            'Chakgakaji ma<br>'+
            'Đừng có tự ảo tưởng<br>'+
            '<br>'+
            '쉽게 웃어주는 건 날 위한 거야<br>'+
            'Swipge useojuneun geon nal wihan geoya<br>'+
            'Nụ cười nhẹ nhõm đó là cười cho chính tôi<br>'+
            '<br>'+
            '아직은 잘 모르겠지<br>'+
            'Ajigeun jal moreugetji<br>'+
            'Giờ vẫn chưa hiểu nữa sao?<br>'+
            '<br>'+
            '굳이 원하면 Test me<br>'+
            'Guji wonhamyeon Test me<br>'+
            'Đã cố chấp thì tôi đây cứ test<br>'+
            '<br>'+
            '넌 불 보듯이 뻔해<br>'+
            'Neon bul bodeusi ppeonhae<br>'+
            'Cưng đang nghĩ gì vừa liếc qua đã rõ<br>'+
            '<br>'+
            '만만한 걸 원했다면<br>'+
            'Manmanhan geol wonhaetdamyeon<br>'+
            'Nếu đã muốn đồ dễ xơi<br>'+
            '<br>'+
            'Oh wait til\' I do what I do<br>'+
            'Thì hãy đợi xem tôi làm gì<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du x2<br>'+
            'Tôi bắn, đu đu đù!<br>'+
            '<br>'+
            'What you gonna do when I come come through with that that uh uh huh? x2<br>'+
            'Thấy vác "hàng" tới định làm sao đây cưng?<br>'+
            '<br>'+
            '뜨거워 뜨거워 뜨거워 Like fire (x4)<br>'+
            'Tteugeowo tteugeowo tteugeowo Like fire (x4)<br>'+
            'Hót hòn họt, nóng như lửa cháy<br>'+
            '<br>'+
            'Hit you with that ddu du ddu du du!<br>'+
            'Bắn cưng đu đu đù!<br>'
        },
        {
            name: 'What love is',
            singer: 'Binz, RPT Gonzo, Thành Draw',
            path: './songs/rap/20.mp3',
            img: './song_img/Rap what love is.jpg',
            lyric: 'Lời bài hát What Love Is…<br>'+
            'Tình yêu là gì em nói anh xem?<br>'+
            
            'Không nhiều tật xấu ngoài thói nhanh quên<br>'+
            
            'Tôi đã mất rất nhiều đêm thao thức<br>'+
            
            'Lắng nghe về những lừa dối quanh em<br>'+
            
            'Những người tôi từng nói rằng yêu họ<br>'+
            
            'Deep inside lost how I feel ya<br>'+
            
            'Những người đã nói rằng họ yêu tôi<br>'+
            
            'Rồi biến nó thành "đã từng yêu thôi"<br>'+
            
            'Ta phải đau thật nhiều vì yêu trước khi kịp hiểu<br>'+
            
            'Ra một điều muốn gần bên nhau dù cho tính tình mỗi người một kiểu thì<br>'+
            
            'Ta cần học được cách thứ tha những lần gần mà lòng cứ xa<br>'+
            
            'Là đôi khi ta cần thêm khoảng trống chứ không không phải là do người thứ ba<br>'+
            
            'Tell me what love is then tell me why<br>'+
            
            'No matter what it\'s the otherwise<br>'+
            
            'Lovers bite hard but it\'s all alright<br>'+
            
            'Love is having you there by my side<br>'+
            
            '(4x)<br>'+
            
            'Tell me what love is<br>'+
            
            'Tell me what love is and love me is what you tell<br>'+
            
            'Là những ngày nắng trời thênh thang<br>'+
            
            'Và cuốn lyrics dày thêm trang<br>'+
            
            'Tình yêu là gì mà khiến anh phải ngồi viết về mưa chắc liên quan<br>'+
            
            'Là những ngày gió về lao xao<br>'+
            
            'Đánh thức anh giữa ngàn chiêm bao<br>'+
            
            'Dù là bao lâu, dù làm nhau đau<br>'+
            
            'Vì em anh sẵn sàng đánh đổi tất cả right now<br>'+
            
            'Dâng tình yêu, anh không tiếc<br>'+
            
            'Nhưng tin con tim, anh không biết<br>'+
            
            'Như khói nhẹ bay, nỗi buồn dễ tàn ngay<br>'+
            
            'May là anh, đã không siết<br>'+
            
            'Guitar mỗi 2 hợp âm<br>'+
            
            'Ba chàng ngông ngồi<br>'+
            
            'Hát vu vơ về love<br>'+
            
            'Girl what you\'ve done<br>'+
            
            'Em thấy không?<br>'+
            
            'You got me fallin\' hard<br>'+
            
            '(2x)<br>'+
            
            'Tell me what love is<br>'+
            'Tell me what love is and love me is what you tell<br>'+
            
            '(2x) Thành Draw: Tell me what your love is, love is, love<br>'+
            
            'Và em ơi, nói tôi nghe tình yêu là gì?<br>'+
            
            'Mà tại sao trong phút chốc em vội ra đi<br>'+
            
            'Và em ơi, nói tôi nghe tình yêu là gì?<br>'+
            
            'Mà tại sao đã có lúc lệ ướt hoen mi<br>'+
            
            'Thế nhân kia hỏi tại sao đãi kẻ khù khờ<br>'+
            
            'Người bỗng từ đâu lại đến<br>'+
            
            'Tỏa làn khói cho tim mù mờ<br>'+
            
            'Mọi thứ đều có lý do<br>'+
            
            'Cho tôi được biết lý do mình chờ<br>'+
            
            'Đợi ai hồi lâu mỗi sáng trước ngõ<br>'+
            
            'Sao tôi lại khác không như mình ngờ<br>'+
            
            'Và tại sao tôi lại thành thật vậy?<br>'+
            
            'Thành thật trong từng lời nói<br>'+
            
            'Mà tại sao lại nói tất cả?<br>'+
            
            'Cho em dù người mới quen<br>'+
            
            'Tôi chỉ biết cảm xúc cứ chảy<br>'+
            
            'Trên môi là những làn khói<br>'+
            
            'Đằng sau đó là chút niềm tin<br>'+
            
            'Tôi đành đặt cược vào cảm nhận này!<br>'+
            
            'Tôi muốn mình hiểu rõ được mình!<br>'+
            
            'Quan sát mọi thứ từng ngày qua ngày<br>'+
            
            'Cảm xúc sẽ không lừa dối<br>'+
            
            'Khi tôi được có em tay trong tay<br>'+
            
            'Biết đâu sẽ tới một ngày tôi lại thay đổi như tôi lúc này<br>'+
            
            'Tới lúc đó tôi sẽ tự hỏi<br>'+
            
            'Vậy tình yêu trong tôi là gì?<br>'+
            
            'All (2x)<br>'+
            
            '2 hợp âm<br>'+
            
            '3 chàng ngôn ngồi hát vu vơ<br>'+
            
            'Baby girl, what you\'ve done<br>'+
            
            'I fall in love<br>'+
            
            'Tell me what your love is<br>'+
            
            'Tell me your love and tell me your love..<br>'+
            
            'Show me what your love is<br>'+
            
            'Show me your love and show me your love..<br>'+
            
            'Tell me what your love is, love is, love<br>'+
            
            'What is love?<br>'
        },
        {
            name: 'Chỉ Là Không Cùng Nhau',
            singer: 'Tăng Phúc, Trương Thảo Nhi',
            path: './songs/vietnam/4.mp3',
            img: './song_img/chilakhongcungnhau.jpg',
            lyric: 'Lời bài hát Chỉ Là Không Cùng Nhau (Live Version)<br>'+
            'Chiều hôm ấy có mưa rơi nhẹ vương mi ai<br>'+
            'Con đường ngỡ bước chung đôi bây giờ chia hai<br>'+
            'Ai nói ra lời gian dối làm tan nát con tim ai<br>'+
            'Một người nỡ, một người vỡ bao mộng mơ.<br>'+
            
            'Rời xa nhau dẫu tim vẫn còn mang tên nhau<br>'+
            'Chỉ là giấu, giấu che đi ta còn yêu nhau<br>'+
            'Phía cuối cuộc đời ta hứa sẽ chờ dẫu qua bao lâu<br>'+
            'Tình vẫn đậm sâu!<br>'+
            '<br>'+
            '[ĐK:]<br>'+
            'Từng yêu nhau, từng là của nhau thật lâu<br>'+
            'Đến sau cùng chẳng thể có nhau bạc đầu<br>'+
            'Chẳng cần tương lai, chẳng biết có thương đau ngày mai<br>'+
            'Chỉ cần nhau.<br>'+
            
            'Giờ buông tay để được thấy nhau về sau<br>'+
            'Trả người về những ngày tháng chưa bắt đầu<br>'+
            'Ai rồi cũng sẽ tìm được ấm êm sau khổ đau<br>'+
            'Chỉ là không cùng nhau.<br>'
        },
        {
            name: 'Not Today',
            singer: 'BTS',
            path: './songs/hanquoc/16.mp3',
            img: './song_img/nhachan3.jpg',
            lyric: 'All the underdogs in the world<br>'+
            'Tất cả những kẻ thua kém trên thế giới<br>'+
            '<br>'+
            'A day may come when we lose<br>'+
            'Một ngày có thể đến khi chúng ta mất<br>'+
            '<br>'+
            'But it is not today<br>'+
            'Nhưng hôm nay không phải là<br>'+
            '<br>'+
            'Today we fight<br>'+
            'Hôm nay chúng ta chiến đấu<br>'+
            '<br>'+
            'No not today<br>'+
            '언젠가 꽃은 지겠지<br>'+
            'Không không hôm nay<br>'+
            'But no not today<br>'+
            '그 때가 오늘은 아니지<br>'+
            'Không không hôm nay<br>'+
            'No no not today<br>'+
            '아직은 죽기엔<br>'+
            'Không không hôm nay<br>'+
            'Too good day<br>'+
            'Một ngày nào đó hoa sẽ mọc.<br>'+
            'No no not today<br>'+
            'Không không hôm nay<br>'+
            'No no no, not today<br>'+
            '그래 우리는 extra<br>'+
            'Không không hôm nay<br>'+
            'But still part of this world<br>'+
            'Thời điểm đó không phải là hôm nay.<br>'+
            'Extra plus ordinaryKhông không không hôm nay<br>'+
            '그것도 별 거 아녀<br>'+
            '오늘은 절대 죽지 말아<br>'+
            '빛은 어둠을 뚫고 나가<br>'+
            '새 세상 너도 원해<br>'+
            'Chết chưa Một ngày quá tốt<br>'+
            '<br>'+
            'Oh baby yes I want it<br>'+
            '날아갈 수 없음 뛰어<br>'+
            'Oh em có, tôi muốn nó<br>'+
            'Today we will survive<br>'+
            '뛰어갈 수 없음 걸어<br>'+
            'Tôi không thể bay, tôi nhảy<br>'+
            '<br>'+
            'Today we will survive<br>'+
            'Hôm nay chúng ta sẽ sống sót<br>'+
            '걸어갈 수 없음 기어<br>'+
            'Tôi không thể chạy. Đi bộ.<br>'+
            '기어서라도 gear up<br>'+
            'Hôm nay chúng ta sẽ sống sót<br>'+
            '겨눠 총! 조준! 발사<br>'+
            'Bánh răng không thể đi được<br>'+
            'Not not today<br>'+
            'Không không không hôm nay<br>'+
            'Not not today<br>'+
            'Không không không hôm nay<br>'+
            '(Hey!) 뱁새들아 다 hands up<br>'+
            '(Này!) Niggas giơ tay<br>'+
            '(Hey!) 친구들아 다 hands up<br>'+
            '(Này!) Các bạn ơi <br>'+
            '(Hey!) 나를 믿는다면 hands up<br>'+
            '(Này!) Nếu bạn tin tôi, hãy giơ tay<br>'+
            '총! 조준! 발사<br>'+
            'súng! nhắm! Khởi chạy<br>'+
            '죽지 않아 묻지 마라<br>'+
            'Nhân đôi thành công quá nóng <br>'+
            '소리 질러 not not today<br>'+
            'Phá giá biểu đồ quá nóng<br>'+
            '꿇지 마라 울지 않아<br>'+
            'Quá cao chúng tôi trên Trampoline<br>'+
            '손을 들어 not not today<br>'+
            'Quá cao, ai sẽ dừng lại?<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '(Hey!) not not today<br>'+
            '(Này!) Không phải hôm nay<br>'+
            '총! 조준! 발사<br>'+
            'súng! nhắm! Khởi chạy<br>'+
            'Nhân đôi thành công quá nóng<br>'+ 
            '소리 질러 not not today<br>'+
            'Phá giá biểu đồ quá nóng<br>'+
            '꿇지 마라 울지 않아<br>'+
            'Quá cao chúng tôi trên Trampoline<br>'
        },
        {
            name: 'Souvenir',
            singer: 'Selena Gomez',
            path: './songs/usuk/11.mp3',
            img: './song_img/USUKsouvernir.jpg',
            lyric: 'Hiển Thị Sub<br>'+
            'Lời bài hát Souvenir<br>'+
            '[Intro]<br>'+
            'Chills<br>'+
            '<br>'+
            '[Verse 1]<br>'+
            'New York back in August, tenth floor balcony<br>'+
            'Hồi nhớ lại New York những ngày thu tháng 8, em đứng bên ban công của tầng thứ mười<br>'+
            'Smoke is floating over Jane and Greenwich street<br>'+
            'Những lớp xương mù phủ kín cả đường Jane lẫn Greenwich<br>'+
            'Goosebumps from your wild eyes when they\'re watching me<br>'+
            'Da thịt em bỗng nhạy cảm hơn.. khi đôi mắt hoang dại của anh dõi theo em<br>'+
            'Shivers dance down my spine, head down to my feet<br>'+
            'Những cơn lạnh chạy dài khắp sống lưng.. từ đỉnh đâu cho đến tận gót<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'Swimming in your eyes, in your eyes, in your eyes<br>'+
            'Em bơi lội trong đôi mắt anh.. trong đôi mắt anh sâu thẳm<br>'+
            'Egyptian blue<br>'+
            'Một màu lam Ai Cập<br>'+
            'Something I\'ve never had without you<br>'+
            'Một điều gì đó mà em chưa từng có được khi không có anh<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees<br>'+
            'Anh trao cho em những rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể nói<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh giữ bên mình<br>'+
            '<br>'+
            '[Post-Chorus]<br>'+
            'Giving me chills<br>'+
            'Anh trao cho em những rùng mình<br>'+
            'Chills<br>'+
            'Thật sung sướng..<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'Sunset Tower lobby, waiting there for me<br>'+
            'Bên hành lang của tòa Sunset, anh đang đứng chờ em<br>'+
            'In the elevator, fumble for your key<br>'+
            'Trong tháng máy đang đi lên.. anh lục tìm chìa khóa<br>'+
            'Kissed in every corner, Presidential Suite<br>'+
            'Ta trao nhau nụ hôn dường như khắp các góc tường.. một căn phòng Tổng thống<br>'+
            'Opened that Bordeaux from 1993<br>'+
            'Và anh bật chai vang Boóc-đô có tuổi đời hơn 20 năm<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'Swimming in your eyes, in your eyes, in your eyes<br>'+
            'Em bơi lội trong đôi mắt anh.. trong đôi mắt anh sâu thẳm<br>'+
            'Egyptian blue<br>'+
            'Một màu lam Ai Cập<br>'+
            'Something I\'ve never had without you<br>'+
            'Một điều gì đó mà em chưa từng có được khi không có anh<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees<br>'+
            'Anh trao cho em sung sướng rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể thấu hiểu<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh gìn giữ<br>'+
            '<br>'+
            '[Post-Chorus]<br>'+
            'Giving me chills<br>'+
            'Trao cho em..<br>'+
            '<br>'+
            '[Bridge]<br>'+
            'Take my, take-take my breath away just like<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            'Take my, take-take my breath away just like<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'You\'re giving me chills at a hundred degrees (A hundred)<br>'+
            'Anh trao cho em sung sướng rùng mình dưới cái nóng hàng trăm độ<br>'+
            'It\'s better than pills how you put me to sleep (Puts me, yeah)<br>'+
            'Nó tuyệt vời hơn cả những viên thuốc em nuốt vào để mong cầu giấc ngủ<br>'+
            'Calling your name, the only language I can speak<br>'+
            'Gọi tên anh trong cơn mê đắm, đó là thứ ngôn ngữ duy nhất em có thể nói<br>'+
            'Taking my breath, a souvenir that you can keep<br>'+
            'Hãy chiếm lấy hơi thở của em đi, như một món lưu niệm anh giữ bên mình<br>'+
            '<br>'+
            '[Outro]<br>'+
            'Giving me chills<br>'+
            'Trao cho em những cơn say đắm<br>'+
            'Take my, take-take my breath away just like (You\'re giving me chills)<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'+
            'Giving me chills<br>'+
            'Trao cho em những cơn say đắm<br>'+
            'Take my, take-take my breath away just like (You\'re giving me chills)<br>'+
            'Hãy cứ lấy.. lấy đi hơi thở này của em giống như..<br>'+
            'Take my breath away just like a souvenir<br>'+
            'Hãy cứ lấy đi hơi thở này của em giống như một món quà lưu niệm<br>'
            
        },
        {
            name: 'The 1',
            singer: 'Taylor Swift',
            path: './songs/usuk/12.mp3',
            img: './song_img/USUKthe1.jpg',
            lyric: 'Hiển Thị Sub<br>'+
            'Lời bài hát The 1<br>'+
            '[Verse 1]<br>'+
            'I\'m doing good, I\'m on some new shit<br>'+
            'Em vẫn đang rất ổn, em đang thực hiện một vài dự án mới<br>'+
            'Been saying "yes" instead of "no"<br>'+
            'Em cũng đã tập nói "cũng được thôi" thay vì lời từ chối<br>'+
            'I thought I saw you at the bus stop, I didn\'t though<br>'+
            'Em những tưởng mình đã trông thấy anh ở trạm xe buýt, nhưng thì ra là em nhầm<br>'+
            'I hit the ground running each night<br>'+
            'Em tập trung hết sức để làm việc hết mình mỗi đêm<br>'+
            'I hit the Sunday matinée<br>'+
            'Em chỉ nghỉ ngơi khi mặt trời sáng Chủ nhật ló dạng<br>'+
            'You know the greatest films of all time were never made<br>'+
            'Anh cũng biết rồi đó, những bộ phim tuyệt vời nhất chưa bao giờ được làm ra cả<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán là anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And if you wanted me, you really should\'ve showed<br>'+
            'Và nếu như anh đã từng có lúc khao khát em.. anh đáng lẽ phải thật sự thể hiện ra chứ..<br>'+
            'And if you never bleed, you\'re never gonna grow<br>'+
            'Và nếu ta không đôi lần đau đớn.. thì sẽ không bao giờ trưởng thành được đâu<br>'+
            'And it\'s alright now<br>'+
            'Và giờ đây, mọi chuyện cũng ổn cả rồi<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'+
            '<br>'+
            '[Verse 2]<br>'+
            'I had this dream you\'re doing cool shit<br>'+
            'Em đã có một giấc mơ rằng, anh đang thực hiện hoài bão đẹp đẽ của mình<br>'+
            'Having adventures on your own<br>'+
            'Và anh tự mình trải nghiệm những chuyến phiêu lưu ấy<br>'+
            'You meet some woman on the internet and take her home<br>'+
            'Anh gặp gỡ một vài người phụ nữ trên mạng, và đưa họ về nhà<br>'+
            'We never painted by the numbers, baby<br>'+
            'Chúng ta chưa bao giờ được đại diện bởi những con số, tình yêu à<br>'+
            'But we were making it count<br>'+
            'Nhưng ta vẫn cứ khiến chúng có giá trị<br>'+
            'You know the greatest loves of all time are over now<br>'+
            'Anh biết rồi đó.. những yêu thương lớn lao nhất từ trước đến giờ.. đã kết thúc hết rồi<br>'+
            '<br>'+
            '[Pre-Chorus]<br>'+
            'I guess you never know, never know<br>'+
            'Em đoán anh chẳng bao giờ.. chẳng bao giờ biết được đâu<br>'+
            'And it\'s another day waking up alone<br>'+
            'Và nó vẫn chỉ là một ngày khác em thức giấc một mình<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'But we were something, don\'t you think so?<br>'+
            'Nhưng hai ta đã từng có với nhau một chút gì đó.. anh có nghĩ như vậy không?<br>'+
            'Roaring twenties, tossing pennies in the pool<br>'+
            'Những năm hai mươi đẹp đẽ, em khẽ thảy những đồng xu kia xuống hồ nước<br>'+
            'And if my wishes came true<br>'+
            'Và nếu như những điều ước của em đều trở thành hiện thực<br>'+
            'It would\'ve been you<br>'+
            'Thì em sẽ được bên anh trong cuộc đời này..<br>'+
            'In my defense, I have none<br>'+
            'Để tự bào chữa cho mình.. em chẳng có lời nào cả<br>'+
            'For never leaving well enough alone<br>'+
            'Vì em chẳng bao giờ để mọi việc trôi qua trong yên bình<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '<br>'+
            '[Bridge]<br>'+
            'I, I, I persist and resist the temptation to ask you<br>'+
            'Em.. em.. em.. kiên trì và chối từ mọi cám rỗ để hỏi anh rằng..<br>'+
            'If one thing had been different<br>'+
            'Nếu như có một việc diễn ra theo cách khác<br>'+
            'Would everything be different today?<br>'+
            'Thì mọi thứ hôm nay sẽ khác chứ?<br>'+
            '<br>'+
            '[Chorus]<br>'+
            'We were something, don\'t you think so?<br>'+
            'Chúng ta đã từng có gì đó với nhau, anh có nghĩ như vậy không?<br>'+
            'Rosé flowing with your chosen family<br>'+
            'Những ly vang hồng vơi rồi lại đầy với gia đình mà anh đã chọn lựa<br>'+
            'And it would\'ve been sweet<br>'+
            'Và nó sẽ thật ngọt ngào lắm anh à..<br>'+
            'If it could\'ve been me<br>'+
            'Nếu như người phụ nữ bên anh là em<br>'+
            'In my defense, I have none<br>'+
            'Trong sự bào chữ cho chính mình, em chẳng còn gì để nói<br>'+
            'For digging up the grave another time<br>'+
            'Vì đào bới lại kí ức xưa vào một khoảng thời gian nào đó<br>'+
            'But it would\'ve been fun<br>'+
            'Nhưng sẽ vui lắm anh nhỉ..<br>'+
            'If you would\'ve been the one<br>'+
            'Nếu như anh là người đàn ông bên cạnh em<br>'+
            '(Ooh)<br>'
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    setconfig: function(key,value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls =  this.songs.map((song,index)=> {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <a href="${song.path}" class="btn btn-download" download>
                    <i class="ti-download"></i>
                </a>
            </div>
            `
        })
        
        playlist.innerHTML = "<h2 class = \"playlist-heading\">Danh sách bài hát</h2>" + htmls.join("");
    },
    handleEvents: function(){
        const _this = this ;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        //Xử lý khi scroll
        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //     const newCdWidth = cdWidth - scrollTop;
        //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
        //     cd.style.opacity = newCdWidth / cdWidth;
        // };

        //Xử lý khi nhấn nút play
        playBtn.onclick = function () {
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause= function () {
            player.classList.remove('playing')
            _this.isPlaying = false
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        
        // Xử lý khi tua song
        progress.onchange = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        // Xử lý khi thay đổi âm lượng
        volumeProgress.onchange = function(e) {
            if (e.target.value == 0) {
                volumeBtn.classList.add('mute')
                _this.isMute = true
            } else {
                if (_this.isMute) {
                    volumeBtn.classList.remove('mute')
                    _this.isMute = false
                }
            }
            audio.volume = e.target.value / 100
        }

        // Xử lý khi click vào volume btn
        volumeBtn.onclick = function(e) {
            if(!_this.isMute) {
                _this.lastVolume = audio.volume
                audio.volume = 0
                volumeProgress.value = 0
                volumeBtn.classList.add('mute')
            }else {
                volumeBtn.classList.remove('mute')
                audio.volume = _this.lastVolume
                volumeProgress.value = audio.volume * 100
            }
            _this.isMute = !_this.isMute
        }

        //Xử lý khi nhấn next btn
        nextBtn.onclick = function() {
            
            if(_this.isRandom) {
                _this.playRandomSong();
                
            }else {
                _this.nextSong() 
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý khi click prev btn
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
            audio.play()
             _this.render()
            _this.scrollToActiveSong()
        }

        //Xử lý khi bật tắt random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setconfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý khi lặp lại 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setconfig('isRepeat',_this.isRepeat)
            
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        // Xử lý next song khi audio ended
        audio.onended  = function () {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if( songNode || e.target.closest('.option')){
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path;
        singer.textContent = this.currentSong.singer
        lyricsImg.src = this.currentSong.img;
        songName.textContent = this.currentSong.name
        songAuth.textContent = this.currentSong.singer;
        lyricsTitle.textContent = 'Lời bài hát '+ this.currentSong.name 
        lyricSong.innerHTML = this.currentSong.lyric
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout( () => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        },500)
    },
    start: function() {
        
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe xử lý các sự kiện
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI
        this.loadCurrentSong();

        //render list
        this.render();

        // Hiển thị trạng thái ban đầu của repeat btn và random-btn
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}

const topsong = document.querySelectorAll('.top-song .play-btn')

topsong.forEach(function(song,index){
    song.onclick = function() {
        
        topSong.currentIndex = index
      
        topSong.currentSong = nhacviet.songs[nhacviet.currentIndex]
        topSong.start()
        audio.play()
        document.querySelector('.dashboard').classList.remove('hiden')
    }
})


