const content = document.querySelector('#content')


export default function server() {
  content.innerText = 'Server Information'
}

// export default async function server() {
//         // const response = await fetch("https://23.26.135.41:30120/players.json");
//         // const info = await response.json();
//         // console.log(info);
//       }

// 23.26.135.41:30120

