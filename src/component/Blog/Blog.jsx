import add from "../Calculation/Calculation";


const Blog = () => {
    
    const handleSum=(event)=>{
        event.preventDefault();
        const form=event.target;
        const a=parseInt(form.a.value);
        const b=parseInt(form.b.value);
        total=add(a,b);
        console.log(total);
    }
    let total=0;
    return (
        <div>
            <form className="flex flex-col items-center  p-8 border-2 m-20" onSubmit={handleSum}>
                <h3 className="font-bold">Enter a Number</h3>
                <input className="bg-white border p-2" type="text" name="a" id="a" placeholder="input a number" />
                <h3 className="font-bold">Enter a Number</h3>
                <input className="bg-white  border p-2"  type="text" name="b" id="b" placeholder="input a number" />
                <button className="bg-blue-500 text-white rounded-lg px-3 py-1 mt-3">submit</button>
            </form>
            <h3 className="text-3xl text-center">THe summation of a and b is {total}</h3>
        </div>
    );
};

export default Blog;