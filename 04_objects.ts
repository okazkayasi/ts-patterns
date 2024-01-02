import { match } from "ts-pattern"

type Input =
  | { type: "user"; name: string }
  | { type: "image"; src: string }
  | { type: "video"; seconds: number }

const input = { type: "user", name: "Gabriel" }

const outputt = match(input)
  .with({ type: "image" }, () => "image")
  .with({ type: "video", seconds: 10 }, () => "video of 10 seconds.")
  .with({ type: "user" }, ({ name }) => `user of name: ${name}`)
  .otherwise(() => "something else")

console.log(outputt)
// => 'user of name: Gabriel'
