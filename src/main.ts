import './style.css'

let counter = 0;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 id="countText">0</h1>
    <div class="card">
      <button id="counter" type="button">Räkna</button>
    </div>
  </div>
`
const counterButton = document.querySelector<HTMLButtonElement>('#counter')!;
const countText = document.querySelector<HTMLHeadingElement>('#countText')!;

counterButton.onclick = () => {
  counter++;
  countText.innerText = `${counter}`;
}