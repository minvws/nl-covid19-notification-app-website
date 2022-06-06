active_users_number = document.getElementById('active_users_number');

        warnings_number = document.getElementById('warnings_number');

        tp_tested_total = document.getElementById('tp_tested_total');
        tp_tested_positive = document.getElementById('tp_tested_positive');

        tests_total = document.getElementById('tests_total');
        tests_tested_positive = document.getElementById('tests_tested_positive');

        const active_users_table = document.getElementById("active_users_table");
        const warnings_table = document.getElementById("warnings_table");
        const tests_table = document.getElementById("tests_table");
         
        function constructTable(selectedData, selected_table) {
            // loop through all the data objects in the requested JSON
            for (let i = 0; i < selectedData.length; i++) {
                // store object in a variable
                const statsObject = Object.values(selectedData[i]);

                // turn today's date into a string we can compare to a date string in the JSON
                const today = new Date();
                const currentMonthYear = today.toLocaleString("nl", { "month": "numeric" }) + today.toLocaleString("nl", { "year": "numeric" });
                const dataMonthYear = statsObject[0].toLocaleString("nl", { "month": "numeric" }) + statsObject[0].toLocaleString("nl", { "year": "numeric" });

                // get the number of key value pairs
                let number_of_key_value_pairs = Object.values(selectedData[i]).length;

                // convert the value shown in the table column later
                function getColumnValue(valueID) {
                    if (typeof(statsObject[valueID]) == 'number') {
                        columnValue = Math.round(statsObject[valueID]);
                        return new Intl.NumberFormat('nl-NL', {  }).format(columnValue)
                    } else {
                        return statsObject[valueID];
                    }
                }

                // add an asterisk if the current month is the last month in the JSON
                if (dataMonthYear === currentMonthYear) {
                    // statsIncomplete += `*`;
                } else {
                    statsIncomplete = ``;
                }

                // create a row string, adding html and content to it
                let statsRow = ``;
                 
                statsRow += `<tr>`;

                statsRow += `<td>
                    ${statsObject[0].toLocaleString("nl", { "month": "long", "year": "numeric" })} ${statsIncomplete}
                </td>`;

                for (let j = 1; j < number_of_key_value_pairs; j++) {
                    statsRow += `<td>${getColumnValue(j)}</td>`
                }

                statsRow += `</tr>`;
                selected_table.innerHTML += statsRow;

            }
        }


        function updateStatisticNumber(selectedData, selectedKey, selectedElement) {
            for (let i = 0; i < selectedData.length; i++) {
                if (i == (selectedData.length -1)) {
                    function getValue(valueID) {
                        valueToGet = Math.round(valueID);
                        return new Intl.NumberFormat('nl-NL', {  }).format(valueToGet)
                    }
                
                    statisticNumber = getValue(selectedData[i][selectedKey]);
                }
            } 

            selectedElement.innerHTML = statisticNumber;
        }

        function getTotals(selectedData, selectedElement) {
            function getValue(valueID) {
                valueToGet = Math.round(valueID);
                return new Intl.NumberFormat('nl-NL', {  }).format(valueToGet)
            }
        
            statisticNumber = getValue(selectedData);

            selectedElement.innerHTML = statisticNumber;
        }

        // constructTable(selectedData, selected_table) 
        constructTable(active_users, active_users_table);
        constructTable(shared_keys, warnings_table);
        constructTable(positive_results_after_notification, tests_positive_table);
        constructTable(positive_results_without_complaints_after_notification, tests_complaints_table);

        // updateStatisticNumber(selectedData, selectedKey, selectedElement) 
        updateStatisticNumber(active_users, 'active_users', active_users_number);
        updateStatisticNumber(shared_keys, 'cumulative_shared_keys', warnings_number);
        
        // getTotals(selectedData, selectedElement)
        getTotals(totals.total_tested, tp_tested_total); 
        getTotals(totals.tested_positive, tp_tested_positive);

        getTotals(positive_results_without_complaints_after_notification_totals.total_tested_positive, total_tested_positive);       
        getTotals(positive_results_without_complaints_after_notification_totals.tested_positive_without_complaints, tested_positive_without_complaints);
