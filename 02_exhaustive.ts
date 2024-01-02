import { match, P } from "ts-pattern"

type Permission = "editor" | "viewer"
type Plan = "basic" | "pro"

const fn = (org: Plan, user: Permission) =>
  match([org, user])
    .with(["basic", "viewer"], () => {})
    .with(["basic", "editor"], () => {})
    .with(["pro", P._], () => {})
    // Fails with `NonExhaustiveError<['pro', 'editor']>`
    // because the `['pro', 'editor']` case isn't handled.
    .exhaustive()

const fn2 = (org: Plan, user: Permission) =>
  match([org, user])
    .with(["basic", "viewer"], () => {})
    .with(["basic", "editor"], () => {})
    // .with(["basic", __], () => {})
    .with(["pro", "viewer"], () => {})
    .with(["pro", "editor"], () => {})
    .exhaustive() // Works!
