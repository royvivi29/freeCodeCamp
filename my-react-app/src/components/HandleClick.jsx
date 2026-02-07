// export default function HandleClick(){
//     console.log("Button Clickd!");  
//     <button onClick={HandleClick}>Click Me</button> 
// }

export default function HandleSubmit(event){
    event.stopPropagation();
    console.log("Form Submitted!");
    
}
<form onSubmit={HandleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>