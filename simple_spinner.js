$( document ).ready(function() {
    var amountSpinner;

    $.fn.simpleSpinner = function(options) {
        var $down, $input, $max, $min, $step, $this, $up, $value, defaults;
        if (options == null) {
            options = {};
        }
        defaults = {
            value: 0.00,
            step: 0.01,
            min: 0,
            max: 99
        };
        options = $.extend(defaults, options);
        $this = this;
        $input = $this.find('.simple-spinner-input');
        $value = parseFloat(options.value);
        $step = options.step;
        $min = options.min;
        $max = options.max;
        $up = $this.find($('.simple-spinner-up'));
        $down = $this.find($('.simple-spinner-down'));
        $input.val($value.toFixed(2));
        $input.on("keyup", function() {
            var tempVal;
            tempVal = parseFloat($input.val().replace(/[^0-9.]/g, ''));
            if (isNaN($input.val())) {
                $input.val(0);
            }
            return $value = parseFloat(tempVal);
        });
        $up.on("click", function() {
            console.log("up click")
            var tempValue;
            tempValue = parseFloat($input.val());
            tempValue = tempValue + $step;
            if (tempValue > $max) {
                tempValue = $max;
            }
            if (tempValue < $min) {
                return tempValue = $min + $step;
            } else {
                return $input.val(parseFloat(tempValue).toFixed(2));
            }
        });
        return $down.on("click", function() {
            console.log("down click")
            var tempValue;
            tempValue = parseFloat($input.val());
            tempValue = tempValue - $step;
            if (tempValue < $min) {
                tempValue = $min;
            }
            if (tempValue > $max) {
                return tempValue = $max - $step;
            } else {
                return $input.val(parseFloat(tempValue).toFixed(2));
            }
        });
    };
    amountSpinner = $('.amount-spinner');

    amountSpinner.simpleSpinner({
        value: amountSpinner.data('max'),
        max: amountSpinner.data('max')
    });
});
