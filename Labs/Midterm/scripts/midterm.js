class friendList {
  constructor(name,age,region,closeFriend){
    this.name = name;
    this.age  = age;
    this.region = region;
    this.closeFriend = closeFriend;
  }
  displayFriendListInfo(){
    var name_line = "<strong>Name: </strong>"+this.name+"<br>\n";
    var age_line = "<strong>Age: </strong>"+this.age+"<br>\n";
    var region_line = "<strong>Region: </strong>"+this.region+"<br>\n";
    var closeFriend_line = "<strong>Is he/she your close friend ?: </strong>"+this.closeFriend+"<hr>\n";
    return(name_line + age_line + region_line + closeFriend_line);
  }
}

function addFriend(){
  let name = prompt("Please enter the name of your friend");
  let age = prompt("Please enter the age");
  let region = prompt("Please enter the region of your friend");
  let closeFriend = prompt("Is he/she your close friend ? Y/N ");
  if(closeFriend =="Y"){
      closeFriend = "Yes";
    }else {
      closeFriend = "No";
    }
  return new friendList(name,age,region,closeFriend);
}


var friendArray = [];

while(true){
  let x = addFriend();
  friendArray.push(x);
  var exit = prompt("Please enter 'e' to exit entering your friend info."+"\n"+"Or Press any keys to continue entering.");
  if(exit==='e')
  break;
}
for(let friendList of friendArray){
document.write(friendList.displayFriendListInfo());
}
document.querySelector('p').textContent="You have " + friendArray.length + " friend in your friendlist, please see details below:"


//Array Sorting & Filtering


function compareNameByAsc(a,b){
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  return 0;
}


function compareNameByDesc(a,b){
  if (a.name < b.name){
    return 1;
  }
  if (a.name > b.name){
    return -1;
  }
  return 0;
}

function compareAgeByAsc(a,b){
  if (a.age < b.age){
    return -1;
  }
  if (a.age > b.age){
    return 1;
  }
  return 0;
}


function compareAgeByDesc(a,b){
  if (a.age < b.age){
    return 1;
  }
  if (a.age > b.age){
    return -1;
  }
  return 0;
}


function sortOrFilter(choice){
  switch(choice){
    case 0:
        friendArray.sort(compareNameByAsc);
        document.getElementById('result').innerHTML = '</br>';
        for(let friendList of friendArray){
        document.getElementById('result').innerHTML += friendList.displayFriendListInfo();
        }
        break;

    case 1:
        friendArray.sort(compareNameByDesc);
        document.getElementById('result').innerHTML = '</br>';
        for(let friendList of friendArray){
        document.getElementById('result').innerHTML += friendList.displayFriendListInfo();
        }
        break;

    case 2:
        friendArray.sort(compareAgeByAsc);
        document.getElementById('result').innerHTML = '</br>';
        for(let friendList of friendArray){
        document.getElementById('result').innerHTML += friendList.displayFriendListInfo();
        }
        break;

    case 3:
        friendArray.sort(compareAgeByDesc);
        document.getElementById('result').innerHTML = '</br>';
        for(let friendList of friendArray){
        document.getElementById('result').innerHTML += friendList.displayFriendListInfo();
        }
        break;

    case 4:
        const fCloseFriend = friendArray.filter(function(name){ return name.closeFriend === 'Yes'});
        document.getElementById('result').innerHTML = '</br>';
        for(let friendList of fCloseFriend){
        document.getElementById('result').innerHTML += friendList.displayFriendListInfo();
        }
        break;
}}
