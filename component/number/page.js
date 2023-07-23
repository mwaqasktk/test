import Image from "next/image";

export default function Number() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
         <div className="w-20 h-20 mx-20 relative    rounded-full bg-white">
      {numbers.map((num) => {
        return (
          <>
            <div key={num.id}>
                <div className="    ">
              <div  className="h-10 w-10 hover:bg-gray-600 absolute     border rounded-full bg-red-400 text-white ">
                <div className="mx-auto   flex justify-center   items-center my-2 ">{num}</div>
               
                </div>
            </div></div>
          </>
        );
      })}
    </div></div>
  );
}
