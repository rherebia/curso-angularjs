angular.module('minhasDiretivas', ['meusServicos'])
    .directive('meuPainel', function() {
        // directive definition object
        var ddo = {};
        
        // attribute or element
        ddo.restrict = "AE";
        
        ddo.scope = {
            titulo : '@'
        }
        
        // permitir elementos filhos
        ddo.transclude = true;
        
        ddo.templateUrl = 'js/directives/meu-painel.html';
        
        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {};
    
        ddo.restrict = "AE";
    
        ddo.scope = {
            url : '@',
            titulo : '@'
        }
        
        ddo.templateUrl = 'js/directives/minha-foto.html'
    
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
    
        ddo.restrict = "E";
    
        ddo.scope = {
            nome : '@',
            acao : '&'
        }
        
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>'
    
        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};
    
        ddo.restrict = 'A';
    
        ddo.link = function(scope, element) {
            scope.on('fotoCadastrada', function() {
                element[0].focus();
                
            });
        };
    
        return ddo;
    })
    .directive('meusTitulos', function() {
        var ddo = {};
    
        ddo.restrict = 'E';
    
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });
            })
        };
    
        return ddo;
    });