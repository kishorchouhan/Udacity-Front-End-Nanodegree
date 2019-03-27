/* OLD CODE */

/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
/*(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());

*/
/* STUDENT APPLICATION */
/*$(function() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());*/

/* Refactored Code */
(function () {

    /* ======== Model ======== */

    var model = {
        init: function () {
            if (!localStorage.attendance) {
                console.log('Creating attendance records...');

                let attendance = {},
                    nameColumns = octopus.fetchNameCols();

                function getRandom() {
                    return (Math.random() >= 0.5);
                }

                nameColumns.each(function () {
                    var name = $(this).text();
                    attendance[name] = [];

                    for (var i = 0; i <= 11; i++) {
                        attendance[name].push(getRandom());
                    }
                });

                localStorage.attendance = JSON.stringify(attendance);
            }
        }
    };

    /* ======== Octopus ======== */
    var octopus = {
        init: function () {
            model.init();
            view.init();
        },
        fetchNameCols: function() {
            return view.getNameCol();
        },
        fetchAttendance: function() {
            return JSON.parse(localStorage.attendance);
        },
        updateAttendance: function(attendace) {
            localStorage.attendace = JSON.stringify(attendace);
        }
    };

    /* ======== View ======== */
    var view = {
        init: function () {
            const attendance = octopus.fetchAttendance();
            $.each(attendance, function(name, days) {
                const studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
                    dayChecks = $(studentRow).children('.attend-col').children('input');

                dayChecks.each(function(i, box) {
                    $(box).prop('checked', days[i]);
                });
            });
            view.renderMissed();
            $('input').click(function(e) {
                view.renderMissed();

                $.each(attendance, function(name, days) {
                    const studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
                        dayChecks = $(studentRow).children('.attend-col').children('input'),
                        checks = [];
    
                    dayChecks.each(function() {
                        checks.push($(this).prop('checked'));
                    });
                    attendance[name] = checks;
                });
                octopus.updateAttendance(attendance);
            });
        },

        getNameCol: function() {
            return $('td.name-col');
        },

        renderMissed: function () {
            const missedCols = $('tbody .missed-col');
            missedCols.each(function() {
                let numMissed = 0,
                    boxes = $(this).siblings('.attend-col').children();
                boxes.each(function() {
                    if($(this).prop('checked') == true) {
                        numMissed++;
                    };
                });

                $(this).text(numMissed);
            });
        }
    };

    octopus.init();
    
})();