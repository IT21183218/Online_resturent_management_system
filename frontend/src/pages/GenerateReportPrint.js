import React from 'react';

export const GenerateReportPrint = React.forwardRef((props, ref) => {

    return (
        <>
       
        <div ref={ref} className='flex flex-col items-center gap-10 p-10'>  
    
      <tr>
      </tr>  
      <tbody>{props.children}</tbody>
    </div> 
    </>
    )
})