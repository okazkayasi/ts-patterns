import { match } from "ts-pattern"
// INTRO
// Express complex conditions in a single, compact expression.
// Shorter and more readable conditions.
// Exhaustiveness checking.

const sanitizeWithSwitch = (type: string) => {
  switch (type) {
    case "text":
    case "span":
    case "p":
      return "text"

    case "btn":
    case "button":
      return "button"
    default:
      return type
  }
}
declare function exhaustCases(arg: never): never

const sanitize = (name: string) =>
  match(name)
    .with("text", "span", "p", () => "text")
    .with("btn", "button", () => "button")
    .otherwise(() => name)

sanitize("span") // 'text'
sanitize("p") // 'text'
sanitize("button") // 'button'
