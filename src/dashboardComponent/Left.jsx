
import './left.css';
const arr=['Transaction','Setting']
export default function Left(){
  return (
    <div id='left'>
      <p>Title</p>
      <ul>
        {arr.map((a,i)=>
          <li key={i}>{a}</li>
          )}
      </ul>



    </div>
  )
}