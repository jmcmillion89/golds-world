const content = document.querySelector('#content')

export default async function rules() {
    const rulesInfo = await (await fetch("../src/rules.html")).text();
    content.innerHTML = rulesInfo;
}