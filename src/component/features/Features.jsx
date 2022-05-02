import React from 'react'
import "./style.css"
import *as FaIcons from "react-icons/fa"

const Features = () => {
  return (
    <section className='section feature-section'> 

        <header className='section-header'>
            <h1 className='section-heading'>
                Our Features
            </h1>
            <div className='section-wrapper feature-wrapper'>
            
                <div className='feature-box'>

                    <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaLocationArrow className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                    <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaVideo className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                    <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaArrowAltCircleDown className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                </div>
                <div className='feature-box'>

                <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaPhone className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                    <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaMoneyBill className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                    <div className='feature-icon-box'>
                        <div className='feature-icon'>
                            <FaIcons.FaTv className='icons feature-icon' />
                        </div>
                        <div className='feature-box-content'>
                            <h2 className='feature-title'>The Land Specialist</h2>
                            <p className='text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>

                </div>
            </div>
        </header> 

    </section>
  )
}

export { Features}