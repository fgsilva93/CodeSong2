/*var friends = ['Kayla', 'Blake', 'Cole', 'Mary', 'Josh'];

//nested for loops
for (var i = 0; i < friends.length; i++) {
    for (var num = 99; num > 0; num--) {
        if (num !== 1) {
            console.log(friends[i] + ": " + num + " Lines of code in the file, " + num + " lines of code; "
                + friends[i] + " strikes one out, clears it all out, " + (num-1) + " more lines of code in the file");
        } else {
            console.log(friends[i] + ": " + num + " Line of code in the file, " + num + " line of code; "
                + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
}*/

document.addEventListener("DOMContentLoaded", function(){
    let button = document.createElement('button');
    let btnText =document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        var friends = ['Kayla', 'Blake', 'Cole', 'Mary', 'Josh'];
        //nested for loops
        for (var i = 0; i < friends.length; i++) {
            for (var num = 99; num > 0; num--) {
                if (num !== 1) {
                    console.log(friends[i] + ": " + num + " Lines of code in the file, " + num + " lines of code; "
                        + friends[i] + " strikes one out, clears it all out, " + (num-1) + " more lines of code in the file");
                } else {
                    console.log(friends[i] + ": " + num + " Line of code in the file, " + num + " line of code; "
                        + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                }
            }
}
    })
}) 
