// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 
/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the #results section.
    4. Output the title and the instructor of the first course to the #results section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the #results section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/
fetchCourses();

function search() {
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
    const container = document.querySelector('.courses');
    container.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const course = data[i];

        // handle the case where no instructor has yet been assigned to a course:
        let instructor = '';
        if (course.Instructors.length > 0) {
            instructor = course.Instructors[0].Name;
        }
        let include = false;
        if (course.Department == searchTerm) {
            include = true;
        } else if (searchTerm == '') {
            include = true;
        }
        if (include) {
            const template = `
                <section class="course">
                    <h2>${course.Code}: ${course.Title}</h2>
                    <p>
                    ${course.Days} &bull; ${course.Location.FullLocation} &bull; ${course.Hours} credit hour(s)
                    </p>
                    <p><strong>${instructor}</strong></p>

                </section>`;
            container.insertAdjacentHTML('beforeend', template);
        }
    }
}