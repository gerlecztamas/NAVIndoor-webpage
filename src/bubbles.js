let div = document.querySelector(".top");

let bubbles = [
    '<svg height="300" width="300"><circle cx="0" cy="148" r="148" fill="#8ECCB1" /></svg>',
    '<svg height="320" width="400"><circle cx="140" cy="200" r="103" fill="#2F6375" /></svg>',
    '<svg height="300" width="400"><circle cx="260" cy="100" r="90" fill="#6FADC3" /></svg>',
    '<svg height="200" width="250"><circle cx="170" cy="60" r="33" fill="#264a54" /></svg>',
    '<svg height="250" width="350"><circle cx="265" cy="185" r="33" fill="#264a54" /></svg>',
    '<svg height="300" width="250"><circle cx="210" cy="250" r="12" fill="#F6F6F2" /></svg>',
    '<svg height="200" width="450"><circle cx="370" cy="120" r="52" fill="#2F6375" /></svg>',
    '<svg height="300" width="550"><circle cx="440" cy="180" r="70" fill="#264a54" /></svg>',
    '<svg height="300" width="550"><circle cx="430" cy="60" r="12" fill="#F6F6F2" /></svg>',
    '<svg height="300" width="600"><circle cx="500" cy="120" r="62" fill="#8ECCB1" /></svg>',
    '<svg height="300" width="620"><circle cx="570" cy="160" r="37" fill="#6FADC3" /></svg>',
    '<svg height="300" width="600"><circle cx="540" cy="200" r="16" fill="#F6F6F2" /></svg>',
    '<svg height="300" width="650"><circle cx="600" cy="185" r="11" fill="#2F6375" /></svg>',
    '<svg height="300" width="700"><circle cx="650" cy="135" r="29" fill="#2F6375" /></svg>',
    '<svg height="300" width="720"><circle cx="700" cy="150" r="11" fill="#F6F6F2" /></svg>',
    '<svg height="300" width="750"><circle cx="720" cy="170" r="20" fill="#6FADC3" /></svg>',
    '<svg height="300" width="800"><circle cx="760" cy="140" r="18" fill="#8ECCB1" /></svg>',
    '<svg height="300" width="800"><circle cx="780" cy="160" r="15" fill="#264a54" /></svg>',
    '<svg height="300" width="850"><circle cx="830" cy="160" r="8" fill="#F6F6F2" /></svg>'
]

for(var i of bubbles){
    div.innerHTML += i;
    div.lastChild.style.position = "absolute";
}