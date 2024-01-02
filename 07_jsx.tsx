import React from "react"

type SuccessState = {
  status: "success"
  data: string
}

type ErrorOrLoadingState = {
  status: "error" | "loading"
}

type FetchState = SuccessState | ErrorOrLoadingState

const fetchState: FetchState = {
  status: "loading",
  // data: "This is loading" // This line would cause an error, as expected.
}

const useFetchState = (): FetchState => {
  const [data, _] = React.useState<FetchState>({
    status: "loading",
  })
  return data
}

const Simple = () => {
  const fetchState = useFetchState()
  return (
    <>
      {/* SWITCH */}
      <div>
        {
          (() => {
            switch (fetchState.status) {
              case "loading":
                return <p>Loading...</p>
              case "success":
                return <p>{fetchState.data}</p>
              case "error":
                return <p>Oops, an error occured</p>
            }
          })() // Immediately invoke the function
        }
      </div>
      {/* TERNARY */}
      <div>
        {fetchState.status === "loading" ? (
          <p>Loading...</p>
        ) : fetchState.status === "success" ? (
          <p>{fetchState.data}</p>
        ) : fetchState.status === "error" ? (
          <p>Oops, an error occured</p>
        ) : null}
      </div>
    </>
  )
}
