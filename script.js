let userScore = 0;
let compScore = 0;

let Choices = ["paper", "stone", "scissor"];

let choices = document.querySelectorAll(".choice");

let cpuScore = document.querySelector("#comp-score");

let humanScore = document.querySelector("#user-score");

let msg = document.querySelector(".who");

let res = document.querySelector(".result");

compTake = () => {
    let compChoice = Math.floor(Math.random() * 3);
    return Choices[compChoice];
}


choices.forEach((val) => {
    val.addEventListener("click", () => {
        let user = val.getAttribute("id");
        let comp = compTake();

        if (user === "paper" && comp === "scissor") {
            compScore++;
            cpuScore.innerText = compScore;
            msg.innerText = "Computer Win !";
            msg.classList.remove("who");
            msg.classList.remove("green");
            msg.classList.remove("yellow");
            msg.classList.add("red");
        }
        else if (user === "paper" && comp === "stone") {
            userScore++;
            humanScore.innerText = userScore;
            msg.innerText = "User Win !";
            msg.classList.remove("who");
            msg.classList.remove("red");
            msg.classList.remove("yellow");
            msg.classList.add("green");
        }
        else if (user === "scissor" && comp === "paper") {
            userScore++;
            humanScore.innerText = userScore;
            msg.innerText = "User Win !";
            msg.classList.remove("who");
            msg.classList.remove("red");
            msg.classList.remove("yellow");
            msg.classList.add("green");
        }
        else if (user === "scissor" && comp === "stone") {
            compScore++;
            cpuScore.innerText = compScore;
            msg.innerText = "Computer Win !";
            msg.classList.remove("who");
            msg.classList.remove("green");
            msg.classList.remove("yellow");
            msg.classList.add("red");

        }
        else if (user === "stone" && comp === "paper") {
            compScore++;
            cpuScore.innerText = compScore;
            msg.innerText = "Computer Win !";
            msg.classList.remove("who");
            msg.classList.remove("green");
            msg.classList.remove("yellow");
            msg.classList.add("red");
        }
        else if (user === "stone" && comp === "scissor") {
            userScore++;
            humanScore.innerText = userScore;
            msg.innerText = "User Win !";
            msg.classList.remove("who");
            msg.classList.remove("red");
            msg.classList.remove("yellow");
            msg.classList.add("green");
        }
        else {
            msg.innerText = "It's Draw !";
            msg.classList.remove("who");
            msg.classList.remove("red");
            msg.classList.remove("green");
            msg.classList.add("yellow");
        }
    });
});

