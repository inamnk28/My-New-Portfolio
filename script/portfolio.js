let education = [
    {
      id: 1,
      year: 2020,
      desc: "Latest certifacte",
      place: "This place",
    },
    {
      id: 2,
      year: 2019,
      desc: "Latest certifacte",
      place: "This place",
    },
    {
      id: 3,
      year: 2018,
      desc: "Latest certifacte",
      place: "This place",
    },
  ];
  
  let dispEducation = document.querySelector(".education");
  education.forEach((data) => {
    dispEducation.innerHTML += `
      <div class= "card my-4">
      <h4 class="display-5">${data.year}</h4>
      <div class="card-body">
      <p class="text-black">${data.desc} @ <span>${data.place}</span></p>
      </div>
      </div>`;
  });