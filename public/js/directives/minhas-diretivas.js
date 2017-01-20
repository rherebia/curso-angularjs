angular.module('minhasDiretivas', [])
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
    });