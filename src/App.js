
import './App.css';




function App() {
 const card2=[
  {
    icon:"✔️",
    content:"5 Users"
  },
  {
  icon:"✔️",
  content:"50GB storage"
},
{
  icon:"✔️",
  content:"Unlimited Public Projects"
},
{
  icon:"✔️",
  content:"Community access"
},
{
  icon:"✔️",
  content:"Unlimited Private Projects"
},
{
  icon:"✔️",
  content:"Dedicated Phone Support"
},
{
  icon:"✔️",
  content:"Free Subdomain"
},
{
  icon:"❌",
  content:"Monthly status Reports"
}

 ]
 const card1=[
  
    {
      icon:"✔️",
      content:"Single User"
    },
    {
    icon:"✔️",
    content:"50GB storage"
  },
  {
    icon:"✔️",
    content:"Unlimited Public Projects"
  },
  {
    icon:"✔️",
    content:"Community access"
  },
  {
    icon:"❌",
    content:"Unlimited Private Projects"
  },
  {
    icon:"❌",
    content:"Dedicated Phone Support"
  },
  {
    icon:"❌",
    content:"Free Subdomain"
  },
  {
    icon:"❌",
    content:"Monthly status Reports"
  }
  
  
 ]

 const card3=[
  
  {
    icon:"✔️",
    content:"Unlimited Users"
  },
  {
  icon:"✔️",
  content:"50GB storage"
},
{
  icon:"✔️",
  content:"Unlimited Public Projects"
},
{
  icon:"✔️",
  content:"Community access"
},
{
  icon:"✔️",
  content:"Unlimited Private Projects"
},
{
  icon:"✔️",
  content:"Dedicated Phone Support"
},
{
  icon:"✔️",
  content:"Free Subdomain"
},
{
  icon:"✔️",
  content:"Monthly status Reports"
}


]
  return (
    <div className="App">
   
    <div className="card" style={{width: "18rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">FREE</h5>
    <h3>$0/month</h3>
    {card1.map((car) => (
          <Cardd1  icon={car.icon} content={car.content} />
        ))}
       <button type="button" class="btn btn-info">button</button>
    </div>
</div>
  
      <div className="card" style={{width: "18rem"}}>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">PLUS</h5>
        <h3>$9/month</h3>
        {card2.map((car) => (
              <Cardd2  icon={car.icon} content={car.content} />
            ))}
        <button type="button" class="btn btn-info">button</button>
        </div>
    </div>
      
      <div className="card" style={{width: "18rem"}}>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">PRO</h5>
        <h3>$49/month</h3>
        {card3.map((car) => (
              <Cardd3  icon={car.icon} content={car.content} />
            ))}
            <button type="button" class="btn btn-primary">button</button>
        </div>
    </div>
    </div>
  );
        }   
function Cardd1({icon,content}){
 
  return(
 
<div class="card-text">
<span>{icon}</span> 
<span>{content}</span>
</div>

);

  
}
function Cardd2({icon,content}){
 
  return(
 
<div class="card-text">
<span>{icon}</span> 
<span>{content}</span>
</div>

);
  }
function Cardd3({icon,content}){
 
  return(
 
<div class="card-text">
<span>{icon}</span> 
<span>{content}</span>
</div>

);

  
}
export default App;
