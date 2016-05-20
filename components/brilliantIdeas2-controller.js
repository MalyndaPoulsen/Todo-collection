
angular.module('todo-collection')
    .controller('BrilliantIdeas2Controller', function () {
        var bcc = this;
        bcc.buttonGrow= function(){
            
        }
        // bcc.buttonGrow = function($event) {
        //     console.log('Over: ', $event);
        // }
        
        // bcc.buttonShrink = function($event) {
        //     console.log('Leave: ', $event);
        // }
        
        // bcc.operation = 'inches-to-feet'
        bcc.cal = function (expression) {
            if (bcc.operation == "inches-to-feet") {
                bcc.result = expression / 12;
            }
             if (bcc.operation == "feet-to-inches") {
                bcc.result = expression * 12;
            }
            if (bcc.operation == "miles-to-kilometers") {
                bcc.result = expression * 1.60934;
            }
              if (bcc.operation == "kilometers-to-miles") {
                bcc.result = expression * 0.6214;
            }
                 if (bcc.operation == "pounds-to-kilos") {
                bcc.result = expression * 0.453592;
            }
             if (bcc.operation == "kilos-to-pounds") {
                bcc.result = expression * 2.20462;
            }
                if (bcc.operation == "fahrenheit-to-celcius") {
                bcc.result = (expression -32) * 5/9;
            }
               if (bcc.operation == "celcius-to-fahrenheit") {
                bcc.result = (expression * 9/5) + 32;
            }
                bcc.newExpression = "";
        }

    });

