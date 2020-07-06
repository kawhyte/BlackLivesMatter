import React from 'react'

function whereToGetItem({items}) {
    return (
        <div>

            {
            items.map((item, i) => {   

                item.BlackOwned !== null ?

                    <a href={item.BlackOwned}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
                <img src={indie} className="fill-current w-6 h-6 mr-2" alt="icon"/> Small Business * </button>
    
                </a>:""


            } )
        



        }





        </div>
    )
}

export default whereToGetItem
