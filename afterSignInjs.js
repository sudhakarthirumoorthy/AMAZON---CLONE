var userName = JSON.parse(localStorage.getItem("userName")) || "Dipankar";

document.querySelector("#userName").innerHTML = `
    ${userName} <i class="fas fa-caret-down arrowDown langBtn"></i>
`;

function subscription(duration) {
    if (duration === "freeSubscription") {
        window.location.href = "/subs/freeSubscription.html";
    } else if (duration === "annualSubscription") {
        window.location.href = "/subs/annualSubscription.html";
    } else if (duration === "quaterlySubscription") {
        window.location.href = "/subs/quaterlySubscription.html";
    } else if (duration === "monthlySubscription") {
        window.location.href = "/subs/monthlySubscription.html";
    }
}


