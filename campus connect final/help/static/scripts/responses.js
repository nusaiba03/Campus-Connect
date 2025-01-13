function getBotResponse(input) {
    //some extra questions
    if (input == "Who can I talk to?") {
        return "Try calling in at this number: 020 7919 7171";
    } else if (input == "How do I find learn.gold?") {
        return "Try this link: https://learn.gold.ac.uk/my/";
    } else if (input == "How can I get to the goldsmiths website?") {
        return "https://www.gold.ac.uk/";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}