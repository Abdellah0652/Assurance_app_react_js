var quiz = {
  data: [
    {
      q: "Ma recherche concerne",
      o: ["Une voiture que je possède déjà", "Le prochain achat d'une première voiture", "Le prochain achat d'une voiture supplémentaire", "Le prochain achat d'une voiture de remplacement", "Une voiture sans permis"],

      a: 1
    },
    {
      q: "Qui est le titulaire de la carte grise ?",
      o: ["Moi (le conducteur principal)", "Mon conjoint ou concubin", "Moi et mon conjoint ou concubin", "Mon enfant", "Mon père ou ma mère", "Une société de leasing", "Ma société", "Autre cas"],

      a: 3
    },

    {
      q: "Conducteur secondaire",
      o: ["Non", "Oui, mon enfant", "Oui, mon conjoint ou concubin"],

      a: 2
    },

    {
      q: "Situation matrimoniale",
      o: ["Célibataire", "Marié(e)", "Pacsé(e)", "En concubinage", "Séparé(e)", "Divorcé(e)", "Veuf(ve)"],

      a: 0
    },

    {
      q: "Type de permis de conduire?",
      o: ["Permis B Français", "Permis étranger dans l'Union Européenne", "Permis étranger hors Union Européenne"],

      a: 3
    }
  ],

  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  now: 0, // current question
  score: 0, // current score

  init: () => {
    quiz.hWrap = document.getElementById("quizWrap")

    quiz.hQn = document.createElement("div")
    quiz.hQn.id = "quizQn"
    quiz.hWrap.appendChild(quiz.hQn)

    quiz.hAns = document.createElement("div")
    quiz.hAns.id = "quizAns"
    quiz.hWrap.appendChild(quiz.hAns)

    quiz.draw()
  },

  draw: () => {
    quiz.hQn.innerHTML = quiz.data[quiz.now].q

    quiz.hAns.innerHTML = ""
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input")
      radio.type = "radio"
      radio.name = "quiz"
      radio.id = "quizo" + i
      quiz.hAns.appendChild(radio)
      let label = document.createElement("label")
      label.innerHTML = quiz.data[quiz.now].o[i]
      label.setAttribute("for", "quizo" + i)
      label.dataset.idx = i
      label.addEventListener("click", () => {
        quiz.select(label)
      })
      quiz.hAns.appendChild(label)
    }
  },

  reset: () => {
    quiz.now = 0
    quiz.score = 0
    quiz.draw()
  }
}

window.addEventListener("load", quiz.init)
