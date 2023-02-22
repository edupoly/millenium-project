function Puncture() {
  return (
    <div className=" border border-2 border-danger p-2 m-2">
      <h1>Puncture</h1>
      <div>
        <input type="radio" name="tubetype" value="withtube" />:WithTube
        <input type="radio" name="tubetype" value="tubeless" />:Tubeless
      </div>
    </div>
  )
}
export default Puncture