//Characters

const xhr = new XMLHttpRequest();
xhr.open("GET", "persons.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // Вывод данных в консоль
    }
};
xhr.send();

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("characters");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "persons.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const persons = JSON.parse(xhr.responseText);
            persons.forEach(person => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML =
                    <img src="${person.person_photo}" alt="${person.name}">
                        <h3>${person.name}</h3>
                        <p>Возраст: ${person.age}</p>
                        ;
                        container.appendChild(card);
                        });
                        }
                        };
                        xhr.send();
                        });
