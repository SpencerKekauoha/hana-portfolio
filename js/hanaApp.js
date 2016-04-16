angular.module("hanaApp", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "js/home/homeTmpl.html",
        controller: "homeCtrl"
      })
      .state("about", {
        url: "/about",
        templateUrl: "js/about/aboutTmpl.html",
        controller: "aboutCtrl"
      })
      .state("portfolio", {
        url: "/portfolio",
        templateUrl: "js/portfolio/portfolioTmpl.html",
        controller: "portfolioCtrl"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "js/contact/contactTmpl.html",
        controller: "contactCtrl"
      })
      .state("pompom", {
        url: "/portfolio/pompom",
        templateUrl: "js/portfolio/pom/pomTmpl.html",
        controller: "pomCtrl"
      })
      .state("ring", {
        url: "/portfolio/ring",
        templateUrl: "js/portfolio/ring-ring/ringTmpl.html",
        controller: "ringCtrl"
      })
      .state("starwars", {
        url: "/portfolio/starwars",
        templateUrl: "js/portfolio/starwars/starwarsTmpl.html",
        controller: "ringCtrl"
      })
      .state("weddings", {
        url: "/portfolio/weddings",
        templateUrl: "js/portfolio/weddings/weddingsTmpl.html",
        controller: "weddingsCtrl"
      })
      .state("freehand", {
        url: "/portfolio/freehand",
        templateUrl: "js/portfolio/freeHand/freeHand.Tmpl.html",
        controller: "freeHandCtrl"
      })
      .state("yokai", {
        url: "/portfolio/yokai",
        templateUrl: "js/portfolio/yokai/yokaiTmpl.html",
        controller: "yokaiCtrl"
      })
      .state("commercial", {
        url: "/portfolio/commercial",
        templateUrl: "js/portfolio/commercial/commercialTmpl.html",
        controller: "commercialCtrl"
      })
      .state("star", {
        url: "/portfolio/star",
        templateUrl: "js/portfolio/star/starTmpl.html",
        controller: "starCtrl"
      })

      $urlRouterProvider
        .otherwise("/home")




  })
