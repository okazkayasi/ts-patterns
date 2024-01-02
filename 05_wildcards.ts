import { match, P } from "ts-pattern"

const input = "hello"

const output = match(input)
  .with(P._, () => "It will always match")
  // OR
  .with(P.any, () => "It will always match")
  .otherwise(() => "This string will never be used")

// ------------------------------
let input2 = "hello"

const output2 = match(input2)
  .with("bonjour", () => "Won‘t match")
  .with(P.string, () => "it is a string!")
  .exhaustive()

console.log(output2)

// number - boolean -nullish -

const input3 = null

const output3 = match<number | null | undefined>(input3)
  .with(P.number, () => "it is a number!")
  .with(P.nullish, () => "it is either null or undefined!")
  .with(null, () => "it is null!")
  .with(undefined, () => "it is undefined!")
  .exhaustive()

// array patterns

type Input = { title: string; content: string }[]
let input4: Input = [
  { title: "Hello world!", content: "This is a very interesting content" },
  { title: "Bonjour!", content: "This is a very interesting content too" },
]

const output4 = match(input4)
  .with(
    P.array({ title: P.string, content: P.string }),
    (posts) => "a list of posts!"
  )
  .otherwise(() => "something else")
