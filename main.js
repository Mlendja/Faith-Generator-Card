const occasion = document.getElementById("occasion");
const theme = document.getElementById("theme");
const card = document.getElementById("card");

const recipient = document.getElementById("recipient");
const sender = document.getElementById("sender");
const message = document.getElementById("message");

const generateBtn = document.getElementById("generateBtn");

const cardOccasion = document.getElementById("cardOccasion");
const cardBody = document.getElementById("cardBody");
const cardMessage = document.getElementById("cardMessage");
const cardSignature = document.getElementById("cardSignature");


function buildCard() {

    let recipientName = recipient.value;
    let senderName = sender.value;
    let personalMessage = message.value;

    if (recipientName === "") {
        recipientName = "Friend";
    }

    if (senderName === "") {
        senderName = "Your Friend";
    }


    if (occasion.value === "Friendship with God") {

        cardOccasion.textContent = "Friendship with God";

        cardBody.textContent =
            "Friendship with God grows through honest prayer, quiet reflection, and trust.";

        cardSignature.textContent = "Shared by " + senderName;

    } else if (occasion.value === "Growing Closer to God") {

        cardOccasion.textContent = "Growing Closer to God";

        cardBody.textContent =
            "Set aside a quiet moment to talk with God in your own words.";

        cardSignature.textContent = "Shared by " + senderName;

    } else if (occasion.value === "Gratitude and Trust") {

        cardOccasion.textContent = "Gratitude and Trust";

        cardBody.textContent =
            "Notice the small gifts in each day and share your gratitude with God.";

        cardSignature.textContent = "Shared by " + senderName;

    } else {
        cardOccasion.textContent =
            "Dear " + recipientName + "! " + occasion.value;

        cardBody.textContent =
            "May your friendship with God remind you that you are loved and never alone.";

        cardSignature.textContent =
            "With love, " + senderName;
    }


    cardMessage.textContent = personalMessage;

    card.className = "card card--" + theme.value;
}


generateBtn.addEventListener("click", buildCard);

buildCard();
