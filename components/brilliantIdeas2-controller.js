
angular.module('todo-collection')
    .controller('BrilliantIdeas2Controller', function () {
        var bcc = this;
        bcc.operation = 'inches-to-feet'
        bcc.cal = function (expression) {
            if (bcc.operation == "inches-to-feet") {
                bcc.newExpression = expression / 12;
            }
            bcc.expression = "";
        }

    });

