angular.module('Curriculum.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      //0. Accueil
      //----------

      .state('accueil', {
        url: '/accueil',
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      })


      //1. Tabs
      //------

      .state('tabsController', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabsController.html'
      })


      //1.1. Presentation générale
      //--------------------------

      .state('tabsController.presentationGenerale', {
        url: '/presentation',
        views: {
          'PresentationGenerale': {
            templateUrl: 'templates/presentationGenerale.html',
            controller: 'presentationGeneraleCtrl'
          }
        }
      })


      //1.2. Classes
      //------------

      .state('tabsController.classes', {
        url: '/classes',
        views: {
          'Classes': {
            templateUrl: 'templates/classes.html',
            controller: 'classesCtrl'
          }
        }
      })


      .state('tabsController.sixieme', {
        url: '/sixieme',
        views: {
          'Classes': {
            templateUrl: 'templates/sixieme.html',
            controller: 'sixiemeCtrl'
          }
        }
      })


      .state('tabsController.introductionModule1', {
        url: '/introductionModule1',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule1.html',
            controller: 'introductionModule1Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule1', {
        url: '/matriceModule1',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule1.html',
            controller: 'matriceModule1Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule1', {
        url: '/ressourceModule1',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule1.html',
            controller: 'ressourceModule1Ctrl'
          }
        }
      })

      .state('tabsController.nombresEntiersNaturelsM1', {
        url: '/nombresEntiersNaturelsM1',
        views: {
          'Classes': {
            templateUrl: 'templates/nombresEntiersNaturels6.html',
            controller: 'nombresEntiersNaturels6Ctrl'
          }
        }
      })

      .state('tabsController.fractionsM1', {
        url: '/fractionsM1',
        views: {
          'Classes': {
            templateUrl: 'templates/fractions6.html',
            controller: 'fractions6Ctrl'
          }
        }
      })


      .state('tabsController.nombresDecimauxArithmetiquesM1', {
        url: '/nombresDecimauxArithmetiquesM1',
        views: {
          'Classes': {
            templateUrl: 'templates/nombresDecimauxArithmetiques6.html',
            controller: 'nombresDecimauxArithmetiques6Ctrl'
          }
        }
      })


      .state('tabsController.nombresDecimauxRelatifsM1', {
        url: '/nombresDecimauxRelatifsM1',
        views: {
          'Classes': {
            templateUrl: 'templates/nombresDecimauxRelatifs6.html',
            controller: 'nombresDecimauxRelatifs6Ctrl'
          }
        }
      })

      .state('tabsController.calculLitteralM1', {
        url: '/calculLitteralM1',
        views: {
          'Classes': {
            templateUrl: 'templates/calculLitteral6.html',
            controller: 'calculLitteral6Ctrl'
          }
        }
      })


      .state('tabsController.introductionModule2', {
        url: '/introductionModule2',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule2.html',
            controller: 'introductionModule2Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule2', {
        url: '/matriceModule2',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule2.html',
            controller: 'matriceModule2Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule2', {
        url: '/ressourceModule2',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule2.html',
            controller: 'ressourceModule2Ctrl'
          }
        }
      })


      .state('tabsController.proportionnaliteM2', {
        url: '/proportionnaliteM2',
        views: {
          'Classes': {
            templateUrl: 'templates/proportionnalite6.html',
            controller: 'proportionnalite6Ctrl'
          }
        }
      })


      .state('tabsController.introductionModule3', {
        url: '/introductionModule3',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule3.html',
            controller: 'introductionModule3Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule3', {
        url: '/matriceModule3',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule3.html',
            controller: 'matriceModule3Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule3', {
        url: '/ressourceModule3',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule3.html',
            controller: 'ressourceModule3Ctrl'
          }
        }
      })

      .state('tabsController.droitesDuPlanM3', {
        url: '/droitesDuPlanM3',
        views: {
          'Classes': {
            templateUrl: 'templates/droitesDuPlan6.html',
            controller: 'droitesDuPlan6Ctrl'
          }
        }
      })


      .state('tabsController.segmentsM3', {
        url: '/segmentsM3',
        views: {
          'Classes': {
            templateUrl: 'templates/segments6.html',
            controller: 'segments6Ctrl'
          }
        }
      })


      .state('tabsController.cercleM3', {
        url: '/cercleM3',
        views: {
          'Classes': {
            templateUrl: 'templates/cercle6.html',
            controller: 'cercle6Ctrl'
          }
        }
      })


      .state('tabsController.anglesM3', {
        url: '/anglesM3',
        views: {
          'Classes': {
            templateUrl: 'templates/angles6.html',
            controller: 'angles6Ctrl'
          }
        }
      })


      .state('tabsController.trianglesM3', {
        url: '/trianglesM3',
        views: {
          'Classes': {
            templateUrl: 'templates/triangles6.html',
            controller: 'triangles6Ctrl'
          }
        }
      })


      .state('tabsController.parallelogrammesM3', {
        url: '/parallelogrammesM3',
        views: {
          'Classes': {
            templateUrl: 'templates/parallelogrammes6.html',
            controller: 'parallelogrammes6Ctrl'
          }
        }
      })


      .state('tabsController.symetriesOrthogonalesM3', {
        url: '/symetriesOrthogonalesM3',
        views: {
          'Classes': {
            templateUrl: 'templates/symetriesOrthogonales6.html',
            controller: 'symetriesOrthogonales6Ctrl'
          }
        }
      })


      .state('tabsController.symetriesCentralesM3', {
        url: '/symetriesCentralesM3',
        views: {
          'Classes': {
            templateUrl: 'templates/symetriesCentrales6.html',
            controller: 'symetriesCentrales6Ctrl'
          }
        }
      })

      .state('tabsController.reperagePointDroiteM3', {
        url: '/reperagePointDroiteM3',
        views: {
          'Classes': {
            templateUrl: 'templates/reperagePointDroite6.html',
            controller: 'reperagePointDroite6Ctrl'
          }
        }
      })

      .state('tabsController.introductionModule4', {
        url: '/introductionModule4',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule4.html',
            controller: 'introductionModule4Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule4', {
        url: '/matriceModule4',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule4.html',
            controller: 'matriceModule4Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule4', {
        url: '/ressourceModule4',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule4.html',
            controller: 'ressourceModule4Ctrl'
          }
        }
      })


      .state('tabsController.cubeEtPaveDroitM4', {
        url: '/cubeEtPaveDroitM4',
        views: {
          'Classes': {
            templateUrl: 'templates/cubeEtPaveDroit6.html',
            controller: 'cubeEtPaveDroit6Ctrl'
          }
        }
      })


      .state('tabsController.cylindreM4', {
        url: '/cylindreM4',
        views: {
          'Classes': {
            templateUrl: 'templates/cylindre6.html',
            controller: 'cylindre6Ctrl'
          }
        }
      })

      .state('tabsController.cinquieme', {
        url: '/cinquieme',
        views: {
          'Classes': {
            templateUrl: 'templates/cinquieme.html',
            controller: 'cinquiemeCtrl'
          }
        }
      })


      .state('tabsController.introductionModule5', {
        url: '/introductionModule5',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule5.html',
            controller: 'introductionModule5Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule5', {
        url: '/matriceModule5',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule5.html',
            controller: 'matriceModule5Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule5', {
        url: '/ressourceModule5',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule5.html',
            controller: 'ressourceModule5Ctrl'
          }
        }
      })


      .state('tabsController.arithmetiqueM5', {
        url: '/arithmetiqueM5',
        views: {
          'Classes': {
            templateUrl: 'templates/arithmetique5.html',
            controller: 'arithmetique5Ctrl'
          }
        }
      })


      .state('tabsController.fractionsM5', {
        url: '/fractionsM5',
        views: {
          'Classes': {
            templateUrl: 'templates/fractions5.html',
            controller: 'fractions5Ctrl'
          }
        }
      })



      .state('tabsController.nombresDecimauxRelatifsM5', {
        url: '/nombresDecimauxRelatifsM5',
        views: {
          'Classes': {
            templateUrl: 'templates/nombresDecimauxRelatifs5.html',
            controller: 'nombresDecimauxRelatifs5Ctrl'
          }
        }
      })


      .state('tabsController.calculLitteralM5', {
        url: '/calculLitteralM5',
        views: {
          'Classes': {
            templateUrl: 'templates/calculLitteral5.html',
            controller: 'calculLitteral5Ctrl'
          }
        }
      })

      .state('tabsController.introductionModule6', {
        url: '/introductionModule6',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule6.html',
            controller: 'introductionModule6Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule6', {
        url: '/matriceModule6',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule6.html',
            controller: 'matriceModule6Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule6', {
        url: '/ressourceModule6',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule6.html',
            controller: 'ressourceModule6Ctrl'
          }
        }
      })


      .state('tabsController.proportionnaliteM6', {
        url: '/proportionnaliteM6',
        views: {
          'Classes': {
            templateUrl: 'templates/proportionnalite5.html',
            controller: 'proportionnalite5Ctrl'
          }
        }
      })


      .state('tabsController.statistiquesM6', {
        url: '/statistiquesM6',
        views: {
          'Classes': {
            templateUrl: 'templates/statistiques5.html',
            controller: 'statistiques5Ctrl'
          }
        }
      })


      .state('tabsController.introductionModule7', {
        url: '/introductionModule7',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule7.html',
            controller: 'introductionModule7Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule7', {
        url: '/matriceModule7',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule7.html',
            controller: 'matriceModule7Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule7', {
        url: '/ressourceModule7',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule7.html',
            controller: 'ressourceModule7Ctrl'
          }
        }
      })


      .state('tabsController.distancesM7', {
        url: '/distancesM7',
        views: {
          'Classes': {
            templateUrl: 'templates/distances5.html',
            controller: 'distances5Ctrl'
          }
        }
      })


      .state('tabsController.trianglesM7', {
        url: '/trianglesM7',
        views: {
          'Classes': {
            templateUrl: 'templates/triangles5.html',
            controller: 'triangles5Ctrl'
          }
        }
      })


      .state('tabsController.polygonesM7', {
        url: '/polygonesM7',
        views: {
          'Classes': {
            templateUrl: 'templates/polygones5.html',
            controller: 'polygones5Ctrl'
          }
        }
      })


      .state('tabsController.symetriesM7', {
        url: '/symetriesM7',
        views: {
          'Classes': {
            templateUrl: 'templates/symetries5.html',
            controller: 'symetries5Ctrl'
          }
        }
      })


      .state('tabsController.anglesM7', {
        url: '/anglesM7',
        views: {
          'Classes': {
            templateUrl: 'templates/angles5.html',
            controller: 'angles5Ctrl'
          }
        }
      })


      .state('tabsController.cercleM7', {
        url: '/cercleM7',
        views: {
          'Classes': {
            templateUrl: 'templates/cercle5.html',
            controller: 'cercle5Ctrl'
          }
        }
      })


      .state('tabsController.reperagePointDroiteM7', {
        url: '/reperagePointDroiteM7',
        views: {
          'Classes': {
            templateUrl: 'templates/reperagePointDroite5.html',
            controller: 'reperagePointDroite5Ctrl'
          }
        }
      })


      .state('tabsController.reperagePointQuadrillageM7', {
        url: '/reperagePointQuadrillageM7',
        views: {
          'Classes': {
            templateUrl: 'templates/reperagePointQuadrillage5.html',
            controller: 'reperagePointQuadrillage5Ctrl'
          }
        }
      })




      .state('tabsController.introductionModule8', {
        url: '/introductionModule8',
        views: {
          'Classes': {
            templateUrl: 'templates/introductionModule8.html',
            controller: 'introductionModule8Ctrl'
          }
        }
      })


      .state('tabsController.matriceModule8', {
        url: '/matriceModule8',
        views: {
          'Classes': {
            templateUrl: 'templates/matriceModule8.html',
            controller: 'matriceModule8Ctrl'
          }
        }
      })


      .state('tabsController.ressourceModule8', {
        url: '/ressourceModule8',
        views: {
          'Classes': {
            templateUrl: 'templates/ressourceModule8.html',
            controller: 'ressourceModule8Ctrl'
          }
        }
      })


      .state('tabsController.prismeDroitM8', {
        url: '/prismeDroitM8',
        views: {
          'Classes': {
            templateUrl: 'templates/prismeDroit5.html',
            controller: 'prismeDroit5Ctrl'
          }
        }
      })


      .state('tabsController.sphereM8', {
        url: '/sphereM8',
        views: {
          'Classes': {
            templateUrl: 'templates/sphere5.html',
            controller: 'sphere5Ctrl'
          }
        }
      })

      //1.3. Ressources
      //---------------

      .state('tabsController.ressources', {
        url: '/ressources',
        views: {
          'Ressources': {
            templateUrl: 'templates/ressources.html',
            controller: 'ressourcesCtrl'
          }
        }
      })


      .state('tabsController.angles6', {
        url: '/angles6',
        views: {
          'Ressources': {
            templateUrl: 'templates/angles6.html',
            controller: 'angles6Ctrl'
          }
        }
      })


      .state('tabsController.calculLitteral6', {
        url: '/calculLitteral6',
        views: {
          'Ressources': {
            templateUrl: 'templates/calculLitteral6.html',
            controller: 'calculLitteral6Ctrl'
          }
        }
      })


      .state('tabsController.cercle6', {
        url: '/cercle6',
        views: {
          'Ressources': {
            templateUrl: 'templates/cercle6.html',
            controller: 'cercle6Ctrl'
          }
        }
      })


      .state('tabsController.cubeEtPaveDroit6', {
        url: '/cubeEtPaveDroit6',
        views: {
          'Ressources': {
            templateUrl: 'templates/cubeEtPaveDroit6.html',
            controller: 'cubeEtPaveDroit6Ctrl'
          }
        }
      })


      .state('tabsController.cylindre6', {
        url: '/cylindre6',
        views: {
          'Ressources': {
            templateUrl: 'templates/cylindre6.html',
            controller: 'cylindre6Ctrl'
          }
        }
      })



      .state('tabsController.droitesDuPlan6', {
        url: '/droitesDuPlan6',
        views: {
          'Ressources': {
            templateUrl: 'templates/droitesDuPlan6.html',
            controller: 'droitesDuPlan6Ctrl'
          }
        }
      })


      .state('tabsController.fractions6', {
        url: '/fractions6',
        views: {
          'Ressources': {
            templateUrl: 'templates/fractions6.html',
            controller: 'fractions6Ctrl'
          }
        }
      })

      .state('tabsController.nombresDecimauxArithmetiques6', {
        url: '/nombresDecimauxArithmetiques6',
        views: {
          'Ressources': {
            templateUrl: 'templates/nombresDecimauxArithmetiques6.html',
            controller: 'nombresDecimauxArithmetiques6Ctrl'
          }
        }
      })


      .state('tabsController.nombresDecimauxRelatifs6', {
        url: '/nombresDecimauxRelatifs6',
        views: {
          'Ressources': {
            templateUrl: 'templates/nombresDecimauxRelatifs6.html',
            controller: 'nombresDecimauxRelatifs6Ctrl'
          }
        }
      })


      .state('tabsController.nombresEntiersNaturels6', {
        url: '/nombresEntiersNaturels6',
        views: {
          'Ressources': {
            templateUrl: 'templates/nombresEntiersNaturels6.html',
            controller: 'nombresEntiersNaturels6Ctrl'
          }
        }
      })


      .state('tabsController.parallelogrammes6', {
        url: '/parallelogrammes6',
        views: {
          'Ressources': {
            templateUrl: 'templates/parallelogrammes6.html',
            controller: 'parallelogrammes6Ctrl'
          }
        }
      })


      .state('tabsController.proportionnalite6', {
        url: '/proportionnalite6',
        views: {
          'Ressources': {
            templateUrl: 'templates/proportionnalite6.html',
            controller: 'proportionnalite6Ctrl'
          }
        }
      })


      .state('tabsController.segments6', {
        url: '/segments6',
        views: {
          'Ressources': {
            templateUrl: 'templates/segments6.html',
            controller: 'segments6Ctrl'
          }
        }
      })



      .state('tabsController.triangles6', {
        url: '/triangles6',
        views: {
          'Ressources': {
            templateUrl: 'templates/triangles6.html',
            controller: 'triangles6Ctrl'
          }
        }
      })



      .state('tabsController.reperagePointDroite6', {
        url: '/reperagePointDroite6',
        views: {
          'Ressources': {
            templateUrl: 'templates/reperagePointDroite6.html',
            controller: 'reperagePointDroite6Ctrl'
          }
        }
      })



      .state('tabsController.symetriesCentrales6', {
        url: '/symetriesCentrales6',
        views: {
          'Ressources': {
            templateUrl: 'templates/symetriesCentrales6.html',
            controller: 'symetriesCentrales6Ctrl'
          }
        }
      })



      .state('tabsController.symetriesOrthogonales6', {
        url: '/symetriesOrthogonales6',
        views: {
          'Ressources': {
            templateUrl: 'templates/symetriesOrthogonales6.html',
            controller: 'symetriesOrthogonales6Ctrl'
          }
        }
      })



      .state('tabsController.angles5', {
        url: '/angles5',
        views: {
          'Ressources': {
            templateUrl: 'templates/angles5.html',
            controller: 'angles5Ctrl'
          }
        }
      })


      .state('tabsController.arithmetique5', {
        url: '/arithmetique5',
        views: {
          'Ressources': {
            templateUrl: 'templates/arithmetique5.html',
            controller: 'arithmetique5Ctrl'
          }
        }
      })



      .state('tabsController.calculLitteral5', {
        url: '/calculLitteral5',
        views: {
          'Ressources': {
            templateUrl: 'templates/calculLitteral5.html',
            controller: 'calculLitteral5Ctrl'
          }
        }
      })



      .state('tabsController.cercle5', {
        url: '/cercle5',
        views: {
          'Ressources': {
            templateUrl: 'templates/cercle5.html',
            controller: 'cercle5Ctrl'
          }
        }
      })


      .state('tabsController.distances5', {
        url: '/distances5',
        views: {
          'Ressources': {
            templateUrl: 'templates/distances5.html',
            controller: 'distances5Ctrl'
          }
        }
      })



      .state('tabsController.fractions5', {
        url: '/fractions5',
        views: {
          'Ressources': {
            templateUrl: 'templates/fractions5.html',
            controller: 'fractions5Ctrl'
          }
        }
      })



      .state('tabsController.nombresDecimauxRelatifs5', {
        url: '/nombresDecimauxRelatifs5',
        views: {
          'Ressources': {
            templateUrl: 'templates/nombresDecimauxRelatifs5.html',
            controller: 'nombresDecimauxRelatifs5Ctrl'
          }
        }
      })


      .state('tabsController.polygones5', {
        url: '/polygones5',
        views: {
          'Ressources': {
            templateUrl: 'templates/polygones5.html',
            controller: 'polygones5Ctrl'
          }
        }
      })


      .state('tabsController.prismeDroit5', {
        url: '/prismeDroit5',
        views: {
          'Ressources': {
            templateUrl: 'templates/prismeDroit5.html',
            controller: 'prismeDroit5Ctrl'
          }
        }
      })


      .state('tabsController.proportionnalite5', {
        url: '/proportionnalite5',
        views: {
          'Ressources': {
            templateUrl: 'templates/proportionnalite5.html',
            controller: 'proportionnalite5Ctrl'
          }
        }
      })



      .state('tabsController.reperagePointDroite5', {
        url: '/reperagePointDroite5',
        views: {
          'Ressources': {
            templateUrl: 'templates/reperagePointDroite5.html',
            controller: 'reperagePointDroite5Ctrl'
          }
        }
      })


      .state('tabsController.reperagePointQuadrillage5', {
        url: '/reperagePointQuadrillage5',
        views: {
          'Ressources': {
            templateUrl: 'templates/reperagePointQuadrillage5.html',
            controller: 'reperagePointQuadrillage5Ctrl'
          }
        }
      })



      .state('tabsController.sphere5', {
        url: '/sphere5',
        views: {
          'Ressources': {
            templateUrl: 'templates/sphere5.html',
            controller: 'sphere5Ctrl'
          }
        }
      })



      .state('tabsController.statistiques5', {
        url: '/statistiques5',
        views: {
          'Ressources': {
            templateUrl: 'templates/statistiques5.html',
            controller: 'statistiques5Ctrl'
          }
        }
      })


      .state('tabsController.symetries5', {
        url: '/symetries5',
        views: {
          'Ressources': {
            templateUrl: 'templates/symetries5.html',
            controller: 'symetries5Ctrl'
          }
        }
      })


      .state('tabsController.triangles5', {
        url: '/triangles5',
        views: {
          'Ressources': {
            templateUrl: 'templates/triangles5.html',
            controller: 'triangles5Ctrl'
          }
        }
      })



    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/accueil');

  });
