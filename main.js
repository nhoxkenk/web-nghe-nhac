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


const PLAYER_STORAGE_KEY = 'F8_PLAYER'
const playlist = $('.playlist')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio') 
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Bài hát thứ nhất',
            singer: 'Tác giả thứ nhất',
            path: './songs/vietnam/1.mp3',
            img: './song_img/chilakhongcungnhau.jpg'
        },
        {
            name: 'Bài hát thứ 2',
            singer: 'Tác giả thứ 2',
            path: './songs/vietnam/2.mp3',
            img: './song_img/chilakhongcungnhau.jpg'

        },
        {
            name: 'Bài hát thứ 3',
            singer: 'Tác giả thứ 3',
            path: './songs/vietnam/3.mp3',
            img: './song_img/chilakhongcungnhau.jpg'

        },
        {
            name: 'Bài hát thứ 4',
            singer: 'Tác giả thứ nhất',
            path: './songs/vietnam/4.mp3',
            img: './song_img/chilakhongcungnhau.jpg'

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
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join("");
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
// app.start();  