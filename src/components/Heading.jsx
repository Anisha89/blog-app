const Heading = ({headingText, text,center = true}) => {
  return (
    <div className={`mb-8 ${center ? "text-center" : "text-left"}`} >
      <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">{headingText}</h1>
    { text && <p>{text}</p>}
    </div>
  )
}
export default Heading