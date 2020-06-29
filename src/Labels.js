import React from "react"

let arrayWithoutDuplicates = []
function Labels(props) {
  const { labels, onClicked, activeButton, type } = props
  let itemsToRender = ["VIEW ALL"]

  labels.map((label, i) => {
    if (!itemsToRender.includes(label.data.Genre)) {
      itemsToRender.push(label.data.Genre)
    }
    return itemsToRender
  })

  arrayWithoutDuplicates = itemsToRender
    .flat()
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )

    console.log("itemsToRender", labels[0].data.Category)

  return (
    <section className={"mb-12 h-56 items-center justify-center flex flex-row flex-wrap  mx-auto  mt-10 sm:mt-10 " + labels[0].data.Color}

    

    style={{
  
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  // backgroundImage: `url('https://res.cloudinary.com/babyhulk/image/upload/f_auto/v1593312159/Race/bg/bg_2.jpg')`,
  backgroundRepeat: 'repeat',
  // backgroundSize: 'cover',
  backgroundPosition: 'center',

}}
    
    >
         <div className=" flex flex-col container pl-4 ">
           
  <h3 className= " pb-5 uppercase container  flex items-end  text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">{type}</h3>
        <p className="container  pb-10 flex items-end">Filter {labels[0].data.Category}s by keywords</p>
    
     

       
     
      
      <div className="container h-12 flex items-end pb-4">
          {/* <ul className="flex flex-wrap   p-0 sm:p-1 bg-blue-500  "> */}
          <div class=" py-1">
            {arrayWithoutDuplicates.map((item, i) => {
              if (item !== null) {
                return (
                  <span key={i} className="inline-block text-sm mr-2">
                    {item === activeButton ? (
                      <button
                        onClick={e => onClicked({ item })}
                        className={
                          "cursor-pointer  text-xs font-semibold inline-block py-1 px-2  border rounded-lg bg-black  hover:bg-black hover:text-white text-white uppercase active:bg-gray-700"
                        }
                      >
                        {item}
                      </button>
                    ) : (
                      <button
                        onClick={e => onClicked({ item })}
                        className={
                          "cursor-pointer m-1 text-xs font-semibold inline-block py-1 px-2 border rounded-lg  hover:bg-black hover:text-white text-gray-900 uppercase"
                        }
                      >
                        {item}
                      </button>
                    )}
                  </span>
                )
              }
              return ""
            })}
          {/* </ul> */}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Labels
