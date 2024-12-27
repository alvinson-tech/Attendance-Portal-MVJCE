// Define an array of student data
var students = [
    { usn: "USN: 01", name: "A LAVANYA" },
    { usn: "USN: 02", name: "A S BINUSHA" },
    { usn: "USN: 03", name: "AAKANKSHA ANIL KUMAR" },
    { usn: "USN: 04", name: "ABDUL TOUHEED" },
    { usn: "USN: 05", name: "ABHISHEK A" },
    { usn: "USN: 06", name: "ABHISHEK K" },
    { usn: "USN: 07", name: "ABHISHEK S S" },
    { usn: "USN: 08", name: "ADITYA SURESH" },
    { usn: "USN: 09", name: "AKASH SURENDRA" },
    { usn: "USN: 10", name: "AKSHATA SURESH" },
    { usn: "USN: 11", name: "AKSHAY H" },
    { usn: "USN: 12", name: "ALVIN SONNY" },
    { usn: "USN: 13", name: "AMULYA G GOUDA" },
    { usn: "USN: 14", name: "ANAGHASHREE G K" },
    { usn: "USN: 15", name: "ANANYA SANJIV" },
    { usn: "USN: 16", name: "ANIKETHA H N" },
    { usn: "USN: 17", name: "ANKITA CHARAN PAHADI" },
    { usn: "USN: 18", name: "ANUSHREE D S" },
    { usn: "USN: 19", name: "ARALUR DARSHANKUMAR" },
    { usn: "USN: 20", name: "ARFA KULSUM" },
    { usn: "USN: 21", name: "ARJUN SHARMA" },
    { usn: "USN: 23", name: "ARUN ESHWAROOP" },
    { usn: "USN: 24", name: "AVIRAJ BHAWRHA" },
    { usn: "USN: 25", name: "AYUSH KUMAR" },
    { usn: "USN: 26", name: "BALAJI R" },
    { usn: "USN: 27", name: "BAPUGOUDA" },
    { usn: "USN: 28", name: "BASAVARAJ" },
    { usn: "USN: 29", name: "BASAVARAJ B" },
    { usn: "USN: 30", name: "BHARATH C" },
    { usn: "USN: 31", name: "BHARGAVI VR" },
    { usn: "USN: 32", name: "BHAVANA D S" },
    { usn: "USN: 33", name: "C H CHANDANA SHREE" },
    { usn: "USN: 34", name: "CHANDAN D P" },
    { usn: "USN: 35", name: "CHANNABASAVA" },
    { usn: "USN: 36", name: "CHETHANKUMAR B S" },
    { usn: "USN: 37", name: "CHETHANASHREE P" },
    { usn: "USN: 38", name: "CHIRANTH L" },
    { usn: "USN: 39", name: "CHRISTY SHEPHARD" },
    { usn: "USN: 40", name: "D MANOHAR" },
    { usn: "USN: 41", name: "D NEHA" },
    { usn: "USN: 42", name: "DANISH KHAJURIA" },
    { usn: "USN: 43", name: "DARSHAN" },
    { usn: "USN: 44", name: "DEBADITYA DAS" },
    { usn: "USN: 45", name: "DEEKSHITA A U" },
    { usn: "USN: 46", name: "DEEPTHI K M" },
    { usn: "USN: 47", name: "DEERAJ ASHOK" },
    { usn: "USN: 48", name: "DHANUSH D" },
    { usn: "USN: 49", name: "DHANUSH JAIN A" },
    { usn: "USN: 50", name: "DHARSHAN V" },
    { usn: "USN: 51", name: "DINESH MANGE" },
    { usn: "USN: 52", name: "DISHA V O" },
    { usn: "USN: 53", name: "E VANDANA" },
    { usn: "USN: 54", name: "G M VISHWANATH" },
    { usn: "LE", name: "ABDULAZIZ" },
    { usn: "LE", name: "ABHISHEK POLICE PATIL" },
    { usn: "LE", name: "ABHISHEK GOUDA" },
    { usn: "LE", name: "AKBAR" },
    { usn: "LE", name: "ARPITA SURESH" },
    { usn: "LE", name: "ARYHA K S" },
    { usn: "LE", name: "ASHISH GUPTA" },
    { usn: "LE", name: "AYESHA SIDDIQA" },
    { usn: "LE", name: "BHATI MOHAMMED" },
    { usn: "LE", name: "BHAVANA A V" },
    { usn: "LE", name: "CHANDANKUMAR V" },
    { usn: "LE", name: "D S VISHESH DHYAN" },
    { usn: "LE", name: "DARSHAN B" },
    { usn: "LE", name: "DARSHAN C" },
    { usn: "LE", name: "DARSHAN CHIKANNA" },
    { usn: "COB", name: "V PRAJWAL" },
    { usn: "COB", name: "MEGHA" }
];

function updateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero
    var time = hours + ':' + minutes + ' ' + ampm;
    datetimeElement.textContent = now.toLocaleDateString() + ' ' + time;
    setTimeout(updateTime, 1000); // Update time every second
}

function generateReport() {
    var subject = document.getElementById("subject").value;
    var date = new Date().toLocaleDateString();
    var uncheckedStudents = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    var totalStudents = students.length;
    var absentCount = uncheckedStudents.length;
    var presentCount = totalStudents - absentCount;

    // Create summary section
    var summary = `📊 Attendance Summary:
Total Students: ${totalStudents}
Present: ${presentCount}
Absent: ${absentCount}

`;

    var report = "📍 Absentees List for " + subject + " class on " + date + ":\n\n";
    uncheckedStudents.forEach(function(student) {
        var usn = students[parseInt(student.getAttribute("data-rollno")) - 1].usn;
        var name = students[parseInt(student.getAttribute("data-rollno")) - 1].name;
        report += usn + "\t - " + name + "\n";
    });

    var reportText = document.getElementById("reportText");
    reportText.innerHTML = summary + report; // Combine summary with the absentee list
    document.getElementById("reportContainer").style.display = "block";
}

function copyReport() {
    var reportText = document.getElementById("reportText");
    reportText.select();
    document.execCommand("copy");
    alert("Report copied to clipboard!");
}

function saveReportAsImage() {
    var reportText = document.getElementById("reportText").value;

    // Split the report text into lines
    var lines = reportText.split('\n');

    // Calculate the required dimensions based on the content
    var lineHeight = 20; // Adjust as needed
    var width = 400; // Adjust as needed
    var height = lines.length * lineHeight;

    // Create a new canvas element
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Draw the report content onto the canvas
    ctx.fillStyle = '#fff'; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with background color
    ctx.font = '14px Arial'; // Set font size and style
    ctx.fillStyle = '#000'; // Set text color
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 10, (i + 1) * lineHeight);
    }

    // Convert canvas content to data URL
    var dataURL = canvas.toDataURL();

    // Create a link element and trigger download
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'attendance_report.png';
    link.click();
}

function createStudentList() {
    var studentList = document.getElementById("studentList");
    studentList.innerHTML = ''; // Clear any existing list items

    let usnCounter = 1;  // Starting USN number for non-LE students
    let skipNumber = 22; // USN 22 has left, so we will skip this number

    students.forEach(function(student, index) {
        var listItem = document.createElement("li");
        listItem.classList.add("student-item");

        // Format the USN display
        var usnDisplay;
        if (student.usn === "LE") {
            usnDisplay = `<span class="bold">${student.usn}</span>`; // Bold for LE students
        } else if (student.usn === "COB") {
            usnDisplay = `<span class="bold">${student.usn}</span>`; // Bold for COB students
        } else {
            // If the current usnCounter matches the skipped number, increment it
            if (usnCounter === skipNumber) {
                usnCounter++; // Skip this number (USN: 22)
            }
            usnDisplay = `<span class="bold">USN: ${usnCounter < 10 ? `0${usnCounter}` : usnCounter}</span>`;
            usnCounter++; // Increment USN number for the next student
        }

        // Create the list item HTML
        listItem.innerHTML = `
            <span class="student-info">${usnDisplay} - ${student.name}</span>
            <input type="checkbox" id="rollno${index + 1}" data-rollno="${index + 1}" checked>
            <label class="checkbox-label" for="rollno${index + 1}"></label>
        `;
        studentList.appendChild(listItem);
    });
}


// Call functions
updateTime();
createStudentList();
