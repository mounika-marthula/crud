import React from 'react'

const usefilter = () => {
  const arr=[10,20,30,40,50]
  const names=['dames' , 'Jhon','ring'];
  const filtered=arr.filter(item=>item<40)
  return (
   <div>
     <div>
    {
      filtered.map(item => <li>{item}</li>)
    }
    </div>
   </div>
  )
}
export default usefilter ;
