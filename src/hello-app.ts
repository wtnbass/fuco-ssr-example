import { html, defineElement, useAttribute } from "fuco";

defineElement("hello-app", () => {
  const name = useAttribute("name");
  return html`
    <div @click=${() => console.log("Hello")}>Hello, ${name}</div>
  `;
});
