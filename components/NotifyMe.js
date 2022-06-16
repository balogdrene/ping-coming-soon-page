import { useState } from "react"

export default function NotifyMe() {
  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [email, setEmail] = useState()
  console.log(isTouched)

  function submitHandler(e) {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsValid(true)
      alert(email)
    } else {
      alert("You have entered an invalid email address!")
      setIsValid(false)
    }
  }

  function emailOnBlurHandler() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="flex flex-col items-center justify-center w-full gap-5 p-5 md:flex-row"
    >
      <div className="relative flex flex-col items-center md:items-start w-full md:w-[26rem] ">
        <input
          className={`h-12 p-2 border-2 rounded-full ${
            isValid ? "border-paleBlue" : "border-lightRed"
          } w-5/6 md:w-96 `}
          type="text"
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
          onClick={(e) => setIsTouched(true)}
          onBlur={emailOnBlurHandler}
          required="required"
        />
        {!isValid ? (
          <small className="md:absolute md:bottom-0 md:translate-y-6 text-lightRed">
            Please provide a valid email address
          </small>
        ) : (
          <p></p>
        )}
      </div>
      <button className="w-5/6 px-10 py-3 text-white rounded-full shadow-sm bg-blue hover:bg-paleBlue shadow-blue hover:shadow-paleBlue md:w-40 flex-nowrap">
        Notify Me
      </button>
    </form>
  )
}
