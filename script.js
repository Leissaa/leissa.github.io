$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Designer", "Developer", "Student", "Freelancer", "Financial Literate"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Designer", "Developer", "Student", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
28
  });
29
​
30
  // toggle menu/navbar script
31
  $(".menu-btn").click(function () {
32
    $(".navbar .menu").toggleClass("active");
33
    $(".menu-btn i").toggleClass("active");
34
  });
35
​
36
  // typing text animation script
37
  var typed = new Typed(".typing", {
38
    strings: ["Web Designer", "Developer", "Student", "Freelancer", "Financial Literate"],
39
    typeSpeed: 100,
40
    backSpeed: 60,
41
    loop: true,
42
  });
43
​
44
  var typed = new Typed(".typing-2", {
45
    strings: ["Web Designer", "Developer", "Student", "Freelancer"],
46
    typeSpeed: 100,
47
    backSpeed: 60,
48
    loop: true,
49
  });
50
​
51
  // owl carousel script
52
  $(".carousel").owlCarousel({
53
    margin: 20,
54
    loop: true,
55
    autoplay: true,
56
    autoplayTimeOut: 2000,
57
    autoplayHoverPause: true,
58
    responsive: {
59
      0: {
60
        items: 1,
61
        nav: false,
62
      },
63
      600: {
64
        items: 2,
65
        nav: false,
66
      },
67
      1000: {
68
        items: 3,
69
        nav: false,
70
      },
71
    },
72
  });
73
});
74
​

    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
