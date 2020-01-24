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

document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    /*let h3 = document.createElement('h3');
    let h3Text = document.createTextNode(div);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);

    let div =document.createElement('div');
    div.className = "Kayla";
    let div2 =document.createElement('div');
    div2.className = "friend"; 
    let div3 =document.createElement('div');
    div3.className = "friend"; 
    let div4 =document.createElement('div');
    div4.className = "friend"; 
    let div5 =document.createElement('div');
    div5.className = "friend";*/



    button.addEventListener('click', function () {

        var friends = ['Kayla', 'Blake', 'Cole', 'Mary', 'Josh'];
        //nested for loops
        for (var i = 0; i < friends.length; i++) {
            let friendsDiv = document.createElement('div');
            friendsDiv.className = 'friends';
            let h3 = document.createElement('h3');
            // h3.innerText = (friends[i]+ '');
            let h3Text = document.createTextNode(friends[i]);
            h3.appendChild(h3Text);
            //friendsDiv.appendChild(h3);
            document.body.appendChild(friendsDiv);
            let lines = document.getElementsByClassName('friends');
            lines[i].appendChild(h3);
            for (var num = 99; num > 0; num--) {
                let song = document.createElement('p');
                if (num !== 1) {
                    song.innerText = (friends[i] + ": " + num + " Lines of code in the file, " + num + " lines of code; "
                        + friends[i] + " strikes one out, clears it all out, " + (num - 1) + " more lines of code in the file");
                } else {
                    song.innerText = (friends[i] + ": " + num + " Line of code in the file, " + num + " line of code; "
                        + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                }
                lines[i].appendChild(song);
            }
        }
    })
}) 
