$(document).ready(function () {

  // MODAL
  var modalText = {
    ludo: {
      title: 'LocoLudo',
      tag: 'Ludo game',
      detail: 'A multiplayer ludo game with beautiful UI',
    },
    bubbletone: {
      title: 'BubbleTone',
      tag: 'Real-time communication. Anytime and anywhere.',
      detail: 'BubbleTone is a free/paid calling and messaging platform that helps you stay connected without the need for high-speed internet. It has many features like voice and video call in high quality over a secure chanel, call recording, sending SMS, group messages in "Private" and "Open" modes, sending a variety of types of messages: voice, photo, video, text, smiles, gif, contacts, location, files etc., sending messages to the future and burning messages, conference Call, hides the message and messages are protected end-to-end encryption, and much more.',
      link: 'https://itunes.apple.com/us/app/bubbletone/id1298142945'
    },
    babylon: {
      title: 'MobiGap',
      tag: 'Real-time communication. Anytime and anywhere.',
      detail: 'MobiGap is a special program designed to communicate and make voice / video calls within the application, as well as sharing media files between users. Registration in the MobiGap application is made only from the Babilon Mobile number, which, after installation, is automatically synchronized with the contact list of your phone and determines which of your contacts already has MobiGap installed. ',
      link: 'https://itunes.apple.com/tm/app/mobi%D0%B3%D0%B0%D0%BF/id1347148941'
    },
    tic: {
      title: 'Unbeatable Tic-Tac-Toe',
      tag: 'Unbeatable Tic-Tac-Toe',
      detail: 'A human versus AI Tic-Tac-Toe game',
    },
    salam: {
      title: 'Salam!',
      tag: 'FREE COMMUNICATION WORLDWIDE ',
      detail: 'WITH the Salam app! You can exchange multimedia files for free: photos, videos, documents, voice messages with relatives anywhere in the world. Communicate via the Internet without a subscription fee and any restrictions. For the application Salam! need any internet connection or wifi. In this case, the rates of your operator may apply.All Salam chats! protected by end-to-end encryption technology, which ensures complete security and confidentiality of correspondence. No one can decrypt and read the data during its transmission. Say goodbye to typos. Salam! will help to correct messages not only in groups, but also in ordinary private chat rooms.',
      link: 'https://appadvice.com/game/app/salam/1329656277',
    },
    e_answer_script_receive: {
      title: 'E - Answer Script Receive',
      tag: 'QR-code Scanner',
      detail: 'The application is made to receive and log answer scripts of public examinations taken by Bangladesh Madrasah Education Board. This application works by scanning QR code that is located on the top of answer-scripts\' bundle and logs the data. Then, these data are collected from the devices.',
      link: 'https://play.google.com/store/apps/details?id=com.singularsofts.e_answer_script_receive',
    },
    auto_message_mac: {
      title: 'Discord Level Up (Auto Message)',
      tag: 'Mac Application for Auto messaging',
      detail: 'With \'Discord Level Up (Auto Message), you can easily level up in discord server. You can also send scheduled/auto message in any messenger application.',
      link: 'https://sourceforge.net/projects/discord-level-up-auto-message/',
    },
    board_sim: {
      title: 'EIIN SIM',
      tag: 'QR-code Scanner',
      detail: 'This app authenticates the application of official SIM withdrawal application of an institution related to the Education Boards of Bangladesh. ',
      link: 'https://play.google.com/store/apps/details?id=com.bmeb.allboard.sim_issue',
    },
    auto_message_windows: {
      title: 'Discord Level Up (Auto Message)',
      tag: 'Windows Application for Auto messaging',
      detail: 'With \'Discord Level Up (Auto Message), you can easily level up in discord server. You can also send scheduled/auto message in any messenger application.',
      link: 'https://sourceforge.net/projects/discord-level-up-auto-msg-exe/',
    },
    islamic_times: {
      title: 'Islamic Times',
      tag: 'Progressive Web Application on Islamic Times',
      detail: 'You can easily find prayer times and hijri date on islamic times PWA.',
      link: 'https://islamictimes.pages.dev',
    },
    blog: {
      title: 'JawadAsif\'s Scribbles',
      tag: "NextJS GraphQL",
      detail: 'My blog built using NextJS and GraphQL',
      link: 'https://blog.jawadasif.vercel.app/',
    },
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () { shiftSlide(-1) })
  $('#prev').click(function () { shiftSlide(1) })

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform', 'translateX(0px)');
    }, 700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
      .parent()
      .attr('href', modalText[id].link)

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });

    });
  }
})
