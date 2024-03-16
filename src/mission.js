const content = document.querySelector('#content')

export default async function mission() {
    const missionInfo = await (await fetch("../src/mission.html")).text();
    content.innerHTML = missionInfo;
}