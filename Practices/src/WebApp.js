import React from 'react'
import i1 from './i1.png';
import ff from './ff.webp';
function WebApp() {
  return (
    <div>
        
        <header>
            <div>
                <img src={ff} height={100}></img>
            </div>

            <div>
                <img src="product.webp" height={100}></img>
            </div>

            <div>
                <img src="images/1603958036-new-products.jpg" height={100}></img>
            </div>
        </header>
        <nav>Nav</nav>
        <section>
            <aside>Category</aside>
            <article>

                <div className='card'>

                    <img src={i1}></img>
                    {/* <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img> */}

                    <p>Some Text</p>
                </div>

                {/* <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>


                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>


                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>

                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>


                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>


                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div>


                <div className='card'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"></img>

                    <p>Some Text</p>
                </div> */}

               
            </article>
        </section>
        <footer>Footer</footer>


    </div>
  )
}

export default WebApp
