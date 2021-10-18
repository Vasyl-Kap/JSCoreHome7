// #1

const sel = selector => document.querySelector(selector);

sel('.task1').addEventListener('click', function () {
    sel('.small-block1').classList.add('color1');
    sel('.color1').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'darkcyan';
    })
    sel('.small-block2').classList.add('color2');
    sel('.color2').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'darkred';
    })
    sel('.small-block3').classList.add('color3');
    sel('.color3').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'aqua';
    })
    sel('.small-block4').classList.add('color4');
    sel('.color4').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'lightgreen';
    })
    sel('.small-block5').classList.add('color5');
    sel('.color5').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'gray';
    })
    sel('.small-block6').classList.add('color6');
    sel('.color6').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'chartreuse';
    })
    sel('.small-block7').classList.add('color7');
    sel('.color7').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'coral';
    })
    sel('.small-block8').classList.add('color8');
    sel('.color8').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'darkgoldenrod';
    })
    sel('.small-block9').classList.add('color9');
    sel('.color9').addEventListener('click', function () {
        sel('.div1').style.backgroundColor = 'hotpink';
    })
})
sel('.task2').addEventListener('click', function () {
    sel('.small-block1').classList.add('img1');
    sel('.img1').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://wallup.net/wp-content/uploads/2017/11/17/265288-moonlight.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block2').classList.add('img2');
    sel('.img2').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://eskipaper.com/images/beautiful-4.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block3').classList.add('img3');
    sel('.img3').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://i.pinimg.com/originals/75/a4/c2/75a4c2d1dc2dbce3342109e8270ff4f3.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block4').classList.add('img4');
    sel('.img4').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://wallpapercave.com/wp/wp2809570.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block5').classList.add('img5');
    sel('.img5').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://wallpaperaccess.com/full/215112.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block6').classList.add('img6');
    sel('.img6').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://wallpapercave.com/wp/wp3431585.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block7').classList.add('img7');
    sel('.img7').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://cdn.wallpapersafari.com/57/87/OU7NAl.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block8').classList.add('img8');
    sel('.img8').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('https://wallpaperaccess.com/full/632198.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
    sel('.small-block9').classList.add('img9');
    sel('.img9').addEventListener('click', function () {
        sel('.div1').style.backgroundImage = "url('http://www.trendingroot.com/wp-content/uploads/2018/11/Cold-Winter-Pine-Forest-Lake-Photography-HD-Wallpaper-1920x1080.jpg')";
        sel('.div1').style.backgroundPosition = 'center';
        sel('.div1').style.backgroundSize = 'cover';
    })
})

// #2

let keys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 32];
let lis = document.querySelectorAll('#keyboard li');
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('data-keys', '' + keys[i] + '');
}

let count = 1;
window.addEventListener('keydown', function (event) {
    
    if (event.keyCode === 20) {
        
        if (count === 1) {
            document.querySelector('#keyboard li[data-keys="' + event.keyCode + '"]').classList.add('active');
            count = 2;
        }
        else if (count === 2) {
            document.querySelector('#keyboard li[data-keys="' + event.keyCode + '"]').classList.remove('active');
            count = 1;
        }
    }
    else if (event.keyCode !== 20) {
        document.querySelector('#keyboard li[data-keys="' + event.keyCode + '"]').classList.add('active');
    }
    
    window.addEventListener('keyup', function (event) {
        
        if (event.keyCode !== 20) {
            document.querySelector('#keyboard li[data-keys="' + event.keyCode + '"]').classList.remove('active');
        }
        
    })
})