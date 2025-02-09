export default function Navbar() {
  return (
    <>
      <nav  style={{backgroundColor : '#0A0908'}}>
        <li className="text-white d-flex justify-content-between py-4" style={{fontFamily : "monospace",fontSize : '20px'}}>
          <ul className="">DailyToDo's 📝</ul>
          <ul className="px-4">@Your own E-Planner!</ul>
        </li>
      </nav>
    </>
  );
}
