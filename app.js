{
let firstNames = [
"adam","konnor","jace","bryon","jair","elliot","dusty","valentin","gaven","tyriq","deion","brandt","charlie","kareem","cannon","demarcus","jovany","travion","ali","harris","everardo","damion","tayler","lee","aubrey","dan","shayne","sahil","javen","dominique","peter","colt","timmy","dion","elvin","efren","hudson","landon","guillermo","albert","denis","sean","edgar","rashad","claudio","pedro","colten","hakeem","tyree","jamal","jaiden","ricky","gregorio","jonathon","august","curtis","nigel","lawson","justin","abel","pierre","zachery","orion","keagan","glenn","stanley","declan","matteo","jaquan","keenan","jesus","darwin","edwin","brycen","david","grady","hugo","silas","asher","neo","brandyn","ethen","zechariah","tyrique","luc","maurice","carson","marcello","brennon","mustafa","kolton","jakob","tobias","weston","daylon","cyrus","auston","ezra","coy","jordan"
]
let lastNames = [
"schofield","sturgeon","gaston","blount","wolford","lunsford","henning","murdock","painter","mcdowell","calhoun","rockwell","vo","wynn","solano","gay","dempsey","soriano","beattie","lopes","klein","hall","shipp","eng","skinner","mayfield","carrera","chan","ivey","keeler","michel","hester","dowdy","pate","argueta","gale","truong","hale","dawkins","mccain","addison","garvin","goins","gaines","farris","fagan","redden","minton","hyman","gaither","guthrie","cleary","haskell","chung","gorman","roberts","tate","hong","farr","coles","harvey","haynes","richards","barbosa","abney","hinojosa","ratcliff","reimer","cavazos","ervin","robles","ransom","crutchfield","denney","jauregui","casper","chase","felton","blalock","ibrahim","banuelos","lewis","alexander","fish","drake","greer","gore","mccabe","golden","wills","harkins","bond","hess","wilcox","nava","skidmore","schmitt","dang","burkholder","newcomb"
]

let email_display = document.querySelector(".email-display");
let generate_btn = document.querySelector(".generate-btn");

let random_0_99 = Math.floor(Math.random() * 100); // doing + 1, would make it start from 1, we want 0-100
let random_1_1000000 = Math.floor(Math.random() * 1000000) + 1;

generate_btn.addEventListener("click", (e) => {
   // email_display.textContent = `${firstNames[Math.floor(Math.random() * 100)]}${lastNames[Math.floor(Math.random() * 100)]}${Math.floor(Math.random() * 1000000) + 1}@gmail.com`
    email_display.value = `${firstNames[Math.floor(Math.random() * 100)]}${lastNames[Math.floor(Math.random() * 100)]}${Math.floor(Math.random() * 1000000) + 1}@gmail.com`

    email_display.select();
    navigator.clipboard.writeText(email_display.value)

    console.log({email_Test: email_display.value})
})

}




