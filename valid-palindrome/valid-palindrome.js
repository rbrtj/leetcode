function validPalindrome(s) {
    var filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var letters = filteredString.split("");
    console.log(letters);
    for (var i = 0; i < letters.length; i++) {
        var pointer = letters.length - 1 - i;
        console.log({
            letters: letters[i],
            pointer: letters[pointer],
        });
    }
}
validPalindrome("A man, a plan, a canal: Panama");
