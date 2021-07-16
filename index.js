var chineseCharList = [
  '男',
  '红',
  '进',
  '店',
  '勾',
  '闭',
  '凶',
  '医',
  '国',
  '树',
  '草'
];

var pinyinList = [
  'nán',
  'hóng',
  'jìn',
  'diàn',
  'gōu',
  'bì',
  'xiōng',
  'yī',
  'guó',
  'shù',
  'cǎo'
];

var meaningList = [
  'male',
  'red',
  'enter',
  'shop',
  'tick',
  'close',
  'fierce',
  'medical',
  'country',
  'tree',
  'grass'
];

var chineseCharPartList = [
  ['力', '刀', '由','田'],
  ['纟', '讠', '土', '工'],
  ['辶', '廴', '开', '井'],
  ['厂', '广', '占', '古'],
  ['勹', 'ㄥ', '㇆', '厶'],
  ['冂', '门', '木', '才'],
  ['丩', '乂', '丷', '凵'],
  ['匸', '匚', '矢', '失'],
  ['囗', '回', '王', '玉'],
  ['木', '寸', '又', '叉'],
  ['十', '艹', '目', '曰']
];

var audioList = [
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E7%94%B7.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E7%BA%A2.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E8%BF%9B.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E5%BA%97.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E5%8B%BE.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E9%97%AD.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E5%87%B6.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E5%8C%BB.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E5%9B%BD.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E6%A0%91.mp4?raw=true',
  'https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/%E8%8D%89.mp4?raw=true'
]

var st_htmls = [
  // 男
  '<div id="st_contents"> <div style="display: flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content" id="top" style="flex: 1;border-bottom:0px;"></div> <div class="st_content" id="down" style="flex: 1;"></div> </div> </div> ',
  // 红
  '<div id="st_contents"> <div style="display: flex; flex-direction: row;height: 95%; width: 100%;"> <div class="st_content" id="left" style="flex:1;border-right:0px;"></div> <div class="st_content" id="right" style="flex:1;"></div> </div> </div>',
  // 进
  '<div id="st_contents"> <div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div style="display:flex; flex: 2;height: 100%; width: 100%;"><div class="st_content outer" id="0" style="flex: 1; border-right:0px; border-bottom:0px"></div><div class="st_content" id="inner" style="flex: 2"></div></div><div class="st_content outer" id="1" style="display:flex; flex: 1; border-top:0px"></div></div></div>',
  // 店
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px"></div><div style="display:flex; flex: 2;height: 100%; width: 100%;"><div class="st_content outer" id="1" style="flex: 1; border-right:0px; border-top:0px"></div><div class="st_content" id="inner" style="flex: 2"></div></div></div></div>',
  // 勾
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px"></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content" id="inner" style="flex: 2;" ></div> <div class="st_content outer" id="1" style="flex: 1;border-top:0px;border-left:0px" ></div> </div> </div></div>',
  // 闭
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"> <div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="1" style="flex: 1;border-top:0px;border-right:0px" ></div>  <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-top:0px;border-left:0px" ></div> </div> </div></div>',
  // 凶
  '<div id="st_contents"> <div style="display:flex; flex-direction: column;height: 95%; width: 100%;" > <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="1" style="flex: 1;border-bottom:0px;border-right:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-bottom:0px;border-left:0px" ></div> </div> <div class="st_content outer" id="0" style="display:flex; flex: 1; border-top:0px" ></div> </div></div>',
  // 医
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="1" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="0" style="flex: 1;border-bottom:0px;border-right:0px;border-top:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> </div> <div class="st_content outer" id="2" style="display:flex; flex: 1; border-top:0px" ></div> </div> </div>',
  // 国
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;">  <div class="st_content outer" id="1" style="flex: 1;border-bottom:0px;border-right:0px;border-top:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-bottom:0px;border-left:0px;border-top:0px" ></div> </div> <div class="st_content outer" id="3" style="display:flex; flex: 1; border-top:0px" ></div> </div> </div>',
  // 树
  '<div id="st_contents"> <div style="display: flex; flex-direction: row;height: 95%; width: 100%;"><div class="st_content" id="left" style="flex: 1;border-right:0px;"></div> <div class="st_content" id="mid" style="flex: 1;"></div> <div class="st_content" id="right" style="flex: 1;border-left:0px;"></div> </div> </div>',
  // 草
  '<div id="st_contents"> <div style="display: flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content" id="top" style="flex: 1;border-bottom:0px;"></div> <div class="st_content" id="mid" style="flex: 1;"></div> <div class="st_content" id="down" style="flex: 1;border-top:0px;"></div> </div> </div>'
];

var st_temp_bg = '<div id="st_container_full" class="st_temp_bg"  style="z-index: 100"></div> <div id="st_container_0" class="st_temp_bg" style="z-index: 100"></div> <div id="st_container_1" class="st_temp_bg"  style="z-index: 10"></div><div id="st_container_2" class="st_temp_bg"  style="z-index: 1"></div>';

// randomly display at parts
$(document).ready(function() {
  var currentItem = 0;
  var isGaming = false;
  var part = '';
  var isOuterFull = false;
  var counter = 0;
  var isSimple = true;
  var isPYHintDisplaying = false;
  var isMeaningHintDisplaying = false;
  var isCharHintDisplaying = false;
  var st_background = '';
  var fullyRightAudio = new Audio('https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/full.mp4?raw=true');
  var rightAudio = new Audio('https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/right3.mp4?raw=true');
  var wrongAudio = new Audio('https://github.com/wyt-sonia/ChineseCharLearningWeb/blob/master/asset/audio/wrong2.mp4?raw=true');

  freshUI(-1);
  var st_containerW = $("#st_container").width();
  $('#st_container').css({'height': st_containerW+'px'});

  $('#nextBtn').click(function() {
    st_background = "";
    currentItem++;
    counter = 0;
    $('#nextBtn').prop('disabled', true);
    if (currentItem == 10) {
      $('#nextBtn').fadeOut(1);
    }

    $('#q_title').fadeOut(500, function() {
        $('#q_title').css('color', 'white');
        $('#q_title').html('Question ' + (currentItem + 1));
        $('#q_title').fadeIn();
      });

    $(".st_content").css("border-color", "white");

    toggleIsSimple(currentItem);
    initST(currentItem);
    initParts(currentItem);
    dismissHintContent();
  });

  $('#startBtn').click(function() {
    counter = 0;
    $('#nextBtn').prop('disabled', true);
    $(".st_content").css("border-color", "white");
    if (currentItem != 0 && isGaming) {
      currentItem = 0;
      freshUI(-1);
    }
    toggleContents(isGaming);
    initST(0);
    initParts(0);
    dismissHintContent();
    st_background = "";
    $('#st_container').css({
        background: st_background
      });
    isGaming = !isGaming;
  });

  $('.successModalCloseBtn').click(function() {
      togglePY();
      toggleMeaning();
      toggleChar();
  });

  $('#pinyin').click(function() {
    togglePY();
  });

  $('#meaning').click(function() {
    toggleMeaning();
  });

  $('#chinese_char').click(function() {
    toggleChar();
  });

  $(document).on('dragstart', '.parts', function(event) {
    part = event.target.id;
    $('#q_title').css('color', 'white');
    $('#q_title').html('Question ' + (currentItem + 1));
  });

  $(document).on('dragover', '.st_content', function(event, this) {
    if (!isSimple && event.target.id != 'inner') {
      if (!isOuterFull) {
        event.preventDefault();
        $('.outer').css({
          backgroundColor: 'white',
          opacity: '0.3',
          transition: 'all 0.3s ease'
        });
      }
    } else {
      if (this.childElementCount == 0) {
        event.preventDefault();
        $(event.target).css({
          backgroundColor: 'white',
          opacity: '0.3',
          transition: 'all 0.3s ease'
        });
      }
    }
  });

  $(document).on('dragleave', '.st_content', function(event, this) {
    partFadeBack(event);
  });

  $(document).on('drop', '.st_content', function(event, this) {
    if (isCorrect(event)) {
      partFadeBack(event);

      $('#q_title').css('color', 'rgb(92, 184, 92)');
      $('#q_title').html('That was a right move ;)');

      var bgURL = '';
      if (isSimple || event.target.id == 'inner') {
        bgURL = 'https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/' + chineseCharList[currentItem] + '/' + event.target.id +'.png';
      } else {
        bgURL = 'https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/' + chineseCharList[currentItem] + '/outer.png';
      }
      var comma = '';
      if (st_background.length != 0) {
        comma = ',';
      }
      st_background += comma + ' url(\'' + bgURL + '\') no-repeat 50% 30%';

      document.getElementById(part).classList.remove("btn");
      document.getElementById(part).classList.remove("btn-outline-warning");
      document.getElementById(part).classList.remove("btn-outline-primary");
      document.getElementById(part).classList.remove("btn-outline-info");
      document.getElementById(part).classList.remove("btn-outline-success");
      document.getElementById(part).setAttribute('draggable', false);
      $('#'+part).html('');
      $('#st_container').css({
        background: st_background
      });

      $("#" + part).css ({
        paddingBottom: '10px',
        color: 'white',
        margin: '0',
        width: '100%',
        textAline: 'center',
      });
      if (isFullyCorrect()) {
        var bgURL = 'https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/' + chineseCharList[currentItem] + '/' + chineseCharList[currentItem] +'.png';

        counter = 0;
        isOuterFull = false;
        $(".st_content").css("border-color", "#5bc0de");
        $('#q_title').css('color', 'rgb(92, 184, 92)');
        $('#q_title').html('Great! You got it right XD');

        fullyRightAudio.play();

        togglePY();
        toggleMeaning();
        toggleChar();
        setTimeout(function(){
        $('#nextBtn').prop('disabled', false);
        },500);
        
        //$('#successModal').modal('show');
      } else {
        rightAudio.play();
      }
    } else {
      //$('#wrongAttemptModal').modal('show');
      wrongAudio.play();
      $('#q_title').css('color', 'rgb(217, 83, 79)');
      $('#q_title').html('That was a wrong attempt :(');
      partFadeBack(event);
    }
  });

  function toggleIsSimple(currentItem) {
    if (currentItem < 9 && currentItem > 1) {
      isSimple = false;
    } else {
      isSimple = true;
    }
  }

  function isFullyCorrect() {
    counter++;
    if (currentItem < 9) {
      return counter == 2;
    } else {
      return counter == 3;
    }
  }

  function partFadeBack(event) {
    if (!isSimple && event.target.id != 'inner') {
      if (!isOuterFull) {
        $('.outer').css({
          backgroundColor: 'transparent',
          opacity: '1',
          transition: 'all 0.3s ease'
        });
      }
    } else {
      if (document.getElementById(event.target.id).childElementCount == 0) {
        $(event.target).css({
          backgroundColor: 'transparent',
          opacity: '1',
          transition: 'all 0.3s ease'
        });
      }
    }
  }

  function isCorrect(event) {
    var result = true;
    switch (currentItem) {
      case 0:
        if (
          (event.target.id == 'top' && part != '田') ||
          (event.target.id == 'down' && part != '力')
        ) {
          result = false;
        }
        break;
      case 1:
        if (
          (event.target.id == 'right' && part != '工') ||
          (event.target.id == 'left' && part != '纟')
        ) {
          result = false;
        }
        break;
      case 2:
        if (
          (event.target.id == 'inner' && part != '井') ||
          (event.target.id != 'inner' && part != '辶')
        ) {
          result = false;
        }
        break;
      case 3:
        if (
          (event.target.id == 'inner' && part != '占') ||
          (event.target.id != 'inner' && part != '广')
        ) {
          result = false;
        }
        break;
      case 4:
        if (
          (event.target.id == 'inner' && part != '厶') ||
          (event.target.id != 'inner' && part != '勹')
        ) {
          result = false;
        }
        break;
      case 5:
        if (
          (event.target.id == 'inner' && part != '才') ||
          (event.target.id != 'inner' && part != '门')
        ) {
          result = false;
        }
        break;
      case 6:
        if (
          (event.target.id == 'inner' && part != '乂') ||
          (event.target.id != 'inner' && part != '凵')
        ) {
          result = false;
        }
        break;
      case 7:
        if (
          (event.target.id == 'inner' && part != '矢') ||
          (event.target.id != 'inner' && part != '匚')
        ) {
          result = false;
        }
        break;
      case 8:
        if (
          (event.target.id == 'inner' && part != '玉') ||
          (event.target.id != 'inner' && part != '囗')
        ) {
          result = false;
        }
        break;
      case 9:
        if (part == '木') {
          result = event.target.id == 'left';
        } else if (part == '寸') {
          result = event.target.id == 'right';
        } else if (part == '又') {
          result = event.target.id == 'mid';
        } else {
          result = false;
        }
        break;
      case 10:
        if (part == '艹') {
          result = event.target.id == 'top';
        } else if (part == '曰') {
          result = event.target.id == 'mid';
        } else if (part == '十'){
          result = event.target.id == 'down';
        } else {
          result = false;
        }
        break;
    }
    return result;
  }

  function freshUI(currentItem) {
    dismissHintContent(currentItem);
    if (currentItem == -1) {
      $('#nextBtn').fadeOut(1);
    }
  }

  function toggleContents(isGaming) {
    if (!isGaming) {
      $('#nextBtn').fadeIn(1000);
      $('#q_title').css('color', 'white');
      $('#q_title').html('Question ' + (currentItem + 1));

      $('.cover_container').fadeIn(1000);

      $('#startBtn').fadeOut(500, function() {
        $('#startBtn').html('Back to Home');
        $('#startBtn').fadeIn();
      });

      $('body').fadeOut(500);
      $('body').fadeOut(500, function() {
        $('body').css({
          background:
            "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/bg.png')",

          'background-repeat': 'repeat'
        });
        $('#container').css({
          backgroundColor: 'transparent'
        });
        $('body').fadeIn(1000);

        $('#cover_container').fadeOut(1);
        $('#game_container').fadeIn(1000);
      });
    } else {
      $('#nextBtn').fadeOut(500);

      $('.cover_container').fadeIn(1000);

      $('#container').css({
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        });

      $('#startBtn').fadeOut(500, function() {
        $('#startBtn').html('Start the game');
        $('#startBtn').fadeIn();
      });

      $('body').fadeOut(500, function() {
        $('body').css({
          background:
            "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/chars7.jpg')",
          'background-size': 'cover'
        });
        $('body').fadeIn(1000);
        $('#game_container').fadeOut(1);
        $('#cover_container').fadeIn(1000);
      });
    }
  }

  function togglePY() {
    if (!isPYHintDisplaying) {
      $('#pinyin').fadeOut(500, function() {
        document.getElementById('pinyin').classList.remove("btn");
        document.getElementById('pinyin').classList.remove("btn-outline-light");
        var audio = '<audio controls id="pyAudio" autoplay> <source src=\''+ audioList[currentItem]+'\' type="audio/mpeg"> Your browser does not support the audio element. </audio>';
        $('#pinyin').html('Pin Yin: ' + pinyinList[currentItem] + audio);
        
        $('#pinyin').fadeIn();
      });
      isPYHintDisplaying = true;
    } else {
      isPYHintDisplaying = false;
    }
  }

  function toggleMeaning() {
    if (!isMeaningHintDisplaying) {
      $('#meaning').fadeOut(500, function() {
        document.getElementById('meaning').classList.remove("btn");
        document.getElementById('meaning').classList.remove("btn-outline-light");
        $('#meaning').html('Meaning: ' + meaningList[currentItem]);
        $('#meaning').fadeIn();
        isMeaningHintDisplaying = true; 
      });
    } else {
      isMeaningHintDisplaying = false;
    }

  }

  function toggleChar() {
    if (!isCharHintDisplaying) {
      $('#chinese_char').fadeOut(500, function() {
        document.getElementById('chinese_char').classList.remove("btn");
        document.getElementById('chinese_char').classList.remove("btn-outline-light");      
        $('#chinese_char').html(chineseCharList[currentItem]);
        document.getElementById('chinese_char').classList.add("h1");
        document.getElementById('chinese_char').classList.add("fontKai");
        $('#chinese_char').fadeIn();
      });
      isCharHintDisplaying = true;
    } else {
      isCharHintDisplaying = false;
    }
  }

  function dismissHintContent() {
    isPYHintDisplaying = false;
    isCharHintDisplaying = false;
    isMeaningHintDisplaying = false;
    $('#meaning').fadeOut(500, function() {
      document.getElementById('meaning').classList.add("btn");
      document.getElementById('meaning').classList.add("btn-outline-light");
      $('#meaning').html('Meaning Hint');
      $('#meaning').fadeIn();
      });
    $('#pinyin').fadeOut(500, function() {
      document.getElementById('pinyin').classList.add("btn");
      document.getElementById('pinyin').classList.add("btn-outline-light");
      $('#pinyin').html('Pin Yin Hint');
      $('#pinyin').fadeIn();
      });
    $('#chinese_char').fadeOut(500, function() {
      document.getElementById('chinese_char').classList.add("btn");
      document.getElementById('chinese_char').classList.add("btn-outline-light");
      document.getElementById('chinese_char').classList.remove("h1");
      document.getElementById('chinese_char').classList.remove("fontKai");
      $('#chinese_char').html('Result Character');
      $('#chinese_char').fadeIn();
      });
  }

  function initST(currentItem) {
    
    $('#st_container').fadeOut(500, function() {
      $('#st_container').html(st_htmls[currentItem]);
      $('#st_container').css({
        'background-image' : 'none'
      });
      $('#st_container').fadeIn();
    });
  }

  function initParts(currentItem) {
    $('#parts_items_container').fadeOut(500, function() {
      $('#parts_items_container').html(getParts(currentItem)); 
      $('#parts_items_container').fadeIn();
    });
  }

  function getParts(currentItem) {
    var partsHtml = '';
    var colorList = ['success', 'warning', 'info', 'primary'];
    for (i = 0; i < chineseCharPartList[currentItem].length; i++) {
      var style = "";
      var content = "";
      var xiong = "";

      if ( currentItem == 6 && i == 1) {
        var imgSrc = 'https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/凶/inner_yellow.png';
        content = '<img id="inner_xiong" draggable=\'fals\'  src="' + imgSrc + '" width="40"/>';
        xiong = 'xiong';

        $(document).on({
          mouseenter: function () {
              $('#inner_xiong').attr('src','https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/凶/inner.png');
          },
          mouseleave: function () {
              $('#inner_xiong').attr('src','https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/charBG/凶/inner_yellow.png');
          }
        }, ".xiong");

      } else {
          content = chineseCharPartList[currentItem][i]
      }
      
      partsHtml +=
        "<div id='" +
        chineseCharPartList[currentItem][i] +
        '\' class=\'fontKai '+ xiong + ' parts btn btn-outline-'+colorList[i]+'\' draggable=\'true\' '+ style +'>' + content +  
        '</div>'; 
        
    }
    return partsHtml;
  }
});




