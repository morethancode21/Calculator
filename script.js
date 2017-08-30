$(document).ready(function () {

    var inputs = [""];

    var totalString;

    var operators = ["+", "-", "/", "*", "."];

    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function display() {

        totalString = inputs.join("");
        $("#display").html(totalString); //for functions to check 2 operators together use for loop again
    }

    $("a").click(function () {
        for (var i = 0; i < nums.length; i++) {

            if (this.id == nums[i]) {

                inputs.push(nums[i])

                display();

            }
        }
        if (this.id == '.' && operators.includes(inputs[inputs.length - 1]) == false) {
            inputs.push('.');
            display();
        }
        for (var j = 0; j < operators.length; j++) {
            if (inputs.length !== 1 && this.id == operators[j] && operators.includes(inputs[inputs.length - 1]) == false) {

                inputs.push(operators[j]);

                display();
            }
        }

        if (this.id == "total") {

            $("#display").html(eval(totalString));


        } else if (this.id == "backOne") {

            inputs.pop();
            display();

        } else if (this.id == "deleteAll") {

            inputs = [""];
            display();

        }
    });

});
