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
const songName = $('.content-section-des')
const songAuth = $('.auth')
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
            lyric: 'Lời bài hát Sài Gòn Đau Lòng Quá'+
            '<br>Mình đã từng hứa'+
            '<br>Bên nhau hết tháng năm dài'+
            '<br>Yêu đến khi ngừng hơi thở'+
            '<br>Đến khi ngừng mơ...'+
            '<br>Nắm chặt tay đi hết nhân thế này'+
            '<br>Chân trời hằn chân ta'+
            '<br>Vô tận là chúng ta...<br>'+
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
            '...'+
            '[ĐK:]<br>'+
            'Cầm tấm vé trên tay<br>'+
            'Tôi bay đến nơi xa<br>'+
            'Sài Gòn đau lòng quá<br>'+
            'Toàn kỷ niệm chúng ta<br>'+
            'Phải đi xa đến đâu?<br>'+
            'Thời gian quên mất bao lâu?<br>'+
            'Để trái tim tôi bình yên như ngày đầu tiên...<br>'+
            '...'+
            '<br>Ngày tôi chưa từng biết<br>'+
            'Tôi sẽ yêu em nhiều như thế này<br>'+
            'Để rồi khi ta cách xa tim này nát ra<br>'+
            'Ngày người chưa đến mang theo giấc mơ<br>'+
            'Rồi lại bỏ rơi lúc tôi đang chờ...<br>'+
            'Chờ người đến dịu xoa tổn thương tôi đã từng...<br>'
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
            singer: 'Đen Vâu',
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
            lyric: ' '
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
            img: './song_img/TThoanovedem.jpg'
        },
        {
            name: 'Làm Dâu Xứ Lạ',
            singer: 'Phi Nhung, Mạnh Quỳnh',
            path: './songs/trutinh/6.mp3',
            img: './song_img/TTlamdauxula.jpg'

        },
        {
            name: 'Tàu Anh Qua Núi',
            singer: 'Anh Thơ',
            path: './songs/trutinh/7.mp3',
            img: './song_img/TTtauanhquanui.jpg'

        },
        {
            name: 'Quảng Bình Quê Ta Ơi',
            singer: 'Thu Hiền, Thanh Hoa',
            path: './songs/trutinh/8.mp3',
            img: './song_img/TTquangbinhqueta.jpg'
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
            img: './song_img/USUKnotimetodie.jpg'
        },
        {
            name: 'Physical',
            singer: 'Dua Lipa',
            path: './songs/usuk/10.mp3',
            img: './song_img/USUK/physical.jpg'

        },
        {
            name: 'Souvenir',
            singer: 'Selena Gomez',
            path: './songs/usuk/11.mp3',
            img: './song_img/USUKsouvernir.jpg'

        },
        {
            name: 'The 1',
            singer: 'Taylor Swift',
            path: './songs/usuk/12.mp3',
            img: './song_img/USUKthe1.jpg'
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
            img: './song_img/nhachan2.jpg'
        },
        {
            name: 'Lalisa',
            singer: 'Lisa',
            path: './songs/hanquoc/14.mp3',
            img: './song_img/nhachan.jpg'

        },
        {
            name: 'Loco',
            singer: 'ITZY',
            path: './songs/hanquoc/15.mp3',
            img: './song_img/nhachan4.jpg'

        },
        {
            name: 'Not Today',
            singer: 'BTS',
            path: './songs/hanquoc/16.mp3',
            img: './song_img/nhachan3.jpg'
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
            img: './song_img/RAPcauca.jpg'
        },
        {
            name: 'Thu Cuối',
            singer: 'Mr T x Yanbi x Hằng Bingboong',
            path: './songs/rap/18.mp3',
            img: './song_img/Rap thu cuoi.jpg'

        },
        {
            name: 'Trốn Tìm',
            singer: 'Đen Vây',
            path: './songs/rap/19.mp3',
            img: './song_img/trontim.jpg'

        },
        {
            name: 'What love is',
            singer: 'Binz, RPT Gonzo, Thành Draw',
            path: './songs/rap/20.mp3',
            img: './song_img/Rap what love is.jpg'
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
            img: './song_img/saigondaulongqua.jpg'
            
        },
        {
            name: 'Trốn Tìm',
            singer: 'Đen Vây',
            path: './songs/rap/19.mp3',
            img: './song_img/trontim.jpg'

        },
        {
            name: 'Lalisa',
            singer: 'Lisa',
            path: './songs/hanquoc/14.mp3',
            img: './song_img/nhachan.jpg'

        },
        {
            name: 'The 1',
            singer: 'Taylor Swift',
            path: './songs/usuk/12.mp3',
            img: './song_img/USUKthe1.jpg'
        },
        {
            name: 'Thu Cuối',
            singer: 'Mr T x Yanbi x Hằng Bingboong',
            path: './songs/rap/18.mp3',
            img: './song_img/Rap thu cuoi.jpg'

        },
        {
            name: 'Cậu Cả',
            singer: 'XAVI Phạm',
            path: './songs/rap/17.mp3',
            img: './song_img/RAPcauca.jpg'
        },
        {
            name: 'Con Đường Xưa Em Đi',
            singer: 'Phương Anh',
            path: './songs/trutinh/5.mp3',
            img: './song_img/TThoanovedem.jpg'
        },
        {
            name: 'Ddu-Du Ddu-Du',
            singer: 'Black Pink',
            path: './songs/hanquoc/13.mp3',
            img: './song_img/nhachan2.jpg'
        },
        {
            name: 'What love is',
            singer: 'Binz, RPT Gonzo, Thành Draw',
            path: './songs/rap/20.mp3',
            img: './song_img/Rap what love is.jpg'
        },
        {
            name: 'Chỉ Là Không Cùng Nhau',
            singer: 'Tăng Phúc, Trương Thảo Nhi',
            path: './songs/vietnam/4.mp3',
            img: './song_img/chilakhongcungnhau.jpg'
        },
        {
            name: 'Not Today',
            singer: 'BTS',
            path: './songs/hanquoc/16.mp3',
            img: './song_img/nhachan3.jpg'
        },
        {
            name: 'Souvenir',
            singer: 'Selena Gomez',
            path: './songs/usuk/11.mp3',
            img: './song_img/USUKsouvernir.jpg'

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


