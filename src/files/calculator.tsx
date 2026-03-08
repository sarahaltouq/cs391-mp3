import {useState} from 'react' //using usestate so we can let react store our number data :0

export default function Calculator() {

  const [number1, setNumber1] = useState(0) //react hooks
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)

  function addition() {//this is like my js version from mp1
    let result = number1 + number2
    setResult(result)}

  function subtract() {
    let result = number1 - number2
    setResult(result)}

  function multiply() {
    let result = number1 * number2
    setResult(result)}

  function power() {
    let result = 1
    for (let i = 0; i < number2; i++) {
      result = result * number1}
    setResult(result)}

  function divide() {
    let result = number1 / number2
    setResult(result)}

  return ( //same as my original html-ish
    <>
      <h2>Calculator</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <div>
        <button onClick={addition}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={power}>^</button>
      </div>
      <p>Result: {result}</p>
    </>
  )
}