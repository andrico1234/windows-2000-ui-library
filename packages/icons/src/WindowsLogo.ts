import { LitElement, svg } from "lit";

// Eventually refactor this so size is computed using 's', 'm', 'l'
export class WindowsLogo extends LitElement {
  width = 16;
  height = 14;

  render() {
    return svg`
    <svg
    width="auto"
    viewBox="0 0 ${this.width} ${this.height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#000" d="M0 2h1v2H0z" />
    <path fill="#DA2F20" d="M0 5h1v2H0z" />
    <path fill="#0022F4" d="M0 8h1v2H0z" />
    <path d="M0 11h1v1H0v-1ZM0 12h1v1H0v-1Z" fill="#000" />
    <path
      d="M8 5h1v1H8V5ZM9 4h1v1H9V4ZM8 3h1v1H8V3ZM8 4h1v1H8V4ZM9 2h1v1H9V2ZM9 3h1v1H9V3Z"
      fill="#DA2F20"
    />
    <path
      d="M9 8h1v1H9V8ZM8 9h1v1H8V9ZM8 8h1v1H8V8ZM8 10h1v1H8v-1ZM9 7h1v1H9V7ZM9 9h1v1H9V9Z"
      fill="#0022F4"
    />
    <path
      d="M12 2h1v1h-1V2ZM13 3h1v1h-1V3ZM12 3h1v1h-1V3ZM12 4h1v1h-1V4ZM13 4h1v1h-1V4ZM13 5h1v1h-1V5Z"
      fill="#76F74D"
    />
    <path fill="#000" d="M13 7h1v1h-1z" />
    <path
      d="M13 9h1v1h-1V9ZM12 8h1v1h-1V8ZM12 7h1v1h-1V7ZM12 9h1v1h-1V9ZM13 8h1v1h-1V8ZM13 10h1v1h-1v-1Z"
      fill="#FDEA52"
    />
    <path
      d="M2 6h1v1H2V6ZM2 7h1v1H2V7ZM3 7h1v1H3V7ZM4 6h1v1H4V6ZM4 7h1v1H4V7ZM5 6h1v1H5V6ZM5 7h1v1H5V7Z"
      fill="#DA2F20"
    />
    <path
      d="M2 9h1v1H2V9ZM2 10h1v1H2v-1ZM3 10h1v1H3v-1ZM4 9h1v1H4V9ZM4 10h1v1H4v-1ZM5 9h1v1H5V9ZM5 10h1v1H5v-1Z"
      fill="#0022F4"
    />
    <path
      d="M7 12h1v1H7v-1ZM8 2h1v1H8V2ZM12 5h1v1h-1V5ZM13 6h1v1h-1V6ZM6 2h1v1H6V2ZM6 3h1v1H6V3ZM6 5h1v1H6V5ZM6 6h1v1H6V6ZM6 8h1v1H6V8ZM6 9h1v1H6V9ZM6 11h1v1H6v-1ZM7 1h1v1H7V1ZM7 2h1v1H7V2ZM7 4h1v1H7V4ZM6 4h1v1H6V4ZM7 3h1v1H7V3ZM7 9h1v1H7V9ZM6 10h1v1H6v-1ZM6 7h1v1H6V7ZM7 6h1v1H7V6ZM7 5h1v1H7V5ZM7 7h1v1H7V7ZM7 8h1v1H7V8ZM7 10h1v1H7v-1ZM7 11h1v1H7v-1ZM8 12h1v1H8v-1ZM8 1h1v1H8V1ZM8 7h1v1H8V7ZM8 11h1v1H8v-1ZM9 11h1v1H9v-1ZM9 0h1v1H9V0ZM9 1h1v1H9V1ZM9 5h1v1H9V5ZM9 6h1v1H9V6ZM8 6h1v1H8V6ZM9 10h1v1H9v-1ZM10 2h1v1h-1V2ZM11 2h1v1h-1V2ZM11 8h1v1h-1V8ZM10 8h1v1h-1V8ZM10 5h1v1h-1V5ZM11 5h1v1h-1V5ZM10 11h1v1h-1v-1ZM10 0h1v1h-1V0ZM10 1h1v1h-1V1ZM10 3h1v1h-1V3ZM10 4h1v1h-1V4ZM10 6h1v1h-1V6ZM10 7h1v1h-1V7ZM10 9h1v1h-1V9ZM10 10h1v1h-1v-1ZM11 11h1v1h-1v-1ZM11 0h1v1h-1V0ZM11 1h1v1h-1V1ZM11 3h1v1h-1V3ZM11 4h1v1h-1V4ZM11 6h1v1h-1V6ZM11 7h1v1h-1V7ZM11 9h1v1h-1V9ZM11 10h1v1h-1v-1ZM12 11h1v1h-1v-1ZM12 0h1v1h-1V0ZM12 1h1v1h-1V1ZM12 6h1v1h-1V6ZM12 10h1v1h-1v-1ZM13 12h1v1h-1v-1ZM13 1h1v1h-1V1ZM13 2h1v1h-1V2ZM13 11h1v1h-1v-1ZM14 3h1v1h-1V3ZM15 4h1v1h-1V4ZM15 7h1v1h-1V7ZM15 10h1v1h-1v-1ZM14 9h1v1h-1V9ZM14 6h1v1h-1V6ZM14 12h1v1h-1v-1ZM14 1h1v1h-1V1ZM14 2h1v1h-1V2ZM14 4h1v1h-1V4ZM14 5h1v1h-1V5ZM14 7h1v1h-1V7ZM14 8h1v1h-1V8ZM14 10h1v1h-1v-1ZM14 11h1v1h-1v-1ZM15 13h1v1h-1v-1ZM15 2h1v1h-1V2ZM15 3h1v1h-1V3ZM15 5h1v1h-1V5ZM15 6h1v1h-1V6ZM15 8h1v1h-1V8ZM15 9h1v1h-1V9ZM15 11h1v1h-1v-1ZM15 12h1v1h-1v-1ZM2 3h1v1H2V3ZM2 4h1v1H2V4ZM3 4h1v1H3V4ZM4 3h1v1H4V3ZM4 4h1v1H4V4ZM5 3h1v1H5V3ZM5 4h1v1H5V4ZM2 12h1v1H2v-1ZM2 13h1v1H2v-1ZM4 12h1v1H4v-1ZM4 13h1v1H4v-1ZM6 12h1v1H6v-1ZM6 13h1v1H6v-1ZM5 12h1v1H5v-1ZM5 13h1v1H5v-1ZM3 13h1v1H3v-1Z"
      fill="#000"
    />
  </svg>
    `;
  }
}
